const decoratorsContent = [
  {
    title: 'Decorators in TypeScript',
    examples: [
      {
        title: 'What decorators are and when to use them',
        explanation: "Decorators are a stage 3 TC39 proposal that TypeScript has supported (with flags) for years. They're functions that wrap classes, methods, properties, or parameters to add behavior at definition time. Common in frameworks like NestJS, Angular, and TypeORM. For most React/frontend code, you don't need them.",
        keyIdeas: [
          'Decorators are syntactic sugar for wrapping a target with a function',
          'Enable `experimentalDecorators` in `tsconfig.json` for the legacy decorator syntax',
          'TypeScript 5.0+ supports the new stage 3 decorators without a flag',
          'Common uses: logging, validation, dependency injection, ORM column definitions'
        ],
        pitfalls: [
          "Legacy decorators (`experimentalDecorators`) and TC39 stage 3 decorators have different APIs — don't mix them",
          "Decorators execute at class definition time, not instance creation time",
          "Overusing decorators makes code hard to trace — the behavior is hidden in the decorator"
        ],
        code: `// tsconfig.json
// { "compilerOptions": { "experimentalDecorators": true } }

// Class decorator — wraps the entire class
function Sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

// Method decorator — wraps a method
function Log(target: object, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: unknown[]) {
    console.log(\`Calling \${key} with\`, args);
    const result = original.apply(this, args);
    console.log(\`\${key} returned\`, result);
    return result;
  };
  return descriptor;
}

// Property decorator
function ReadOnly(target: object, key: string) {
  Object.defineProperty(target, key, { writable: false });
}

@Sealed
class UserService {
  @ReadOnly
  version = '1.0';

  @Log
  findUser(id: string): User {
    // ...
    return { id, name: 'Alice', email: 'a@b.com' };
  }
}

const service = new UserService();
service.findUser('123'); // logs the call and return value`
      },
      {
        title: 'Decorator factories and NestJS-style patterns',
        explanation: "Decorator factories are functions that return decorators, allowing you to pass arguments. This is the pattern used by frameworks like NestJS for routing, validation, and dependency injection.",
        keyIdeas: [
          'A decorator factory is just a function that returns a decorator function',
          'NestJS uses decorators extensively: `@Controller()`, `@Get()`, `@Injectable()`',
          'TypeORM uses `@Entity()`, `@Column()`, `@PrimaryGeneratedColumn()`',
          'Reflect metadata API (`reflect-metadata`) is often used to store decorator data'
        ],
        pitfalls: [
          "Decorators are applied bottom-up when stacked — order matters",
          "Framework decorators are framework-specific — NestJS decorators don't work in Angular",
          "Testing classes with decorators often requires the framework setup to be present"
        ],
        code: `// Decorator factory — accepts arguments
function MinLength(min: number) {
  return function (target: object, key: string) {
    let value: string;
    Object.defineProperty(target, key, {
      get: () => value,
      set: (v: string) => {
        if (v.length < min) {
          throw new Error(\`\${key} must be at least \${min} characters\`);
        }
        value = v;
      }
    });
  };
}

function Required(target: object, key: string) {
  // marks field as required for validation
}

class CreateUserDto {
  @Required
  @MinLength(2)
  name: string = '';

  @Required
  @MinLength(5)
  email: string = '';
}

// NestJS-style (illustrative — requires NestJS)
// @Controller('/users')
// class UsersController {
//   @Get('/:id')
//   async getUser(@Param('id') id: string): Promise<User> { ... }
//
//   @Post()
//   @UseGuards(AuthGuard)
//   async createUser(@Body() dto: CreateUserDto): Promise<User> { ... }
// }`
      }
    ]
  }
];

export default decoratorsContent;
