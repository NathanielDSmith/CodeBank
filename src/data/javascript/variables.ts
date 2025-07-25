const variablesContent = [
  {
    title: 'How to declare variables',
    examples: [
      {
        title: 'Using let (recommended for variables that change)',
        code: 'let name = "John";\nlet age = 25;\nlet isStudent = true;\n\n// You can change let variables\nage = 26;'
      },
      {
        title: 'Using const (recommended for values that don\'t change)',
        code: 'const PI = 3.14159;\nconst API_URL = "https://api.example.com";\nconst MAX_USERS = 100;\n\n// const variables cannot be reassigned\n// PI = 3.14; // This would cause an error!'
      },
      {
        title: 'Using var (legacy - avoid in modern code)',
        code: 'var oldWay = "not recommended";\nvar anotherVar = 42;'
      }
    ]
  },
  {
    title: 'Template literals (modern way to combine strings)',
    examples: [
      {
        title: 'Basic template literal',
        code: 'const name = "John";\nconst age = 25;\nconst greeting = \`Hello, \${name}! You are \${age} years old.\`;\nconsole.log(greeting); // "Hello, John! You are 25 years old."'
      },
      {
        title: 'Multi-line template literal',
        code: 'const message = \`\n  Dear User,\n  \n  Welcome to our website!\n  We hope you enjoy your visit.\n  \n  Best regards,\n  The Team\n\`;'
      }
    ]
  }
];

export default variablesContent; 