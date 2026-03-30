export default [
  {
    title: 'Event Handling',
    examples: [
      {
        title: 'Synthetic events and TypeScript event types',
        explanation: `React wraps native browser events in SyntheticEvent — a cross-browser wrapper that normalises event behaviour. In TypeScript, each event type has a specific generic that tells you which element it came from, giving you typed access to event.target and element-specific properties.`,
        keyIdeas: [
          'React.ChangeEvent<HTMLInputElement> for input changes, React.FormEvent<HTMLFormElement> for form submit',
          'event.currentTarget is always the element with the handler; event.target is where the event originated',
          'SyntheticEvents are pooled in older React — don\'t access them asynchronously without e.persist() (not needed in React 17+)',
        ],
        pitfalls: [
          'Using event.target instead of event.currentTarget when handlers are on parent elements',
          'Not calling e.preventDefault() on form submit — causes a page reload',
          'Inline arrow functions in JSX create a new function on every render — fine for most cases, but avoid in hot paths',
        ],
        code: `// ✅ Typed event handlers
function SearchForm() {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // target is HTMLInputElement — .value is typed
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload
    performSearch(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') setQuery('');
    if (e.key === 'Enter' && e.metaKey) handleSubmit(e as any);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
      />
    </form>
  );
}

// ✅ Event delegation — one handler on the parent
function ButtonGroup() {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = (e.target as HTMLElement).closest('[data-action]');
    if (!button) return;
    const action = button.getAttribute('data-action');
    handleAction(action);
  };

  return (
    <div onClick={handleClick}>
      <button data-action="save">Save</button>
      <button data-action="cancel">Cancel</button>
      <button data-action="delete">Delete</button>
    </div>
  );
}`
      },
      {
        title: 'Preventing event propagation',
        explanation: `Events bubble up through the DOM — a click on a child triggers click handlers on every ancestor. This is often useful (event delegation) but sometimes needs to be stopped. stopPropagation prevents the event from bubbling; preventDefault prevents the browser's default behaviour.`,
        keyIdeas: [
          'stopPropagation stops the event from reaching parent handlers',
          'preventDefault stops browser defaults (form submit, link navigation, right-click menu)',
          'They are independent — you can call either, both, or neither',
        ],
        code: `// ✅ Common pattern — clickable card with a nested action button
function PostCard({ post, onDelete }: Props) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(\`/posts/\${post.id}\`)} className="card">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <button
        onClick={e => {
          e.stopPropagation(); // don't navigate to the post
          onDelete(post.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

// ✅ Modal that closes on backdrop click but not on content click
function Modal({ onClose, children }: Props) {
  return (
    <div className="backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()} // don't close when clicking inside
      >
        {children}
      </div>
    </div>
  );
}`
      },
    ]
  },
];
