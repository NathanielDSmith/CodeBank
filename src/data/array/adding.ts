const addingContent = [
  {
    title: 'Adding Elements',
    examples: [
      {
        title: 'Adding elements to arrays',
        code: '// Adding to the end\nlet numbers = [1, 2, 3];\n\n// push() - adds to the end\nnumbers.push(4); // [1, 2, 3, 4]\nnumbers.push(5, 6); // [1, 2, 3, 4, 5, 6]\n\n// Adding to the beginning\nlet fruits = ["banana", "orange"];\n\n// unshift() - adds to the beginning\nfruits.unshift("apple"); // ["apple", "banana", "orange"]\nfruits.unshift("grape", "kiwi"); // ["grape", "kiwi", "apple", "banana", "orange"]\n\n// Adding at specific position\nlet colors = ["red", "blue", "green"];\n\n// splice() - insert at specific index\ncolors.splice(1, 0, "yellow"); // ["red", "yellow", "blue", "green"]\ncolors.splice(2, 0, "purple", "pink"); // ["red", "yellow", "purple", "pink", "blue", "green"]\n\n// Using spread operator\nlet original = [1, 2, 3];\nlet withNewElement = [...original, 4]; // [1, 2, 3, 4]\nlet withNewBeginning = [0, ...original]; // [0, 1, 2, 3]\nlet withNewMiddle = [...original.slice(0, 2), 2.5, ...original.slice(2)]; // [1, 2, 2.5, 3]'
      },
      {
        title: 'Adding multiple elements',
        code: '// Adding arrays together\nlet array1 = [1, 2, 3];\nlet array2 = [4, 5, 6];\n\n// concat() - combines arrays\nlet combined = array1.concat(array2); // [1, 2, 3, 4, 5, 6]\nlet combinedMultiple = array1.concat(array2, [7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]\n\n// Spread operator for combining\nlet spreadCombined = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]\n\n// Adding with conditions\nlet users = [\n  { name: "Alice", active: true },\n  { name: "Bob", active: false }\n];\n\nlet newUsers = [\n  { name: "Charlie", active: true },\n  { name: "Diana", active: true }\n];\n\n// Only add active users\nlet allActiveUsers = [...users, ...newUsers.filter(user => user.active)];\n\n// Adding unique elements\nlet existingTags = ["javascript", "react", "node"];\nlet newTags = ["react", "typescript", "vue"];\n\n// Add only unique tags\nlet allTags = [...existingTags, ...newTags.filter(tag => !existingTags.includes(tag))];\n// ["javascript", "react", "node", "typescript", "vue"]\n\n// Adding with Set for uniqueness\nlet uniqueTags = [...new Set([...existingTags, ...newTags])];\n// ["javascript", "react", "node", "typescript", "vue"]'
      }
    ]
  },
  {
    title: 'Removing Elements',
    examples: [
      {
        title: 'Removing elements from arrays',
        code: '// Removing from the end\nlet numbers = [1, 2, 3, 4, 5];\n\n// pop() - removes from the end\nlet lastElement = numbers.pop(); // 5, array becomes [1, 2, 3, 4]\n\n// Removing from the beginning\nlet fruits = ["apple", "banana", "orange", "grape"];\n\n// shift() - removes from the beginning\nlet firstElement = fruits.shift(); // "apple", array becomes ["banana", "orange", "grape"]\n\n// Removing at specific position\nlet colors = ["red", "blue", "green", "yellow", "purple"];\n\n// splice() - remove at specific index\ncolors.splice(1, 1); // Removes "blue", array becomes ["red", "green", "yellow", "purple"]\ncolors.splice(2, 2); // Removes 2 elements starting at index 2\n\n// Using filter() to remove elements\nlet numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// Remove even numbers\nlet oddNumbers = numbers.filter(num => num % 2 !== 0); // [1, 3, 5, 7, 9]\n\n// Remove specific values\nlet items = ["apple", "banana", "apple", "orange", "apple"];\nlet noApples = items.filter(item => item !== "apple"); // ["banana", "orange"]\n\n// Remove duplicates\nlet duplicates = [1, 2, 2, 3, 3, 4, 5, 5];\nlet unique = duplicates.filter((item, index, arr) => arr.indexOf(item) === index);\n// [1, 2, 3, 4, 5]'
      },
      {
        title: 'Advanced removal techniques',
        code: '// Removing with slice()\nlet array = [1, 2, 3, 4, 5];\n\n// Remove first element (immutable)\nlet withoutFirst = array.slice(1); // [2, 3, 4, 5]\n\n// Remove last element (immutable)\nlet withoutLast = array.slice(0, -1); // [1, 2, 3, 4]\n\n// Remove from middle (immutable)\nlet withoutMiddle = [...array.slice(0, 2), ...array.slice(3)]; // [1, 2, 4, 5]\n\n// Removing objects by property\nlet users = [\n  { id: 1, name: "Alice", active: true },\n  { id: 2, name: "Bob", active: false },\n  { id: 3, name: "Charlie", active: true },\n  { id: 4, name: "Diana", active: false }\n];\n\n// Remove inactive users\nlet activeUsers = users.filter(user => user.active);\n\n// Remove by ID\nlet removeById = (id) => users.filter(user => user.id !== id);\nlet withoutUser2 = removeById(2);\n\n// Remove multiple items\nlet items = ["apple", "banana", "orange", "grape", "kiwi"];\nlet itemsToRemove = ["banana", "grape"];\nlet filteredItems = items.filter(item => !itemsToRemove.includes(item));\n// ["apple", "orange", "kiwi"]\n\n// Remove with index tracking\nlet numbers = [1, 2, 3, 4, 5];\nlet indicesToRemove = [1, 3];\nlet result = numbers.filter((_, index) => !indicesToRemove.includes(index));\n// [1, 3, 5]'
      }
    ]
  }
];

export default addingContent; 