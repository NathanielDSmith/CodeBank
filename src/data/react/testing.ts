export default [
  {
    title: 'Testing',
    examples: [
      {
        title: 'Testing with React Testing Library — the right philosophy',
        explanation: `React Testing Library's core principle: test your components the way users interact with them — by finding elements with accessible queries (text, role, label) rather than class names or IDs. This means tests don't break when you refactor internals, only when behaviour actually changes.

The guiding question is "what would a user see or do?" — not "does this state variable equal this value?".`,
        keyIdeas: [
          'getByRole is the most robust query — prefer it over getByTestId or getByClassName',
          'userEvent simulates real user interactions (keystrokes, clicks); fireEvent is lower-level',
          'waitFor and findBy* handle async behaviour — elements that appear after an async operation',
          'Mock at the boundary (API calls, third-party libs), not at the React component level',
        ],
        pitfalls: [
          'Testing implementation details (state values, component methods) — tests become brittle',
          'Using getByTestId for everything — it\'s a last resort, not a default',
          'Not wrapping async assertions in waitFor — causes flaky tests',
        ],
        code: `import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Mock the API at the network level
const server = setupServer(
  rest.get('/api/users/:id', (req, res, ctx) => {
    return res(ctx.json({ id: 1, name: 'Alice', email: 'alice@example.com' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UserProfile', () => {
  it('displays the user name after loading', async () => {
    render(<UserProfile userId={1} />);

    // Loading state — spinner is visible
    expect(screen.getByRole('status')).toBeInTheDocument();

    // Wait for the user name to appear
    expect(await screen.findByText('Alice')).toBeInTheDocument();

    // Spinner is gone
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('shows an error message when the request fails', async () => {
    server.use(
      rest.get('/api/users/:id', (req, res, ctx) => res(ctx.status(500)))
    );

    render(<UserProfile userId={1} />);

    expect(await screen.findByRole('alert')).toHaveTextContent(/failed to load/i);
  });
});

describe('LoginForm', () => {
  it('submits email and password when the form is valid', async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText(/email/i), 'alice@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /log in/i }));

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'alice@example.com',
      password: 'password123',
    });
  });

  it('shows validation errors when fields are empty', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={jest.fn()} />);

    await user.click(screen.getByRole('button', { name: /log in/i }));

    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });
});`
      },
    ]
  },
];
