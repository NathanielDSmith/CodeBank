export default [
  {
    title: 'Fetching data with useEffect',
    examples: [
      {
        title: 'Basic API call',
        code: 'function UserList() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    fetch("https://jsonplaceholder.typicode.com/users")\n      .then(response => response.json())\n      .then(data => {\n        setUsers(data);\n        setLoading(false);\n      });\n  }, []);\n  \n  if (loading) return <div>Loading...</div>;\n  \n  return (\n    <ul>\n      {users.map(user => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n}'
      }
    ]
  }
]; 