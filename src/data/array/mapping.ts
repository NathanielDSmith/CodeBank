const mappingContent = [
  {
    title: 'Array Mapping',
    examples: [
      {
        title: 'Using map() method',
        code: '// Basic mapping\nlet numbers = [1, 2, 3, 4, 5];\n\n// Double each number\nlet doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]\n\n// Square each number\nlet squared = numbers.map(num => num ** 2); // [1, 4, 9, 16, 25]\n\n// Convert to strings\nlet stringNumbers = numbers.map(num => num.toString()); // ["1", "2", "3", "4", "5"]\n\n// Map with index\nlet indexed = numbers.map((num, index) => \`\${index}: \${num}\`);\n// ["0: 1", "1: 2", "2: 3", "3: 4", "4: 5"]\n\n// Map objects\nlet users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 30 },\n  { name: "Charlie", age: 35 }\n];\n\n// Extract names\nlet names = users.map(user => user.name); // ["Alice", "Bob", "Charlie"]\n\n// Create new objects\nlet userInfo = users.map(user => ({\n  displayName: user.name.toUpperCase(),\n  ageGroup: user.age < 30 ? "Young" : "Adult"\n}));\n\n// Map with conditional logic\nlet grades = [85, 92, 78, 95, 88];\nlet letterGrades = grades.map(grade => {\n  if (grade >= 90) return "A";\n  if (grade >= 80) return "B";\n  if (grade >= 70) return "C";\n  return "F";\n}); // ["B", "A", "C", "A", "B"]'
      },
      {
        title: 'Advanced mapping techniques',
        code: '// Mapping with multiple transformations\nlet products = [\n  { name: "Laptop", price: 999, category: "Electronics" },\n  { name: "Book", price: 15, category: "Books" },\n  { name: "Phone", price: 699, category: "Electronics" }\n];\n\n// Transform with calculations\nlet productSummary = products.map(product => ({\n  name: product.name,\n  price: product.price,\n  priceWithTax: product.price * 1.1,\n  category: product.category,\n  isExpensive: product.price > 100\n}));\n\n// Map with nested transformations\nlet data = [\n  { id: 1, tags: ["javascript", "web"] },\n  { id: 2, tags: ["python", "data"] },\n  { id: 3, tags: ["javascript", "mobile"] }\n];\n\nlet expandedData = data.map(item => ({\n  id: item.id,\n  tags: item.tags,\n  tagCount: item.tags.length,\n  hasJavaScript: item.tags.includes("javascript")\n}));\n\n// Map with error handling\nlet mixedData = [1, "hello", null, 5, undefined, "world"];\nlet safeData = mixedData.map(item => {\n  if (item === null || item === undefined) return "N/A";\n  if (typeof item === "number") return item * 2;\n  if (typeof item === "string") return item.toUpperCase();\n  return "Unknown";\n});\n\n// Map with async operations (simulated)\nlet userIds = [1, 2, 3, 4, 5];\nlet userPromises = userIds.map(async id => {\n  // Simulate API call\n  return { id, name: \`User \${id}\` };\n});\n\n// Promise.all(userPromises).then(users => console.log(users));'
      }
    ]
  },
  {
    title: 'Array Reduction',
    examples: [
      {
        title: 'Using reduce() method',
        code: '// Basic reduction\nlet numbers = [1, 2, 3, 4, 5];\n\n// Sum all numbers\nlet sum = numbers.reduce((acc, num) => acc + num, 0); // 15\n\n// Find maximum\nlet max = numbers.reduce((acc, num) => Math.max(acc, num), -Infinity); // 5\n\n// Find minimum\nlet min = numbers.reduce((acc, num) => Math.min(acc, num), Infinity); // 1\n\n// Count occurrences\nlet fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];\nlet fruitCount = fruits.reduce((acc, fruit) => {\n  acc[fruit] = (acc[fruit] || 0) + 1;\n  return acc;\n}, {}); // { apple: 3, banana: 2, orange: 1 }\n\n// Group by property\nlet users = [\n  { name: "Alice", age: 25, city: "NYC" },\n  { name: "Bob", age: 30, city: "LA" },\n  { name: "Charlie", age: 25, city: "NYC" },\n  { name: "Diana", age: 35, city: "LA" }\n];\n\nlet groupedByCity = users.reduce((acc, user) => {\n  if (!acc[user.city]) acc[user.city] = [];\n  acc[user.city].push(user);\n  return acc;\n}, {});\n\n// Flatten arrays\nlet nestedArrays = [[1, 2], [3, 4], [5, 6]];\nlet flattened = nestedArrays.reduce((acc, arr) => acc.concat(arr), []);\n// [1, 2, 3, 4, 5, 6]'
      },
      {
        title: 'Advanced reduction techniques',
        code: '// Complex data transformation\nlet orders = [\n  { product: "Laptop", price: 999, quantity: 1 },\n  { product: "Mouse", price: 25, quantity: 2 },\n  { product: "Keyboard", price: 100, quantity: 1 },\n  { product: "Mouse", price: 25, quantity: 1 }\n];\n\n// Group by product and calculate totals\nlet orderSummary = orders.reduce((acc, order) => {\n  if (!acc[order.product]) {\n    acc[order.product] = {\n      totalQuantity: 0,\n      totalRevenue: 0,\n      averagePrice: 0\n    };\n  }\n  \n  acc[order.product].totalQuantity += order.quantity;\n  acc[order.product].totalRevenue += order.price * order.quantity;\n  acc[order.product].averagePrice = acc[order.product].totalRevenue / acc[order.product].totalQuantity;\n  \n  return acc;\n}, {});\n\n// Reduce with multiple accumulators\nlet scores = [85, 92, 78, 95, 88, 91, 76];\nlet stats = scores.reduce((acc, score) => {\n  acc.sum += score;\n  acc.count += 1;\n  acc.min = Math.min(acc.min, score);\n  acc.max = Math.max(acc.max, score);\n  return acc;\n}, { sum: 0, count: 0, min: Infinity, max: -Infinity });\n\nstats.average = stats.sum / stats.count;\n\n// Reduce to create complex objects\nlet data = [\n  { category: "A", value: 10 },\n  { category: "B", value: 20 },\n  { category: "A", value: 15 },\n  { category: "C", value: 30 }\n];\n\nlet processed = data.reduce((acc, item) => {\n  if (!acc.categories[item.category]) {\n    acc.categories[item.category] = [];\n  }\n  acc.categories[item.category].push(item.value);\n  acc.total += item.value;\n  return acc;\n}, { categories: {}, total: 0 });'
      }
    ]
  }
];

export default mappingContent; 