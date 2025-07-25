const enumsContent = [
  {
    title: 'Basic Enums',
    examples: [
      {
        title: 'Numeric enums',
        code: '// Basic numeric enum\nenum Color {\n  Red,    // 0\n  Green,  // 1\n  Blue    // 2\n}\n\n// Using the enum\nlet myColor: Color = Color.Red;\nconsole.log(myColor); // 0\nconsole.log(Color.Green); // 1\nconsole.log(Color[1]); // "Green"\n\n// Enum with custom values\nenum Status {\n  Pending = 1,\n  Approved = 2,\n  Rejected = 3\n}\n\nlet currentStatus: Status = Status.Pending;\nconsole.log(currentStatus); // 1\n\n// Enum with mixed values\nenum Direction {\n  North = "NORTH",\n  South = "SOUTH",\n  East = "EAST",\n  West = "WEST"\n}\n\nlet heading: Direction = Direction.North;\nconsole.log(heading); // "NORTH"'
      },
      {
        title: 'String enums',
        code: '// String enum (all values must be strings)\nenum UserRole {\n  Admin = "ADMIN",\n  User = "USER",\n  Guest = "GUEST"\n}\n\n// Using string enums\nfunction checkAccess(role: UserRole): string {\n  switch (role) {\n    case UserRole.Admin:\n      return "Full access granted";\n    case UserRole.User:\n      return "Standard access granted";\n    case UserRole.Guest:\n      return "Limited access granted";\n    default:\n      return "No access";\n  }\n}\n\nconsole.log(checkAccess(UserRole.Admin)); // "Full access granted"\nconsole.log(checkAccess(UserRole.Guest)); // "Limited access granted"\n\n// Enum as object keys\nenum LogLevel {\n  Error = "ERROR",\n  Warn = "WARN",\n  Info = "INFO",\n  Debug = "DEBUG"\n}\n\nconst logMessages = {\n  [LogLevel.Error]: "Something went wrong!",\n  [LogLevel.Warn]: "Warning: Check your input",\n  [LogLevel.Info]: "Information message",\n  [LogLevel.Debug]: "Debug information"\n};\n\nconsole.log(logMessages[LogLevel.Error]); // "Something went wrong!"'
      }
    ]
  },
  {
    title: 'Advanced Enum Usage',
    examples: [
      {
        title: 'Enum with computed values',
        code: '// Enum with computed values\nenum FileAccess {\n  // Constant members\n  None = 0,\n  Read = 1 << 0,    // 1\n  Write = 1 << 1,   // 2\n  ReadWrite = Read | Write, // 3\n  \n  // Computed member\n  G = "123".length  // 3\n}\n\nconsole.log(FileAccess.None); // 0\nconsole.log(FileAccess.Read); // 1\nconsole.log(FileAccess.Write); // 2\nconsole.log(FileAccess.ReadWrite); // 3\n\n// Using enums in functions\nfunction hasPermission(access: FileAccess, permission: FileAccess): boolean {\n  return (access & permission) === permission;\n}\n\nlet userAccess = FileAccess.ReadWrite;\nconsole.log(hasPermission(userAccess, FileAccess.Read)); // true\nconsole.log(hasPermission(userAccess, FileAccess.Write)); // true\nconsole.log(hasPermission(FileAccess.Read, FileAccess.Write)); // false'
      },
      {
        title: 'Enum with const assertion',
        code: '// Const enum (more efficient, inlined at compile time)\nconst enum Size {\n  Small = "S",\n  Medium = "M",\n  Large = "L",\n  ExtraLarge = "XL"\n}\n\n// Using const enum\nfunction getShirtSize(size: Size): string {\n  switch (size) {\n    case Size.Small:\n      return "Small shirt";\n    case Size.Medium:\n      return "Medium shirt";\n    case Size.Large:\n      return "Large shirt";\n    case Size.ExtraLarge:\n      return "Extra large shirt";\n    default:\n      return "Unknown size";\n  }\n}\n\nconsole.log(getShirtSize(Size.Medium)); // "Medium shirt"\n\n// Enum as union type\nenum HttpMethod {\n  GET = "GET",\n  POST = "POST",\n  PUT = "PUT",\n  DELETE = "DELETE"\n}\n\ntype ApiRequest = {\n  method: HttpMethod;\n  url: string;\n  data?: any;\n};\n\nfunction makeRequest(request: ApiRequest): void {\n  console.log("Making " + request.method + " request to " + request.url);\n}\n\nmakeRequest({\n  method: HttpMethod.GET,\n  url: "/api/users"\n}); // "Making GET request to /api/users"'
      }
    ]
  }
];

export default enumsContent; 