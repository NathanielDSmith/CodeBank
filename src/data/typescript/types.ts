const typesContent = [
  {
    title: 'Union and Intersection Types',
    examples: [
      {
        title: 'Union types — one of several types',
        explanation: "Union types (`A | B`) say a value can be one of several types. They're one of TypeScript's most powerful features — instead of `any`, you model exactly which values are valid. Use type guards to narrow unions before using them.",
        keyIdeas: [
          'Union: `string | number` means the value is either a string or a number',
          'You can only access properties that exist on ALL members of the union without narrowing',
          'Discriminated unions add a literal type field to tell members apart',
          'TypeScript narrows unions automatically inside `if`/`typeof`/`in` checks'
        ],
        pitfalls: [
          "Forgetting to handle all union members — TypeScript warns with `never` in exhaustive checks",
          "Using unions of object types without a discriminant makes narrowing hard",
          "Wide string unions (`string | 'admin'`) still accept any string — the literal gets absorbed"
        ],
        code: `// Simple union
type StringOrNumber = string | number;

function formatId(id: StringOrNumber): string {
  if (typeof id === 'string') {
    return id.toUpperCase(); // TypeScript knows: string
  }
  return id.toFixed(0); // TypeScript knows: number
}

// Discriminated union — the recommended pattern for variants
type LoadingState = { status: 'loading' };
type SuccessState = { status: 'success'; data: User[] };
type ErrorState = { status: 'error'; message: string };

type FetchState = LoadingState | SuccessState | ErrorState;

function render(state: FetchState) {
  switch (state.status) {
    case 'loading': return 'Loading...';
    case 'success': return \`\${state.data.length} users\`; // data is available
    case 'error': return state.message;                    // message is available
  }
}

// Nullable union — common pattern
type MaybeUser = User | null;

function getDisplayName(user: MaybeUser): string {
  if (!user) return 'Guest';
  return user.name; // narrowed to User
}`
      },
      {
        title: 'Intersection types — combining shapes',
        explanation: "Intersection types (`A & B`) merge multiple types into one. The result must satisfy all of them. Commonly used to mix in extra properties or combine utility types.",
        keyIdeas: [
          'Intersection: `A & B` means the value must have ALL properties of both A and B',
          'Useful for composing types from smaller pieces',
          'Primitive intersections often result in `never` (`string & number` is impossible)',
          'Different from `extends` on interfaces — intersections work on any type alias'
        ],
        pitfalls: [
          "Intersecting two types with the same property but different types gives `never` for that property",
          "Overusing intersections leads to complex types that are hard to read",
          "Intersection doesn't deep merge — it combines at the top level only"
        ],
        code: `type Named = { name: string };
type Aged = { age: number };
type Timestamped = { createdAt: Date; updatedAt: Date };

// Combine multiple shapes
type Person = Named & Aged;

const person: Person = { name: 'Alice', age: 30 }; // must have both

// Common pattern: extending with extra context
type WithPagination<T> = T & {
  page: number;
  pageSize: number;
  total: number;
};

type UserList = WithPagination<{ users: User[] }>;

const result: UserList = {
  users: [],
  page: 1,
  pageSize: 20,
  total: 0
};`
      }
    ]
  },
  {
    title: 'Literal Types and Type Narrowing',
    examples: [
      {
        title: 'Literal types — exact values as types',
        explanation: "Literal types let a type be an exact value, not just a category. `'admin'` is a string literal type — only the string 'admin' satisfies it. Combined with unions they model finite sets of valid values, like an enum without the runtime overhead.",
        keyIdeas: [
          "String, number, and boolean literals can be types: `'left' | 'right'`, `1 | 2 | 3`",
          "`as const` turns an object/array literal into a deeply readonly literal type",
          "Template literal types: `` `on${string}` `` matches 'onClick', 'onChange', etc.",
          "Literal widening: `let x = 'hello'` widens to `string`, `const x = 'hello'` stays `'hello'`"
        ],
        pitfalls: [
          "`let` always widens literals — use `const` or `as const` when you need literal inference",
          "Passing a `let` variable where a literal type is expected fails — TypeScript sees `string`, not `'hello'`",
          "Over-granular literal unions become hard to maintain — consider enums for large sets"
        ],
        code: `// String literal union — model finite valid values
type Direction = 'north' | 'south' | 'east' | 'west';
type Theme = 'light' | 'dark' | 'system';
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

function move(direction: Direction) { /* ... */ }
move('north'); // OK
// move('up'); // Error!

// as const — preserve literal types in objects
const ROUTES = {
  home: '/',
  about: '/about',
  users: '/users'
} as const;

type Route = typeof ROUTES[keyof typeof ROUTES]; // '/' | '/about' | '/users'

// Template literal types
type EventName = \`on\${Capitalize<string>}\`;
type CSSProperty = \`--\${string}\`;

// Literal widening — the gotcha
const a = 'hello';      // type: 'hello' (literal)
let b = 'hello';        // type: string (widened)

function acceptLiteral(val: 'hello') {}
acceptLiteral(a); // OK
// acceptLiteral(b); // Error — b is string, not 'hello'`
      },
      {
        title: 'Type narrowing — refining types in conditionals',
        explanation: "Narrowing is how TypeScript refines a broad type to a specific one inside a conditional block. It's automatic — you just write normal JS control flow and TypeScript tracks what's possible in each branch.",
        keyIdeas: [
          '`typeof` narrows primitives: `typeof x === "string"` makes x a string in that branch',
          '`instanceof` narrows class instances',
          '`in` narrows object types by property presence',
          'Type predicates (`x is Type`) let you write custom narrowing functions'
        ],
        pitfalls: [
          "Narrowing doesn't persist across async boundaries — re-check after `await`",
          "TypeScript can't narrow through indirect variable references — assign to a `const` first",
          "Truthiness narrows away `null`/`undefined`/`0`/`''` — can be surprising with `0` being valid"
        ],
        code: `type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number }
  | { kind: 'rectangle'; width: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    case 'rectangle':
      return shape.width * shape.height;
  }
}

// typeof narrowing
function stringify(val: string | number | boolean): string {
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return val.toFixed(2);
  return String(val);
}

// Type predicate — custom narrowing function
function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj
  );
}

// Exhaustive check — TypeScript errors if you add to the union without handling it
function assertNever(x: never): never {
  throw new Error(\`Unhandled case: \${x}\`);
}`
      }
    ]
  }
];

export default typesContent;
