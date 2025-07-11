const searchingContent = [
  {
    title: 'Finding Elements',
    examples: [
      {
        title: 'Using find() and findIndex()',
        code: '// Finding elements with find()\nlet numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// Find first even number\nlet firstEven = numbers.find(num => num % 2 === 0); // 2\n\n// Find first number greater than 5\nlet firstGreaterThan5 = numbers.find(num => num > 5); // 6\n\n// Find objects by property\nlet users = [\n  { id: 1, name: "Alice", age: 25 },\n  { id: 2, name: "Bob", age: 30 },\n  { id: 3, name: "Charlie", age: 35 }\n];\n\n// Find user by name\nlet alice = users.find(user => user.name === "Alice");\n\n// Find user by ID\nlet userById = users.find(user => user.id === 2);\n\n// Find with complex conditions\nlet products = [\n  { name: "Laptop", price: 999, inStock: true },\n  { name: "Phone", price: 699, inStock: false },\n  { name: "Tablet", price: 399, inStock: true }\n];\n\n// Find first expensive item in stock\nlet expensiveInStock = products.find(product => \n  product.price > 500 && product.inStock\n);\n\n// Using findIndex()\nlet fruits = ["apple", "banana", "orange", "grape"];\n\n// Find index of "orange"\nlet orangeIndex = fruits.findIndex(fruit => fruit === "orange"); // 2\n\n// Find index of first fruit starting with "b"\nlet bIndex = fruits.findIndex(fruit => fruit.startsWith("b")); // 1\n\n// Find index of first number greater than 3\nlet greaterThan3Index = numbers.findIndex(num => num > 3); // 3'
      },
      {
        title: 'Using includes() and indexOf()',
        code: '// Checking if array contains element\nlet colors = ["red", "blue", "green", "yellow"];\n\n// includes() - checks if element exists\nlet hasRed = colors.includes("red"); // true\nlet hasPurple = colors.includes("purple"); // false\n\n// includes() with objects (doesn\'t work directly)\nlet users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 30 }\n];\n\n// Check if user exists by name\nlet hasAlice = users.some(user => user.name === "Alice"); // true\n\n// indexOf() - returns index of element\nlet redIndex = colors.indexOf("red"); // 0\nlet purpleIndex = colors.indexOf("purple"); // -1 (not found)\n\n// lastIndexOf() - returns last index of element\nlet numbers = [1, 2, 3, 2, 4, 2, 5];\nlet lastTwoIndex = numbers.lastIndexOf(2); // 5\n\n// Checking for multiple elements\nlet requiredColors = ["red", "blue"];\nlet hasAllColors = requiredColors.every(color => colors.includes(color)); // true\n\nlet optionalColors = ["red", "purple"];\nlet hasAnyColor = optionalColors.some(color => colors.includes(color)); // true\n\n// Case-insensitive search\nlet mixedCase = ["Apple", "Banana", "Cherry"];\nlet hasApple = mixedCase.some(fruit => \n  fruit.toLowerCase() === "apple"\n); // true'
      }
    ]
  },
  {
    title: 'Advanced Searching',
    examples: [
      {
        title: 'Searching with custom functions',
        code: '// Custom search functions\nlet products = [\n  { name: "Laptop", price: 999, category: "Electronics" },\n  { name: "Book", price: 15, category: "Books" },\n  { name: "Phone", price: 699, category: "Electronics" },\n  { name: "Desk", price: 200, category: "Furniture" }\n];\n\n// Search by multiple criteria\nfunction findProduct(criteria) {\n  return products.find(product => {\n    return Object.keys(criteria).every(key => {\n      if (typeof criteria[key] === "string") {\n        return product[key].toLowerCase().includes(criteria[key].toLowerCase());\n      }\n      return product[key] === criteria[key];\n    });\n  });\n}\n\nlet laptop = findProduct({ category: "Electronics", price: 999 });\nlet cheapBook = findProduct({ category: "Books", price: 15 });\n\n// Search with fuzzy matching\nfunction fuzzySearch(array, query) {\n  const searchTerm = query.toLowerCase();\n  return array.filter(item => {\n    if (typeof item === "string") {\n      return item.toLowerCase().includes(searchTerm);\n    }\n    if (typeof item === "object") {\n      return Object.values(item).some(value => \n        String(value).toLowerCase().includes(searchTerm)\n      );\n    }\n    return false;\n  });\n}\n\nlet searchResults = fuzzySearch(products, "lap"); // Finds laptop\n\n// Search with scoring\nfunction searchWithScore(array, query) {\n  const searchTerm = query.toLowerCase();\n  return array\n    .map(item => {\n      let score = 0;\n      if (typeof item === "string") {\n        if (item.toLowerCase().startsWith(searchTerm)) score += 10;\n        if (item.toLowerCase().includes(searchTerm)) score += 5;\n      }\n      return { item, score };\n    })\n    .filter(result => result.score > 0)\n    .sort((a, b) => b.score - a.score)\n    .map(result => result.item);\n}\n\nlet scoredResults = searchWithScore(["apple", "banana", "apricot"], "ap");'
      }
    ]
  }
];

export default searchingContent; 