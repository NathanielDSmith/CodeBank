export default [
  {
    title: 'How to add state to component',
    examples: [
      {
        title: 'useState Hook',
        code: 'const [count, setCount] = useState(0);'
      },
      {
        title: 'Multiple State Variables',
        code: 'const [name, setName] = useState("");\nconst [age, setAge] = useState(0);\nconst [isLoading, setIsLoading] = useState(false);'
      },
      {
        title: 'Object State',
        code: 'const [user, setUser] = useState({\n  name: "",\n  email: "",\n  age: 0\n});'
      }
    ]
  },
  {
    title: 'How to update state',
    examples: [
      {
        title: 'Direct Update',
        code: 'setCount(count + 1);'
      },
      {
        title: 'Functional Update',
        code: 'setCount(prevCount => prevCount + 1);'
      },
      {
        title: 'Updating Object State',
        code: 'setUser(prevUser => ({\n  ...prevUser,\n  name: "John"\n}));'
      }
    ]
  },
  {
    title: 'State best practices',
    examples: [
      {
        title: 'Never mutate state directly',
        code: '// ❌ Wrong\nuser.name = "John";\n\n// ✅ Correct\nsetUser(prevUser => ({\n  ...prevUser,\n  name: "John"\n}));'
      },
      {
        title: 'Use functional updates for dependent state',
        code: 'setCount(prevCount => prevCount + 1);\nsetItems(prevItems => [...prevItems, newItem]);'
      }
    ]
  }
]; 