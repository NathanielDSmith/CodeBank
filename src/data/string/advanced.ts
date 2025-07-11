const advancedContent = [
  {
    title: 'String Manipulation Patterns',
    examples: [
      {
        title: 'Common string patterns',
        code: '// Truncating text with ellipsis\nfunction truncate(text, maxLength) {\n  if (text.length <= maxLength) return text;\n  return text.slice(0, maxLength - 3) + "...";\n}\n\nlet longText = "This is a very long text that needs to be truncated";\nlet truncated = truncate(longText, 20); // "This is a very..."\n\n// Converting between formats\nfunction toCamelCase(str) {\n  return str.replace(/[-_\\s]+(.)/g, (match, group) => group.toUpperCase());\n}\n\nlet kebabCase = "hello-world-javascript";\nlet camelCase = toCamelCase(kebabCase); // "helloWorldJavascript"\n\n// Converting to kebab-case\nfunction toKebabCase(str) {\n  return str\n    .replace(/([a-z])([A-Z])/g, "$1-$2")\n    .replace(/[\\s_]+/g, "-")\n    .toLowerCase();\n}\n\nlet camelCaseText = "helloWorldJavaScript";\nlet kebabCaseResult = toKebabCase(camelCaseText); // "hello-world-javascript"\n\n// Slug generation\nfunction createSlug(text) {\n  return text\n    .toLowerCase()\n    .replace(/[^a-z0-9\\s-]/g, "")\n    .replace(/\\s+/g, "-")\n    .replace(/-+/g, "-")\n    .replace(/^-|-$/g, "");\n}\n\nlet title = "Hello World! This is a Title.";\nlet slug = createSlug(title); // "hello-world-this-is-a-title"'
      },
      {
        title: 'Text processing utilities',
        code: '// Word count\nfunction wordCount(text) {\n  return text.trim().split(/\\s+/).length;\n}\n\nlet sentence = "Hello world, how are you?";\nlet count = wordCount(sentence); // 5\n\n// Character frequency\nfunction charFrequency(text) {\n  const freq = {};\n  for (let char of text.toLowerCase()) {\n    if (/[a-z]/.test(char)) {\n      freq[char] = (freq[char] || 0) + 1;\n    }\n  }\n  return freq;\n}\n\nlet text = "hello world";\nlet frequency = charFrequency(text); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }\n\n// Palindrome checker\nfunction isPalindrome(text) {\n  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, "");\n  return clean === clean.split("").reverse().join("");\n}\n\nlet palindrome = "A man, a plan, a canal: Panama";\nlet isPal = isPalindrome(palindrome); // true\n\n// Anagram checker\nfunction isAnagram(str1, str2) {\n  const normalize = str => str.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");\n  return normalize(str1) === normalize(str2);\n}\n\nlet word1 = "listen";\nlet word2 = "silent";\nlet isAnagramResult = isAnagram(word1, word2); // true'
      }
    ]
  }
];

export default advancedContent; 