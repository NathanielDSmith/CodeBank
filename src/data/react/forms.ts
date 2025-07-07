export default [
  {
    title: 'Controlled Components',
    examples: [
      {
        title: 'Basic form input',
        code: 'function LoginForm() {\n  const [email, setEmail] = useState("");\n  const [password, setPassword] = useState("");\n  \n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log("Login:", { email, password });\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder="Email"\n      />\n      <input\n        type="password"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        placeholder="Password"\n      />\n      <button type="submit">Login</button>\n    </form>\n  );\n}'
      }
    ]
  }
]; 