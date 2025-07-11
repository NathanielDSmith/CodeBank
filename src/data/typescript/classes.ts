const classesContent = [
  {
    title: 'Basic Classes',
    examples: [
      {
        title: 'Simple class with properties and methods',
        code: '// Basic class definition\nclass Person {\n  // Properties\n  name: string;\n  age: number;\n  \n  // Constructor\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  // Method\n  greet(): string {\n    return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";\n  }\n  \n  // Method that updates properties\n  haveBirthday(): void {\n    this.age += 1;\n    console.log("Happy birthday! " + this.name + " is now " + this.age + ".");\n  }\n}\n\n// Create an instance\nlet alice = new Person("Alice", 25);\nconsole.log(alice.greet()); // "Hello, my name is Alice and I am 25 years old."\nalice.haveBirthday(); // "Happy birthday! Alice is now 26."'
      },
      {
        title: 'Access modifiers',
        code: '// Class with different access modifiers\nclass BankAccount {\n  // Public - accessible from anywhere\n  public accountNumber: string;\n  \n  // Private - only accessible within the class\n  private balance: number;\n  \n  // Protected - accessible within class and subclasses\n  protected owner: string;\n  \n  constructor(accountNumber: string, initialBalance: number, owner: string) {\n    this.accountNumber = accountNumber;\n    this.balance = initialBalance;\n    this.owner = owner;\n  }\n  \n  // Public method to get balance\n  public getBalance(): number {\n    return this.balance;\n  }\n  \n  // Public method to deposit\n  public deposit(amount: number): void {\n    if (amount > 0) {\n      this.balance += amount;\n      console.log("Deposited $" + amount + ". New balance: $" + this.balance);\n    }\n  }\n  \n  // Public method to withdraw\n  public withdraw(amount: number): boolean {\n    if (amount > 0 && amount <= this.balance) {\n      this.balance -= amount;\n      console.log("Withdrew $" + amount + ". New balance: $" + this.balance);\n      return true;\n    }\n    console.log("Insufficient funds or invalid amount.");\n    return false;\n  }\n}\n\nlet account = new BankAccount("12345", 1000, "John Doe");\naccount.deposit(500); // "Deposited $500. New balance: $1500"\naccount.withdraw(200); // "Withdrew $200. New balance: $1300"\n// account.balance = 0; // Error! balance is private'
      }
    ]
  },
  {
    title: 'Inheritance and Advanced Features',
    examples: [
      {
        title: 'Class inheritance',
        code: '// Base class\nclass Animal {\n  protected name: string;\n  protected age: number;\n  \n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  public makeSound(): void {\n    console.log("Some animal sound");\n  }\n  \n  public getInfo(): string {\n    return this.name + " is " + this.age + " years old";\n  }\n}\n\n// Derived class\nclass Dog extends Animal {\n  private breed: string;\n  \n  constructor(name: string, age: number, breed: string) {\n    super(name, age); // Call parent constructor\n    this.breed = breed;\n  }\n  \n  // Override parent method\n  public makeSound(): void {\n    console.log("Woof! Woof!");\n  }\n  \n  // Add new method\n  public fetch(): void {\n    console.log(this.name + " is fetching the ball!");\n  }\n  \n  // Override getInfo to include breed\n  public getInfo(): string {\n    return super.getInfo() + " and is a " + this.breed;\n  }\n}\n\nlet myDog = new Dog("Buddy", 3, "Golden Retriever");\nconsole.log(myDog.getInfo()); // "Buddy is 3 years old and is a Golden Retriever"\nmyDog.makeSound(); // "Woof! Woof!"\nmyDog.fetch(); // "Buddy is fetching the ball!"'
      },
      {
        title: 'Abstract classes and interfaces',
        code: '// Abstract class (cannot be instantiated directly)\nabstract class Shape {\n  protected color: string;\n  \n  constructor(color: string) {\n    this.color = color;\n  }\n  \n  // Abstract method (must be implemented by subclasses)\n  abstract getArea(): number;\n  \n  // Concrete method\n  public getColor(): string {\n    return this.color;\n  }\n}\n\n// Concrete class implementing abstract class\nclass Circle extends Shape {\n  private radius: number;\n  \n  constructor(color: string, radius: number) {\n    super(color);\n    this.radius = radius;\n  }\n  \n  public getArea(): number {\n    return Math.PI * this.radius * this.radius;\n  }\n}\n\nclass Rectangle extends Shape {\n  private width: number;\n  private height: number;\n  \n  constructor(color: string, width: number, height: number) {\n    super(color);\n    this.width = width;\n    this.height = height;\n  }\n  \n  public getArea(): number {\n    return this.width * this.height;\n  }\n}\n\nlet circle = new Circle("red", 5);\nlet rectangle = new Rectangle("blue", 4, 6);\n\nconsole.log("Circle area: " + circle.getArea().toFixed(2)); // "Circle area: 78.54"\nconsole.log("Rectangle area: " + rectangle.getArea()); // "Rectangle area: 24"'
      }
    ]
  }
];

export default classesContent; 