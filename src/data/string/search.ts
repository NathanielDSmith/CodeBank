const searchContent = [
  {
    title: 'Finding Text in Strings',
    examples: [
      {
        title: 'Using indexOf and lastIndexOf',
        code: '// Finding the first occurrence\nlet text = "The quick brown fox jumps over the lazy dog";\nlet foxIndex = text.indexOf("fox"); // 16\nlet catIndex = text.indexOf("cat"); // -1 (not found)\n\n// Finding the last occurrence\nlet repeatedText = "hello world hello";\nlet firstHello = repeatedText.indexOf("hello"); // 0\nlet lastHello = repeatedText.lastIndexOf("hello"); // 12\n\n// Case-insensitive search\nlet mixedCase = "Hello World HELLO";\nlet helloIndex = mixedCase.toLowerCase().indexOf("hello"); // 0\n\n// Searching from a specific position\nlet longText = "JavaScript is great, JavaScript is powerful";\nlet firstJS = longText.indexOf("JavaScript"); // 0\nlet secondJS = longText.indexOf("JavaScript", 15); // 25\n\n// Checking if substring exists\nlet sentence = "Programming is fun";\nlet hasProgramming = sentence.indexOf("Programming") !== -1; // true\nlet hasCoding = sentence.indexOf("Coding") !== -1; // false'
      },
      {
        title: 'Using includes and startsWith/endsWith',
        code: '// Modern way to check if string contains substring\nlet message = "Welcome to JavaScript";\nlet hasWelcome = message.includes("Welcome"); // true\nlet hasPython = message.includes("Python"); // false\n\n// Case-insensitive includes\nlet userInput = "YES";\nlet isPositive = userInput.toLowerCase().includes("yes"); // true\n\n// Checking start and end of strings\nlet filename = "document.pdf";\nlet isDocument = filename.startsWith("document"); // true\nlet isPdf = filename.endsWith(".pdf"); // true\n\n// Multiple checks\nlet url = "https://example.com";\nlet isSecure = url.startsWith("https"); // true\nlet isWebsite = url.includes("example.com"); // true\n\n// Checking file extensions\nlet files = ["image.jpg", "document.pdf", "video.mp4"];\nlet imageFiles = files.filter(file => file.endsWith(".jpg")); // ["image.jpg"]\nlet pdfFiles = files.filter(file => file.endsWith(".pdf")); // ["document.pdf"]'
      }
    ]
  },
  {
    title: 'Replacing Text',
    examples: [
      {
        title: 'Using replace and replaceAll',
        code: '// Basic string replacement\nlet text = "Hello World";\nlet replaced = text.replace("World", "JavaScript"); // "Hello JavaScript"\n\n// Replace only first occurrence\nlet sentence = "The cat and the cat";\nlet firstCatReplaced = sentence.replace("cat", "dog"); // "The dog and the cat"\n\n// Replace all occurrences (ES2021)\nlet allCatsReplaced = sentence.replaceAll("cat", "dog"); // "The dog and the dog"\n\n// Case-insensitive replacement\nlet mixedText = "Hello HELLO hello";\nlet allHelloReplaced = mixedText.replace(/hello/gi, "Hi"); // "Hi Hi Hi"\n\n// Replacing with function\nlet numbers = "1, 2, 3, 4, 5";\nlet doubled = numbers.replace(/\\d+/g, (match) => {\n  return parseInt(match) * 2;\n}); // "2, 4, 6, 8, 10"\n\n// Removing text by replacing with empty string\nlet dirtyText = "Hello   World   with   spaces";\nlet cleaned = dirtyText.replace(/\\s+/g, " "); // "Hello World with spaces"\n\n// Replacing multiple patterns\nlet text2 = "Hello World 123";\nlet processed = text2\n  .replace(/Hello/g, "Hi")\n  .replace(/World/g, "Earth")\n  .replace(/\\d+/g, "numbers"); // "Hi Earth numbers"'
      }
    ]
  }
];

export default searchContent; 