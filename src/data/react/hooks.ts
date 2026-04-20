export default [
  {
    title: 'useState',
    examples: [
      {
        title: 'What useState actually does',
        explanation: `useState lets a component remember a value between renders without losing it when React re-renders the component. Every time you call setState, React schedules a re-render with the new value — the component function runs again, but useState returns the updated value rather than the initial one.

The key mental model: state is not a variable that mutates. It's a snapshot React preserves between renders. When you call setCount(count + 1), you're not changing count — you're telling React "next time you render this, use this new value".`,
        keyIdeas: [
          'State triggers re-renders — changing a regular variable does not',
          'Each render has its own snapshot of state — stale closures happen when you capture old state in callbacks',
          'State updates may be batched — React 18+ batches all updates, not just event handlers',
          'Use functional updates (prev => prev + 1) when new state depends on old state',
        ],
        pitfalls: [
          'Setting state during render (outside event handlers or effects) causes infinite loops',
          'Mutating objects/arrays in state without creating new references — React won\'t detect the change',
          'Calling setState inside useEffect without a dependency array — also causes infinite loops',
        ],
        code: `// ✅ Functional update — safe when new state depends on previous
function Counter() {
  const [count, setCount] = useState(0);

  // Use functional form when next value depends on current value
  const increment = () => setCount(prev => prev + 1);

  // Batching — both updates happen in a single re-render in React 18+
  const reset = () => {
    setCount(0);
    setCount(0); // second call wins, but only one render occurs
  };

  return <button onClick={increment}>Count: {count}</button>;
}

// ✅ Object state — always create a new object, don't mutate
function ProfileEditor() {
  const [user, setUser] = useState({ name: '', email: '' });

  const updateName = (name: string) => {
    // ✅ Spread to preserve other fields
    setUser(prev => ({ ...prev, name }));
    // ❌ This won't trigger a re-render:
    // user.name = name; setUser(user);
  };

  return (
    <input value={user.name} onChange={e => updateName(e.target.value)} />
  );
}

// ✅ Lazy initialiser — runs the function once, not on every render
function ExpensiveInit() {
  const [data, setData] = useState(() => {
    return computeExpensiveInitialValue(); // runs once
  });
}`
      },
    ]
  },
  {
    title: 'useEffect',
    examples: [
      {
        title: 'When and why to use useEffect',
        explanation: `useEffect lets you synchronise a component with something outside React — a network request, a DOM API, a subscription, a timer. The key word is synchronise: effects run after the render is committed to the screen, not during it.

Think of useEffect as saying "after React has finished rendering, do this side effect". It's not a lifecycle method — it's a synchronisation mechanism. If your component needs to show the current window width, an effect keeps that in sync with the DOM.`,
        keyIdeas: [
          'The dependency array controls when the effect re-runs — not just "on mount"',
          'An empty array [] means "run once after the first render" — not "never re-run"',
          'The cleanup function runs before the next effect and when the component unmounts',
          'Every value used inside the effect that comes from the component should be in the dependency array',
        ],
        pitfalls: [
          'Fetching data without an abort controller — if the component unmounts before the fetch completes, setState will be called on an unmounted component',
          'Missing dependencies in the array — leads to stale closures where the effect sees old values',
          'Using an object or array as a dependency — they\'re new references every render, causing infinite loops',
        ],
        code: `// ✅ Data fetching with cleanup and abort
function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(\`/api/users/\${userId}\`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name === 'AbortError') return; // intentional, ignore
        setError(err.message);
        setLoading(false);
      });

    // Cleanup: cancel the request if userId changes or component unmounts
    return () => controller.abort();
  }, [userId]); // re-runs whenever userId changes

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  return <div>{user?.name}</div>;
}

// ✅ Event listener with cleanup
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler); // cleanup
  }, []); // no dependencies — handler is stable

  return width;
}`
      },
    ]
  },
  {
    title: 'useRef',
    examples: [
      {
        title: 'Two uses: DOM access and mutable values',
        explanation: `useRef serves two distinct purposes that are easy to conflate. First, it gives you a direct handle to a DOM element. Second, it stores a mutable value that persists across renders but doesn't trigger re-renders when it changes.

The second use is often overlooked. If you need to store a value (like a timer ID, a previous value, or a flag) that shouldn't cause a re-render when it changes, useRef is the right tool — not useState.`,
        keyIdeas: [
          'ref.current is mutable — unlike state, you can write to it directly',
          'Changing ref.current does not trigger a re-render',
          'The ref object itself is stable — the same object reference across all renders',
          'Use refs to store interval/timeout IDs so you can clear them reliably',
        ],
        pitfalls: [
          'Reading ref.current during render (not in an effect or event handler) — the value may not be what you expect',
          'Using a ref when you actually need state — if the UI needs to react to the change, use state',
        ],
        code: `// ✅ DOM access — focus an input programmatically
function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus(); // safe — runs after render
  }, []);

  return <input ref={inputRef} placeholder="Search..." />;
}

// ✅ Storing a timer ID — doesn't need to cause re-renders
function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    if (intervalRef.current) return; // already running
    intervalRef.current = window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => stop, []); // cleanup on unmount

  return (
    <div>
      <p>{time}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

// ✅ Storing previous value
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value; // updates after render
  });
  return ref.current; // returns value from previous render
}`
      },
    ]
  },
  {
    title: 'useMemo and useCallback',
    examples: [
      {
        title: 'When memoisation actually helps',
        explanation: `useMemo and useCallback are optimisation hooks. useMemo caches a computed value, useCallback caches a function. Both only recompute when their dependencies change.

The critical thing most tutorials get wrong: these hooks are not free. They add overhead — memory to store the cached value, and time to compare dependencies on every render. Don't reach for them by default. Use them when you have a measurable performance problem, or when a stable reference is required for correctness (like a function passed to useEffect's dependency array).`,
        keyIdeas: [
          'useMemo is for expensive calculations — filtering/sorting large arrays, complex transforms',
          'useCallback is for stable function references — mainly when passing callbacks to memoised children or effect dependencies',
          'Both hooks accept the same dependency array as useEffect',
          'React.memo on a component is what makes useCallback worth it — without it, the memoised callback solves nothing',
        ],
        pitfalls: [
          'Wrapping every function in useCallback by default — adds overhead without benefit if the child isn\'t memoised',
          'Forgetting a dependency — the memoised value goes stale and you get bugs that are hard to trace',
          'Using useMemo for a cheap calculation — the memoisation overhead can exceed the calculation cost',
        ],
        code: `// ✅ useMemo — expensive filter/sort that shouldn't re-run on every keystroke
function ProductList({ products, searchTerm, sortBy }: Props) {
  const filtered = useMemo(() => {
    return products
      .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === 'price') return a.price - b.price;
        return a.name.localeCompare(b.name);
      });
  }, [products, searchTerm, sortBy]); // only re-runs when these change

  return <ul>{filtered.map(p => <ProductItem key={p.id} product={p} />)}</ul>;
}

// ✅ useCallback — stable reference for a memoised child
const ExpensiveChild = React.memo(({ onSubmit }: { onSubmit: () => void }) => {
  return <button onClick={onSubmit}>Submit</button>;
});

function Parent({ userId }: { userId: number }) {
  const [data, setData] = useState(null);

  // Without useCallback, this is a new function every render
  // ExpensiveChild would re-render even though nothing meaningful changed
  const handleSubmit = useCallback(() => {
    submitData(userId, data);
  }, [userId, data]);

  return <ExpensiveChild onSubmit={handleSubmit} />;
}`
      },
    ]
  },
  {
    title: 'Custom Hooks',
    examples: [
      {
        title: 'Extracting logic, not just sharing code',
        explanation: `Custom hooks are the primary way to reuse stateful logic between components. But their real value isn't code reuse — it's separation of concerns. A component that uses useFetch, useForm, and useDebounce is much easier to reason about than one that contains all that logic inline.

The rule is simple: if a function uses any React hook (useState, useEffect, etc.), it must be a custom hook (start with "use") and can only be called at the top level of another hook or component.`,
        keyIdeas: [
          'Custom hooks are just functions — they don\'t create shared state, each call gets its own state',
          'Name must start with "use" — this lets linters and React enforce the rules of hooks',
          'They can return anything: values, setters, event handlers, objects, arrays',
          'Great for: data fetching, form handling, subscriptions, debouncing, media queries',
        ],
        code: `// ✅ useDebounce — delays acting on a rapidly-changing value
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// ✅ useFetch — data fetching with loading/error state
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(data => { setData(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err);
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage — component is clean, logic is testable separately
function SearchResults({ query }: { query: string }) {
  const debouncedQuery = useDebounce(query, 300);
  const { data, loading, error } = useFetch<Result[]>(
    \`/api/search?q=\${debouncedQuery}\`
  );

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;
  return <ResultList items={data ?? []} />;
}`
      },
    ]
  },
];
