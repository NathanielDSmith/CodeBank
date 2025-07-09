// JavaScript Object Basics - Beginner-friendly examples
const basicsContent = [
  {
    title: 'Creating Objects',
    examples: [
      {
        title: 'Simple object creation',
        code: `// JavaScript: Create a simple object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name); // "John"
console.log(person.age); // 30`
      },
      {
        title: 'Adding properties to objects',
        code: `// JavaScript: Start with an empty object
const user = {};

// Add properties one by one
user.name = "Alice";
user.email = "alice@example.com";
user.age = 25;

console.log(user); // { name: "Alice", email: "alice@example.com", age: 25 }

// You can also add properties using bracket notation
user["isActive"] = true;
user["lastLogin"] = "2023-12-01";

console.log(user.isActive); // true`
      },
      {
        title: 'Objects with different data types',
        code: `// JavaScript: Objects can contain different types of data
const product = {
  name: "Laptop",           // string
  price: 999.99,           // number
  inStock: true,           // boolean
  colors: ["black", "white"], // array
  specs: {                 // nested object
    ram: "16GB",
    storage: "512GB"
  }
};

console.log(product.name); // "Laptop"
console.log(product.price); // 999.99
console.log(product.colors[0]); // "black"
console.log(product.specs.ram); // "16GB"`
      }
    ]
  },
  {
    title: 'Accessing Object Properties',
    examples: [
      {
        title: 'Dot notation (most common)',
        code: `// JavaScript: Use dot notation to access properties
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Use dot notation to access properties
console.log(person.name); // "John"
console.log(person.age); // 30
console.log(person.city); // "New York"

// You can also change values
person.age = 31;
console.log(person.age); // 31`
      },
      {
        title: 'Bracket notation',
        code: `// JavaScript: Use bracket notation for special property names
const person = {
  name: "John",
  age: 30,
  "favorite-color": "blue"  // property with special characters
};

// Use bracket notation for properties with special characters
console.log(person["favorite-color"]); // "blue"

// You can also use variables
const propertyName = "age";
console.log(person[propertyName]); // 30

// Both ways work for normal properties
console.log(person.name); // "John"
console.log(person["name"]); // "John" (same result)`
      },
      {
        title: 'Checking if properties exist',
        code: `// JavaScript: Check if a property exists
const person = {
  name: "John",
  age: 30
};

// Check if a property exists
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("city")); // false

// Another way to check
console.log("name" in person); // true
console.log("city" in person); // false

// Check if property is not undefined
console.log(person.name !== undefined); // true
console.log(person.city !== undefined); // false

// Safe way to access properties
const city = person.city || "Unknown";
console.log(city); // "Unknown" (because person.city is undefined)`
      }
    ]
  }
];

export default basicsContent; 