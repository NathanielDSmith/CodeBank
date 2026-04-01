const enumsContent = [
  {
    title: 'Enums vs Literal Unions',
    examples: [
      {
        title: 'String enums — when to use them',
        explanation: "Enums are one of TypeScript's few features that generate runtime code. String enums are the most useful — they're readable in logs and debuggers. But for many use cases, a literal union type (`'a' | 'b'`) is cleaner and generates no runtime code.",
        keyIdeas: [
          'String enums generate an object at runtime — the values are real strings',
          'Enum members are accessed like `Direction.North` — you can\'t pass a raw string',
          'String enums are great when values need to be readable in logs/APIs',
          'Const enums are inlined at compile time and produce no runtime object'
        ],
        pitfalls: [
          "Numeric enums have a reverse mapping (value → name) which can be surprising in `Object.values()`",
          "String enums are nominal — `'North'` is not assignable to `Direction.North` without a cast",
          "Const enums can't be used if you need to iterate over values at runtime"
        ],
        code: `// String enum — generates a runtime object
enum Direction {
  North = 'NORTH',
  South = 'SOUTH',
  East = 'EAST',
  West = 'WEST'
}

function move(dir: Direction) {
  console.log(dir); // logs 'NORTH', 'SOUTH', etc.
}

move(Direction.North); // OK
// move('NORTH');         // Error! string is not assignable to Direction

// Numeric enum — avoid unless you need bit flags
enum Permission {
  None = 0,
  Read = 1,
  Write = 2,
  Admin = 4
}

// Const enum — inlined, no runtime object
const enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Banned = 'banned'
}

// Literal union — cleaner alternative for simple cases
type Direction2 = 'north' | 'south' | 'east' | 'west';
// No runtime code, works with string literals directly`
      },
      {
        title: 'When to prefer literal unions over enums',
        explanation: "For most cases, a literal union type is a better choice than an enum. It produces no runtime code, works naturally with string values, and is easier to use with API responses. Use enums when you need to iterate over values, when values need to be opaque, or when using const enums for performance.",
        keyIdeas: [
          'Literal unions work directly with JSON API values — no mapping needed',
          'You can derive types from literal unions with `typeof` and `keyof`',
          '`as const` objects give you the best of both: iteration + literal types',
          'If your team is from Java/C# backgrounds, enums may be more comfortable'
        ],
        pitfalls: [
          "Enums don't interop well with string values from APIs — you need to validate and cast",
          "Adding to an enum is a breaking change if callers do exhaustive checks",
          "Enums are not tree-shakeable — the runtime object is always included in the bundle"
        ],
        code: `// Literal union — simple, no runtime cost
type HttpStatus = 200 | 201 | 400 | 401 | 403 | 404 | 500;
type ContentType = 'application/json' | 'text/html' | 'multipart/form-data';

// as const object — iteration + literal types
const ROLES = {
  User: 'user',
  Admin: 'admin',
  Moderator: 'moderator'
} as const;

type Role = typeof ROLES[keyof typeof ROLES]; // 'user' | 'admin' | 'moderator'

// Can iterate over values
const allRoles = Object.values(ROLES); // ['user', 'admin', 'moderator']

// Works naturally with API data
type ApiUser = { name: string; role: Role };
const user: ApiUser = { name: 'Alice', role: 'admin' }; // no cast needed

// Bit flags — numeric enum actually shines here
enum FilePermission {
  None    = 0,
  Read    = 1 << 0, // 1
  Write   = 1 << 1, // 2
  Execute = 1 << 2  // 4
}

const perms = FilePermission.Read | FilePermission.Write; // 3
const canRead = (perms & FilePermission.Read) !== 0;      // true`
      }
    ]
  }
];

export default enumsContent;
