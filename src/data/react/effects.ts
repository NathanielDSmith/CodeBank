export default [
  {
    title: 'Effects & Lifecycle',
    examples: [
      {
        title: 'The dependency array — the most misunderstood part of useEffect',
        explanation: `The dependency array doesn't mean "run this effect when these values change". It means "this effect depends on these values — re-run it any time they change so it stays in sync". It's a declaration of what the effect reads from the component, not a trigger condition.

If your effect uses a value from the component (state, props, a function defined in the component), that value should be in the array. Leaving things out doesn't make the effect run less — it makes it run with stale data.`,
        keyIdeas: [
          'ESLint\'s exhaustive-deps rule exists for good reason — follow it',
          'If adding a dependency causes an infinite loop, the real problem is usually an unstable reference (object/array/function created in render)',
          'Stable values like setState, dispatch, and refs don\'t need to be in the array',
        ],
        pitfalls: [
          'Suppressing the ESLint warning instead of fixing the root cause',
          'Using an object or array as a dependency — new reference every render means the effect runs every render',
          'Writing useEffect(() => { fetchData() }, []) and wondering why it uses stale props',
        ],
        code: `// ❌ Stale closure — filter is read once at mount, never updated
function FilteredList({ filter }: { filter: string }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems(filter).then(setItems);
  }, []); // ❌ filter should be here — effect uses it but doesn't declare it

  return <List items={items} />;
}

// ✅ Correct — re-fetches whenever filter changes
function FilteredList({ filter }: { filter: string }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let cancelled = false;
    fetchItems(filter).then(data => {
      if (!cancelled) setItems(data);
    });
    return () => { cancelled = true; };
  }, [filter]); // ✅ declared — effect stays in sync

  return <List items={items} />;
}

// ✅ Stabilising an object dependency with useMemo
function Chart({ config }: { config: { color: string; width: number } }) {
  // Without useMemo, config is a new object every render
  const stableConfig = useMemo(() => config, [config.color, config.width]);

  useEffect(() => {
    renderChart(stableConfig);
  }, [stableConfig]); // ✅ stable reference
}`
      },
      {
        title: 'Effects that don\'t belong in useEffect',
        explanation: `Not everything that runs after a render should be in useEffect. React 18 and the React team are moving away from effects for certain patterns that were previously common. If you're computing derived state, transforming data, or handling user events — those don't need effects.`,
        keyIdeas: [
          'Derived state (filtering, sorting, computing totals) should be calculated during render, not in an effect',
          'Event handlers are for responding to user interactions — not useEffect',
          'Effects are for synchronising with external systems: APIs, DOM, subscriptions, timers',
        ],
        pitfalls: [
          'Using an effect to sync one piece of state to another — just compute it from the source of truth instead',
          'Fetching data in an effect without a library — consider React Query or SWR for production data fetching',
        ],
        code: `// ❌ Effect for derived state — unnecessary
function FilteredList({ items, filter }) {
  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    setFiltered(items.filter(i => i.name.includes(filter)));
  }, [items, filter]); // causes an extra render every time

  return <List items={filtered} />;
}

// ✅ Calculate during render — simpler, one render
function FilteredList({ items, filter }) {
  const filtered = useMemo(
    () => items.filter(i => i.name.includes(filter)),
    [items, filter]
  );

  return <List items={filtered} />;
}

// ❌ Effect for event handling
function Form() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      sendAnalytics('form_submitted'); // this belongs in the handler
    }
  }, [submitted]);
}

// ✅ Handle it in the event handler
function Form() {
  const handleSubmit = () => {
    sendAnalytics('form_submitted');
    submitForm();
  };
}`
      },
    ]
  },
];
