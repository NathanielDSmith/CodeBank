const functionsContent = [
  {
    title: 'Function Types and Signatures',
    examples: [
      {
        title: 'Typing function parameters and return values',
        explanation: "Function parameters always need type annotations — TypeScript can't infer them from how you call the function. Return types are optional (TypeScript infers them) but worth adding for public APIs since they catch bugs at the function definition rather than at the call site.",
        keyIdeas: [
          'Parameters always need annotations; return types are optional but recommended for complex functions',
          '`void` means the function doesn\'t return a meaningful value',
          '`never` means the function never returns (always throws or loops forever)',
          'Function type expressions: `(a: string) => number` — useful for callbacks and higher-order functions'
        ],
        pitfalls: [
          "Returning `undefined` explicitly is different from `void` — `void` functions can still return undefined, but callers shouldn't use the return value",
          "`never` is not the same as `void` — `never` means the function can't complete normally",
          "Annotating a function to return `any` defeats type checking for all callers"
        ],
        code: `// Basic annotations
function add(a: number, b: number): number {
  return a + b;
}

// void — return value is meaningless
function logError(message: string, code: number): void {
  console.error(\`[\${code}] \${message}\`);
  // no return needed
}

// never — function that always throws
function fail(message: string): never {
  throw new Error(message);
}

// Function type expression — annotating a callback
function transform(
  items: string[],
  mapper: (item: string, index: number) => string
): string[] {
  return items.map(mapper);
}

// Type alias for function signature
type Comparator<T> = (a: T, b: T) => number;

const byName: Comparator<{ name: string }> = (a, b) =>
  a.name.localeCompare(b.name);

// Async function — return type wraps in Promise automatically
async function fetchUser(id: string): Promise<User> {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
}`
      },
      {
        title: 'Optional, default, and rest parameters',
        explanation: "TypeScript carries over JS parameter features but adds type safety. Optional params must come after required ones. Default params imply optional and their type is inferred from the default value.",
        keyIdeas: [
          'Optional params: `name?: string` — callers can omit them, value is `string | undefined`',
          'Default params: `name = "Guest"` — TypeScript infers type from the default',
          'Rest params: `...args: string[]` — collects remaining args into a typed array',
          'Optional params and default params cannot be required — they must come last'
        ],
        pitfalls: [
          "Optional `?` and default `= value` are different — `?` means `undefined` is possible, defaults provide a fallback",
          "Rest params must be last — you can't have `...a, b`",
          "Using too many optional params is a sign you need function overloads or a config object"
        ],
        code: `// Optional parameter
function greet(name: string, title?: string): string {
  return title ? \`Hello \${title} \${name}\` : \`Hello \${name}\`;
}

greet('Alice');          // OK — title is undefined
greet('Bob', 'Dr.');     // OK

// Default parameter
function createUser(name: string, role: 'user' | 'admin' = 'user') {
  return { name, role };
}

createUser('Alice');           // role is 'user'
createUser('Root', 'admin');   // role is 'admin'

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3, 4, 5); // 15

// Config object pattern — preferred over many optional params
interface CreatePostOptions {
  title: string;
  content: string;
  published?: boolean;
  tags?: string[];
  authorId?: string;
}

function createPost(options: CreatePostOptions) {
  const { title, content, published = false, tags = [] } = options;
  // ...
}`
      }
    ]
  },
  {
    title: 'Function Overloads and Higher-Order Functions',
    examples: [
      {
        title: 'Function overloads — different signatures for different inputs',
        explanation: "Overloads let you define multiple call signatures for a function that behaves differently based on the input type. The implementation signature handles all cases internally but isn't visible to callers.",
        keyIdeas: [
          'List overload signatures first, then the implementation signature',
          'The implementation signature must be compatible with all overloads',
          'TypeScript picks the first matching overload — order matters',
          'Overloads are often better than wide union returns when different inputs give different output types'
        ],
        pitfalls: [
          "The implementation signature is hidden from callers — they only see the overloads",
          "Too many overloads signal the function is doing too much — consider splitting it",
          "Overloads don't work with arrow functions — use named function declarations"
        ],
        code: `// Without overloads — callers get string | number (imprecise)
function format(val: string | number): string | number {
  if (typeof val === 'string') return val.toUpperCase();
  return val * 100;
}

// With overloads — callers get the exact return type
function format(val: string): string;
function format(val: number): number;
function format(val: string | number): string | number {
  if (typeof val === 'string') return val.toUpperCase();
  return val * 100;
}

const a = format('hello');  // type: string
const b = format(5);        // type: number

// Real-world overload: DOM querySelector
function querySelector(selector: 'input'): HTMLInputElement | null;
function querySelector(selector: 'button'): HTMLButtonElement | null;
function querySelector(selector: string): HTMLElement | null;
function querySelector(selector: string): HTMLElement | null {
  return document.querySelector(selector);
}`
      },
      {
        title: 'Higher-order functions and typed callbacks',
        explanation: "Higher-order functions take or return functions. TypeScript lets you type these precisely so callers know exactly what callback shape is expected. This is common in React (event handlers, useEffect, array methods).",
        keyIdeas: [
          'Type the callback parameter with a function type expression',
          'Generic HOFs preserve the callback\'s type all the way through',
          'Inlined callback types are fine for simple cases; name them for complex shapes',
          'The `Parameters<F>` and `ReturnType<F>` utility types extract from existing function types'
        ],
        pitfalls: [
          "Typing callbacks as `Function` is as bad as `any` — use `() => void` or a specific signature",
          "Callback return type `void` means the caller ignores the return — not that the callback can't return a value",
          "Arrow function callbacks infer their param types from context — no annotation needed inside `.map()`, `.filter()`, etc."
        ],
        code: `// Typed callback
function withLogging<T>(
  fn: (...args: unknown[]) => T,
  label: string
): (...args: unknown[]) => T {
  return (...args) => {
    console.log(\`[\${label}] called\`);
    const result = fn(...args);
    console.log(\`[\${label}] returned\`, result);
    return result;
  };
}

// Generic HOF that preserves types
function memoize<Args extends unknown[], R>(
  fn: (...args: Args) => R
): (...args: Args) => R {
  const cache = new Map<string, R>();
  return (...args: Args): R => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key)!;
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const expensiveCalc = memoize((x: number, y: number) => x * y);
expensiveCalc(4, 5); // computed
expensiveCalc(4, 5); // cached

// Utility types for function types
type AnyFn = (...args: unknown[]) => unknown;
type Params = Parameters<typeof fetch>; // [input: RequestInfo, init?: RequestInit]
type RetType = ReturnType<typeof fetch>; // Promise<Response>`
      }
    ]
  }
];

export default functionsContent;
