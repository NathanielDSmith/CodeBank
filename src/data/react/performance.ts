export default [
  {
    title: 'React Performance Basics',
    examples: [
      {
        title: 'Using React.memo',
        code: `import React from 'react';

const UserCard = React.memo(({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});

// This component only re-renders when user prop changes
export default UserCard;`
      },
      {
        title: 'useMemo for Calculations',
        code: `import { useMemo } from 'react';

function TodoList({ todos, filter }) {
  const filteredTodos = useMemo(() => {
    return todos.filter(todo => 
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }, [todos, filter]);
  
  return (
    <ul>
      {filteredTodos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}`
      },
      {
        title: 'useCallback for Functions',
        code: `import { useCallback } from 'react';

function TodoItem({ todo, onToggle }) {
  const handleToggle = useCallback(() => {
    onToggle(todo.id);
  }, [todo.id, onToggle]);
  
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      {todo.text}
    </li>
  );
}`
      },
      {
        title: 'Lazy Loading Components',
        code: `import { lazy, Suspense } from 'react';

const UserProfile = lazy(() => import('./UserProfile'));

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading profile...</div>}>
        <UserProfile />
      </Suspense>
    </div>
  );
}`
      },
      {
        title: 'Key Prop for Lists',
        code: `function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

// Always use unique, stable keys for better performance`
      }
    ]
  }
]; 