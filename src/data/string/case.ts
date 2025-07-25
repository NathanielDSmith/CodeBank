const caseContent = [
  {
    title: 'Basic Case Conversion',
    examples: [
      {
        title: 'Converting between cases',
        code: '// Basic case conversion\nlet text = "Hello World JavaScript";\nlet upperCase = text.toUpperCase(); // "HELLO WORLD JAVASCRIPT"\nlet lowerCase = text.toLowerCase(); // "hello world javascript"\n\n// Capitalizing first letter\nlet sentence = "hello world";\nlet capitalized = sentence.charAt(0).toUpperCase() + sentence.slice(1);\n// "Hello world"\n\n// Title case (first letter of each word)\nlet titleText = "hello world javascript";\nlet titleCase = titleText.split(" ")\n  .map(word => word.charAt(0).toUpperCase() + word.slice(1))\n  .join(" ");\n// "Hello World Javascript"\n\n// Sentence case (only first letter capitalized)\nlet longText = "this is a sentence. this is another sentence.";\nlet sentenceCase = longText.split(". ")\n  .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))\n  .join(". ");\n// "This is a sentence. This is another sentence."'
      },
      {
        title: 'Converting between naming conventions',
        code: '// Converting to camelCase\nlet snakeCase = "hello_world_javascript";\nlet camelCase = snakeCase.split("_")\n  .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))\n  .join("");\n// "helloWorldJavascript"\n\n// Converting to PascalCase\nlet kebabCase = "hello-world-javascript";\nlet pascalCase = kebabCase.split("-")\n  .map(word => word.charAt(0).toUpperCase() + word.slice(1))\n  .join("");\n// "HelloWorldJavascript"\n\n// Converting to snake_case\nlet camelCaseText = "helloWorldJavaScript";\nlet snakeCaseResult = camelCaseText\n  .replace(/([A-Z])/g, "_$1")\n  .toLowerCase();\n// "hello_world_javascript"\n\n// Converting to kebab-case\nlet spaceCase = "Hello World JavaScript";\nlet kebabCaseResult = spaceCase.toLowerCase().replace(/\\s+/g, "-");\n// "hello-world-javascript"\n\n// Converting to UPPER_SNAKE_CASE\nlet normalText = "Hello World JavaScript";\nlet upperSnakeCase = normalText.toUpperCase().replace(/\\s+/g, "_");\n// "HELLO_WORLD_JAVASCRIPT"'
      }
    ]
  },
  {
    title: 'Advanced Case Manipulation',
    examples: [
      {
        title: 'Conditional case conversion',
        code: '// Converting based on position\nfunction alternateCase(text) {\n  return text.split("")\n    .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())\n    .join("");\n}\n\nlet result = alternateCase("hello world"); // "HeLlO WoRlD"\n\n// Converting based on word length\nfunction capitalizeLongWords(text, minLength = 5) {\n  return text.split(" ")\n    .map(word => word.length >= minLength ? word.charAt(0).toUpperCase() + word.slice(1) : word)\n    .join(" ");\n}\n\nlet sentence = "hello world javascript programming";\nlet processed = capitalizeLongWords(sentence); // "hello world JavaScript Programming"\n\n// Converting based on context\nfunction smartCase(text) {\n  const articles = ["a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "by"];\n  \n  return text.split(" ")\n    .map((word, index) => {\n      if (index === 0) return word.charAt(0).toUpperCase() + word.slice(1);\n      if (articles.includes(word.toLowerCase())) return word.toLowerCase();\n      return word.charAt(0).toUpperCase() + word.slice(1);\n    })\n    .join(" ");\n}\n\nlet title = "the quick brown fox and the lazy dog";\nlet smartTitle = smartCase(title); // "The Quick Brown Fox and the Lazy Dog"\n\n// Converting file names\nfunction normalizeFileName(fileName) {\n  return fileName\n    .toLowerCase()\n    .replace(/[^a-z0-9.-]/g, "-")\n    .replace(/-+/g, "-")\n    .replace(/^-|-$/g, "");\n}\n\nlet dirtyFileName = "My File Name (2024).pdf";\nlet cleanFileName = normalizeFileName(dirtyFileName); // "my-file-name-2024.pdf"'
      }
    ]
  }
];

export default caseContent; 