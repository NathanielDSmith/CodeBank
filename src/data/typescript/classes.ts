const classesContent = [
  {
    title: 'Classes in TypeScript',
    examples: [
      {
        title: 'Class properties, access modifiers, and constructor shorthand',
        explanation: "TypeScript extends JS classes with access modifiers (`public`, `private`, `protected`, `readonly`) that enforce encapsulation at compile time. The constructor parameter shorthand eliminates boilerplate by declaring and assigning class properties in one step.",
        keyIdeas: [
          '`public` — accessible everywhere (default)',
          '`private` — accessible only within the class',
          '`protected` — accessible within the class and subclasses',
          '`readonly` — can only be assigned in the constructor',
          'Constructor shorthand: `constructor(private name: string)` declares and assigns in one step'
        ],
        pitfalls: [
          "TypeScript `private` is compile-time only — at runtime it's still accessible via JS",
          "For true runtime privacy, use JS `#name` private fields",
          "Access modifiers don't exist in the emitted JS — they're purely a TypeScript feature",
          "Forgetting `readonly` on props you never want to change after construction"
        ],
        code: `class User {
  // Constructor shorthand — declares and assigns in one step
  constructor(
    public readonly id: string,
    public name: string,
    private email: string,
    protected role: 'user' | 'admin' = 'user'
  ) {}

  getEmail(): string {
    return this.email; // accessible within class
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }
}

class AdminUser extends User {
  constructor(id: string, name: string, email: string) {
    super(id, name, email, 'admin');
  }

  // Can access protected from subclass
  getRole(): string {
    return this.role;
  }
}

const user = new User('1', 'Alice', 'alice@co.com');
console.log(user.name);     // OK — public
// console.log(user.email); // Error — private
// user.id = 'new';         // Error — readonly

// True runtime private with #
class Counter {
  #count = 0; // not accessible outside at all — even at runtime

  increment() { this.#count++; }
  get value() { return this.#count; }
}`
      },
      {
        title: 'Abstract classes and polymorphism',
        explanation: "Abstract classes define a template — they can have implementations but can't be instantiated directly. Subclasses must implement abstract methods. This enforces a contract while sharing common code.",
        keyIdeas: [
          '`abstract` classes can\'t be instantiated with `new`',
          '`abstract` methods must be implemented by every concrete subclass',
          'Non-abstract methods in an abstract class are inherited as-is',
          'Abstract classes are like interfaces but can contain real implementations'
        ],
        pitfalls: [
          "Prefer composition over deep abstract class hierarchies — they become rigid",
          "Abstract classes can't be used as types in generics as easily as interfaces",
          "If you find yourself overriding most abstract methods, you probably need separate classes"
        ],
        code: `abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;

  // Shared implementation — available to all subclasses
  describe(): string {
    return \`Area: \${this.area().toFixed(2)}, Perimeter: \${this.perimeter().toFixed(2)}\`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) { super(); }

  area(): number { return Math.PI * this.radius ** 2; }
  perimeter(): number { return 2 * Math.PI * this.radius; }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) { super(); }

  area(): number { return this.width * this.height; }
  perimeter(): number { return 2 * (this.width + this.height); }
}

// Polymorphism — work with any Shape
function printShapeInfo(shape: Shape) {
  console.log(shape.describe()); // calls the specific area/perimeter
}

// const s = new Shape(); // Error! Cannot instantiate abstract class
printShapeInfo(new Circle(5));
printShapeInfo(new Rectangle(4, 6));`
      }
    ]
  },
  {
    title: 'Classes Implementing Interfaces',
    examples: [
      {
        title: 'Using `implements` for type contracts',
        explanation: "`implements` enforces that a class satisfies an interface contract. Unlike `extends`, it doesn't inherit code — it just makes TypeScript verify the class has the right shape. Multiple interfaces can be implemented at once.",
        keyIdeas: [
          '`implements` is a compile-time check — it adds no runtime behaviour',
          'A class can implement multiple interfaces: `class Foo implements A, B`',
          'The class must provide all methods and properties defined in the interface',
          'Interface properties must match in type — `string` from interface must be `string` in class'
        ],
        pitfalls: [
          "Implementing an interface doesn't make instances assignable to the interface type automatically — TypeScript uses structural typing, so any object with the right shape works",
          "`implements` is optional if TypeScript's structural check already passes, but it's valuable as documentation and a safety net"
        ],
        code: `interface Serializable {
  serialize(): string;
  deserialize(data: string): this;
}

interface Validatable {
  validate(): boolean;
  errors: string[];
}

class FormModel implements Serializable, Validatable {
  errors: string[] = [];

  constructor(private data: Record<string, unknown>) {}

  serialize(): string {
    return JSON.stringify(this.data);
  }

  deserialize(raw: string): this {
    const parsed = JSON.parse(raw);
    return new (this.constructor as new (d: unknown) => this)(parsed);
  }

  validate(): boolean {
    this.errors = [];
    // validation logic
    return this.errors.length === 0;
  }
}

// Dependency injection pattern with interfaces
interface Logger {
  info(msg: string): void;
  error(msg: string, err?: Error): void;
}

class ConsoleLogger implements Logger {
  info(msg: string) { console.log('[INFO]', msg); }
  error(msg: string, err?: Error) { console.error('[ERROR]', msg, err); }
}

class Service {
  constructor(private logger: Logger) {} // accepts any Logger implementation

  doWork() {
    this.logger.info('Starting work');
  }
}`
      }
    ]
  }
];

export default classesContent;
