const bestPracticesContent = [
  {
    title: 'Strict Mode and tsconfig',
    examples: [
      {
        title: 'Essential tsconfig options and what they do',
        explanation: "TypeScript's default config is permissive to ease migration from JS. For new projects, enable `strict` mode — it turns on a group of checks that catch real bugs. Understanding what each check does helps you make intentional tradeoffs.",
        keyIdeas: [
          '`strict: true` enables: `strictNullChecks`, `noImplicitAny`, `strictFunctionTypes`, `strictPropertyInitialization`, and more',
          '`noUncheckedIndexedAccess` makes array/object indexing return `T | undefined` — catches off-by-one bugs',
          '`exactOptionalPropertyTypes` makes `{ x?: string }` not accept `{ x: undefined }` explicitly',
          '`noImplicitReturns` ensures all code paths return a value'
        ],
        pitfalls: [
          "Enabling strict on a large existing codebase is painful — enable checks incrementally",
          "Some checks like `noUncheckedIndexedAccess` require a lot of null checks for idiomatic code",
          "Different `module` and `target` settings matter for what JavaScript gets emitted"
        ],
        code: `// tsconfig.json — recommended for new projects
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],

    // Type safety
    "strict": true,                     // enables all strict checks
    "noUncheckedIndexedAccess": true,   // array[0] returns T | undefined
    "exactOptionalPropertyTypes": true, // x?: string ≠ x: string | undefined
    "noImplicitReturns": true,          // all code paths must return
    "noFallthroughCasesInSwitch": true, // switch cases must break

    // Code quality
    "noUnusedLocals": true,             // unused local vars are errors
    "noUnusedParameters": true,         // unused params are errors

    // Build
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,                // emit .d.ts files
    "sourceMap": true,

    // Interop
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`
      },
      {
        title: 'Avoiding common TypeScript anti-patterns',
        explanation: "TypeScript is easy to misuse in ways that look safe but aren't. The most common mistakes: overusing `any`, over-casting with `as`, and ignoring the type checker with `!`. Each of these bypasses the safety that TypeScript provides.",
        keyIdeas: [
          'Prefer `unknown` over `any` — it forces you to check before using',
          'Use `as` sparingly — it\'s an assertion, not a conversion. If it\'s wrong, it crashes at runtime',
          '`!` (non-null assertion) should only be used when you\'re certain the value exists',
          'Type guards and `zod`/`io-ts` are better than `as` for runtime validation'
        ],
        pitfalls: [
          "`as unknown as X` is a double cast — almost always a sign you're doing something wrong",
          "Returning `any` from a function poisons every caller — they all lose type info",
          "Suppressing errors with `// @ts-ignore` without a comment explaining why is tech debt"
        ],
        code: `// ❌ Anti-patterns

// Casting instead of validating
const user = response.data as User; // trusts the API — can crash

// Non-null assertion without certainty
const element = document.getElementById('app')!; // might be null

// any leaking through
function processData(data: any) {
  return data.name.toUpperCase(); // no safety whatsoever
}

// ✅ Better approaches

// Validate with a type guard or schema library
import { z } from 'zod';

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email()
});

const parsed = UserSchema.parse(response.data); // throws if invalid
// parsed is fully typed as { id: string; name: string; email: string }

// Check before asserting non-null
const element = document.getElementById('app');
if (!element) throw new Error('Root element not found');
// element is now HTMLElement (not null)

// unknown instead of any for external data
async function fetchData(url: string): Promise<unknown> {
  const res = await fetch(url);
  return res.json();
}

// Narrow before using
const data = await fetchData('/api/user');
const user = UserSchema.parse(data); // validated`
      }
    ]
  },
  {
    title: 'Practical Patterns',
    examples: [
      {
        title: 'Type-safe API calls and error handling',
        explanation: "A common real-world pattern: wrapping fetch with generics so callers get typed responses, plus using discriminated unions for results instead of try/catch leaking errors as `unknown`.",
        keyIdeas: [
          'Generic fetch wrappers give all callers typed responses from a single implementation',
          'Result types (`{ ok: true; data: T } | { ok: false; error: string }`) make errors explicit',
          'Zod parsing at the API boundary validates that the server actually returned what the type says',
          '`satisfies` operator (TS 4.9+) checks a value against a type without widening it'
        ],
        pitfalls: [
          "Trusting API responses without validation — the server might return unexpected shapes",
          "Catching errors as `Error` — throw can be called with anything, so use `unknown`",
          "Not typing fetch wrappers generically means every caller duplicates the cast"
        ],
        code: `import { z } from 'zod';

// Generic, validated fetch wrapper
async function apiFetch<T>(
  url: string,
  schema: z.ZodType<T>,
  options?: RequestInit
): Promise<{ ok: true; data: T } | { ok: false; error: string }> {
  try {
    const res = await fetch(url, options);
    if (!res.ok) return { ok: false, error: \`HTTP \${res.status}\` };
    const json = await res.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) return { ok: false, error: 'Invalid response shape' };
    return { ok: true, data: parsed.data };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return { ok: false, error: message };
  }
}

// Usage
const UserSchema = z.object({ id: z.string(), name: z.string() });
const result = await apiFetch('/api/user/1', UserSchema);

if (result.ok) {
  console.log(result.data.name); // typed as string
} else {
  console.error(result.error);
}

// satisfies — check type without widening
const config = {
  host: 'localhost',
  port: 3000
} satisfies Record<string, string | number>;

config.host.toUpperCase(); // string, not string | number`
      },
      {
        title: 'Builder pattern and fluent APIs with generics',
        explanation: "The builder pattern in TypeScript can be made fully type-safe using generics that track which properties have been set. This lets TypeScript enforce at compile time that you've called all required methods before calling `.build()`.",
        keyIdeas: [
          'Track state in the generic type parameter — each setter updates the type',
          '`build()` is only available when all required fields are filled',
          'This pattern is overkill for simple objects — use it when builder chains are long',
          'Useful for query builders, HTTP request builders, test factories'
        ],
        pitfalls: [
          "Type-tracking builders have complex types — error messages can be hard to read",
          "Each setter must return `this` typed correctly for chaining to work",
          "Simple cases are better served by an options object with `Required<T>`"
        ],
        code: `// Type-safe builder pattern
type BuilderState = {
  name?: string;
  email?: string;
  role?: 'user' | 'admin';
};

class UserBuilder<State extends BuilderState = {}> {
  private state: State = {} as State;

  setName<N extends string>(name: N): UserBuilder<State & { name: N }> {
    return Object.assign(
      new UserBuilder<State & { name: N }>(),
      { state: { ...this.state, name } }
    );
  }

  setEmail(email: string): UserBuilder<State & { email: string }> {
    return Object.assign(
      new UserBuilder<State & { email: string }>(),
      { state: { ...this.state, email } }
    );
  }

  setRole(role: 'user' | 'admin'): UserBuilder<State & { role: typeof role }> {
    return Object.assign(
      new UserBuilder<State & { role: typeof role }>(),
      { state: { ...this.state, role } }
    );
  }

  // Only available when all fields are set
  build(
    this: UserBuilder<{ name: string; email: string; role: 'user' | 'admin' }>
  ) {
    return { ...this.state };
  }
}

const user = new UserBuilder()
  .setName('Alice')
  .setEmail('alice@co.com')
  .setRole('admin')
  .build(); // fully typed`
      }
    ]
  }
];

export default bestPracticesContent;
