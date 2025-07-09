const propertiesContent = [
  {
    title: 'Working with Object Properties',
    examples: [
      {
        title: 'Adding and changing properties',
        code: `const person = {
  name: "John",
  age: 30
};

// Add a new property
person.city = "New York";
console.log(person); // { name: "John", age: 30, city: "New York" }

// Change an existing property
person.age = 31;
console.log(person.age); // 31

// Add multiple properties
person.email = "john@example.com";
person.isActive = true;

console.log(person);
// { name: "John", age: 31, city: "New York", email: "john@example.com", isActive: true }`
      },
      {
        title: 'Removing properties',
        code: `const person = {
  name: "John",
  age: 30,
  city: "New York",
  email: "john@example.com"
};

// Remove a property using delete
delete person.email;
console.log(person); // { name: "John", age: 30, city: "New York" }

// Remove another property
delete person.city;
console.log(person); // { name: "John", age: 30 }

// Check if property exists after deletion
console.log(person.hasOwnProperty("email")); // false
console.log(person.email); // undefined`
      },
      {
        title: 'Checking property existence',
        code: `const person = {
  name: "John",
  age: 30,
  city: undefined  // property exists but value is undefined
};

// Check if property exists
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("email")); // false

// Another way to check
console.log("name" in person); // true
console.log("email" in person); // false

// Check if property has a value (not undefined)
console.log(person.name !== undefined); // true
console.log(person.city !== undefined); // true (property exists)
console.log(person.email !== undefined); // false (property doesn't exist)

// Safe way to access properties
const name = person.name || "Unknown";
const email = person.email || "No email";
console.log(name); // "John"
console.log(email); // "No email"`
      }
    ]
  },
  {
    title: 'Property Names and Values',
    examples: [
      {
        title: 'Different types of property names',
        code: `const person = {
  name: "John",           // normal property name
  age: 30,               // normal property name
  "first-name": "John",  // property name with special characters
  "123": "number key",   // property name that's a number (as string)
  "": "empty key"        // empty string as property name
};

// Access normal properties with dot notation
console.log(person.name); // "John"
console.log(person.age); // 30

// Access special property names with bracket notation
console.log(person["first-name"]); // "John"
console.log(person["123"]); // "number key"
console.log(person[""]); // "empty key"

// You can also use variables
const propertyName = "age";
console.log(person[propertyName]); // 30`
      },
      {
        title: 'Property values of different types',
        code: `const product = {
  name: "Laptop",                    // string
  price: 999.99,                    // number
  inStock: true,                    // boolean
  colors: ["black", "white"],       // array
  specs: {                          // object
    ram: "16GB",
    storage: "512GB"
  },
  getPrice: function() {            // function
    return this.price;
  }
};

// Access different types of values
console.log(product.name); // "Laptop" (string)
console.log(product.price); // 999.99 (number)
console.log(product.inStock); // true (boolean)
console.log(product.colors[0]); // "black" (array element)
console.log(product.specs.ram); // "16GB" (nested object)
console.log(product.getPrice()); // 999.99 (function call)

// Change values
product.price = 899.99;
product.colors.push("silver");
console.log(product.price); // 899.99
console.log(product.colors); // ["black", "white", "silver"]`
      }
    ]
  }
];

export default propertiesContent; 