export default [
  {
    title: 'React Event Handling',
    examples: [
      {
        title: 'Basic Event Handling',
        code: `import { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);
  
  const handleClick = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };
  
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}`
      },
      {
        title: 'Form Event Handling',
        code: `import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Send</button>
    </form>
  );
}`
      },
      {
        title: 'Keyboard Events',
        code: `import { useEffect } from 'react';

function KeyboardHandler() {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        console.log('Enter pressed');
      }
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        console.log('Save shortcut pressed');
      }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  
  return <div>Press Enter or Ctrl+S</div>;
}`
      },
      {
        title: 'Custom Event Handlers',
        code: `function CustomButton({ onClick, children, ...props }) {
  const handleClick = (event) => {
    // Custom logic before calling parent handler
    console.log('Button clicked');
    
    // Call parent handler if provided
    if (onClick) {
      onClick(event);
    }
  };
  
  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

// Usage
<CustomButton onClick={() => alert('Custom button clicked!')}>
  Click me
</CustomButton>`
      },
      {
        title: 'Event Delegation',
        code: `function TodoList({ todos, onDelete }) {
  const handleListClick = (event) => {
    if (event.target.matches('.delete-btn')) {
      const todoId = event.target.dataset.id;
      onDelete(todoId);
    }
  };
  
  return (
    <ul onClick={handleListClick}>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button 
            className="delete-btn" 
            data-id={todo.id}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}`
      }
    ]
  }
]; 