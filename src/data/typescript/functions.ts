const functionsContent = [
  {
    title: 'Function Type Annotations',
    examples: [
      {
        title: 'Basic function types',
        code: '// Function with parameter and return types\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\n// Arrow function with types\nconst multiply = (x: number, y: number): number => {\n  return x * y;\n};\n\n// Function with no return value (void)\nfunction logMessage(message: string): void {\n  console.log(message);\n}\n\n// Function that never returns (throws error)\nfunction throwError(message: string): never {\n  throw new Error(message);\n}\n\n// Using the functions\nconsole.log(add(5, 3)); // 8\nconsole.log(multiply(4, 6)); // 24\nlogMessage("Hello TypeScript!"); // logs to console'
      },
      {
        title: 'Optional and default parameters',
        code: '// Function with optional parameter\nfunction greet(name: string, title?: string): string {\n  if (title) {\n    return "Hello " + title + " " + name + "!";\n  }\n  return "Hello " + name + "!";\n}\n\n// Function with default parameter\nfunction createUser(name: string, age: number = 18): object {\n  return {\n    name,\n    age,\n    createdAt: new Date()\n  };\n}\n\n// Function with rest parameters\nfunction sum(...numbers: number[]): number {\n  return numbers.reduce((total, num) => total + num, 0);\n}\n\n// Using the functions\nconsole.log(greet("Alice")); // "Hello Alice!"\nconsole.log(greet("Bob", "Dr.")); // "Hello Dr. Bob!"\nconsole.log(createUser("Charlie")); // { name: "Charlie", age: 18, createdAt: ... }\nconsole.log(sum(1, 2, 3, 4, 5)); // 15'
      }
    ]
  },
  {
    title: 'Function Overloading and Advanced Types',
    examples: [
      {
        title: 'Function overloading',
        code: '// Function overloads (multiple signatures)\nfunction processData(value: string): string;\nfunction processData(value: number): number;\nfunction processData(value: string | number): string | number {\n  if (typeof value === "string") {\n    return value.toUpperCase();\n  } else {\n    return value * 2;\n  }\n}\n\n// Using the overloaded function\nconsole.log(processData("hello")); // "HELLO"\nconsole.log(processData(5)); // 10\n\n// Function type as parameter\nfunction executeFunction(fn: (x: number) => number, value: number): number {\n  return fn(value);\n}\n\nconst double = (x: number): number => x * 2;\nconst square = (x: number): number => x * x;\n\nconsole.log(executeFunction(double, 5)); // 10\nconsole.log(executeFunction(square, 4)); // 16'
      },
      {
        title: 'Generic functions',
        code: '// Generic function that works with any type\nfunction identity<T>(arg: T): T {\n  return arg;\n}\n\n// Using the generic function\nlet stringResult = identity<string>("hello");\nlet numberResult = identity<number>(42);\n\n// TypeScript can infer the type\nlet inferredString = identity("world"); // TypeScript knows it\'s string\nlet inferredNumber = identity(100); // TypeScript knows it\'s number\n\n// Generic function with constraints\nfunction getLength<T extends { length: number }>(arg: T): number {\n  return arg.length;\n}\n\n// This works with arrays and strings\nconsole.log(getLength([1, 2, 3])); // 3\nconsole.log(getLength("hello")); // 5\n// console.log(getLength(42)); // Error! number doesn\'t have length property'
      }
    ]
  }
];

export default functionsContent; 