const modulesContent = [
  {
    title: 'Basic Module System',
    examples: [
      {
        title: 'Exporting from modules',
        code: '// math.ts - Exporting individual items\nexport function add(a: number, b: number): number {\n  return a + b;\n}\n\nexport function subtract(a: number, b: number): number {\n  return a - b;\n}\n\nexport const PI = 3.14159;\n\nexport interface Point {\n  x: number;\n  y: number;\n}\n\n// Default export (only one per file)\nexport default class Calculator {\n  add(a: number, b: number): number {\n    return a + b;\n  }\n  \n  multiply(a: number, b: number): number {\n    return a * b;\n  }\n}\n\n// Importing the module\nimport Calculator, { add, subtract, PI, Point } from "./math";\n\nconsole.log(add(5, 3)); // 8\nconsole.log(subtract(10, 4)); // 6\nconsole.log(PI); // 3.14159\n\nlet point: Point = { x: 10, y: 20 };\nlet calc = new Calculator();\nconsole.log(calc.multiply(4, 6)); // 24'
      },
      {
        title: 'Import syntax variations',
        code: '// utils.ts - Multiple exports\n// Named exports\nexport function formatDate(date: Date): string {\n  return date.toLocaleDateString();\n}\n\nexport function formatCurrency(amount: number): string {\n  return "$" + amount.toFixed(2);\n}\n\nexport const APP_NAME = "MyApp";\nexport interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\n// Different ways to import\n// 1. Named imports\nimport { formatDate, formatCurrency, User } from "./utils";\n\n// 2. Import with alias\nimport { formatDate as format } from "./utils";\n\n// 3. Import everything as namespace\nimport * as Utils from "./utils";\n\n// 4. Import default export\nimport Calculator from "./math";\n\n// Using the imports\nlet user: User = {\n  id: 1,\n  name: "Alice",\n  email: "alice@example.com"\n};\n\nconsole.log(formatDate(new Date())); // Current date\nconsole.log(formatCurrency(19.99)); // "$19.99"\nconsole.log(Utils.APP_NAME); // "MyApp"'
      }
    ]
  },
  {
    title: 'Advanced Module Features',
    examples: [
      {
        title: 'Re-exporting and barrel exports',
        code: '// types.ts - Type definitions\nexport interface Person {\n  name: string;\n  age: number;\n}\n\nexport interface Address {\n  street: string;\n  city: string;\n  zipCode: string;\n}\n\n// services.ts - Business logic\nexport class UserService {\n  getUsers(): Person[] {\n    return [\n      { name: "Alice", age: 25 },\n      { name: "Bob", age: 30 }\n    ];\n  }\n}\n\nexport class AddressService {\n  getAddresses(): Address[] {\n    return [\n      { street: "123 Main St", city: "New York", zipCode: "10001" }\n    ];\n  }\n}\n\n// index.ts - Barrel export (re-exports everything)\nexport * from "./types";\nexport * from "./services";\n\n// Using the barrel export\nimport { Person, Address, UserService, AddressService } from "./index";\n\nlet userService = new UserService();\nlet addressService = new AddressService();\n\nlet users = userService.getUsers();\nlet addresses = addressService.getAddresses();\n\nconsole.log(users); // Array of Person objects\nconsole.log(addresses); // Array of Address objects'
      },
      {
        title: 'Dynamic imports and code splitting',
        code: '// Dynamic import (loads module on demand)\nasync function loadModule(moduleName: string) {\n  try {\n    const module = await import("./" + moduleName);\n    return module;\n  } catch (error) {\n    console.error("Failed to load module: " + moduleName, error);\n    return null;\n  }\n}\n\n// Using dynamic imports\nasync function useDynamicModule() {\n  // Load module only when needed\n  const mathModule = await loadModule("math");\n  \n  if (mathModule) {\n    const { add, subtract } = mathModule;\n    console.log(add(10, 5)); // 15\n    console.log(subtract(10, 5)); // 5\n  }\n}\n\n// Conditional module loading\nasync function loadFeature(featureName: string) {\n  switch (featureName) {\n    case "calculator":\n      const calc = await import("./calculator");\n      return calc.default;\n    case "formatter":\n      const formatter = await import("./formatter");\n      return formatter.default;\n    default:\n      throw new Error("Unknown feature: " + featureName);\n  }\n}\n\n// Usage\nloadFeature("calculator").then(Calculator => {\n  const calc = new Calculator();\n  console.log(calc.add(5, 3));\n});'
      }
    ]
  }
];

export default modulesContent; 