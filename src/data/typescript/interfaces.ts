const interfacesContent = [
  {
    title: 'Interfaces vs Type Aliases',
    examples: [
      {
        title: 'When to use interface vs type',
        explanation: "Both define object shapes. The main practical differences: interfaces can be extended with `extends` and can be re-opened (declaration merging), type aliases can't. Use `interface` for public APIs and class shapes; `type` for unions, intersections, and utility types.",
        keyIdeas: [
          'Both compile away — no runtime cost',
          'Interfaces can be extended with `extends` and merged across declarations',
          'Type aliases can represent unions, intersections, mapped types — interfaces can\'t',
          'Error messages for interfaces are often cleaner than for complex type aliases'
        ],
        pitfalls: [
          "Declaration merging on interfaces can be surprising — a library might extend your interface",
          "Trying to use `interface` for a union type won't work — that needs `type`",
          "Don't mix `interface` and `type` randomly — pick a convention per codebase"
        ],
        code: `// Interface — extendable, mergeable
interface User {
  id: number;
  name: string;
  email: string;
}

interface AdminUser extends User {
  role: 'admin';
  permissions: string[];
}

// Declaration merging — adding to an existing interface
interface User {
  createdAt: Date; // merged in — now all User objects need this
}

// Type alias — can model unions and other shapes
type Status = 'active' | 'inactive' | 'banned';
type UserOrAdmin = User | AdminUser;
type WithTimestamps<T> = T & { createdAt: Date; updatedAt: Date };

// When they're equivalent — prefer interface for object shapes
interface Point { x: number; y: number }
type Point2 = { x: number; y: number }; // same thing

// When only type works
type Result<T> = { success: true; data: T } | { success: false; error: string };
// Can't express this union with a single interface`
      },
      {
        title: 'Interface inheritance and composition',
        explanation: "Interfaces can extend one or more other interfaces, combining their shapes. This lets you build up complex types from focused, reusable pieces without duplication.",
        keyIdeas: [
          '`extends` copies all properties from the parent — the child must satisfy all of them',
          'Multiple inheritance: `interface C extends A, B` — C must have all of A and B',
          'Extending creates a strict subtype — an AdminUser is a valid User everywhere',
          'Classes can implement interfaces, enforcing the shape at the class level'
        ],
        pitfalls: [
          "Extending from an interface with conflicting property types causes an error",
          "Deep inheritance chains are hard to follow — prefer composition over deep hierarchies",
          "Implementing an interface in a class doesn't narrow the type — you still need explicit typing"
        ],
        code: `// Base interfaces — focused, single responsibility
interface Identifiable {
  id: string;
}

interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

interface SoftDeletable {
  deletedAt: Date | null;
}

// Compose via extends
interface BaseEntity extends Identifiable, Timestamps {}

interface UserEntity extends BaseEntity, SoftDeletable {
  name: string;
  email: string;
  role: 'user' | 'admin';
}

// Class implementing an interface
interface Repository<T extends Identifiable> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  save(entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}

class UserRepository implements Repository<UserEntity> {
  async findById(id: string): Promise<UserEntity | null> {
    // implementation
    return null;
  }
  async findAll(): Promise<UserEntity[]> { return []; }
  async save(entity: UserEntity): Promise<UserEntity> { return entity; }
  async delete(id: string): Promise<void> {}
}`
      }
    ]
  },
  {
    title: 'Structural Typing and Index Signatures',
    examples: [
      {
        title: 'How TypeScript\'s structural typing works',
        explanation: "TypeScript uses structural typing (duck typing) — if an object has the required shape, it satisfies the type, regardless of what it was declared as. This is different from nominal typing in Java/C# where the class name matters.",
        keyIdeas: [
          'If it has all the required properties, it satisfies the interface',
          'Extra properties are fine when assigning from variables — but not from object literals',
          'This means you can pass any object with the right shape without explicit `implements`',
          'Excess property checks only apply to fresh object literals, not to variables'
        ],
        pitfalls: [
          "Object literals trigger excess property checks — `{ name: 'a', extra: 1 }` fails where `{ name: string }` is expected",
          "Structural typing means you can accidentally satisfy an interface you didn't intend to",
          "Workaround for excess properties: assign to a variable first, then pass the variable"
        ],
        code: `interface Named { name: string }

function greet(x: Named) {
  console.log(x.name);
}

// Works — has the required shape
const alice = { name: 'Alice', age: 30 };
greet(alice); // OK — extra properties are fine from a variable

// greet({ name: 'Bob', age: 25 });
// Error! Excess property check on fresh object literal

// Structural subtyping — AdminUser satisfies User
interface User { name: string; email: string }
interface AdminUser { name: string; email: string; role: 'admin' }

const admin: AdminUser = { name: 'Root', email: 'root@co.com', role: 'admin' };
greet(admin); // OK — AdminUser has everything Named requires

// Index signatures — dynamic keys
interface Headers {
  [key: string]: string;
}

const headers: Headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer token123'
};

// Mixed: known + dynamic keys
interface Config {
  host: string;
  port: number;
  [key: string]: string | number; // known props must match the index signature type
}`
      }
    ]
  }
];

export default interfacesContent;
