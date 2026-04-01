export default [
  {
    title: 'Props & Data Flow',
    examples: [
      {
        title: 'TypeScript props patterns',
        explanation: `Typing props well in TypeScript makes components self-documenting and catches integration mistakes at compile time rather than runtime. The patterns you pick — interfaces vs types, optional vs required, discriminated unions — significantly affect how ergonomic a component is to use.`,
        keyIdeas: [
          'Use interface for component props — it gives better error messages and is extensible',
          'Discriminated unions express "either A or B, never a mix" — great for variant components',
          'ComponentPropsWithoutRef lets you extend native HTML element props without conflicts',
          'Mark props optional only if the component genuinely works without them',
        ],
        pitfalls: [
          'Over-using optional props — if a component always needs a value, make it required',
          'Accepting any string for variant props instead of a union — loses autocomplete and type safety',
        ],
        code: `// ✅ Extending HTML element props — users can pass all div attributes
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  variant?: 'default' | 'highlighted' | 'warning';
}

function Card({ title, variant = 'default', className, children, ...rest }: CardProps) {
  return (
    <div
      className={\`card card--\${variant} \${className ?? ''}\`}
      {...rest}  // forwards onClick, aria-*, data-* etc.
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
}

// ✅ Discriminated union — Link or Button, never a confused mix
type ButtonProps =
  | { as: 'button'; onClick: () => void; href?: never }
  | { as: 'a'; href: string; onClick?: never };

type Props = ButtonProps & {
  children: ReactNode;
  disabled?: boolean;
};

function ActionButton({ as, children, disabled, ...rest }: Props) {
  if (as === 'a') {
    return <a {...rest}>{children}</a>;
  }
  return <button disabled={disabled} {...rest}>{children}</button>;
}

// TypeScript enforces correct usage
<ActionButton as="button" onClick={() => {}}>Click me</ActionButton>  // ✅
<ActionButton as="a" href="/page">Go there</ActionButton>              // ✅
<ActionButton as="a" onClick={() => {}}>Broken</ActionButton>         // ❌ TS error`
      },
      {
        title: 'Avoiding prop drilling with component composition',
        explanation: `Prop drilling — passing props through multiple layers of components that don't use them — is often solved by reaching for Context. But frequently the simpler solution is component composition. Instead of threading data down, pass the already-rendered component down.`,
        keyIdeas: [
          '"Children as props" means the parent doesn\'t need to know what\'s inside — it just renders a slot',
          'This pattern avoids re-renders too — the children are created by the grandparent, not the intermediary',
          'Context is still the right choice when many components at various levels need the same data',
        ],
        code: `// ❌ Prop drilling — Layout doesn't use user, just passes it along
function App() {
  const user = useUser();
  return <Layout user={user} />;
}

function Layout({ user }: { user: User }) {
  return (
    <div>
      <Sidebar user={user} />
      <Main />
    </div>
  );
}

function Sidebar({ user }: { user: User }) {
  return <UserAvatar user={user} />;
}

// ✅ Composition — App renders the already-composed sidebar
function App() {
  const user = useUser();
  return (
    <Layout sidebar={<Sidebar avatar={<UserAvatar user={user} />} />}>
      <Main />
    </Layout>
  );
}

// Layout and Sidebar know nothing about user — they just render slots
function Layout({ sidebar, children }: { sidebar: ReactNode; children: ReactNode }) {
  return (
    <div>
      {sidebar}
      {children}
    </div>
  );
}`
      },
    ]
  },
];
