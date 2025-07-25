const transformingContent = [
  {
    title: 'Array Transformations',
    examples: [
      {
        title: 'Basic transformations',
        code: '// Transforming array elements\nlet numbers = [1, 2, 3, 4, 5];\n\n// Double each number\nlet doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]\n\n// Convert to strings\nlet stringNumbers = numbers.map(num => num.toString()); // ["1", "2", "3", "4", "5"]\n\n// Transform objects\nlet users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 30 },\n  { name: "Charlie", age: 35 }\n];\n\n// Extract specific properties\nlet names = users.map(user => user.name); // ["Alice", "Bob", "Charlie"]\nlet ages = users.map(user => user.age); // [25, 30, 35]\n\n// Create new object structure\nlet userInfo = users.map(user => ({\n  displayName: user.name.toUpperCase(),\n  ageGroup: user.age < 30 ? "Young" : "Adult",\n  birthYear: new Date().getFullYear() - user.age\n}));\n\n// Transform with conditional logic\nlet scores = [85, 92, 78, 95, 88];\nlet letterGrades = scores.map(score => {\n  if (score >= 90) return "A";\n  if (score >= 80) return "B";\n  if (score >= 70) return "C";\n  return "F";\n}); // ["B", "A", "C", "A", "B"]'
      },
      {
        title: 'Advanced transformations',
        code: '// Complex transformations\nlet products = [\n  { name: "Laptop", price: 999, category: "Electronics" },\n  { name: "Book", price: 15, category: "Books" },\n  { name: "Phone", price: 699, category: "Electronics" }\n];\n\n// Transform with calculations\nlet productSummary = products.map(product => ({\n  name: product.name,\n  originalPrice: product.price,\n  priceWithTax: product.price * 1.1,\n  category: product.category,\n  isExpensive: product.price > 100,\n  discount: product.price > 500 ? product.price * 0.1 : 0\n}));\n\n// Transform nested data\nlet data = [\n  { id: 1, tags: ["javascript", "web"] },\n  { id: 2, tags: ["python", "data"] },\n  { id: 3, tags: ["javascript", "mobile"] }\n];\n\nlet expandedData = data.map(item => ({\n  id: item.id,\n  tags: item.tags,\n  tagCount: item.tags.length,\n  hasJavaScript: item.tags.includes("javascript"),\n  primaryTag: item.tags[0],\n  tagString: item.tags.join(", ")\n}));\n\n// Transform with error handling\nlet mixedData = [1, "hello", null, 5, undefined, "world"];\nlet safeData = mixedData.map(item => {\n  if (item === null || item === undefined) return "N/A";\n  if (typeof item === "number") return item * 2;\n  if (typeof item === "string") return item.toUpperCase();\n  return "Unknown";\n});\n\n// Transform with async operations (simulated)\nlet userIds = [1, 2, 3, 4, 5];\nlet userPromises = userIds.map(async id => {\n  // Simulate API call\n  return { id, name: \`User \${id}\`, email: \`user\${id}@example.com\` };\n});\n\n// Promise.all(userPromises).then(users => console.log(users));'
      }
    ]
  },
  {
    title: 'Data Structure Transformations',
    examples: [
      {
        title: 'Converting between data structures',
        code: '// Array to Object\nlet users = [\n  { id: 1, name: "Alice" },\n  { id: 2, name: "Bob" },\n  { id: 3, name: "Charlie" }\n];\n\n// Convert to object with ID as key\nlet usersById = users.reduce((acc, user) => {\n  acc[user.id] = user;\n  return acc;\n}, {});\n// { 1: { id: 1, name: "Alice" }, 2: { id: 2, name: "Bob" }, 3: { id: 3, name: "Charlie" } }\n\n// Object to Array\nlet userObject = {\n  1: { id: 1, name: "Alice" },\n  2: { id: 2, name: "Bob" },\n  3: { id: 3, name: "Charlie" }\n};\n\nlet userArray = Object.values(userObject);\n// [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]\n\n// Array to Map\nlet userMap = new Map(users.map(user => [user.id, user]));\n\n// Map to Array\nlet mapToArray = Array.from(userMap.entries());\n// [[1, { id: 1, name: "Alice" }], [2, { id: 2, name: "Bob" }], [3, { id: 3, name: "Charlie" }]]\n\n// Array to Set (remove duplicates)\nlet duplicateNumbers = [1, 2, 2, 3, 3, 4, 5, 5];\nlet uniqueNumbers = [...new Set(duplicateNumbers)]; // [1, 2, 3, 4, 5]\n\n// Set to Array\nlet numberSet = new Set([1, 2, 3, 4, 5]);\nlet numberArray = Array.from(numberSet); // [1, 2, 3, 4, 5]'
      }
    ]
  }
];

export default transformingContent; 