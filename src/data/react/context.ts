export default [
  {
    title: 'React Context API',
    examples: [
      {
        title: 'Creating Context',
        code: `import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use context
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };`
      },
      {
        title: 'Using Context in Components',
        code: `import { useTheme } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={theme}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'}
      </button>
    </header>
  );
}

function Main() {
  const { theme } = useTheme();
  
  return (
    <main className={theme}>
      <p>Current theme: {theme}</p>
    </main>
  );
}`
      },
      {
        title: 'Multiple Contexts',
        code: `import { createContext, useContext, useState } from 'react';

// User context
const UserContext = createContext();
const CartContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <Main />
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

function Header() {
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  
  return (
    <header>
      {user ? (
        <div>
          Welcome, {user.name}!
          Cart items: {cart.length}
        </div>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
}`
      },
      {
        title: 'Context with Reducer',
        code: `import { createContext, useContext, useReducer } from 'react';

// Action types
const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO'
};

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case ACTIONS.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

// Context
const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  const addTodo = (text) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: text });
  };
  
  const toggleTodo = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  };
  
  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  };
  
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within TodoProvider');
  }
  return context;
}`
      },
      {
        title: 'Context Performance Optimization',
        code: `import { createContext, useContext, useState, useMemo } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [preferences, setPreferences] = useState({});
  
  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    user,
    setUser,
    preferences,
    setPreferences,
    isLoggedIn: !!user
  }), [user, preferences]);
  
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}

// Split contexts for better performance
const UserDataContext = createContext();
const UserPreferencesContext = createContext();

function SplitUserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [preferences, setPreferences] = useState({});
  
  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      <UserPreferencesContext.Provider value={{ preferences, setPreferences }}>
        {children}
      </UserPreferencesContext.Provider>
    </UserDataContext.Provider>
  );
}`
      }
    ]
  }
]; 