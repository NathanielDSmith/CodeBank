export default [
  {
    title: 'State Management Patterns',
    examples: [
      {
        title: 'useState vs useReducer — choosing the right tool',
        explanation: `useState is fine for simple, independent pieces of state. useReducer shines when state transitions are complex, when multiple state values are always updated together, or when the next state depends on the previous in non-trivial ways.

A good rule of thumb: if you find yourself writing multiple setState calls that always go together, or if you have state that has "modes" or complex transition logic, reach for useReducer. It centralises all state transitions in one place and makes impossible states harder to represent.`,
        keyIdeas: [
          'useReducer separates "what happened" (the action) from "what to do about it" (the reducer)',
          'Reducers must be pure — no side effects, no async, just (state, action) => newState',
          'Centralising transitions in a reducer makes logging, undo, and testing straightforward',
          'dispatch is stable — it never changes reference, so it\'s safe in effect dependency arrays',
        ],
        pitfalls: [
          'Mutating state inside a reducer — always return a new object',
          'Putting async logic in a reducer — reducers are synchronous; dispatch from event handlers or effects instead',
        ],
        code: `type State = {
  status: 'idle' | 'loading' | 'success' | 'error';
  data: User[] | null;
  error: string | null;
};

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: User[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'RESET' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, status: 'loading', error: null };
    case 'FETCH_SUCCESS':
      return { status: 'success', data: action.payload, error: null };
    case 'FETCH_ERROR':
      return { ...state, status: 'error', error: action.payload };
    case 'RESET':
      return { status: 'idle', data: null, error: null };
    default:
      return state;
  }
}

function UserList() {
  const [state, dispatch] = useReducer(reducer, {
    status: 'idle', data: null, error: null,
  });

  const load = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const users = await fetchUsers();
      dispatch({ type: 'FETCH_SUCCESS', payload: users });
    } catch (e) {
      dispatch({ type: 'FETCH_ERROR', payload: 'Failed to load users' });
    }
  };

  if (state.status === 'loading') return <Spinner />;
  if (state.status === 'error') return <p>{state.error}</p>;
  if (state.status === 'success') return <ul>{state.data!.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
  return <button onClick={load}>Load Users</button>;
}`
      },
      {
        title: 'Lifting state up and colocation',
        explanation: `State should live as close to where it's used as possible — that's colocation. When two components need the same piece of state, lift it to their closest common ancestor.

The mistake most developers make is lifting state too high — putting everything in a top-level component when it only needs to be shared between two siblings. Unnecessary lifting causes unnecessary re-renders across the tree.`,
        keyIdeas: [
          'Start with state local to the component — lift only when you need to share it',
          'Find the lowest common ancestor, not just the nearest parent',
          'Prop drilling more than 2-3 levels is a signal to reach for Context or a state library',
        ],
        pitfalls: [
          'Lifting server/async state manually — tools like React Query handle this better',
          'Re-rendering the whole tree because unrelated state lives too high',
        ],
        code: `// ❌ State too high — App re-renders on every keystroke
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <Header />        {/* re-renders needlessly */}
      <Sidebar />       {/* re-renders needlessly */}
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <Results search={searchTerm} />
    </div>
  );
}

// ✅ Colocated — only SearchSection and its children re-render
function SearchSection() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <Results search={searchTerm} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />   {/* never re-renders from search */}
      <Sidebar />  {/* never re-renders from search */}
      <SearchSection />
    </div>
  );
}`
      },
    ]
  },
];
