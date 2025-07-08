const bestPracticesContent = [
  {
    title: 'Type Safety Best Practices',
    examples: [
      {
        title: 'Avoid any type when possible',
        code: '// ❌ Bad - using any\nfunction processData(data: any): any {\n  return data.someProperty;\n}\n\n// ✅ Good - use specific types\nfunction processData<T>(data: T): T {\n  return data;\n}\n\n// ✅ Better - use interfaces\ninterface UserData {\n  id: number;\n  name: string;\n  email: string;\n}\n\nfunction processUserData(data: UserData): UserData {\n  return {\n    ...data,\n    name: data.name.toUpperCase()\n  };\n}\n\n// ✅ Use unknown instead of any for truly unknown data\nfunction parseJson(jsonString: string): unknown {\n  try {\n    return JSON.parse(jsonString);\n  } catch {\n    return null;\n  }\n}\n\n// Type guard to narrow unknown\nfunction isUserData(data: unknown): data is UserData {\n  return (\n    typeof data === "object" &&\n    data !== null &&\n    "id" in data &&\n    "name" in data &&\n    "email" in data\n  );\n}\n\n// Safe usage\nconst jsonData = parseJson(\'{"id": 1, "name": "Alice", "email": "alice@example.com"}\');\nif (isUserData(jsonData)) {\n  processUserData(jsonData); // Now safe!\n}'
      },
      {
        title: 'Use strict null checks',
        code: '// Enable strictNullChecks in tsconfig.json\n// ❌ Bad - allows null/undefined\nfunction getLength(str: string): number {\n  return str.length;\n}\n\n// ✅ Good - handle null/undefined explicitly\nfunction getLength(str: string | null | undefined): number {\n  if (str === null || str === undefined) {\n    return 0;\n  }\n  return str.length;\n}\n\n// ✅ Better - use optional chaining and nullish coalescing\nfunction getLengthModern(str?: string): number {\n  return str?.length ?? 0;\n}\n\n// ✅ Use non-null assertion only when you\'re certain\nfunction getLengthAssert(str: string | null): number {\n  return str!.length; // Only use ! when you know str is not null\n}\n\n// ✅ Use type guards\nfunction isNotNull<T>(value: T | null): value is T {\n  return value !== null;\n}\n\nfunction processArray(items: (string | null)[]): string[] {\n  return items.filter(isNotNull);\n}\n\n// Example usage\nconst names = ["Alice", null, "Bob", undefined, "Charlie"];\nconst validNames = processArray(names); // ["Alice", "Bob", "Charlie"]'
      }
    ]
  },
  {
    title: 'Code Organization and Readability',
    examples: [
      {
        title: 'Use meaningful type names and interfaces',
        code: '// ❌ Bad - unclear types\ntype Data = {\n  a: string;\n  b: number;\n  c: boolean;\n};\n\n// ✅ Good - descriptive names\ninterface UserProfile {\n  username: string;\n  age: number;\n  isActive: boolean;\n}\n\n// ✅ Better - use enums for constants\nenum UserStatus {\n  Active = "active",\n  Inactive = "inactive",\n  Pending = "pending"\n}\n\ninterface User {\n  id: number;\n  profile: UserProfile;\n  status: UserStatus;\n  createdAt: Date;\n}\n\n// ✅ Use type aliases for complex types\ntype ApiResponse<T> = {\n  data: T;\n  status: "success" | "error";\n  message?: string;\n};\n\ntype UserApiResponse = ApiResponse<User>;\n\n// ✅ Use branded types for type safety\ntype UserId = number & { readonly brand: unique symbol };\ntype Email = string & { readonly brand: unique symbol };\n\nfunction createUserId(id: number): UserId {\n  return id as UserId;\n}\n\nfunction createEmail(email: string): Email {\n  if (!email.includes("@")) {\n    throw new Error("Invalid email");\n  }\n  return email as Email;\n}\n\n// Now you can\'t accidentally mix up IDs and emails\nfunction getUser(id: UserId): User {\n  // Implementation\n  return {} as User;\n}\n\n// getUser(123); // Error! Expected UserId, got number\n// getUser(createUserId(123)); // OK'
      },
      {
        title: 'Use const assertions and readonly',
        code: '// ❌ Bad - mutable array\nconst colors = ["red", "green", "blue"];\ncolors.push("yellow"); // Mutates original\n\n// ✅ Good - readonly array\ntype Colors = readonly ["red", "green", "blue"];\nconst colors: Colors = ["red", "green", "blue"] as const;\n// colors.push("yellow"); // Error! readonly\n\n// ✅ Use const assertions for literal types\nconst config = {\n  apiUrl: "https://api.example.com",\n  timeout: 5000,\n  retries: 3\n} as const;\n\n// Type is now: {\n//   readonly apiUrl: "https://api.example.com";\n//   readonly timeout: 5000;\n//   readonly retries: 3;\n// }\n\n// ✅ Use readonly for immutable data\ninterface Config {\n  readonly apiUrl: string;\n  readonly timeout: number;\n  readonly retries: number;\n}\n\nfunction createConfig(apiUrl: string): Config {\n  return {\n    apiUrl,\n    timeout: 5000,\n    retries: 3\n  } as const;\n}\n\nconst appConfig = createConfig("https://api.example.com");\n// appConfig.timeout = 10000; // Error! readonly\n\n// ✅ Use readonly arrays and objects\nfunction processUsers(users: readonly User[]): readonly User[] {\n  return users.map(user => ({ ...user, processed: true }));\n}\n\nconst users: readonly User[] = [\n  { id: 1, name: "Alice" },\n  { id: 2, name: "Bob" }\n] as const;\n\nconst processedUsers = processUsers(users);'
      }
    ]
  }
];

export default bestPracticesContent; 