const performanceContent = [
  {
    title: 'Performance Optimization',
    examples: [
      {
        title: 'Efficient string operations',
        code: '// Use template literals for concatenation\nlet name = "John";\nlet age = 25;\n// Good\nlet message = `Hello, my name is ${name} and I am ${age} years old`;\n// Avoid\nlet badMessage = "Hello, my name is " + name + " and I am " + age + " years old";\n\n// Use includes() instead of indexOf() for readability\nlet text = "Hello World";\n// Good\nlet hasHello = text.includes("Hello");\n// Avoid\nlet hasHelloOld = text.indexOf("Hello") !== -1;\n\n// Use replaceAll() for multiple replacements\nlet sentence = "The cat and the cat";\n// Good (ES2021)\nlet replaced = sentence.replaceAll("cat", "dog");\n// Alternative for older browsers\nlet replacedOld = sentence.replace(/cat/g, "dog");\n\n// Pre-compile regex for repeated use\nconst emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nlet emails = ["user@example.com", "invalid-email", "test@test.com"];\nlet validEmails = emails.filter(email => emailRegex.test(email));'
      },
      {
        title: 'Memory efficient string handling',
        code: '// Avoid creating unnecessary strings\nfunction buildString(items) {\n  // Good - use array join\n  return items.join(", ");\n  \n  // Avoid - string concatenation in loop\n  // let result = "";\n  // for (let item of items) {\n  //   result += item + ", ";\n  // }\n  // return result.slice(0, -2);\n}\n\n// Use String.fromCharCode() for character codes\nlet charCode = 65;\nlet letter = String.fromCharCode(charCode); // "A"\n\n// Use charCodeAt() for character codes\nlet text = "Hello";\nlet firstCharCode = text.charCodeAt(0); // 72\n\n// Efficient string building\nfunction buildLargeString(parts) {\n  // Good - use array\n  const strings = [];\n  for (let part of parts) {\n    strings.push(part);\n  }\n  return strings.join("");\n  \n  // Avoid - string concatenation\n  // let result = "";\n  // for (let part of parts) {\n  //   result += part;\n  // }\n  // return result;\n}'
      }
    ]
  },
  {
    title: 'Best Practices for Performance',
    examples: [
      {
        title: 'String operation best practices',
        code: '// Cache regex patterns\nconst wordRegex = /\\w+/g;\nconst spaceRegex = /\\s+/g;\n\nfunction processText(text) {\n  // Reuse compiled regex\n  let words = text.match(wordRegex);\n  let cleaned = text.replace(spaceRegex, " ");\n  return { words, cleaned };\n}\n\n// Use appropriate methods\nlet text = "Hello World";\n\n// For checking existence\nlet hasWorld = text.includes("World"); // Good\nlet hasWorldOld = text.indexOf("World") !== -1; // Avoid\n\n// For getting position\nlet worldPosition = text.indexOf("World"); // Good\nlet worldPositionBad = text.includes("World") ? text.indexOf("World") : -1; // Avoid\n\n// For case-insensitive operations\nlet userInput = "YES";\nlet isYes = userInput.toLowerCase() === "yes"; // Good\nlet isYesBad = userInput.toLowerCase().includes("yes"); // Avoid for exact match\n\n// Use appropriate string methods\nlet filename = "document.pdf";\nlet isPdf = filename.endsWith(".pdf"); // Good\nlet isPdfBad = filename.slice(-4) === ".pdf"; // Avoid'
      }
    ]
  }
];

export default performanceContent; 