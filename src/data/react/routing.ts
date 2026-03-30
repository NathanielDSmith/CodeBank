export default [
  {
    title: 'Routing',
    examples: [
      {
        title: 'React Router v6 — the fundamentals',
        explanation: `React Router v6 introduced a declarative, nested routing model. Routes are defined as a tree, loaders handle data fetching, and the entire API is hook-based. If you learned React Router from v5 tutorials, v6 is different enough to cause confusion.`,
        keyIdeas: [
          'useNavigate replaces useHistory — navigate(\'/path\') or navigate(-1) to go back',
          'useParams reads dynamic segments, useSearchParams reads query strings',
          'Nested routes share a layout — the parent renders an <Outlet /> where children appear',
          'The path "*" catches any unmatched route within a parent — use it for 404 pages',
        ],
        pitfalls: [
          'Using <a href> instead of <Link to> — causes a full page reload, losing React state',
          'Forgetting <Outlet /> in a layout route — nested route content will never render',
          'Reading from useParams outside a Route context — returns undefined',
        ],
        code: `import { createBrowserRouter, RouterProvider, Outlet, Link,
         useParams, useNavigate, useSearchParams } from 'react-router-dom';

// Layout component — renders nav + child routes
function AppLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Outlet /> {/* child routes render here */}
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductList /> },
      { path: 'products/:id', element: <ProductDetail /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

// Reading URL parameters
function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') ?? 'details';

  return (
    <div>
      <h1>Product {id}</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}`
      },
      {
        title: 'Protected routes and auth guards',
        explanation: `Most apps have routes that require authentication. The cleanest pattern in React Router v6 is a wrapper component that checks auth state and redirects to login if the user isn't authenticated — leaving the protected routes themselves unaware of auth logic.`,
        code: `function RequireAuth({ children }: { children: ReactNode }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <FullPageSpinner />;

  if (!user) {
    // Redirect to login, preserving where they were trying to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

// Usage — wrap protected sections in the router config
const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    path: '/',
    element: <RequireAuth><AppLayout /></RequireAuth>,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);

// After login — redirect back to original destination
function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname ?? '/';

  const handleLogin = async (credentials: Credentials) => {
    await login(credentials);
    navigate(from, { replace: true });
  };
}`
      },
    ]
  },
];
