export default [
  {
    title: 'React Performance Optimization',
    examples: [
      {
        title: 'React.memo for Component Memoization',
        code: `import React from 'react';

const ExpensiveComponent = React.memo(({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});

// Only re-renders if props change
export default ExpensiveComponent;`
      },
      {
        title: 'useMemo for Expensive Calculations',
        code: `import { useMemo } from 'react';

function UserList({ users, filter }) {
  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [users, filter]);
  
  return (
    <div>
      {filteredUsers.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}`
      },
      {
        title: 'useCallback for Function Memoization',
        code: `import { useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty dependency array
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}`
      },
      {
        title: 'Code Splitting with React.lazy',
        code: `import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// LazyComponent.js
export default function LazyComponent() {
  return <div>This component is loaded lazily</div>;
}`
      },
      {
        title: 'Virtual Scrolling for Large Lists',
        code: `import { FixedSizeList as List } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );
  
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </List>
  );
}`
      }
    ]
  }
]; 