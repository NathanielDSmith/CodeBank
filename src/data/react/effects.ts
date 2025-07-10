export default [
  {
    title: 'React useEffect Hook',
    examples: [
      {
        title: 'Basic useEffect',
        code: `import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [userId]); // Dependency array
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  
  return <div>Hello, {user.name}!</div>;
}`
      },
      {
        title: 'Cleanup with useEffect',
        code: `import { useEffect } from 'react';

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
  
  return <div>Count: {count}</div>;
}`
      },
      {
        title: 'Multiple useEffect Hooks',
        code: `import { useEffect, useState } from 'react';

function DataFetcher({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  
  // Fetch user data
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);
  
  // Fetch user posts
  useEffect(() => {
    if (user) {
      fetch(\`/api/users/\${userId}/posts\`)
        .then(res => res.json())
        .then(setPosts);
    }
  }, [user, userId]);
  
  return (
    <div>
      {user && <h1>{user.name}</h1>}
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}`
      },
      {
        title: 'Conditional useEffect',
        code: `import { useEffect, useState } from 'react';

function SearchResults({ query }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Only search if query has at least 3 characters
    if (query.length >= 3) {
      setLoading(true);
      
      const searchTimeout = setTimeout(async () => {
        try {
          const response = await fetch(\`/api/search?q=\${query}\`);
          const data = await response.json();
          setResults(data.results);
        } catch (error) {
          console.error('Search failed:', error);
        } finally {
          setLoading(false);
        }
      }, 500); // Debounce search
      
      return () => clearTimeout(searchTimeout);
    } else {
      setResults([]);
    }
  }, [query]);
  
  return (
    <div>
      {loading && <div>Searching...</div>}
      {results.map(result => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
}`
      },
      {
        title: 'Custom Hook with useEffect',
        code: `import { useEffect, useState } from 'react';

// Custom hook for API calls
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserList() {
  const { data: users, loading, error } = useApi('/api/users');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}`
      }
    ]
  }
]; 