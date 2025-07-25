export default [
  {
    title: 'useState Hook',
    examples: [
      {
        title: 'Basic useState',
        code: 'function Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}'
      },
      {
        title: 'Multiple state variables',
        code: 'function Form() {\n  const [name, setName] = useState("");\n  const [email, setEmail] = useState("");\n  const [isSubmitting, setIsSubmitting] = useState(false);\n  \n  return (\n    <form>\n      <input\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n        placeholder="Name"\n      />\n      <input\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder="Email"\n      />\n    </form>\n  );\n}'
      }
    ]
  },
  {
    title: 'useEffect Hook',
    examples: [
      {
        title: 'Basic useEffect',
        code: 'function UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  \n  useEffect(() => {\n    fetchUser(userId).then(setUser);\n  }, [userId]);\n  \n  return user ? <div>{user.name}</div> : <div>Loading...</div>;\n}'
      },
      {
        title: 'Cleanup function',
        code: 'function Timer() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    const timer = setInterval(() => {\n      setCount(c => c + 1);\n    }, 1000);\n    \n    return () => clearInterval(timer);\n  }, []);\n  \n  return <div>Count: {count}</div>;\n}'
      }
    ]
  },
  {
    title: 'Custom Hooks',
    examples: [
      {
        title: 'Creating custom hooks',
        code: 'function useCounter(initialValue = 0) {\n  const [count, setCount] = useState(initialValue);\n  \n  const increment = () => setCount(count + 1);\n  const decrement = () => setCount(count - 1);\n  const reset = () => setCount(initialValue);\n  \n  return { count, increment, decrement, reset };\n}\n\n// Usage\nfunction MyComponent() {\n  const { count, increment, decrement } = useCounter(10);\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>+</button>\n      <button onClick={decrement}>-</button>\n    </div>\n  );\n}'
      },
      {
        title: 'useLocalStorage hook',
        code: 'function useLocalStorage(key, initialValue) {\n  const [storedValue, setStoredValue] = useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      return initialValue;\n    }\n  });\n  \n  const setValue = (value) => {\n    try {\n      setStoredValue(value);\n      window.localStorage.setItem(key, JSON.stringify(value));\n    } catch (error) {\n      console.error(error);\n    }\n  };\n  \n  return [storedValue, setValue];\n}'
      }
    ]
  }
]; 