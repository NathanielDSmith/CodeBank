const bestPracticesContent = [
  {
    title: 'String Handling Best Practices',
    examples: [
      {
        title: 'General string best practices',
        code: '// Always handle null/undefined\nfunction safeStringLength(str) {\n  return str ? str.length : 0;\n}\n\nlet text = null;\nlet length = safeStringLength(text); // 0\n\n// Use appropriate string methods\nlet filename = "document.pdf";\n\n// Good - specific methods\nlet isPdf = filename.endsWith(".pdf");\nlet startsWithDoc = filename.startsWith("document");\nlet hasExtension = filename.includes(".");\n\n// Avoid - manual checking\nlet isPdfBad = filename.slice(-4) === ".pdf";\nlet startsWithDocBad = filename.indexOf("document") === 0;\n\n// Handle empty strings properly\nfunction isEmpty(str) {\n  return !str || str.trim().length === 0;\n}\n\nlet emptyString = "";\nlet whitespaceString = "   ";\nlet normalString = "Hello";\n\nconsole.log(isEmpty(emptyString)); // true\nconsole.log(isEmpty(whitespaceString)); // true\nconsole.log(isEmpty(normalString)); // false'
      },
      {
        title: 'String validation and sanitization',
        code: '// Sanitize user input\nfunction sanitizeInput(input) {\n  if (typeof input !== "string") return "";\n  return input.trim().replace(/[<>]/g, "");\n}\n\nlet userInput = "  <script>alert(\'hello\')</script>  ";\nlet sanitized = sanitizeInput(userInput); // "scriptalert(\'hello\')/script"\n\n// Validate string format\nfunction isValidEmail(email) {\n  if (typeof email !== "string") return false;\n  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return emailRegex.test(email.trim());\n}\n\nlet validEmail = "user@example.com";\nlet invalidEmail = "not-an-email";\nconsole.log(isValidEmail(validEmail)); // true\nconsole.log(isValidEmail(invalidEmail)); // false\n\n// Normalize string data\nfunction normalizeString(str) {\n  return str\n    .toLowerCase()\n    .trim()\n    .replace(/\\s+/g, " ");\n}\n\nlet dirtyString = "  Hello   World  JavaScript  ";\nlet normalized = normalizeString(dirtyString); // "hello world javascript"'
      }
    ]
  },
  {
    title: 'Error Handling and Edge Cases',
    examples: [
      {
        title: 'Handle edge cases properly',
        code: '// Handle different string types\nfunction processString(input) {\n  // Convert to string if needed\n  const str = String(input);\n  \n  // Handle empty or whitespace-only strings\n  if (!str || str.trim().length === 0) {\n    return "default";\n  }\n  \n  return str.trim();\n}\n\nlet inputs = [null, undefined, "", "   ", "hello", 123];\nlet results = inputs.map(processString);\n// ["default", "default", "default", "default", "hello", "123"]\n\n// Safe string operations\nfunction safeSubstring(str, start, end) {\n  if (!str || typeof str !== "string") return "";\n  \n  const length = str.length;\n  const safeStart = Math.max(0, Math.min(start, length));\n  const safeEnd = Math.max(safeStart, Math.min(end || length, length));\n  \n  return str.substring(safeStart, safeEnd);\n}\n\nlet text = "Hello World";\nlet safe1 = safeSubstring(text, 0, 5); // "Hello"\nlet safe2 = safeSubstring(text, -5, 100); // "Hello World"\nlet safe3 = safeSubstring(null, 0, 5); // ""\n\n// Handle encoding issues\nfunction safeEncodeURIComponent(str) {\n  try {\n    return encodeURIComponent(String(str));\n  } catch (error) {\n    console.warn("Failed to encode string:", error);\n    return "";\n  }\n}\n\nlet specialChars = "Hello 世界!";\nlet encoded = safeEncodeURIComponent(specialChars); // "Hello%20%E4%B8%96%E7%95%8C!"'
      }
    ]
  }
];

export default bestPracticesContent; 