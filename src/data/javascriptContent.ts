import { Section, PageContent } from '../types/index';

export const javascriptSections: Section[] = [
  { id: 'variables', title: 'Variables', icon: '📦' },
  { id: 'functions', title: 'Functions', icon: '⚙️' },
  { id: 'arrays', title: 'Arrays', icon: '📋' },
  { id: 'objects', title: 'Objects', icon: '📦' },
  { id: 'strings', title: 'Strings', icon: '📝' },
  { id: 'conditionals', title: 'Conditionals', icon: '🔀' },
  { id: 'loops', title: 'Loops', icon: '🔄' },
  { id: 'events', title: 'Events', icon: '🎯' },
  { id: 'async', title: 'Async/Await', icon: '⏱️' },
  { id: 'dom', title: 'DOM Manipulation', icon: '🌳' },
  { id: 'errors', title: 'Error Handling', icon: '⚠️' },
  { id: 'modules', title: 'Modules', icon: '📦' }
];

export const javascriptContent: PageContent = {
  variables: [
    {
      title: 'How to declare variables',
      examples: [
        {
          title: 'Using let (recommended for variables that change)',
          code: 'let name = "John";\nlet age = 25;\nlet isStudent = true;\n\n// You can change let variables\nage = 26;'
        },
        {
          title: 'Using const (recommended for values that don\'t change)',
          code: 'const PI = 3.14159;\nconst API_URL = "https://api.example.com";\nconst MAX_USERS = 100;\n\n// const variables cannot be reassigned\n// PI = 3.14; // This would cause an error!'
        },
        {
          title: 'Using var (legacy - avoid in modern code)',
          code: 'var oldWay = "not recommended";\nvar anotherVar = 42;'
        }
      ]
    },
    {
      title: 'Template literals (modern way to combine strings)',
      examples: [
        {
          title: 'Basic template literal',
          code: 'const name = "John";\nconst age = 25;\nconst greeting = `Hello, ${name}! You are ${age} years old.`;\nconsole.log(greeting); // "Hello, John! You are 25 years old."'
        },
        {
          title: 'Multi-line template literal',
          code: 'const message = `\n  Dear User,\n  \n  Welcome to our website!\n  We hope you enjoy your visit.\n  \n  Best regards,\n  The Team\n`;'
        }
      ]
    }
  ],
  functions: [
    {
      title: 'How to create functions',
      examples: [
        {
          title: 'Function declaration (traditional way)',
          code: 'function greet(name) {\n  return `Hello, ${name}!`;\n}\n\n// Call the function\nconst message = greet("Alice");\nconsole.log(message); // "Hello, Alice!"'
        },
        {
          title: 'Arrow function (modern way)',
          code: 'const greet = (name) => {\n  return `Hello, ${name}!`;\n};\n\n// Or shorter version\nconst greetShort = name => `Hello, ${name}!`;'
        },
        {
          title: 'Arrow function with multiple parameters',
          code: 'const add = (a, b) => a + b;\nconst multiply = (x, y) => x * y;\n\nconsole.log(add(5, 3)); // 8\nconsole.log(multiply(4, 7)); // 28'
        }
      ]
    },
    {
      title: 'Default parameters',
      examples: [
        {
          title: 'Single default parameter',
          code: 'function greet(name = "Guest") {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet("Alice")); // "Hello, Alice!"\nconsole.log(greet()); // "Hello, Guest!"'
        },
        {
          title: 'Multiple default parameters',
          code: 'function createUser(name = "Anonymous", age = 18, email = "") {\n  return { name, age, email };\n}\n\nconsole.log(createUser("John", 25, "john@email.com"));\nconsole.log(createUser()); // Uses all defaults'
        }
      ]
    }
  ],
  arrays: [
    {
      title: 'Creating and using arrays',
      examples: [
        {
          title: 'Creating arrays',
          code: '// Different ways to create arrays\nconst fruits = ["apple", "banana", "orange"];\nconst numbers = [1, 2, 3, 4, 5];\nconst mixed = ["text", 42, true, null];\n\nconsole.log(fruits[0]); // "apple"\nconsole.log(fruits.length); // 3'
        },
        {
          title: 'Adding and removing items',
          code: 'const colors = ["red", "green"];\n\n// Add to end\ncolors.push("blue");\nconsole.log(colors); // ["red", "green", "blue"]\n\n// Remove from end\ncolors.pop();\nconsole.log(colors); // ["red", "green"]\n\n// Add to beginning\ncolors.unshift("yellow");\nconsole.log(colors); // ["yellow", "red", "green"]'
        }
      ]
    },
    {
      title: 'Array methods for beginners',
      examples: [
        {
          title: 'forEach - loop through each item',
          code: 'const numbers = [1, 2, 3, 4, 5];\n\nnumbers.forEach(number => {\n  console.log(`Number: ${number}`);\n});\n// Output:\n// Number: 1\n// Number: 2\n// Number: 3\n// Number: 4\n// Number: 5'
        },
        {
          title: 'map - transform each item',
          code: 'const numbers = [1, 2, 3, 4, 5];\n\nconst doubled = numbers.map(number => number * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]\n\nconst names = ["alice", "bob", "charlie"];\nconst capitalized = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));\nconsole.log(capitalized); // ["Alice", "Bob", "Charlie"]'
        },
        {
          title: 'filter - keep only certain items',
          code: 'const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\nconst evenNumbers = numbers.filter(number => number % 2 === 0);\nconsole.log(evenNumbers); // [2, 4, 6, 8, 10]\n\nconst fruits = ["apple", "banana", "cherry", "date"];\nconst longFruits = fruits.filter(fruit => fruit.length > 5);\nconsole.log(longFruits); // ["banana", "cherry"]'
        }
      ]
    }
  ],
  objects: [
    {
      title: 'Creating and using objects',
      examples: [
        {
          title: 'Creating objects',
          code: '// Object literal syntax\nconst person = {\n  name: "John",\n  age: 30,\n  city: "New York",\n  isStudent: false\n};\n\nconsole.log(person.name); // "John"\nconsole.log(person["age"]); // 30'
        },
        {
          title: 'Adding and modifying properties',
          code: 'const user = {\n  name: "Alice",\n  email: "alice@email.com"\n};\n\n// Add new property\nuser.age = 25;\nuser.isActive = true;\n\n// Modify existing property\nuser.email = "alice.new@email.com";\n\nconsole.log(user);\n// { name: "Alice", email: "alice.new@email.com", age: 25, isActive: true }'
        }
      ]
    },
    {
      title: 'Object methods and destructuring',
      examples: [
        {
          title: 'Objects with methods',
          code: 'const calculator = {\n  add: function(a, b) {\n    return a + b;\n  },\n  subtract(a, b) {\n    return a - b;\n  },\n  multiply: (a, b) => a * b\n};\n\nconsole.log(calculator.add(5, 3)); // 8\nconsole.log(calculator.subtract(10, 4)); // 6\nconsole.log(calculator.multiply(2, 7)); // 14'
        },
        {
          title: 'Destructuring objects',
          code: 'const person = {\n  name: "Bob",\n  age: 28,\n  city: "Los Angeles",\n  occupation: "Developer"\n};\n\n// Extract specific properties\nconst { name, age } = person;\nconsole.log(name); // "Bob"\nconsole.log(age); // 28\n\n// Extract with new variable names\nconst { name: fullName, city: location } = person;\nconsole.log(fullName); // "Bob"\nconsole.log(location); // "Los Angeles"'
        }
      ]
    }
  ],
  strings: [
    {
      title: 'String basics and methods',
      examples: [
        {
          title: 'Creating strings',
          code: '// Different ways to create strings\nconst singleQuotes = \'Hello\';\nconst doubleQuotes = "World";\nconst backticks = `JavaScript`;\n\nconsole.log(singleQuotes + " " + doubleQuotes); // "Hello World"'
        },
        {
          title: 'Common string methods',
          code: 'const text = "  Hello World  ";\n\nconsole.log(text.length); // 15 (includes spaces)\nconsole.log(text.trim()); // "Hello World"\nconsole.log(text.toUpperCase()); // "  HELLO WORLD  "\nconsole.log(text.toLowerCase()); // "  hello world  "\nconsole.log(text.includes("World")); // true\nconsole.log(text.startsWith("  ")); // true'
        }
      ]
    },
    {
      title: 'String manipulation',
      examples: [
        {
          title: 'Splitting and joining strings',
          code: 'const sentence = "JavaScript is awesome";\n\n// Split into array\nconst words = sentence.split(" ");\nconsole.log(words); // ["JavaScript", "is", "awesome"]\n\n// Join array back to string\nconst newSentence = words.join("-");\nconsole.log(newSentence); // "JavaScript-is-awesome"\n\n// Replace parts of string\nconst replaced = sentence.replace("awesome", "amazing");\nconsole.log(replaced); // "JavaScript is amazing"'
        },
        {
          title: 'String interpolation with template literals',
          code: 'const name = "Alice";\nconst age = 25;\nconst city = "Boston";\n\n// Old way (concatenation)\nconst oldWay = "My name is " + name + ", I am " + age + " years old, and I live in " + city + ".";\n\n// New way (template literals)\nconst newWay = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;\n\nconsole.log(oldWay);\nconsole.log(newWay);\n// Both output: "My name is Alice, I am 25 years old, and I live in Boston."'
        }
      ]
    }
  ],
  conditionals: [
    {
      title: 'If statements and comparisons',
      examples: [
        {
          title: 'Basic if statement',
          code: 'const age = 18;\n\nif (age >= 18) {\n  console.log("You are an adult");\n} else {\n  console.log("You are a minor");\n}\n\n// Output: "You are an adult"'
        },
        {
          title: 'If-else if-else chain',
          code: 'const score = 85;\n\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else if (score >= 70) {\n  console.log("Grade: C");\n} else {\n  console.log("Grade: F");\n}\n\n// Output: "Grade: B"'
        }
      ]
    },
    {
      title: 'Comparison operators and logical operators',
      examples: [
        {
          title: 'Comparison operators',
          code: 'const a = 5;\nconst b = 10;\n\nconsole.log(a < b);   // true\nconsole.log(a > b);   // false\nconsole.log(a <= 5);  // true\nconsole.log(b >= 10); // true\nconsole.log(a === 5); // true (strict equality)\nconsole.log(a == "5"); // true (loose equality)\nconsole.log(a !== "5"); // true (strict inequality)'
        },
        {
          title: 'Logical operators (AND, OR, NOT)',
          code: 'const isLoggedIn = true;\nconst hasPermission = false;\nconst isAdmin = true;\n\n// AND operator (&&)\nif (isLoggedIn && hasPermission) {\n  console.log("User can access");\n} else {\n  console.log("Access denied");\n}\n\n// OR operator (||)\nif (isLoggedIn || isAdmin) {\n  console.log("User can view content");\n}\n\n// NOT operator (!)\nif (!hasPermission) {\n  console.log("User needs permission");\n}'
        }
      ]
    },
    {
      title: 'Ternary operator (shorthand if-else)',
      examples: [
        {
          title: 'Basic ternary operator',
          code: 'const age = 20;\nconst message = age >= 18 ? "Adult" : "Minor";\nconsole.log(message); // "Adult"\n\n// Same as:\n// if (age >= 18) {\n//   message = "Adult";\n// } else {\n//   message = "Minor";\n// }'
        },
        {
          title: 'Nested ternary operators',
          code: 'const score = 85;\nconst grade = score >= 90 ? "A" :\n              score >= 80 ? "B" :\n              score >= 70 ? "C" : "F";\n\nconsole.log(`Grade: ${grade}`); // "Grade: B"'
        }
      ]
    }
  ],
  loops: [
    {
      title: 'For loops',
      examples: [
        {
          title: 'Basic for loop',
          code: '// Count from 1 to 5\nfor (let i = 1; i <= 5; i++) {\n  console.log(`Count: ${i}`);\n}\n// Output:\n// Count: 1\n// Count: 2\n// Count: 3\n// Count: 4\n// Count: 5'
        },
        {
          title: 'Loop through array with for loop',
          code: 'const fruits = ["apple", "banana", "orange", "grape"];\n\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(`Fruit ${i + 1}: ${fruits[i]}`);\n}\n// Output:\n// Fruit 1: apple\n// Fruit 2: banana\n// Fruit 3: orange\n// Fruit 4: grape'
        }
      ]
    },
    {
      title: 'For...of and For...in loops',
      examples: [
        {
          title: 'For...of loop (for arrays and strings)',
          code: 'const colors = ["red", "green", "blue"];\n\n// Loop through array values\nfor (const color of colors) {\n  console.log(`Color: ${color}`);\n}\n// Output:\n// Color: red\n// Color: green\n// Color: blue\n\n// Loop through string characters\nconst word = "Hello";\nfor (const letter of word) {\n  console.log(`Letter: ${letter}`);\n}'
        },
        {
          title: 'For...in loop (for object properties)',
          code: 'const person = {\n  name: "John",\n  age: 30,\n  city: "New York"\n};\n\n// Loop through object properties\nfor (const key in person) {\n  console.log(`${key}: ${person[key]}`);\n}\n// Output:\n// name: John\n// age: 30\n// city: New York'
        }
      ]
    },
    {
      title: 'While and do-while loops',
      examples: [
        {
          title: 'While loop',
          code: 'let count = 0;\n\nwhile (count < 3) {\n  console.log(`Count is: ${count}`);\n  count++;\n}\n// Output:\n// Count is: 0\n// Count is: 1\n// Count is: 2'
        },
        {
          title: 'Do-while loop (executes at least once)',
          code: 'let number = 1;\n\ndo {\n  console.log(`Number: ${number}`);\n  number++;\n} while (number <= 3);\n// Output:\n// Number: 1\n// Number: 2\n// Number: 3'
        }
      ]
    }
  ],
  events: [
    {
      title: 'Basic event handling',
      examples: [
        {
          title: 'Click event',
          code: '// HTML: <button id="myButton">Click me!</button>\n\nconst button = document.getElementById("myButton");\n\nbutton.addEventListener("click", function() {\n  console.log("Button was clicked!");\n  alert("Hello from JavaScript!");\n});\n\n// Or using arrow function\nbutton.addEventListener("click", () => {\n  console.log("Button clicked with arrow function!");\n});'
        },
        {
          title: 'Input change event',
          code: '// HTML: <input type="text" id="nameInput" placeholder="Enter your name">\n\nconst nameInput = document.getElementById("nameInput");\n\nnameInput.addEventListener("input", function(event) {\n  const value = event.target.value;\n  console.log(`Typing: ${value}`);\n});\n\nnameInput.addEventListener("change", function(event) {\n  const value = event.target.value;\n  console.log(`Final value: ${value}`);\n});'
        }
      ]
    },
    {
      title: 'More event types',
      examples: [
        {
          title: 'Mouse events',
          code: '// HTML: <div id="myDiv" style="width: 200px; height: 200px; background: lightblue;">Hover over me</div>\n\nconst div = document.getElementById("myDiv");\n\n// Mouse enter\ndiv.addEventListener("mouseenter", () => {\n  console.log("Mouse entered the div");\n  div.style.background = "lightgreen";\n});\n\n// Mouse leave\ndiv.addEventListener("mouseleave", () => {\n  console.log("Mouse left the div");\n  div.style.background = "lightblue";\n});\n\n// Double click\ndiv.addEventListener("dblclick", () => {\n  console.log("Double clicked!");\n  div.style.background = "lightcoral";\n});'
        },
        {
          title: 'Keyboard events',
          code: '// HTML: <input type="text" id="keyboardInput" placeholder="Type something">\n\nconst input = document.getElementById("keyboardInput");\n\n// Key down\ninput.addEventListener("keydown", (event) => {\n  console.log(`Key pressed: ${event.key}`);\n});\n\n// Key up\ninput.addEventListener("keyup", (event) => {\n  console.log(`Key released: ${event.key}`);\n});\n\n// Enter key specifically\ninput.addEventListener("keypress", (event) => {\n  if (event.key === "Enter") {\n    console.log("Enter key pressed!");\n  }\n});'
        }
      ]
    }
  ],
  async: [
    {
      title: 'Promises basics',
      examples: [
        {
          title: 'Creating a simple promise',
          code: 'const myPromise = new Promise((resolve, reject) => {\n  // Simulate some work\n  setTimeout(() => {\n    const randomNumber = Math.random();\n    \n    if (randomNumber > 0.5) {\n      resolve(`Success! Number was ${randomNumber}`);\n    } else {\n      reject(`Failed! Number was ${randomNumber}`);\n    }\n  }, 1000);\n});\n\n// Using the promise\nmyPromise\n  .then(result => {\n    console.log("Success:", result);\n  })\n  .catch(error => {\n    console.log("Error:", error);\n  });'
        },
        {
          title: 'Promise with .then() chaining',
          code: 'function fetchUserData(userId) {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({\n        id: userId,\n        name: "John Doe",\n        email: "john@example.com"\n      });\n    }, 1000);\n  });\n}\n\nfetchUserData(123)\n  .then(user => {\n    console.log("User data:", user);\n    return user.name; // Pass to next .then()\n  })\n  .then(name => {\n    console.log("User name:", name);\n  })\n  .catch(error => {\n    console.log("Error:", error);\n  });'
        }
      ]
    },
    {
      title: 'Async/Await (modern way)',
      examples: [
        {
          title: 'Basic async/await',
          code: 'async function getUserData(userId) {\n  try {\n    // Simulate API call\n    const response = await new Promise((resolve) => {\n      setTimeout(() => {\n        resolve({\n          id: userId,\n          name: "Alice Smith",\n          email: "alice@example.com"\n        });\n      }, 1000);\n    });\n    \n    console.log("User data:", response);\n    return response;\n  } catch (error) {\n    console.log("Error:", error);\n  }\n}\n\n// Call the async function\ngetUserData(456);'
        },
        {
          title: 'Multiple async operations',
          code: 'async function loadUserAndPosts(userId) {\n  try {\n    // Load user data\n    const user = await fetchUserData(userId);\n    console.log("User loaded:", user.name);\n    \n    // Load user posts\n    const posts = await fetchUserPosts(userId);\n    console.log("Posts loaded:", posts.length);\n    \n    return { user, posts };\n  } catch (error) {\n    console.log("Error loading data:", error);\n  }\n}\n\n// Helper functions (simulated)\nfunction fetchUserData(id) {\n  return new Promise(resolve => {\n    setTimeout(() => resolve({ id, name: "Bob" }), 500);\n  });\n}\n\nfunction fetchUserPosts(id) {\n  return new Promise(resolve => {\n    setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 500);\n  });\n}'
        }
      ]
    }
  ],
  dom: [
    {
      title: 'Selecting elements',
      examples: [
        {
          title: 'Different ways to select elements',
          code: '// Select by ID\nconst header = document.getElementById("header");\n\n// Select by class name (returns array-like object)\nconst buttons = document.getElementsByClassName("btn");\n\n// Select by tag name\nconst paragraphs = document.getElementsByTagName("p");\n\n// Modern way - querySelector (returns first match)\nconst firstButton = document.querySelector(".btn");\nconst mainContent = document.querySelector("#main");\n\n// Modern way - querySelectorAll (returns all matches)\nconst allButtons = document.querySelectorAll(".btn");\nconst allParagraphs = document.querySelectorAll("p");'
        },
        {
          title: 'Working with selected elements',
          code: '// HTML: <div id="myDiv">Hello World</div>\n\nconst div = document.getElementById("myDiv");\n\n// Change text content\ndiv.textContent = "New text content";\n\n// Change HTML content\ndiv.innerHTML = "<strong>Bold text</strong>";\n\n// Change CSS styles\ndiv.style.backgroundColor = "lightblue";\ndiv.style.padding = "20px";\ndiv.style.borderRadius = "5px";\n\n// Add/remove CSS classes\ndiv.classList.add("highlight");\ndiv.classList.remove("highlight");\ndiv.classList.toggle("active");'
        }
      ]
    },
    {
      title: 'Creating and modifying elements',
      examples: [
        {
          title: 'Creating new elements',
          code: '// Create a new paragraph element\nconst newParagraph = document.createElement("p");\nnewParagraph.textContent = "This is a new paragraph";\nnewParagraph.className = "new-paragraph";\n\n// Add it to the page\nconst container = document.getElementById("container");\ncontainer.appendChild(newParagraph);\n\n// Create a button\nconst newButton = document.createElement("button");\nnewButton.textContent = "Click me";\nnewButton.addEventListener("click", () => {\n  alert("Button clicked!");\n});\n\n// Insert before an existing element\nconst existingElement = document.getElementById("existing");\nexistingElement.parentNode.insertBefore(newButton, existingElement);'
        },
        {
          title: 'Removing elements',
          code: '// Remove an element\nconst elementToRemove = document.getElementById("removeMe");\nelementToRemove.remove();\n\n// Or using parent node\nconst parent = elementToRemove.parentNode;\nparent.removeChild(elementToRemove);\n\n// Clear all children of an element\nconst container = document.getElementById("container");\ncontainer.innerHTML = ""; // Removes all child elements\n\n// Or remove children one by one\nwhile (container.firstChild) {\n  container.removeChild(container.firstChild);\n}'
        }
      ]
    }
  ],
  errors: [
    {
      title: 'Try-catch blocks',
      examples: [
        {
          title: 'Basic error handling',
          code: 'try {\n  // Code that might cause an error\n  const result = 10 / 0;\n  console.log("Result:", result);\n  \n  // This will cause an error\n  const undefinedVariable = someUndefinedVariable;\n} catch (error) {\n  // Handle the error\n  console.log("An error occurred:", error.message);\n  console.log("Error type:", error.name);\n} finally {\n  // This always runs, whether there was an error or not\n  console.log("This always executes");\n}'
        },
        {
          title: 'Handling specific types of errors',
          code: 'function divideNumbers(a, b) {\n  try {\n    if (b === 0) {\n      throw new Error("Cannot divide by zero!");\n    }\n    \n    if (typeof a !== "number" || typeof b !== "number") {\n      throw new TypeError("Both arguments must be numbers");\n    }\n    \n    return a / b;\n  } catch (error) {\n    if (error instanceof TypeError) {\n      console.log("Type error:", error.message);\n    } else {\n      console.log("Other error:", error.message);\n    }\n    return null;\n  }\n}\n\nconsole.log(divideNumbers(10, 2)); // 5\nconsole.log(divideNumbers(10, 0)); // null, logs error\nconsole.log(divideNumbers("10", 2)); // null, logs type error'
        }
      ]
    },
    {
      title: 'Custom errors and error prevention',
      examples: [
        {
          title: 'Creating custom errors',
          code: 'class ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = "ValidationError";\n    this.field = field;\n  }\n}\n\nfunction validateUser(user) {\n  if (!user.name) {\n    throw new ValidationError("Name is required", "name");\n  }\n  \n  if (!user.email) {\n    throw new ValidationError("Email is required", "email");\n  }\n  \n  if (user.age < 0) {\n    throw new ValidationError("Age cannot be negative", "age");\n  }\n  \n  return true;\n}\n\ntry {\n  validateUser({ name: "", age: 25 });\n} catch (error) {\n  if (error instanceof ValidationError) {\n    console.log(`Validation error in ${error.field}: ${error.message}`);\n  }\n}'
        },
        {
          title: 'Error prevention techniques',
          code: '// 1. Check if element exists before using it\nconst element = document.getElementById("myElement");\nif (element) {\n  element.textContent = "Hello";\n} else {\n  console.log("Element not found");\n}\n\n// 2. Check if property exists before accessing it\nconst user = { name: "John" };\nconst email = user.email || "No email provided";\n\n// 3. Use optional chaining (modern JavaScript)\nconst userEmail = user?.email?.toLowerCase();\n\n// 4. Provide default values\nfunction greet(name = "Guest") {\n  return `Hello, ${name}!`;\n}\n\n// 5. Validate input parameters\nfunction calculateArea(width, height) {\n  if (typeof width !== "number" || typeof height !== "number") {\n    throw new Error("Width and height must be numbers");\n  }\n  \n  if (width <= 0 || height <= 0) {\n    throw new Error("Width and height must be positive");\n  }\n  \n  return width * height;\n}'
        }
      ]
    }
  ],
  modules: [
    {
      title: 'Creating and using modules',
      examples: [
        {
          title: 'Exporting from a module',
          code: '// math.js - Exporting functions and variables\n\n// Named exports\nexport function add(a, b) {\n  return a + b;\n}\n\nexport function subtract(a, b) {\n  return a - b;\n}\n\nexport const PI = 3.14159;\n\nexport class Calculator {\n  constructor() {\n    this.result = 0;\n  }\n  \n  add(value) {\n    this.result += value;\n    return this;\n  }\n  \n  getResult() {\n    return this.result;\n  }\n}\n\n// Default export (only one per file)\nexport default function multiply(a, b) {\n  return a * b;\n}'
        },
        {
          title: 'Importing from a module',
          code: '// main.js - Importing from math.js\n\n// Import named exports\nimport { add, subtract, PI, Calculator } from "./math.js";\n\n// Import default export\nimport multiply from "./math.js";\n\n// Use the imported functions\nconsole.log(add(5, 3)); // 8\nconsole.log(subtract(10, 4)); // 6\nconsole.log(PI); // 3.14159\nconsole.log(multiply(2, 7)); // 14\n\n// Use the imported class\nconst calc = new Calculator();\ncalc.add(5).add(3);\nconsole.log(calc.getResult()); // 8\n\n// Import everything as an object\nimport * as MathUtils from "./math.js";\nconsole.log(MathUtils.add(2, 3)); // 5'
        }
      ]
    },
    {
      title: 'Module organization and best practices',
      examples: [
        {
          title: 'Organizing modules by feature',
          code: '// user.js - User-related functions\n\nexport function createUser(name, email) {\n  return {\n    id: Date.now(),\n    name,\n    email,\n    createdAt: new Date()\n  };\n}\n\nexport function validateUser(user) {\n  const errors = [];\n  \n  if (!user.name) errors.push("Name is required");\n  if (!user.email) errors.push("Email is required");\n  \n  return {\n    isValid: errors.length === 0,\n    errors\n  };\n}\n\n// utils.js - Utility functions\nexport function formatDate(date) {\n  return date.toLocaleDateString();\n}\n\nexport function capitalize(str) {\n  return str.charAt(0).toUpperCase() + str.slice(1);\n}\n\n// main.js - Using multiple modules\nimport { createUser, validateUser } from "./user.js";\nimport { formatDate, capitalize } from "./utils.js";\n\nconst user = createUser("john", "john@email.com");\nconst validation = validateUser(user);\n\nif (validation.isValid) {\n  console.log(`User ${capitalize(user.name)} created on ${formatDate(user.createdAt)}`);\n} else {\n  console.log("Validation errors:", validation.errors);\n}'
        },
        {
          title: 'Module with default and named exports',
          code: '// config.js - Configuration module\n\n// Default export (main configuration)\nexport default {\n  apiUrl: "https://api.example.com",\n  timeout: 5000,\n  retries: 3\n};\n\n// Named exports (specific settings)\nexport const API_ENDPOINTS = {\n  users: "/users",\n  posts: "/posts",\n  comments: "/comments"\n};\n\nexport const ERROR_MESSAGES = {\n  network: "Network error occurred",\n  timeout: "Request timed out",\n  notFound: "Resource not found"\n};\n\n// main.js - Using the config module\nimport config, { API_ENDPOINTS, ERROR_MESSAGES } from "./config.js";\n\nconsole.log("API URL:", config.apiUrl);\nconsole.log("Users endpoint:", API_ENDPOINTS.users);\nconsole.log("Timeout error:", ERROR_MESSAGES.timeout);'
        }
      ]
    }
  ]
}; 