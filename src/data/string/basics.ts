const basicsContent = [
  {
    title: 'String Length and Access',
    examples: [
      {
        title: 'Getting string length and accessing characters',
        code: '// Get the length of a string\nlet message = "Hello, World!";\nlet length = message.length;\nconsole.log(length); // 13\n\n// Access individual characters\nlet firstChar = message[0]; // "H"\nlet lastChar = message[message.length - 1]; // "!"\n\n// Using charAt() method\nlet charAt0 = message.charAt(0); // "H"\nlet charAt5 = message.charAt(5); // ","\n\n// Check if string is empty\nlet emptyString = "";\nlet isEmpty = emptyString.length === 0; // true\n\n// Trimming whitespace\nlet textWithSpaces = "  Hello World  ";\nlet trimmed = textWithSpaces.trim(); // "Hello World"\nlet trimmedStart = textWithSpaces.trimStart(); // "Hello World  "\nlet trimmedEnd = textWithSpaces.trimEnd(); // "  Hello World"'
      },
      {
        title: 'String concatenation and interpolation',
        code: '// String concatenation with +\nlet firstName = "John";\nlet lastName = "Doe";\nlet fullName = firstName + " " + lastName; // "John Doe"\n\n// Template literals (ES6)\nlet age = 25;\nlet greeting = "Hello, my name is " + firstName + " and I am " + age + " years old";\nlet modernGreeting = `Hello, my name is ${firstName} and I am ${age} years old`;\n\n// Using concat() method\nlet part1 = "Hello";\nlet part2 = "World";\nlet combined = part1.concat(" ", part2); // "Hello World"\n\n// Concatenating multiple strings\nlet words = ["Hello", "World", "JavaScript"];\nlet sentence = words.join(" "); // "Hello World JavaScript"\n\n// String repetition\nlet separator = "-".repeat(20); // "--------------------"\nlet stars = "*".repeat(5); // "*****"'
      }
    ]
  },
  {
    title: 'String Comparison and Checking',
    examples: [
      {
        title: 'Comparing strings and checking content',
        code: '// String comparison\nlet str1 = "hello";\nlet str2 = "hello";\nlet str3 = "Hello";\n\nconsole.log(str1 === str2); // true\nconsole.log(str1 === str3); // false\nconsole.log(str1.toLowerCase() === str3.toLowerCase()); // true\n\n// Checking if string contains substring\nlet text = "JavaScript is awesome";\nlet hasJavaScript = text.includes("JavaScript"); // true\nlet hasPython = text.includes("Python"); // false\n\n// Checking if string starts/ends with\nlet filename = "document.pdf";\nlet startsWithDoc = filename.startsWith("document"); // true\nlet endsWithPdf = filename.endsWith(".pdf"); // true\n\n// Case-insensitive checks\nlet userInput = "YES";\nlet isYes = userInput.toLowerCase() === "yes"; // true\n\n// Checking string position\nlet sentence = "The quick brown fox";\nlet foxPosition = sentence.indexOf("fox"); // 16\nlet catPosition = sentence.indexOf("cat"); // -1 (not found)\n\n// Last occurrence\nlet text2 = "hello world hello";\nlet lastHello = text2.lastIndexOf("hello"); // 12'
      }
    ]
  }
];

export default basicsContent; 