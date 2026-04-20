const basicsContent = [
  {
    title: 'Type Annotations and Inference',
    examples: [
      {
        title: 'When to annotate vs when to let TypeScript infer',
        explanation: "TypeScript can infer types from values, so you don't always need to annotate. The rule: annotate when TypeScript can't infer (function params, uninitialized variables), let it infer when it can. Over-annotating is noise.",
        keyIdeas: [
          'TypeScript infers the type of any initialized variable',
          'Function parameters always need annotations — TypeScript cannot infer them',
          'Return types are optional but useful for catching bugs early',
          'Prefer inference for locals, prefer annotations for public APIs'
        ],
        pitfalls: [
          "Annotating every variable like `let x: string = 'hello'` is redundant and adds visual noise",
          "Using `any` to silence errors — it turns off type checking entirely",
          "Declaring a variable without a value and no annotation gives it type `any` implicitly"
        ],
        code: `// Let TypeScript infer — these annotations are redundant
let name: string = 'Alice'; // unnecessary
let count: number = 0;       // unnecessary

// This is cleaner:
let name = 'Alice';  // TypeScript infers: string
let count = 0;       // TypeScript infers: number
let active = true;   // TypeScript infers: boolean
let ids = [1, 2, 3]; // TypeScript infers: number[]

// Annotate when TypeScript can't infer
let userId: string;          // no value yet — needs annotation
let response: ApiResponse;   // complex type — annotation clarifies intent

// Function params always need annotation
function greet(name: string, age: number): string {
  return \`Hello \${name}, you're \${age}\`;
}

// Return type annotation catches bugs at the function boundary
function parseId(raw: string): number {
  return parseInt(raw, 10); // TypeScript verifies this returns number
}`
      },
      {
        title: 'Primitive types and the `any` / `unknown` distinction',
        explanation: "`any` disables type checking. `unknown` forces you to check before using. In real code, `unknown` is almost always the right choice when you don't know the type — it keeps safety intact.",
        keyIdeas: [
          '`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` are primitives',
          '`any` is an escape hatch — once a value is `any`, TypeScript stops checking it entirely',
          '`unknown` is the type-safe version of `any` — you must narrow it before use',
          '`never` represents a value that can never occur (exhaustive checks, functions that always throw)'
        ],
        pitfalls: [
          "`any` spreads — if you assign an `any` variable to another, that one becomes `any` too",
          "Using `any` for third-party API responses means type errors stay silent until runtime",
          "`null` and `undefined` are only assignable to their own types when `strictNullChecks` is on"
        ],
        code: `// Primitives
let name: string = 'Alice';
let age: number = 30;
let active: boolean = true;
let nothing: null = null;
let undef: undefined = undefined;

// any — type checking off, avoid this
let data: any = fetchData();
data.foo.bar.baz; // no error — but will crash at runtime

// unknown — type checking on, must narrow first
async function loadUser(): Promise<unknown> {
  return fetch('/api/user').then(r => r.json());
}

const raw = await loadUser();
// raw.name; // Error! Can't use unknown without narrowing

if (typeof raw === 'object' && raw !== null && 'name' in raw) {
  console.log((raw as { name: string }).name); // safe
}

// never — value that can't exist
function assertNever(value: never): never {
  throw new Error(\`Unhandled case: \${value}\`);
}`
      }
    ]
  },
  {
    title: 'Arrays, Tuples, and Objects',
    examples: [
      {
        title: 'Typing arrays and tuples',
        explanation: "Arrays hold many values of one type. Tuples hold a fixed number of values where each position has a specific type — great for returning multiple values from a function without creating a new type.",
        keyIdeas: [
          'Array types: `string[]` or `Array<string>` — both are equivalent',
          'Tuples have fixed length and per-position types: `[string, number]`',
          'Tuple labels make intent clearer: `[name: string, age: number]`',
          'React `useState` returns a tuple: `[value, setter]`'
        ],
        pitfalls: [
          'Tuples are structurally typed — TypeScript won\'t stop you from passing a plain array with matching types',
          'Spreading tuples into functions loses the tuple length guarantee',
          '`array.push()` on a tuple is allowed by default — use `readonly` to prevent it'
        ],
        code: `// Arrays
const names: string[] = ['Alice', 'Bob', 'Carol'];
const ids: Array<number> = [1, 2, 3];
const matrix: number[][] = [[1, 2], [3, 4]];

// Tuples — fixed positions, specific types
type Coordinate = [x: number, y: number];
const point: Coordinate = [10, 20];

// Destructuring a tuple
const [x, y] = point;

// Common pattern: returning multiple values
function minMax(nums: number[]): [min: number, max: number] {
  return [Math.min(...nums), Math.max(...nums)];
}

const [min, max] = minMax([3, 1, 4, 1, 5, 9]);

// Readonly tuple — prevents mutation
const config: readonly [string, number] = ['localhost', 3000];
// config[0] = 'prod'; // Error!

// Optional tuple elements (must be at end)
type WithOptional = [string, number, boolean?];`
      },
      {
        title: 'Object types and inline type shapes',
        explanation: "TypeScript lets you define object shapes inline or with a named type/interface. Inline is fine for one-off shapes; named types are better for reuse and self-documentation.",
        keyIdeas: [
          'Object type syntax: `{ key: type; key2: type }` with semicolons inside',
          'Optional properties use `?` — they may be absent or `undefined`',
          '`readonly` properties can\'t be reassigned after creation',
          'Index signatures allow arbitrary keys: `{ [key: string]: number }`'
        ],
        pitfalls: [
          'Optional (`?`) is not the same as `| undefined` — optional means the key can be missing entirely',
          'Excess property checks only happen on object literals, not on variables assigned from other types',
          'Index signatures widen the type — `{ [k: string]: string }` allows any string key, not just the ones you defined'
        ],
        code: `// Inline object type
function displayUser(user: { name: string; age: number; email?: string }) {
  console.log(user.name);
  if (user.email) console.log(user.email); // narrowed: string (not undefined)
}

// Named type (reusable)
type User = {
  readonly id: number;
  name: string;
  age: number;
  email?: string;
};

const user: User = { id: 1, name: 'Alice', age: 30 };
// user.id = 2; // Error — readonly

// Index signature for dynamic keys
type Scores = { [subject: string]: number };
const grades: Scores = { math: 90, english: 85, science: 92 };

// Nested object type
type Address = {
  street: string;
  city: string;
  country: string;
};

type UserWithAddress = {
  name: string;
  address: Address;
};`
      }
    ]
  }
];

export default basicsContent;
