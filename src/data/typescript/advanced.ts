const advancedContent = [
  {
    title: 'Conditional Types and Infer',
    examples: [
      {
        title: 'Conditional types — type-level if/else',
        explanation: "Conditional types (`T extends U ? X : Y`) are the type system's version of a ternary expression. They enable type-level logic: 'if T is a string, return X, otherwise return Y'. This is how many built-in utility types are implemented.",
        keyIdeas: [
          'Syntax: `T extends U ? TrueType : FalseType`',
          'Conditional types distribute over union types — `(A | B) extends U` becomes `(A extends U) | (B extends U)`',
          '`infer` extracts a type from within a conditional check',
          'Naked type parameters distribute; wrapped ones don\'t'
        ],
        pitfalls: [
          "Conditional types can make error messages cryptic — name intermediate types",
          "Distribution over unions can be surprising — wrap in a tuple `[T]` to prevent it",
          "Deep nesting of conditional types is very hard to read and debug"
        ],
        code: `// Basic conditional type
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
type C = IsString<string | number>; // boolean (distributes: true | false)

// Prevent distribution with tuple wrapping
type IsStringStrict<T> = [T] extends [string] ? true : false;
type D = IsStringStrict<string | number>; // false (evaluated as a whole)

// infer — extract a type from within
type UnpackArray<T> = T extends Array<infer Item> ? Item : T;
type UnpackPromise<T> = T extends Promise<infer Value> ? Value : T;

type StringItem = UnpackArray<string[]>;   // string
type NumberItem = UnpackArray<number[]>;   // number
type NotArray   = UnpackArray<string>;     // string (passthrough)

type Resolved = UnpackPromise<Promise<User>>; // User

// Deep infer — first param of a function
type FirstParam<F> = F extends (first: infer P, ...rest: unknown[]) => unknown
  ? P
  : never;

type P = FirstParam<(name: string, age: number) => void>; // string`
      },
      {
        title: 'Template literal types and string manipulation',
        explanation: "TypeScript 4.1+ supports template literal types — string types built from other string types. Combined with utility types like `Capitalize`, `Uppercase`, etc., you can type event names, CSS properties, and API routes precisely.",
        keyIdeas: [
          'Template literal: `` `prefix_${string}` `` matches any string starting with "prefix_"',
          'Works with literal unions — each combination is generated',
          'Intrinsic types: `Uppercase<S>`, `Lowercase<S>`, `Capitalize<S>`, `Uncapitalize<S>`',
          'Useful for typing event listener names, CSS variables, API route patterns'
        ],
        pitfalls: [
          "Large literal union combinations produce huge types — can slow down the compiler",
          "Template literal types are purely structural — no runtime regex check happens",
          "Using `string` inside a template still matches any string, not a specific pattern"
        ],
        code: `// Basic template literal
type Greeting = \`Hello, \${string}\`;
const g: Greeting = 'Hello, World'; // OK
// const bad: Greeting = 'Hi there'; // Error

// Combining literal unions — generates all combinations
type Axis = 'x' | 'y' | 'z';
type Transform = 'translate' | 'rotate' | 'scale';
type CSSTransform = \`\${Transform}\${Capitalize<Axis>}\`;
// 'translateX' | 'translateY' | 'translateZ' | 'rotateX' | ...

// Event naming pattern
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<'click'>;  // 'onClick'
type ChangeEvent = EventName<'change'>; // 'onChange'

// Getter/setter type generation
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

type UserGetters = Getters<{ name: string; age: number }>;
// { getName: () => string; getAge: () => number }

// CSS custom property type
type CSSVar = \`--\${string}\`;
function setCSSVar(name: CSSVar, value: string) {
  document.documentElement.style.setProperty(name, value);
}

setCSSVar('--primary-color', '#3b82f6'); // OK
// setCSSVar('primary-color', '#333');   // Error!`
      }
    ]
  },
  {
    title: 'Declaration Merging and Module Augmentation',
    examples: [
      {
        title: 'Extending third-party types with module augmentation',
        explanation: "When a library's types are wrong or incomplete, you can extend them without modifying `node_modules`. Module augmentation lets you add to existing type declarations by re-opening the module's interface.",
        keyIdeas: [
          'Interfaces can be re-declared to merge additional properties',
          'Module augmentation uses `declare module "package-name"` to extend types',
          'Useful for adding types to `express.Request`, `window`, `process.env`',
          'Must be in a file that is a module (has at least one `import` or `export`)'
        ],
        pitfalls: [
          "Augmentation is global — don't put it in reusable library code",
          "You can only add to interfaces, not replace or remove existing properties",
          "Forgetting `export {}` in a pure declaration file means augmentation won't apply"
        ],
        code: `// Extending Express Request with custom properties
import 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: AuthenticatedUser;
    requestId: string;
  }
}

// Now req.user and req.requestId are typed in all route handlers

// Extending the Window object
declare global {
  interface Window {
    analytics: AnalyticsInstance;
    __APP_CONFIG__: { apiUrl: string; version: string };
  }
}

// Typing process.env variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      API_KEY: string;
      NODE_ENV: 'development' | 'production' | 'test';
      PORT?: string;
    }
  }
}

// Now process.env.DATABASE_URL is string (not string | undefined)
const url: string = process.env.DATABASE_URL;`
      }
    ]
  }
];

export default advancedContent;
