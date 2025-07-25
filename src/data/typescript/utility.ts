const utilityContent = [
  {
    title: 'Built-in Utility Types',
    examples: [
      {
        title: 'Partial, Required, and Readonly',
        code: '// Original interface\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n  isActive?: boolean;\n}\n\n// Partial<T> - Makes all properties optional\ntype PartialUser = Partial<User>;\n// Equivalent to:\n// {\n//   id?: number;\n//   name?: string;\n//   email?: string;\n//   age?: number;\n//   isActive?: boolean;\n// }\n\n// Required<T> - Makes all properties required\ntype RequiredUser = Required<User>;\n// Equivalent to:\n// {\n//   id: number;\n//   name: string;\n//   email: string;\n//   age: number;\n//   isActive: boolean; // Now required!\n// }\n\n// Readonly<T> - Makes all properties readonly\ntype ReadonlyUser = Readonly<User>;\n// Equivalent to:\n// {\n//   readonly id: number;\n//   readonly name: string;\n//   readonly email: string;\n//   readonly age: number;\n//   readonly isActive?: boolean;\n// }\n\n// Using the utility types\nlet partialUser: PartialUser = {\n  name: "Alice"\n  // All other properties are optional\n};\n\nlet requiredUser: RequiredUser = {\n  id: 1,\n  name: "Bob",\n  email: "bob@example.com",\n  age: 25,\n  isActive: true // Now required!\n};\n\nlet readonlyUser: ReadonlyUser = {\n  id: 1,\n  name: "Charlie",\n  email: "charlie@example.com",\n  age: 30\n};\n// readonlyUser.name = "David"; // Error! name is readonly'
      },
      {
        title: 'Pick and Omit',
        code: '// Original interface\ninterface Product {\n  id: number;\n  name: string;\n  price: number;\n  description: string;\n  category: string;\n  inStock: boolean;\n}\n\n// Pick<T, K> - Select specific properties\ntype ProductBasicInfo = Pick<Product, "name" | "price">;\n// Equivalent to:\n// {\n//   name: string;\n//   price: number;\n// }\n\ntype ProductSummary = Pick<Product, "id" | "name" | "price" | "inStock">;\n\n// Omit<T, K> - Exclude specific properties\ntype ProductWithoutId = Omit<Product, "id">;\n// Equivalent to:\n// {\n//   name: string;\n//   price: number;\n//   description: string;\n//   category: string;\n//   inStock: boolean;\n// }\n\ntype ProductForDisplay = Omit<Product, "id" | "description">;\n\n// Using the utility types\nlet basicInfo: ProductBasicInfo = {\n  name: "Laptop",\n  price: 999.99\n};\n\nlet productSummary: ProductSummary = {\n  id: 1,\n  name: "Smartphone",\n  price: 599.99,\n  inStock: true\n};\n\nlet productWithoutId: ProductWithoutId = {\n  name: "Tablet",\n  price: 299.99,\n  description: "10-inch tablet",\n  category: "Electronics",\n  inStock: false\n};'
      }
    ]
  },
  {
    title: 'Advanced Utility Types',
    examples: [
      {
        title: 'Record, ReturnType, and Parameters',
        code: '// Record<K, T> - Creates object type with specific keys and values\ntype UserRoles = Record<string, "admin" | "user" | "guest">;\n\nlet userRoles: UserRoles = {\n  "alice": "admin",\n  "bob": "user",\n  "charlie": "guest"\n};\n\n// Record with specific keys\ntype StatusMap = Record<"loading" | "success" | "error", string>;\n\nlet statusMessages: StatusMap = {\n  loading: "Please wait...",\n  success: "Operation completed!",\n  error: "Something went wrong"\n};\n\n// ReturnType<T> - Extracts return type of function\ntype MathFunction = (x: number, y: number) => number;\n\ntype MathResult = ReturnType<MathFunction>; // number\n\ntype AsyncFunction = () => Promise<string>;\n\ntype AsyncResult = ReturnType<AsyncFunction>; // Promise<string>\n\n// Parameters<T> - Extracts parameter types of function\ntype AddFunction = (a: number, b: number) => number;\n\ntype AddParams = Parameters<AddFunction>; // [number, number]\n\n// Using the utility types\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n\nlet result: ReturnType<typeof add> = 42; // number\nlet params: Parameters<typeof add> = [5, 3]; // [number, number]'
      },
      {
        title: 'Exclude, Extract, and NonNullable',
        code: '// Exclude<T, U> - Excludes types from union\ntype AllowedTypes = string | number | boolean | null | undefined;\ntype ValidTypes = Exclude<AllowedTypes, null | undefined>; // string | number | boolean\n\ntype HttpMethods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";\ntype ReadOnlyMethods = Exclude<HttpMethods, "POST" | "PUT" | "DELETE" | "PATCH">; // "GET"\n\n// Extract<T, U> - Extracts types from union\ntype AnimalTypes = "dog" | "cat" | "bird" | "fish" | "reptile";\ntype Mammals = Extract<AnimalTypes, "dog" | "cat">; // "dog" | "cat"\n\ntype NumberOrString = number | string | boolean;\ntype TextTypes = Extract<NumberOrString, string>; // string\n\n// NonNullable<T> - Removes null and undefined\ntype MaybeString = string | null | undefined;\ntype DefiniteString = NonNullable<MaybeString>; // string\n\ntype MaybeNumber = number | null;\ntype DefiniteNumber = NonNullable<MaybeNumber>; // number\n\n// Using the utility types\nlet validValue: ValidTypes = "hello"; // OK\n// let invalidValue: ValidTypes = null; // Error!\n\nlet readOnlyMethod: ReadOnlyMethods = "GET"; // OK\n// let writeMethod: ReadOnlyMethods = "POST"; // Error!\n\nlet mammal: Mammals = "dog"; // OK\nlet reptile: Mammals = "snake"; // Error!\n\nlet definiteString: DefiniteString = "hello"; // OK\n// let maybeString: DefiniteString = null; // Error!'
      }
    ]
  }
];

export default utilityContent; 