export default [
  {
    title: 'React Testing with Jest & RTL',
    examples: [
      {
        title: 'Component Testing',
        code: `import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  userEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});`
      },
      {
        title: 'Testing Hooks',
        code: `import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

test('useCounter increments value', () => {
  const { result } = renderHook(() => useCounter());
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});`
      },
      {
        title: 'Async Testing',
        code: `import { render, screen, waitFor } from '@testing-library/react';
import { fetchUser } from './api';

test('loads user data', async () => {
  render(<UserProfile userId="123" />);
  
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});`
      },
      {
        title: 'Mocking',
        code: `import { render, screen } from '@testing-library/react';
import { fetchUser } from './api';

// Mock the API module
jest.mock('./api');

test('displays user data', async () => {
  fetchUser.mockResolvedValue({
    name: 'John Doe',
    email: 'john@example.com'
  });
  
  render(<UserProfile userId="123" />);
  
  expect(await screen.findByText('John Doe')).toBeInTheDocument();
});`
      },
      {
        title: 'Testing Forms',
        code: `import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

test('submits form with user input', async () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);
  
  await userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
  await userEvent.type(screen.getByLabelText('Password'), 'password123');
  await userEvent.click(screen.getByRole('button', { name: /submit/i }));
  
  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});`
      }
    ]
  }
]; 