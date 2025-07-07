export default [
  {
    title: 'How to pass props',
    examples: [
      {
        title: 'Basic Props',
        code: 'function Greeting({ name, age }) {\n  return <h1>Hello, {name}! You are {age} years old.</h1>;\n}\n\n// Usage\n<Greeting name="John" age={25} />'
      },
      {
        title: 'Props with default values',
        code: 'function Button({ text = "Click me", onClick }) {\n  return <button onClick={onClick}>{text}</button>;\n}'
      },
      {
        title: 'Children prop',
        code: 'function Card({ children, title }) {\n  return (\n    <div className="card">\n      <h2>{title}</h2>\n      {children}\n    </div>\n  );\n}'
      }
    ]
  },
  {
    title: 'Prop types and validation',
    examples: [
      {
        title: 'Basic prop types',
        code: 'import PropTypes from "prop-types";\n\nfunction User({ name, age, email }) {\n  return <div>{name} ({age})</div>;\n}\n\nUser.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number,\n  email: PropTypes.string\n};'
      },
      {
        title: 'Default props',
        code: 'User.defaultProps = {\n  age: 18,\n  email: "user@example.com"\n};'
      }
    ]
  }
]; 