const methodsContent = [
  {
    title: 'Basic Object Methods',
    examples: [
      {
        title: 'Object.keys() - get all property names',
        code: `const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Get all property names as an array
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]

// Loop through all properties
keys.forEach(key => {
  console.log(key + ": " + person[key]);
});
// Output:
// name: John
// age: 30
// city: New York`
      },
      {
        title: 'Object.values() - get all property values',
        code: `const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Get all property values as an array
const values = Object.values(person);
console.log(values); // ["John", 30, "New York"]

// Check if object has a specific value
console.log(values.includes("John")); // true
console.log(values.includes("London")); // false

// Count how many properties the object has
console.log(values.length); // 3`
      },
      {
        title: 'Object.entries() - get key-value pairs',
        code: `const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Get all key-value pairs as an array
const entries = Object.entries(person);
console.log(entries);
// [
//   ["name", "John"],
//   ["age", 30],
//   ["city", "New York"]
// ]

// Loop through entries
entries.forEach(([key, value]) => {
  console.log(key + " is " + value);
});
// Output:
// name is John
// age is 30
// city is New York

// Find a specific entry
const nameEntry = entries.find(([key]) => key === "name");
console.log(nameEntry); // ["name", "John"]`
      }
    ]
  },
  {
    title: 'Object.assign() - copying objects',
    examples: [
      {
        title: 'Copying an object',
        code: `const original = {
  name: "John",
  age: 30
};

// Create a copy of the object
const copy = Object.assign({}, original);
console.log(copy); // { name: "John", age: 30 }

// The copy is separate from the original
copy.age = 31;
console.log(original.age); // 30 (unchanged)
console.log(copy.age); // 31 (changed)`
      },
      {
        title: 'Merging objects',
        code: `const user = {
  name: "John",
  email: "john@example.com"
};

const profile = {
  age: 30,
  city: "New York"
};

// Merge two objects into a new one
const completeUser = Object.assign({}, user, profile);
console.log(completeUser);
// { name: "John", email: "john@example.com", age: 30, city: "New York" }

// If properties have the same name, the last one wins
const settings = {
  theme: "dark",
  notifications: true
};

const userWithSettings = Object.assign({}, user, profile, settings);
console.log(userWithSettings);
// { name: "John", email: "john@example.com", age: 30, city: "New York", theme: "dark", notifications: true }`
      }
    ]
  }
];

export default methodsContent; 