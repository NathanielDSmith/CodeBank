const utilityContent = [
  {
    title: 'Core Utility Types',
    examples: [
      {
        title: 'Partial, Required, Readonly, and Pick',
        explanation: "TypeScript's built-in utility types transform existing types without rewriting them. They're generic wrappers that let you derive variations — optional versions, read-only versions, or subsets — from a single source of truth.",
        keyIdeas: [
          '`Partial<T>` — makes all properties optional (great for update/patch operations)',
          '`Required<T>` — makes all properties required (opposite of Partial)',
          '`Readonly<T>` — makes all properties readonly',
          '`Pick<T, K>` — creates a type with only the specified keys from T',
          '`Omit<T, K>` — creates a type with all keys except the specified ones'
        ],
        pitfalls: [
          "`Partial<T>` is shallow — nested objects are not made partial",
          "`Readonly<T>` is shallow too — nested objects can still be mutated",
          "Overusing `Partial` for function params hides which fields are actually required"
        ],
        code: `interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  role: 'user' | 'admin';
}

// Partial — all fields optional (common for PATCH/update)
type UpdateUser = Partial<User>;
function updateUser(id: string, changes: UpdateUser) {
  // only send the changed fields
}

// Required — all fields mandatory
type CompleteUser = Required<User>; // same as User when User has no optional fields

// Readonly — immutable
type ImmutableUser = Readonly<User>;
const user: ImmutableUser = { id: '1', name: 'Alice', email: 'a@b.com', age: 30, role: 'user' };
// user.name = 'Bob'; // Error!

// Pick — select specific fields
type UserPreview = Pick<User, 'id' | 'name'>;
// { id: string; name: string }

// Omit — exclude specific fields
type UserWithoutId = Omit<User, 'id'>;
type CreateUser = Omit<User, 'id' | 'role'>; // for creation forms

// Combining utility types
type PatchUser = Partial<Omit<User, 'id'>>; // update any field except id`
      },
      {
        title: 'Record, Extract, Exclude, and NonNullable',
        explanation: "These utility types work with union types and key-value mappings. `Record` builds an object type from a union of keys. `Extract` and `Exclude` filter union members. `NonNullable` strips `null` and `undefined`.",
        keyIdeas: [
          '`Record<K, V>` — creates `{ [key in K]: V }` — cleaner than an index signature when keys are known',
          '`Extract<T, U>` — keeps only union members assignable to U',
          '`Exclude<T, U>` — removes union members assignable to U',
          '`NonNullable<T>` — removes `null` and `undefined` from T'
        ],
        pitfalls: [
          "`Record<string, V>` accepts any string key — use a literal union if keys are known",
          "`Extract<T, U>` can return `never` if no members match — check for this in conditional logic",
          "NonNullable doesn't deep-strip nulls in nested objects"
        ],
        code: `// Record — typed key-value map
type Role = 'user' | 'admin' | 'moderator';
type RolePermissions = Record<Role, string[]>;

const permissions: RolePermissions = {
  user: ['read'],
  admin: ['read', 'write', 'delete'],
  moderator: ['read', 'write']
};

// Record with arbitrary string keys
type Headers = Record<string, string>;

// Extract — filter union to matching members
type NumberOrString = string | number | boolean | null;
type JustPrimitives = Extract<NumberOrString, string | number>; // string | number

// Exclude — remove matching members from union
type WithoutNull = Exclude<NumberOrString, null | boolean>; // string | number

// NonNullable — strip null and undefined
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>; // string

// Practical: type-safe event map
type EventMap = {
  click: MouseEvent;
  keydown: KeyboardEvent;
  load: Event;
};

type EventNames = keyof EventMap; // 'click' | 'keydown' | 'load'
type ClickOrKey = Extract<EventNames, 'click' | 'keydown'>; // 'click' | 'keydown'`
      }
    ]
  },
  {
    title: 'ReturnType, Parameters, and Awaited',
    examples: [
      {
        title: 'Inferring types from functions and promises',
        explanation: "These utility types let you extract types from existing code rather than re-declaring them. If a function's signature changes, derived types update automatically — a single source of truth.",
        keyIdeas: [
          '`ReturnType<F>` — extracts the return type of a function',
          '`Parameters<F>` — extracts the parameter tuple of a function',
          '`Awaited<T>` — unwraps Promise types (TypeScript 4.5+)',
          '`InstanceType<C>` — extracts the instance type of a class constructor'
        ],
        pitfalls: [
          "These work on function types, not function values — use `typeof fn` first",
          "`ReturnType` on an overloaded function returns the last overload's return type",
          "`Awaited` is recursive — it unwraps `Promise<Promise<string>>` to `string`"
        ],
        code: `async function fetchUsers(): Promise<User[]> {
  return fetch('/api/users').then(r => r.json());
}

// Infer types without re-declaring
type Users = Awaited<ReturnType<typeof fetchUsers>>; // User[]
type FetchParams = Parameters<typeof fetch>; // [input: RequestInfo, init?: RequestInit]

// Useful for wrappers that need to match a function's signature
function withAuth<F extends (...args: unknown[]) => unknown>(
  fn: F
): (...args: Parameters<F>) => ReturnType<F> {
  return (...args: Parameters<F>) => {
    if (!isAuthenticated()) throw new Error('Unauthorized');
    return fn(...args) as ReturnType<F>;
  };
}

// InstanceType — get class instance type
class DatabaseConnection {
  query(sql: string) { return []; }
}

type DBConn = InstanceType<typeof DatabaseConnection>; // DatabaseConnection

// Derive config type from validator function
function validateConfig(config: { host: string; port: number; ssl: boolean }) {
  return config;
}

type AppConfig = Parameters<typeof validateConfig>[0];
// { host: string; port: number; ssl: boolean }`
      }
    ]
  }
];

export default utilityContent;
