const modulesContent = [
  {
    title: 'ES Modules in TypeScript',
    examples: [
      {
        title: 'Importing and exporting types',
        explanation: "TypeScript extends JS module syntax with type-only imports and exports. Using `import type` is important — it ensures type imports are stripped at compile time and never included in the runtime bundle, avoiding circular dependency issues.",
        keyIdeas: [
          '`import type` ensures the import is erased at runtime — no side effects, no circular deps',
          '`export type` marks a named export as type-only',
          "Type and value imports can be mixed: `import UserClass, { type UserType } from './user'`",
          'Prefer `import type` for interfaces, type aliases, and anything that only exists in TypeScript'
        ],
        pitfalls: [
          "Importing a type with a regular `import` works, but the import may remain in emitted JS (depending on your module config)",
          "`import type` cannot import values — you'll get an error if you try to use it as a value",
          "Using `export default` for types makes them harder to rename on import"
        ],
        code: `// types.ts — exporting types
export type User = {
  id: string;
  name: string;
  email: string;
};

export interface Config {
  apiUrl: string;
  timeout: number;
}

// Mixing value and type exports
export class UserService { /* ... */ }
export type { User, Config }; // explicit type export

// consumer.ts — importing types
import type { User, Config } from './types';
import { UserService } from './types';

// Mixed import
import UserClass, { type UserType } from './user';

// Re-exporting
export type { User } from './types';     // type re-export
export { UserService } from './types';   // value re-export
export * from './utils';                  // re-export all

// Barrel file pattern (index.ts)
export type { User, Config } from './types';
export { UserService } from './service';
export { formatDate } from './utils';`
      },
      {
        title: 'Module resolution and path aliases',
        explanation: "TypeScript's module resolution follows Node.js conventions by default. Path aliases (configured in `tsconfig.json`) let you avoid deep relative imports like `../../../../utils`. They need to match your bundler config to work at runtime.",
        keyIdeas: [
          'Absolute imports using path aliases: `import { x } from "@/utils"`',
          'Configured in `tsconfig.json` under `compilerOptions.paths`',
          'Must also configure your bundler (webpack/vite) — TypeScript only handles the type side',
          '`baseUrl` sets the root for non-relative imports'
        ],
        pitfalls: [
          "TypeScript path aliases don't affect the emitted JS — your bundler must also know about them",
          "Different bundlers need different config: webpack uses `resolve.alias`, Vite uses `resolve.alias` too",
          "Circular imports through barrel files cause subtle bugs — keep imports explicit in performance-sensitive code"
        ],
        code: `// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@hooks/*": ["src/hooks/*"],
      "@types/*": ["src/types/*"]
    }
  }
}

// Before path aliases — messy relative imports
import { Button } from '../../../components/Button';
import { useAuth } from '../../../../hooks/useAuth';

// After — clean absolute imports
import { Button } from '@components/Button';
import { useAuth } from '@hooks/useAuth';

// Vite config to match (vite.config.ts)
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components')
    }
  }
});`
      }
    ]
  },
  {
    title: 'Declaration Files and Third-Party Types',
    examples: [
      {
        title: 'Writing and using .d.ts declaration files',
        explanation: "Declaration files (`.d.ts`) describe the types of JS modules without containing implementation. They're what the `@types/*` packages on npm consist of. You write them when consuming untyped JS libraries.",
        keyIdeas: [
          '`.d.ts` files contain only type declarations — no runtime code',
          '`@types/library` packages on npm provide types for popular JS libraries',
          '`declare module "name"` adds types for an untyped module',
          '`declare global` augments the global scope'
        ],
        pitfalls: [
          "Missing a `.d.ts` file for a JS file means TypeScript treats the module as `any`",
          "Publishing a library without `.d.ts` files forces consumers to write them or use `any`",
          "Auto-generated `.d.ts` from `tsc` sometimes needs manual cleanup for public APIs"
        ],
        code: `// globals.d.ts — adding types for global variables
declare const __DEV__: boolean;
declare const __VERSION__: string;

// Typing an untyped npm module
// src/types/some-library.d.ts
declare module 'some-untyped-library' {
  export function initialize(config: { key: string }): void;
  export function track(event: string, data?: Record<string, unknown>): void;
  export default class Client {
    constructor(apiKey: string);
    query(sql: string): Promise<unknown[]>;
  }
}

// Then use normally:
import Client from 'some-untyped-library';
const client = new Client('key123');

// Checking if types exist before installing @types
// Run: npx tsc --noEmit
// If you see "Could not find a declaration file for module 'x'"
// Check: npm install --save-dev @types/x

// When @types doesn't exist — quick workaround in a .d.ts file
declare module 'legacy-module' {
  const value: unknown;
  export default value;
}`
      }
    ]
  }
];

export default modulesContent;
