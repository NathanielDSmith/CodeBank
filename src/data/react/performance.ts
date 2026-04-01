export default [
  {
    title: 'Performance',
    examples: [
      {
        title: 'React.memo — preventing unnecessary re-renders',
        explanation: `By default, when a parent re-renders, all its children re-render too — even if their props haven't changed. React.memo wraps a component and skips re-rendering it if its props are shallowly equal to the previous render.

Important: React.memo is an optimisation, not a correctness fix. Only use it when you've confirmed a component is re-rendering unnecessarily and that re-render is measurably slow. Premature memoisation adds complexity without benefit.`,
        keyIdeas: [
          'Shallow equality means primitive values are compared by value, objects/arrays by reference',
          'If a parent passes a new function or object literal on every render, React.memo won\'t help — pair it with useCallback/useMemo',
          'Profile first with React DevTools before applying React.memo — most re-renders are fast',
        ],
        pitfalls: [
          'Memoising everything by default — adds overhead and cognitive load for little gain',
          'Passing unstable props (inline objects, inline functions) to a memoised component — defeats the purpose',
        ],
        code: `// ✅ Expensive list item — only re-renders when its own props change
const ProductCard = React.memo(({ product, onAddToCart }: Props) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product.id)}>Add to cart</button>
    </div>
  );
});

function ProductList({ products }: { products: Product[] }) {
  const [cart, setCart] = useState<number[]>([]);

  // ✅ Stable reference — ProductCard won't re-render when cart changes
  const handleAddToCart = useCallback((id: number) => {
    setCart(prev => [...prev, id]);
  }, []);

  return (
    <div>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}`
      },
      {
        title: 'Code splitting with lazy and Suspense',
        explanation: `By default, your entire React app is bundled into one JavaScript file. Code splitting lets you split that bundle into smaller chunks that load on demand — so users only download the code for the pages they visit.

React.lazy and Suspense make this straightforward. The browser loads each page's code only when a user navigates to it, cutting initial load time significantly for large apps.`,
        keyIdeas: [
          'React.lazy takes a function that returns a dynamic import — the module must have a default export',
          'Suspense provides the fallback UI shown while the lazy component loads',
          'Route-based splitting (one chunk per page) is the most impactful and easiest to implement',
          'Preloading — you can trigger the import() early (e.g. on hover) to avoid visible loading states',
        ],
        code: `// ✅ Route-based code splitting
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));
const Reports = lazy(() => import('./pages/Reports'));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageSpinner />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

// ✅ Preload on hover — avoids loading delay on click
function NavLink({ to, page, children }: Props) {
  const handleMouseEnter = () => {
    // Trigger the import early — browser caches it
    import(\`./pages/\${page}\`);
  };

  return (
    <Link to={to} onMouseEnter={handleMouseEnter}>
      {children}
    </Link>
  );
}`
      },
    ]
  },
];
