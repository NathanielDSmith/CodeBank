const arraysContent = [
  {
    title: 'Creating and using arrays',
    examples: [
      {
        title: 'Creating arrays',
        code: '// Different ways to create arrays\nconst fruits = ["apple", "banana", "orange"];\nconst numbers = [1, 2, 3, 4, 5];\nconst mixed = ["text", 42, true, null];\n\nconsole.log(fruits[0]); // "apple"\nconsole.log(fruits.length); // 3'
      },
      {
        title: 'Adding and removing items',
        code: 'const colors = ["red", "green"];\n\n// Add to end\ncolors.push("blue");\nconsole.log(colors); // ["red", "green", "blue"]\n\n// Remove from end\ncolors.pop();\nconsole.log(colors); // ["red", "green"]\n\n// Add to beginning\ncolors.unshift("yellow");\nconsole.log(colors); // ["yellow", "red", "green"]'
      }
    ]
  },
  {
    title: 'Array methods for beginners',
    examples: [
      {
        title: 'forEach - loop through each item',
        code: 'const numbers = [1, 2, 3, 4, 5];\n\nnumbers.forEach(number => {\n  console.log(\`Number: \${number}\`);\n});\n// Output:\n// Number: 1\n// Number: 2\n// Number: 3\n// Number: 4\n// Number: 5'
      },
      {
        title: 'map - transform each item',
        code: 'const numbers = [1, 2, 3, 4, 5];\n\nconst doubled = numbers.map(number => number * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]\n\nconst names = ["alice", "bob", "charlie"];\nconst capitalized = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));\nconsole.log(capitalized); // ["Alice", "Bob", "Charlie"]'
      },
      {
        title: 'filter - keep only certain items',
        code: 'const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\nconst evenNumbers = numbers.filter(number => number % 2 === 0);\nconsole.log(evenNumbers); // [2, 4, 6, 8, 10]\n\nconst fruits = ["apple", "banana", "cherry", "date"];\nconst longFruits = fruits.filter(fruit => fruit.length > 5);\nconsole.log(longFruits); // ["banana", "cherry"]'
      }
    ]
  }
];

export default arraysContent; 