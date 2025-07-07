const modulesContent = [
  {
    title: 'Exporting from modules',
    examples: [
      {
        title: 'Named exports',
        code: '// math.js\n// Named exports\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\nexport const multiply = (a, b) => a * b;\nexport const divide = (a, b) => a / b;\n\n// You can also export at the end\nexport { add, subtract, multiply, divide };'
      },
      {
        title: 'Default exports',
        code: '// calculator.js\n// Default export (only one per file)\nconst Calculator = {\n  add: (a, b) => a + b,\n  subtract: (a, b) => a - b,\n  multiply: (a, b) => a * b,\n  divide: (a, b) => a / b\n};\n\nexport default Calculator;\n\n// Or export a function directly\nexport default function(a, b) {\n  return a + b;\n}'
      }
    ]
  },
  {
    title: 'Importing modules',
    examples: [
      {
        title: 'Importing named exports',
        code: '// main.js\n// Import specific functions\nimport { add, subtract } from "./math.js";\n\n// Import with different names\nimport { add as addNumbers, multiply as multiplyNumbers } from "./math.js";\n\n// Import all named exports\nimport * as MathUtils from "./math.js";\n\n// Use the imported functions\nconsole.log(add(5, 3)); // 8\nconsole.log(MathUtils.multiply(4, 6)); // 24'
      },
      {
        title: 'Importing default exports',
        code: '// Import default export\nimport Calculator from "./calculator.js";\n\n// Use the default export\nconsole.log(Calculator.add(10, 5)); // 15\nconsole.log(Calculator.multiply(3, 4)); // 12\n\n// Import with custom name\nimport MyCalculator from "./calculator.js";\nconsole.log(MyCalculator.subtract(10, 3)); // 7'
      }
    ]
  },
  {
    title: 'Combining named and default exports',
    examples: [
      {
        title: 'Mixed exports and imports',
        code: '// utils.js\n// Named exports\nexport const formatDate = (date) => {\n  return date.toLocaleDateString();\n};\n\nexport const validateEmail = (email) => {\n  return email.includes("@");\n};\n\n// Default export\nconst Utils = {\n  formatDate,\n  validateEmail,\n  version: "1.0.0"\n};\n\nexport default Utils;\n\n// main.js\n// Import both named and default\nimport Utils, { formatDate, validateEmail } from "./utils.js";\n\nconsole.log(formatDate(new Date()));\nconsole.log(validateEmail("user@example.com"));\nconsole.log(Utils.version);'
      }
    ]
  }
];

export default modulesContent; 