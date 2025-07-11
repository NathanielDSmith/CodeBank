const formattingContent = [
  {
    title: 'Text Padding and Alignment',
    examples: [
      {
        title: 'Padding strings with spaces or characters',
        code: '// Padding with spaces\nlet text = "Hello";\nlet paddedLeft = text.padStart(10); // "     Hello"\nlet paddedRight = text.padEnd(10); // "Hello     "\n\n// Padding with custom characters\nlet number = "42";\nlet paddedWithZeros = number.padStart(5, "0"); // "00042"\nlet paddedWithStars = number.padEnd(6, "*"); // "42****"\n\n// Formatting numbers\nlet price = "9.99";\nlet formattedPrice = price.padStart(8, " "); // "    9.99"\n\n// Creating aligned text\nlet names = ["Alice", "Bob", "Charlie"];\nlet maxLength = Math.max(...names.map(name => name.length));\nlet alignedNames = names.map(name => name.padEnd(maxLength + 2));\n// ["Alice  ", "Bob    ", "Charlie "]\n\n// Truncating long text\nlet longText = "This is a very long text that needs to be truncated";\nlet truncated = longText.length > 20 ? longText.slice(0, 17) + "..." : longText;\n// "This is a very..."'
      },
      {
        title: 'Text case manipulation',
        code: '// Converting case\nlet mixedText = "Hello World JavaScript";\nlet upperCase = mixedText.toUpperCase(); // "HELLO WORLD JAVASCRIPT"\nlet lowerCase = mixedText.toLowerCase(); // "hello world javascript"\n\n// Capitalizing first letter\nlet sentence = "hello world";\nlet capitalized = sentence.charAt(0).toUpperCase() + sentence.slice(1);\n// "Hello world"\n\n// Title case (first letter of each word)\nlet titleText = "hello world javascript";\nlet titleCase = titleText.split(" ")\n  .map(word => word.charAt(0).toUpperCase() + word.slice(1))\n  .join(" ");\n// "Hello World Javascript"\n\n// Converting to camelCase\nlet snakeCase = "hello_world_javascript";\nlet camelCase = snakeCase.split("_")\n  .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))\n  .join("");\n// "helloWorldJavascript"\n\n// Converting to kebab-case\nlet spaceCase = "Hello World JavaScript";\nlet kebabCase = spaceCase.toLowerCase().replace(/\\s+/g, "-");\n// "hello-world-javascript"'
      }
    ]
  },
  {
    title: 'Number and Date Formatting',
    examples: [
      {
        title: 'Formatting numbers as strings',
        code: '// Number to string with specific decimal places\nlet number = 3.14159;\nlet formatted = number.toFixed(2); // "3.14"\nlet formatted3 = number.toFixed(3); // "3.142"\n\n// Formatting currency\nlet price = 19.99;\nlet currency = "$" + price.toFixed(2); // "$19.99"\n\n// Formatting percentages\nlet percentage = 0.75;\nlet percentString = (percentage * 100).toFixed(1) + "%"; // "75.0%"\n\n// Padding numbers with zeros\nlet smallNumber = 5;\nlet paddedNumber = smallNumber.toString().padStart(3, "0"); // "005"\n\n// Formatting large numbers\nlet bigNumber = 1234567;\nlet formattedBig = bigNumber.toLocaleString(); // "1,234,567"\n\n// Formatting with different locales\nlet amount = 1234.56;\nlet usFormat = amount.toLocaleString("en-US", {\n  style: "currency",\n  currency: "USD"\n}); // "$1,234.56"\n\nlet euFormat = amount.toLocaleString("de-DE", {\n  style: "currency",\n  currency: "EUR"\n}); // "1.234,56 €"'
      },
      {
        title: 'Date and time formatting',
        code: '// Basic date formatting\nlet date = new Date();\nlet dateString = date.toDateString(); // "Mon Jan 01 2024"\nlet timeString = date.toTimeString(); // "12:00:00 GMT+0000"\n\n// Custom date formatting\nlet now = new Date();\nlet year = now.getFullYear();\nlet month = (now.getMonth() + 1).toString().padStart(2, "0");\nlet day = now.getDate().toString().padStart(2, "0");\nlet formattedDate = year + "-" + month + "-" + day; // "2024-01-01"\n\n// Formatting time\nlet hours = now.getHours().toString().padStart(2, "0");\nlet minutes = now.getMinutes().toString().padStart(2, "0");\nlet seconds = now.getSeconds().toString().padStart(2, "0");\nlet formattedTime = hours + ":" + minutes + ":" + seconds; // "12:00:00"\n\n// Relative time formatting\nfunction formatRelativeTime(date) {\n  const now = new Date();\n  const diffInMinutes = Math.floor((now - date) / (1000 * 60));\n  \n  if (diffInMinutes < 1) return "just now";\n  if (diffInMinutes < 60) return diffInMinutes + " minutes ago";\n  if (diffInMinutes < 1440) return Math.floor(diffInMinutes / 60) + " hours ago";\n  return Math.floor(diffInMinutes / 1440) + " days ago";\n}\n\nlet pastDate = new Date(Date.now() - 30 * 60 * 1000); // 30 minutes ago\nlet relativeTime = formatRelativeTime(pastDate); // "30 minutes ago"'
      }
    ]
  }
];

export default formattingContent; 