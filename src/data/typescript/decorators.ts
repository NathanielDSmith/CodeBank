const decoratorsContent = [
  {
    title: 'Class Decorators',
    examples: [
      {
        title: 'Basic class decorator',
        code: '// Class decorator (requires experimentalDecorators in tsconfig.json)\nfunction logClass(constructor: Function) {\n  console.log("Class " + constructor.name + " was defined");\n}\n\n// Using the decorator\n@logClass\nclass Calculator {\n  add(a: number, b: number): number {\n    return a + b;\n  }\n  \n  multiply(a: number, b: number): number {\n    return a * b;\n  }\n}\n\n// Decorator factory (returns a decorator)\nfunction withTiming<T extends { new (...args: any[]): {} }>(constructor: T) {\n  return class extends constructor {\n    constructor(...args: any[]) {\n      console.time("Object creation");\n      super(...args);\n      console.timeEnd("Object creation");\n    }\n  };\n}\n\n@withTiming\nclass ExpensiveObject {\n  constructor() {\n    // Simulate expensive initialization\n    for (let i = 0; i < 1000000; i++) {\n      Math.random();\n    }\n  }\n}\n\n// Using the decorated class\nlet calc = new Calculator();\nlet expensive = new ExpensiveObject(); // Will log timing'
      },
      {
        title: 'Property and method decorators',
        code: '// Property decorator\nfunction readonly(target: any, propertyKey: string) {\n  Object.defineProperty(target, propertyKey, {\n    writable: false,\n    configurable: false\n  });\n}\n\n// Method decorator\nfunction log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n  const originalMethod = descriptor.value;\n  \n  descriptor.value = function(...args: any[]) {\n    console.log("Calling " + propertyKey + " with args:", args);\n    const result = originalMethod.apply(this, args);\n    console.log(propertyKey + " returned:", result);\n    return result;\n  };\n}\n\n// Parameter decorator\nfunction validate(target: any, propertyKey: string, parameterIndex: number) {\n  // Store validation info for later use\n  if (!target.__validations) {\n    target.__validations = {};\n  }\n  if (!target.__validations[propertyKey]) {\n    target.__validations[propertyKey] = [];\n  }\n  target.__validations[propertyKey][parameterIndex] = true;\n}\n\nclass UserService {\n  @readonly\n  apiUrl: string = "https://api.example.com";\n  \n  @log\n  getUser(@validate id: number): string {\n    return "User " + id;\n  }\n  \n  @log\n  createUser(name: string, email: string): object {\n    return { name, email, id: Math.random() };\n  }\n}\n\nlet service = new UserService();\nservice.getUser(123); // Will log the call and return value\n// service.apiUrl = "new-url"; // Error! property is readonly'
      }
    ]
  },
  {
    title: 'Advanced Decorator Patterns',
    examples: [
      {
        title: 'Decorator composition and metadata',
        code: '// Multiple decorators can be applied\nfunction sealed(constructor: Function) {\n  Object.seal(constructor);\n  Object.seal(constructor.prototype);\n}\n\nfunction configurable(value: boolean) {\n  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n    descriptor.configurable = value;\n  };\n}\n\n// Decorator that adds metadata\nfunction apiEndpoint(path: string) {\n  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n    // Store the endpoint path\n    if (!target.__endpoints) {\n      target.__endpoints = {};\n    }\n    target.__endpoints[propertyKey] = path;\n  };\n}\n\n@sealed\nclass ApiService {\n  @apiEndpoint("/users")\n  @configurable(false)\n  getUsers(): Promise<any[]> {\n    return fetch("/users").then(res => res.json());\n  }\n  \n  @apiEndpoint("/users/:id")\n  getUser(id: number): Promise<any> {\n    return fetch("/users/" + id).then(res => res.json());\n  }\n}\n\n// Decorator for dependency injection\nfunction inject(token: string) {\n  return function (target: any, propertyKey: string) {\n    if (!target.__injections) {\n      target.__injections = {};\n    }\n    target.__injections[propertyKey] = token;\n  };\n}\n\nclass UserController {\n  @inject("UserService")\n  private userService: any;\n  \n  @inject("Logger")\n  private logger: any;\n}\n\n// Decorator for validation\nfunction validateEmail(target: any, propertyKey: string) {\n  let value: string;\n  \n  const getter = function() {\n    return value;\n  };\n  \n  const setter = function(newVal: string) {\n    if (newVal && !newVal.includes("@")) {\n      throw new Error("Invalid email format");\n    }\n    value = newVal;\n  };\n  \n  Object.defineProperty(target, propertyKey, {\n    get: getter,\n    set: setter,\n    enumerable: true,\n    configurable: true\n  });\n}\n\nclass User {\n  @validateEmail\n  email: string = "";\n}\n\nlet user = new User();\nuser.email = "valid@example.com"; // OK\n// user.email = "invalid-email"; // Error!'
      }
    ]
  }
];

export default decoratorsContent; 