const objectsContent = [
  {
    title: 'Creating and using objects',
    examples: [
      {
        title: 'Creating objects',
        code: '// Object literal syntax\nconst person = {\n  name: "John",\n  age: 30,\n  city: "New York",\n  isStudent: false\n};\n\nconsole.log(person.name); // "John"\nconsole.log(person["age"]); // 30'
      },
      {
        title: 'Adding and modifying properties',
        code: 'const user = {\n  name: "Alice",\n  email: "alice@email.com"\n};\n\n// Add new property\nuser.age = 25;\nuser.isActive = true;\n\n// Modify existing property\nuser.email = "alice.new@email.com";\n\nconsole.log(user);\n// { name: "Alice", email: "alice.new@email.com", age: 25, isActive: true }'
      }
    ]
  },
  {
    title: 'Object methods and destructuring',
    examples: [
      {
        title: 'Objects with methods',
        code: 'const calculator = {\n  add: function(a, b) {\n    return a + b;\n  },\n  subtract(a, b) {\n    return a - b;\n  },\n  multiply: (a, b) => a * b\n};\n\nconsole.log(calculator.add(5, 3)); // 8\nconsole.log(calculator.subtract(10, 4)); // 6\nconsole.log(calculator.multiply(2, 7)); // 14'
      },
      {
        title: 'Destructuring objects',
        code: 'const person = {\n  name: "Bob",\n  age: 28,\n  city: "Los Angeles",\n  occupation: "Developer"\n};\n\n// Extract specific properties\nconst { name, age } = person;\nconsole.log(name); // "Bob"\nconsole.log(age); // 28\n\n// Extract with new variable names\nconst { name: fullName, city: location } = person;\nconsole.log(fullName); // "Bob"\nconsole.log(location); // "Los Angeles"'
      }
    ]
  }
];

export default objectsContent; 