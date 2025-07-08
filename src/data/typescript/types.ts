const typesContent = [
  {
    title: 'Primitive Types',
    examples: [
      {
        title: 'Basic primitive types',
        code: '// String type\nlet name: string = "John Doe";\nlet message: string = "Hello, World!";\n\n// Number type (includes integers and floats)\nlet age: number = 25;\nlet price: number = 19.99;\nlet temperature: number = -5.5;\n\n// Boolean type\nlet isActive: boolean = true;\nlet isLoggedIn: boolean = false;\n\n// Undefined and null\nlet notDefined: undefined = undefined;\nlet emptyValue: null = null;\n\n// Symbol type\nlet uniqueId: symbol = Symbol("unique");'
      },
      {
        title: 'Array types',
        code: '// Array of numbers\nlet numbers: number[] = [1, 2, 3, 4, 5];\nlet temperatures: number[] = [20.5, 22.1, 18.9];\n\n// Array of strings\nlet names: string[] = ["Alice", "Bob", "Charlie"];\nlet colors: string[] = ["red", "green", "blue"];\n\n// Array of booleans\nlet flags: boolean[] = [true, false, true];\n\n// Alternative array syntax\nlet scores: Array<number> = [95, 87, 92];\nlet items: Array<string> = ["apple", "banana", "orange"];\n\n// Mixed arrays (use sparingly)\nlet mixed: any[] = [1, "hello", true, null];'
      }
    ]
  },
  {
    title: 'Object and Complex Types',
    examples: [
      {
        title: 'Object types',
        code: '// Object with specific properties\nlet person: {\n  name: string;\n  age: number;\n  email?: string; // Optional property\n} = {\n  name: "John",\n  age: 30,\n  email: "john@example.com"\n};\n\n// Array of objects\nlet users: {\n  id: number;\n  name: string;\n  isActive: boolean;\n}[] = [\n  { id: 1, name: "Alice", isActive: true },\n  { id: 2, name: "Bob", isActive: false }\n];\n\n// Tuple (fixed-length array with specific types)\nlet coordinates: [number, number] = [10, 20];\nlet rgbColor: [number, number, number] = [255, 128, 0];\nlet userInfo: [string, number, boolean] = ["John", 25, true];'
      },
      {
        title: 'Union and intersection types',
        code: '// Union type (can be one of several types)\nlet id: string | number = "abc123";\nid = 12345; // Also valid\n\nlet status: "loading" | "success" | "error" = "loading";\nstatus = "success"; // Valid\n// status = "pending"; // Error!\n\n// Intersection type (must have all properties)\ntype HasName = { name: string };\ntype HasAge = { age: number };\ntype Person = HasName & HasAge;\n\nlet person: Person = {\n  name: "Alice",\n  age: 25\n};'
      }
    ]
  }
];

export default typesContent; 