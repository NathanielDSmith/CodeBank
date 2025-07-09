const destructuringContent = [
  {
    title: 'Basic Object Destructuring',
    examples: [
      {
        title: 'Extracting properties from objects',
        code: `const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Extract properties into variables
const { name, age, city } = person;

console.log(name); // "John"
console.log(age); // 30
console.log(city); // "New York"

// You can also extract only some properties
const { name: personName } = person;
console.log(personName); // "John" (only extracted name)`
      },
      {
        title: 'Using different variable names',
        code: `const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Extract with different variable names
const { name: fullName, age: userAge, city: location } = person;

console.log(fullName); // "John"
console.log(userAge); // 30
console.log(location); // "New York"

// This is useful when you have naming conflicts
const name = "Global Name";
const { name: personName } = person;
console.log(name); // "Global Name"
console.log(personName); // "John"`
      },
      {
        title: 'Default values with destructuring',
        code: `const person = {
  name: "John",
  age: 30
  // Note: no city property
};

// Use default values for missing properties
const { name, age, city = "Unknown", country = "USA" } = person;

console.log(name); // "John"
console.log(age); // 30
console.log(city); // "Unknown" (default value)
console.log(country); // "USA" (default value)

// You can combine renaming with defaults
const { name: fullName, city: location = "Unknown" } = person;
console.log(fullName); // "John"
console.log(location); // "Unknown"`
      }
    ]
  },
  {
    title: 'Destructuring in Functions',
    examples: [
      {
        title: 'Function parameters with destructuring',
        code: `// Function that takes an object as parameter
function printPerson(person) {
  console.log(person.name + " is " + person.age + " years old");
}

// Same function using destructuring
function printPersonDestructured({ name, age }) {
  console.log(name + " is " + age + " years old");
}

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

printPerson(person); // "John is 30 years old"
printPersonDestructured(person); // "John is 30 years old"

// With default values
function greetPerson({ name = "Unknown", age = 0 }) {
  console.log("Hello, " + name + "! You are " + age + " years old.");
}

greetPerson({ name: "Alice", age: 25 }); // "Hello, Alice! You are 25 years old."
greetPerson({ name: "Bob" }); // "Hello, Bob! You are 0 years old."
greetPerson({}); // "Hello, Unknown! You are 0 years old."`
      },
      {
        title: 'Returning objects from functions',
        code: `// Function that returns an object
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greeting: "Hello, I'm " + name
  };
}

const person = createPerson("John", 30);

// Destructure the returned object
const { name, age, greeting } = createPerson("Alice", 25);

console.log(name); // "Alice"
console.log(age); // 25
console.log(greeting); // "Hello, I'm Alice"

// You can also destructure directly in the function call
const { name: personName } = createPerson("Bob", 35);
console.log(personName); // "Bob"`
      }
    ]
  }
];

export default destructuringContent; 