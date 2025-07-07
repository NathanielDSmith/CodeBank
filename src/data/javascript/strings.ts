const stringsContent = [
  {
    title: 'String basics and methods',
    examples: [
      {
        title: 'Creating strings',
        code: '// Different ways to create strings\nconst singleQuotes = \'Hello\';\nconst doubleQuotes = "World";\nconst backticks = `JavaScript`;\n\nconsole.log(singleQuotes + " " + doubleQuotes); // "Hello World"'
      },
      {
        title: 'Common string methods',
        code: 'const text = "  Hello World  ";\n\nconsole.log(text.length); // 15 (includes spaces)\nconsole.log(text.trim()); // "Hello World"\nconsole.log(text.toUpperCase()); // "  HELLO WORLD  "\nconsole.log(text.toLowerCase()); // "  hello world  "\nconsole.log(text.includes("World")); // true\nconsole.log(text.startsWith("  ")); // true'
      }
    ]
  },
  {
    title: 'String manipulation',
    examples: [
      {
        title: 'Splitting and joining strings',
        code: 'const sentence = "JavaScript is awesome";\n\n// Split into array\nconst words = sentence.split(" ");\nconsole.log(words); // ["JavaScript", "is", "awesome"]\n\n// Join array back to string\nconst newSentence = words.join("-");\nconsole.log(newSentence); // "JavaScript-is-awesome"\n\n// Replace parts of string\nconst replaced = sentence.replace("awesome", "amazing");\nconsole.log(replaced); // "JavaScript is amazing"'
      },
      {
        title: 'String interpolation with template literals',
        code: 'const name = "Alice";\nconst age = 25;\nconst city = "Boston";\n\n// Old way (concatenation)\nconst oldWay = "My name is " + name + ", I am " + age + " years old, and I live in " + city + ".";\n\n// New way (template literals)\nconst newWay = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;\n\nconsole.log(oldWay);\nconsole.log(newWay);\n// Both output: "My name is Alice, I am 25 years old, and I live in Boston."'
      }
    ]
  }
];

export default stringsContent; 