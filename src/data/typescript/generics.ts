const genericsContent = [
  {
    title: 'Generic Functions and Types',
    examples: [
      {
        title: 'What generics are and why you need them',
        explanation: "Generics let you write one function or type that works across many types while keeping full type safety. Without them you'd write `processString`, `processNumber`, `processUser` — or use `any` and lose safety. Generics give you the abstraction without the loss.",
        keyIdeas: [
          'The type parameter `<T>` is a placeholder — TypeScript fills it in at the call site',
          'TypeScript usually infers the type argument — you rarely need to write `fn<string>()`',
          'Multiple type params: `<T, U>` for functions that relate two types',
          'Generics work on functions, types, interfaces, and classes'
        ],
        pitfalls: [
          "Using `<T>` when you mean `any` — if T isn't constrained and you don't use it, it's probably just `any`",
          "Overly generic functions are hard to understand — constrain when you know what T needs",
          "TypeScript can't infer generics from return types alone — it needs the input to infer from"
        ],
        code: `// Without generics — repetitive or uses any
function firstItem(arr: any[]): any {
  return arr[0];
}

// With generics — type-safe and reusable
function firstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}

const first = firstItem([1, 2, 3]);   // TypeScript infers: number | undefined
const name = firstItem(['a', 'b']);   // TypeScript infers: string | undefined

// Multiple type parameters
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

const p = pair('hello', 42); // [string, number]

// Generic type alias
type Maybe<T> = T | null | undefined;
type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

// Generic interface
interface Repository<T> {
  findById(id: string): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}`
      },
      {
        title: 'Generic constraints — limiting what T can be',
        explanation: "Constraints (`extends`) limit what types can be passed as T. Without constraints, TypeScript assumes T could be anything — so you can't access properties on it. Constraints tell TypeScript 'T is at least this shape'.",
        keyIdeas: [
          '`T extends SomeType` means T must be assignable to SomeType',
          'Constraint can be a primitive, interface, or another generic',
          '`keyof T` gets the union of keys of T — useful for safe property access',
          '`T extends keyof U` lets you write functions that access properties by name'
        ],
        pitfalls: [
          "`T extends object` is too wide — it accepts arrays and functions too",
          "Constraining to `{ length: number }` is fine but constraining to `Array<any>` loses type info",
          "Complex nested constraints become hard to read — extract to a named type"
        ],
        code: `// Constraint: T must have a length property
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

longest('hello', 'hi');    // string
longest([1, 2], [3]);      // number[]
// longest(5, 10);          // Error! number has no length

// keyof constraint — safe property access
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: 'Alice', age: 30, email: 'a@b.com' };
const name = getProperty(user, 'name');   // string
const age = getProperty(user, 'age');     // number
// getProperty(user, 'phone');            // Error! not in keyof user

// Real-world: generic API wrapper
async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
  return response.json() as Promise<T>;
}

const users = await fetchJson<User[]>('/api/users');`
      }
    ]
  },
  {
    title: 'Generic Classes and Mapped Types',
    examples: [
      {
        title: 'Generic classes',
        explanation: "Classes can be generic, which is essential for data structures and any container that should work across types while remaining type-safe.",
        keyIdeas: [
          'The type parameter goes after the class name: `class Stack<T>`',
          'All methods in the class can use T without redeclaring it',
          'TypeScript infers T from constructor arguments when possible',
          'Static members cannot use the class type parameter'
        ],
        pitfalls: [
          "Static members can't use the class type parameter — they're on the class itself, not instances",
          "Generic classes don't carry runtime type information — you can't do `new T()` inside the class"
        ],
        code: `class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number { return this.items.length; }
  isEmpty(): boolean { return this.items.length === 0; }
}

const numStack = new Stack<number>();
numStack.push(1);
numStack.push(2);
const top = numStack.pop(); // number | undefined

// Generic class implementing generic interface
interface Cache<T> {
  get(key: string): T | undefined;
  set(key: string, value: T): void;
  clear(): void;
}

class MemoryCache<T> implements Cache<T> {
  private store = new Map<string, T>();

  get(key: string): T | undefined { return this.store.get(key); }
  set(key: string, value: T): void { this.store.set(key, value); }
  clear(): void { this.store.clear(); }
}`
      },
      {
        title: 'Mapped types — transforming object types',
        explanation: "Mapped types let you create a new type by transforming each property of an existing type. They're how TypeScript's built-in utility types (`Partial`, `Readonly`, `Record`) are implemented.",
        keyIdeas: [
          '`{ [K in keyof T]: ... }` iterates over each key of T',
          'You can change the value type, make keys optional, or make them readonly',
          '`-?` removes optional; `+?` adds it; default is `+?`',
          'Mapped types are the basis of `Partial<T>`, `Required<T>`, `Readonly<T>`, `Record<K, V>`'
        ],
        pitfalls: [
          "Mapped types are purely structural — they can make complex types that are hard to debug",
          "Adding `-readonly` removes readonly modifiers — use carefully",
          "Mapped types on union types distribute — this is usually what you want but can surprise"
        ],
        code: `// Building your own Partial
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

// Building your own Readonly
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// Remap value types
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type StringValues<T> = {
  [K in keyof T]: string;
};

// Record — create an object type from a union of keys
type Scores = Record<'math' | 'english' | 'science', number>;
const grades: Scores = { math: 90, english: 85, science: 92 };

// Conditional mapped type — pick only specific property types
type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type User = { id: number; name: string; email: string; age: number };
type UserStringKeys = StringKeys<User>; // 'name' | 'email'`
      }
    ]
  }
];

export default genericsContent;
