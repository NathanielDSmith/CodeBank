const interfacesContent = [
  {
    title: 'Basic Interfaces',
    examples: [
      {
        title: 'Simple interface definition',
        code: '// Define an interface\ninterface Person {\n  name: string;\n  age: number;\n  email?: string; // Optional property\n}\n\n// Use the interface\nlet user: Person = {\n  name: "Alice",\n  age: 25,\n  email: "alice@example.com"\n};\n\n// Another person (email is optional)\nlet guest: Person = {\n  name: "Bob",\n  age: 30\n  // email is optional, so we can omit it\n};'
      },
      {
        title: 'Interface with methods',
        code: '// Interface with method definitions\ninterface Calculator {\n  add(a: number, b: number): number;\n  subtract(a: number, b: number): number;\n  multiply(a: number, b: number): number;\n}\n\n// Implement the interface\nlet myCalculator: Calculator = {\n  add: (a, b) => a + b,\n  subtract: (a, b) => a - b,\n  multiply: (a, b) => a * b\n};\n\n// Use the calculator\nconsole.log(myCalculator.add(5, 3)); // 8\nconsole.log(myCalculator.multiply(4, 6)); // 24'
      }
    ]
  },
  {
    title: 'Advanced Interface Features',
    examples: [
      {
        title: 'Readonly properties and index signatures',
        code: '// Interface with readonly properties\ninterface User {\n  readonly id: number; // Cannot be changed after creation\n  name: string;\n  email: string;\n}\n\nlet user: User = {\n  id: 1,\n  name: "Alice",\n  email: "alice@example.com"\n};\n\n// user.id = 2; // Error! id is readonly\n\n// Interface with index signature\ninterface StringArray {\n  [index: number]: string;\n}\n\nlet myArray: StringArray = ["apple", "banana", "orange"];\nconsole.log(myArray[0]); // "apple"\n\n// Interface with optional properties\ninterface Config {\n  apiUrl: string;\n  timeout?: number; // Optional\n  retries?: number; // Optional\n}\n\nlet config: Config = {\n  apiUrl: "https://api.example.com"\n  // timeout and retries are optional\n};'
      },
      {
        title: 'Extending interfaces',
        code: '// Base interface\ninterface Animal {\n  name: string;\n  age: number;\n}\n\n// Extend the base interface\ninterface Dog extends Animal {\n  breed: string;\n  bark(): void;\n}\n\n// Extend multiple interfaces\ninterface Cat extends Animal {\n  color: string;\n  meow(): void;\n}\n\n// Implement the extended interface\nlet myDog: Dog = {\n  name: "Buddy",\n  age: 3,\n  breed: "Golden Retriever",\n  bark: () => console.log("Woof!")\n};\n\n// Interface can extend multiple interfaces\ninterface Pet extends Animal {\n  owner: string;\n}\n\ninterface DomesticCat extends Cat, Pet {\n  isIndoor: boolean;\n}'
      }
    ]
  }
];

export default interfacesContent; 