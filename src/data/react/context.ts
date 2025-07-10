export default [
  {
    title: 'React Context Basics',
    examples: [
      {
        title: 'Creating Context',
        code: `import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
}`
      },
      {
        title: 'Using Context',
        code: `import { useTheme } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, setTheme } = useTheme();
  
  return (
    <header>
      <h1>My App</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Switch Theme
      </button>
    </header>
  );
}

function Main() {
  const { theme } = useTheme();
  
  return (
    <main>
      <p>Current theme: {theme}</p>
    </main>
  );
}`
      },
      {
        title: 'Simple User Context',
        code: `import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// Usage
function App() {
  return (
    <UserProvider>
      <Header />
      <Main />
    </UserProvider>
  );
}`
      },
      {
        title: 'Context with Multiple Values',
        code: `import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  
  return (
    <AppContext.Provider value={{ 
      theme, setTheme, 
      language, setLanguage 
    }}>
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}`
      },
      {
        title: 'Context vs Props',
        code: `// Without Context (prop drilling)
function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Header user={user} setUser={setUser} />
      <Main user={user} />
      <Footer user={user} />
    </div>
  );
}

// With Context (no prop drilling)
function App() {
  return (
    <UserProvider>
      <Header />
      <Main />
      <Footer />
    </UserProvider>
  );
}

// Components can access user directly
function Header() {
  const { user, setUser } = useUser();
  return <div>Welcome, {user?.name}</div>;
}`
      }
    ]
  }
]; 