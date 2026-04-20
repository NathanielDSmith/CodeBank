export default [
  {
    title: 'Context API',
    examples: [
      {
        title: 'What Context is actually for',
        explanation: `Context solves prop drilling — passing data through many layers of components that don't use it themselves. It's not a state management solution and shouldn't replace useState or useReducer. Think of it as a way to make a value available anywhere in a subtree without threading it through every component manually.

Common use cases: current user, theme, locale, feature flags. Not a good fit for: frequently changing state (causes broad re-renders), or state that only affects a small part of the tree (just lift it instead).`,
        keyIdeas: [
          'Every component that calls useContext re-renders when the context value changes',
          'Splitting context by domain (AuthContext, ThemeContext) limits which components re-render',
          'Context + useReducer is a lightweight alternative to Redux for medium-complexity apps',
          'Wrap the Provider at the lowest level that covers all consumers — not always at app root',
        ],
        pitfalls: [
          'Putting a new object literal as the context value — it\'s a new reference every render, causing all consumers to re-render even when values haven\'t changed',
          'Using context for state that changes frequently (e.g. mouse position) — it will cause widespread re-renders',
        ],
        code: `// ✅ Auth context — stable, infrequently changing
type AuthContextValue = {
  user: User | null;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

// Custom hook enforces that context is used inside the provider
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(async (credentials: Credentials) => {
    const user = await authService.login(credentials);
    setUser(user);
  }, []);

  const logout = useCallback(() => {
    authService.logout();
    setUser(null);
  }, []);

  // useMemo prevents creating a new object every render
  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Any component in the tree can access auth without prop drilling
function NavBar() {
  const { user, logout } = useAuth();
  return (
    <nav>
      <span>{user?.name}</span>
      <button onClick={logout}>Log out</button>
    </nav>
  );
}`
      },
    ]
  },
];
