const advancedContent = [
  {
    title: 'Advanced Type Features',
    examples: [
      {
        title: 'Literal types and union types',
        code: '// Literal types (specific values)\ntype Status = "loading" | "success" | "error";\ntype Size = "small" | "medium" | "large";\ntype Direction = "north" | "south" | "east" | "west";\n\n// Using literal types\nfunction handleStatus(status: Status): string {\n  switch (status) {\n    case "loading":\n      return "Please wait...";\n    case "success":\n      return "Operation completed!";\n    case "error":\n      return "Something went wrong";\n  }\n}\n\n// Union types with different types\ntype StringOrNumber = string | number;\ntype StringOrNumberOrBoolean = string | number | boolean;\n\nfunction processValue(value: StringOrNumber): string {\n  if (typeof value === "string") {\n    return value.toUpperCase();\n  } else {\n    return value.toString();\n  }\n}\n\nconsole.log(processValue("hello")); // "HELLO"\nconsole.log(processValue(42)); // "42"'
      },
      {
        title: 'Type guards and narrowing',
        code: '// Type guards (functions that check types)\nfunction isString(value: any): value is string {\n  return typeof value === "string";\n}\n\nfunction isNumber(value: any): value is number {\n  return typeof value === "number";\n}\n\nfunction isArray(value: any): value is any[] {\n  return Array.isArray(value);\n}\n\n// Using type guards\nfunction processData(data: string | number | string[]): string {\n  if (isString(data)) {\n    return data.toUpperCase();\n  } else if (isNumber(data)) {\n    return data.toString();\n  } else if (isArray(data)) {\n    return data.join(", ");\n  }\n  return "unknown";\n}\n\nconsole.log(processData("hello")); // "HELLO"\nconsole.log(processData(42)); // "42"\nconsole.log(processData(["a", "b", "c"])); // "a, b, c"\n\n// Type narrowing with instanceof\nclass Animal {\n  name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\nclass Dog extends Animal {\n  bark(): string {\n    return "Woof!";\n  }\n}\n\nfunction makeSound(animal: Animal): string {\n  if (animal instanceof Dog) {\n    return animal.bark();\n  }\n  return "Some sound";\n}'
      }
    ]
  },
  {
    title: 'Conditional and Mapped Types',
    examples: [
      {
        title: 'Conditional types',
        code: '// Conditional types (types that depend on other types)\ntype NonNullable<T> = T extends null | undefined ? never : T;\ntype StringOrNumber<T> = T extends string ? string : number;\n\n// Using conditional types\nlet name: NonNullable<string | null> = "Alice"; // string\nlet age: NonNullable<number | undefined> = 25; // number\n\n// Conditional types with inference\ntype ElementType<T> = T extends (infer U)[] ? U : never;\ntype ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;\n\n// Using inferred types\nlet numbers: ElementType<number[]> = 42; // number\nlet result: ReturnType<() => string> = "hello"; // string\n\n// More complex conditional types\ntype IsString<T> = T extends string ? true : false;\ntype IsNumber<T> = T extends number ? true : false;\n\ntype StringCheck = IsString<"hello">; // true\ntype NumberCheck = IsNumber<42>; // true\ntype BooleanCheck = IsString<boolean>; // false'
      },
      {
        title: 'Mapped types',
        code: '// Mapped types (transform existing types)\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n}\n\n// Make all properties optional\ntype PartialUser = Partial<User>;\n\n// Make all properties required\ntype RequiredUser = Required<User>;\n\n// Make all properties readonly\ntype ReadonlyUser = Readonly<User>;\n\n// Pick specific properties\ntype UserBasicInfo = Pick<User, "name" | "email">;\n\n// Omit specific properties\ntype UserWithoutId = Omit<User, "id">;\n\n// Custom mapped type\ntype Optional<T> = {\n  [K in keyof T]?: T[K];\n};\n\ntype Readonly<T> = {\n  readonly [K in keyof T]: T[K];\n};\n\n// Using the mapped types\nlet partialUser: PartialUser = {\n  name: "Alice"\n  // id, email, age are optional\n};\n\nlet readonlyUser: ReadonlyUser = {\n  id: 1,\n  name: "Bob",\n  email: "bob@example.com",\n  age: 30\n};\n\n// readonlyUser.name = "Charlie"; // Error! name is readonly'
      }
    ]
  }
];

export default advancedContent; 