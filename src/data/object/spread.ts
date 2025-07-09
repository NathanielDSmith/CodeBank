const spreadContent = [
  {
    title: 'Object Spread Operator',
    examples: [
      {
        title: 'Copying objects with spread',
        code: `const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create a copy of the object
const personCopy = { ...person };
console.log(personCopy); // { name: "John", age: 30, city: "New York" }

// The copy is separate from the original
personCopy.age = 31;
console.log(person.age); // 30 (original unchanged)
console.log(personCopy.age); // 31 (copy changed)

// This is the same as Object.assign({}, person)`
      },
      {
        title: 'Adding properties with spread',
        code: `const person = {
  name: "John",
  age: 30
};

// Add new properties to a copy
const personWithId = { ...person, id: 1 };
console.log(personWithId); // { name: "John", age: 30, id: 1 }

// Add multiple properties
const completePerson = { 
  ...person, 
  city: "New York", 
  email: "john@example.com" 
};
console.log(completePerson);
// { name: "John", age: 30, city: "New York", email: "john@example.com" }`
      },
      {
        title: 'Updating properties with spread',
        code: `const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Update a property in a copy
const updatedPerson = { ...person, age: 31 };
console.log(updatedPerson); // { name: "John", age: 31, city: "New York" }

// Update multiple properties
const personWithUpdates = { 
  ...person, 
  age: 31, 
  city: "Los Angeles" 
};
console.log(personWithUpdates);
// { name: "John", age: 31, city: "Los Angeles" }

// The original object is unchanged
console.log(person.age); // 30 (still the original value)`
      }
    ]
  },
  {
    title: 'Merging Objects',
    examples: [
      {
        title: 'Combining multiple objects',
        code: `const user = {
  name: "John",
  email: "john@example.com"
};

const profile = {
  age: 30,
  city: "New York"
};

const settings = {
  theme: "dark",
  notifications: true
};

// Merge all objects into one
const completeUser = { ...user, ...profile, ...settings };
console.log(completeUser);
// {
//   name: "John",
//   email: "john@example.com",
//   age: 30,
//   city: "New York",
//   theme: "dark",
//   notifications: true
// }

// If properties have the same name, the last one wins
const user1 = { name: "John", age: 30 };
const user2 = { name: "Jane", city: "Boston" };

const merged = { ...user1, ...user2 };
console.log(merged); // { name: "Jane", age: 30, city: "Boston" }
// Note: "Jane" overwrote "John" because user2 came last`
      },
      {
        title: 'Creating objects with defaults',
        code: `// Default settings
const defaultSettings = {
  theme: "light",
  language: "en",
  notifications: true
};

// User preferences (might be incomplete)
const userPreferences = {
  theme: "dark"
  // Note: missing language and notifications
};

// Combine defaults with user preferences
const finalSettings = { ...defaultSettings, ...userPreferences };
console.log(finalSettings);
// { theme: "dark", language: "en", notifications: true }
// User's dark theme overwrote the default light theme

// You can also add new properties
const settingsWithId = { 
  ...defaultSettings, 
  ...userPreferences, 
  userId: 123 
};
console.log(settingsWithId);
// { theme: "dark", language: "en", notifications: true, userId: 123 }`
      }
    ]
  }
];

export default spreadContent; 