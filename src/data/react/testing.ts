export default [
  {
    title: 'Basic React Testing',
    examples: [
      {
        title: 'Simple Component Test',
        code: `import { render, screen } from '@testing-library/react';
import Button from './Button';

test('shows button text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});`
      },
      {
        title: 'Testing Click Events',
        code: `import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('increments counter when clicked', () => {
  render(<Counter />);
  
  const button = screen.getByText('Count: 0');
  userEvent.click(button);
  
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});`
      },
      {
        title: 'Testing Props',
        code: `import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('displays greeting with name', () => {
  render(<Greeting name="John" />);
  expect(screen.getByText('Hello, John!')).toBeInTheDocument();
});`
      },
      {
        title: 'Testing Conditional Rendering',
        code: `import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

test('shows loading state', () => {
  render(<UserProfile loading={true} />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('shows user data when loaded', () => {
  render(<UserProfile loading={false} user={{ name: 'John' }} />);
  expect(screen.getByText('John')).toBeInTheDocument();
});`
      },
      {
        title: 'Testing Form Input',
        code: `import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from './SearchBox';

test('updates input value', () => {
  render(<SearchBox />);
  
  const input = screen.getByPlaceholderText('Search...');
  userEvent.type(input, 'react');
  
  expect(input.value).toBe('react');
});`
      }
    ]
  }
]; 