const genericsContent = [
  {
    title: 'Basic Generics',
    examples: [
      {
        title: 'Simple generic functions',
        code: '// Generic function that works with any type\nfunction identity<T>(arg: T): T {\n  return arg;\n}\n\n// Using the generic function with different types\nlet stringResult = identity<string>("hello");\nlet numberResult = identity<number>(42);\nlet booleanResult = identity<boolean>(true);\n\n// TypeScript can infer the type automatically\nlet inferredString = identity("world"); // TypeScript knows it\'s string\nlet inferredNumber = identity(100); // TypeScript knows it\'s number\n\nconsole.log(stringResult); // "hello"\nconsole.log(numberResult); // 42\nconsole.log(inferredString); // "world"'
      },
      {
        title: 'Generic interfaces',
        code: '// Generic interface for a container\ninterface Container<T> {\n  value: T;\n  getValue(): T;\n  setValue(value: T): void;\n}\n\n// Implementing the generic interface\nclass NumberContainer implements Container<number> {\n  private _value: number;\n  \n  constructor(value: number) {\n    this._value = value;\n  }\n  \n  getValue(): number {\n    return this._value;\n  }\n  \n  setValue(value: number): void {\n    this._value = value;\n  }\n}\n\nclass StringContainer implements Container<string> {\n  private _value: string;\n  \n  constructor(value: string) {\n    this._value = value;\n  }\n  \n  getValue(): string {\n    return this._value;\n  }\n  \n  setValue(value: string): void {\n    this._value = value;\n  }\n}\n\nlet numberBox = new NumberContainer(42);\nlet stringBox = new StringContainer("hello");\n\nconsole.log(numberBox.getValue()); // 42\nconsole.log(stringBox.getValue()); // "hello"'
      }
    ]
  },
  {
    title: 'Advanced Generics',
    examples: [
      {
        title: 'Generic constraints',
        code: '// Generic function with constraints\nfunction getLength<T extends { length: number }>(arg: T): number {\n  return arg.length;\n}\n\n// This works with arrays and strings\nconsole.log(getLength([1, 2, 3])); // 3\nconsole.log(getLength("hello")); // 5\nconsole.log(getLength({ length: 10, name: "test" })); // 10\n\n// Generic function with multiple constraints\nfunction mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {\n  return { ...obj1, ...obj2 };\n}\n\nlet person = { name: "Alice", age: 25 };\nlet address = { city: "New York", country: "USA" };\n\nlet personWithAddress = mergeObjects(person, address);\nconsole.log(personWithAddress); // { name: "Alice", age: 25, city: "New York", country: "USA" }'
      },
      {
        title: 'Generic classes',
        code: '// Generic class for a stack\nclass Stack<T> {\n  private items: T[] = [];\n  \n  push(item: T): void {\n    this.items.push(item);\n  }\n  \n  pop(): T | undefined {\n    return this.items.pop();\n  }\n  \n  peek(): T | undefined {\n    return this.items[this.items.length - 1];\n  }\n  \n  isEmpty(): boolean {\n    return this.items.length === 0;\n  }\n  \n  size(): number {\n    return this.items.length;\n  }\n}\n\n// Using the generic stack with different types\nlet numberStack = new Stack<number>();\nnumberStack.push(1);\nnumberStack.push(2);\nnumberStack.push(3);\n\nconsole.log(numberStack.pop()); // 3\nconsole.log(numberStack.peek()); // 2\nconsole.log(numberStack.size()); // 2\n\nlet stringStack = new Stack<string>();\nstringStack.push("hello");\nstringStack.push("world");\n\nconsole.log(stringStack.pop()); // "world"\nconsole.log(stringStack.peek()); // "hello"'
      }
    ]
  }
];

export default genericsContent; 