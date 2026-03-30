export default [
  {
    title: 'Component Design',
    examples: [
      {
        title: 'Composition over configuration',
        explanation: `The most important design principle in React is composition — building complex UIs from small, focused components rather than creating large configurable ones. A component that accepts a dozen boolean props to switch between behaviours is hard to extend and test. One that accepts children or render props is flexible without needing to know about every use case upfront.`,
        keyIdeas: [
          'Prefer children and slots over prop explosion (isLarge, hasIcon, isRounded, etc.)',
          'Components should do one thing — if you need an "and" to describe it, split it',
          'The children prop is the most underused composition tool in React',
        ],
        pitfalls: [
          'Boolean prop proliferation — when a component has 8 boolean props, it\'s doing 8 things',
          'Leaking implementation details through props — expose behaviour, not internals',
        ],
        code: `// ❌ Configuration-based — grows without bound
<Button
  isLarge
  isRound
  hasLeftIcon
  iconName="star"
  isLoading
  isDisabled
  variant="primary"
/>

// ✅ Composition-based — flexible without extra props
<Button size="lg" variant="primary" disabled={isLoading}>
  {isLoading ? <Spinner /> : <StarIcon />}
  Save Changes
</Button>

// ✅ Children as slots — Card doesn't need to know what goes inside
function Card({ children, footer }: { children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="card">
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

// Caller decides what goes where — no extra props needed
<Card footer={<Button>Save</Button>}>
  <h2>Title</h2>
  <p>Content here</p>
</Card>`
      },
      {
        title: 'Compound components',
        explanation: `Compound components are a pattern for building components that work together and share implicit state — like a native <select> and its <option> elements. The parent manages state; children access it via Context. This gives callers full control over structure and layout without prop drilling.`,
        keyIdeas: [
          'The parent holds state; children read it through Context',
          'Callers control the DOM structure — no forced layout',
          'Great for tabs, accordions, dropdowns, and form groups',
        ],
        code: `const TabsContext = createContext<{ active: string; setActive: (id: string) => void } | null>(null);

function Tabs({ children, defaultTab }: { children: ReactNode; defaultTab: string }) {
  const [active, setActive] = useState(defaultTab);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }: { children: ReactNode }) {
  return <div role="tablist" className="tab-list">{children}</div>;
}

function Tab({ id, children }: { id: string; children: ReactNode }) {
  const ctx = useContext(TabsContext)!;
  return (
    <button
      role="tab"
      aria-selected={ctx.active === id}
      onClick={() => ctx.setActive(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }: { id: string; children: ReactNode }) {
  const ctx = useContext(TabsContext)!;
  if (ctx.active !== id) return null;
  return <div role="tabpanel">{children}</div>;
}

// Clean, flexible usage — caller owns the structure
<Tabs defaultTab="profile">
  <TabList>
    <Tab id="profile">Profile</Tab>
    <Tab id="settings">Settings</Tab>
  </TabList>
  <TabPanel id="profile"><ProfileForm /></TabPanel>
  <TabPanel id="settings"><SettingsForm /></TabPanel>
</Tabs>`
      },
    ]
  },
];
