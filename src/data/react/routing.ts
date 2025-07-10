export default [
  {
    title: 'React Router Setup',
    examples: [
      {
        title: 'Basic Router Setup',
        code: `import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}`
      },
      {
        title: 'Navigation Links',
        code: `import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink to="/about" className={({ isActive }) => 
        isActive ? 'active' : ''
      }>
        About
      </NavLink>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}`
      },
      {
        title: 'Programmatic Navigation',
        code: `import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // Perform login logic
    navigate('/dashboard');
  };
  
  return <button onClick={handleLogin}>Login</button>;
}`
      },
      {
        title: 'Route Parameters',
        code: `import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  
  return <div>User ID: {userId}</div>;
}

// In your routes:
<Route path="/user/:userId" element={<UserProfile />} />`
      },
      {
        title: 'Nested Routes',
        code: `function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}`
      }
    ]
  }
]; 