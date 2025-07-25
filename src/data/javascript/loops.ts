const loopsContent = [
  {
    title: 'For loops',
    examples: [
      {
        title: 'Basic for loop',
        code: '// Count from 1 to 5\nfor (let i = 1; i <= 5; i++) {\n  console.log(\`Number: \${i}\`);\n}\n// Output:\n// Number: 1\n// Number: 2\n// Number: 3\n// Number: 4\n// Number: 5'
      },
      {
        title: 'For loop with array',
        code: 'const fruits = ["apple", "banana", "orange"];\n\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(\`Fruit \${i + 1}: \${fruits[i]}\`);\n}\n// Output:\n// Fruit 1: apple\n// Fruit 2: banana\n// Fruit 3: orange'
      }
    ]
  },
  {
    title: 'While and do-while loops',
    examples: [
      {
        title: 'While loop',
        code: 'let count = 0;\n\nwhile (count < 3) {\n  console.log(\`Count: \${count}\`);\n  count++;\n}\n// Output:\n// Count: 0\n// Count: 1\n// Count: 2'
      },
      {
        title: 'Do-while loop (runs at least once)',
        code: 'let number = 1;\n\ndo {\n  console.log(\`Number: \${number}\`);\n  number++;\n} while (number <= 3);\n// Output:\n// Number: 1\n// Number: 2\n// Number: 3'
      }
    ]
  },
  {
    title: 'For...of and for...in loops',
    examples: [
      {
        title: 'For...of loop (for arrays and strings)',
        code: 'const colors = ["red", "green", "blue"];\n\nfor (const color of colors) {\n  console.log(\`Color: \${color}\`);\n}\n// Output:\n// Color: red\n// Color: green\n// Color: blue\n\n// Also works with strings\nfor (const char of "Hello") {\n  console.log(char);\n}\n// Output: H, e, l, l, o'
      },
      {
        title: 'For...in loop (for object properties)',
        code: 'const person = {\n  name: "John",\n  age: 30,\n  city: "New York"\n};\n\nfor (const key in person) {\n  console.log(\`\${key}: \${person[key]}\`);\n}\n// Output:\n// name: John\n// age: 30\n// city: New York'
      }
    ]
  }
];

export default loopsContent; 