export default [
  {
    title: 'React useEffect Hook',
    examples: [
      {
        title: 'Basic useEffect',
        code: `import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
      },
      {
        title: 'useEffect with Cleanup',
        code: `import { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    
    // Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array = run once
  
  return <div>Timer: {count} seconds</div>;
}`
      },
      {
        title: 'useEffect with Dependencies',
        code: `import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]); // Re-run when userId changes
  
  if (!user) return <div>Loading...</div>;
  
  return <div>Hello, {user.name}!</div>;
}`
      },
      {
        title: 'Multiple useEffect Hooks',
        code: `import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // Update document title when count changes
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);
  
  // Log when name changes
  useEffect(() => {
    if (name) {
      console.log('Name changed to:', name);
    }
  }, [name]);
  
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}`
      },
      {
        title: 'useEffect for Side Effects',
        code: `import { useEffect } from 'react';

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div>
      Window size: {windowSize.width} x {windowSize.height}
    </div>
  );
}`
      }
    ]
  }
]; 