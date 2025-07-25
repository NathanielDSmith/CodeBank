const splittingContent = [
  {
    title: 'Splitting Strings',
    examples: [
      {
        title: 'Basic string splitting',
        code: '// Splitting by space\nlet sentence = "Hello World JavaScript";\nlet words = sentence.split(" "); // ["Hello", "World", "JavaScript"]\n\n// Splitting by comma\nlet csvData = "apple,banana,orange,grape";\nlet fruits = csvData.split(","); // ["apple", "banana", "orange", "grape"]\n\n// Splitting by multiple delimiters\nlet text = "Hello-World_JavaScript";\nlet parts = text.split(/[-_]/); // ["Hello", "World", "JavaScript"]\n\n// Splitting with limit\nlet longText = "one two three four five";\nlet firstThree = longText.split(" ", 3); // ["one", "two", "three"]\n\n// Splitting and trimming\nlet dirtyData = "  apple  ,  banana  ,  orange  ";\nlet cleanFruits = dirtyData.split(",").map(item => item.trim());\n// ["apple", "banana", "orange"]\n\n// Splitting by newlines\nlet multiLineText = "Line 1\\nLine 2\\nLine 3";\nlet lines = multiLineText.split("\\n"); // ["Line 1", "Line 2", "Line 3"]\n\n// Splitting into characters\nlet word = "Hello";\nlet characters = word.split(""); // ["H", "e", "l", "l", "o"]'
      },
      {
        title: 'Advanced splitting techniques',
        code: '// Splitting by regex patterns\nlet text = "Hello123World456JavaScript";\nlet parts = text.split(/\\d+/); // ["Hello", "World", "JavaScript"]\n\n// Splitting and keeping delimiters\nlet sentence = "Hello,World;JavaScript";\nlet withDelimiters = sentence.split(/([,;])/);\n// ["Hello", ",", "World", ";", "JavaScript"]\n\n// Splitting by multiple spaces\nlet textWithSpaces = "Hello   World    JavaScript";\nlet cleanWords = textWithSpaces.split(/\\s+/); // ["Hello", "World", "JavaScript"]\n\n// Splitting by word boundaries\nlet camelCase = "helloWorldJavaScript";\nlet words = camelCase.split(/(?=[A-Z])/); // ["hello", "World", "JavaScript"]\n\n// Splitting and filtering empty strings\nlet data = "apple,,banana,,,orange";\nlet cleanData = data.split(",").filter(item => item !== "");\n// ["apple", "banana", "orange"]\n\n// Splitting by custom delimiter\nlet customData = "apple|banana|orange";\nlet items = customData.split("|"); // ["apple", "banana", "orange"]'
      }
    ]
  },
  {
    title: 'Joining Arrays into Strings',
    examples: [
      {
        title: 'Using join method',
        code: '// Basic joining\nlet words = ["Hello", "World", "JavaScript"];\nlet sentence = words.join(" "); // "Hello World JavaScript"\n\n// Joining with different separators\nlet fruits = ["apple", "banana", "orange"];\nlet commaSeparated = fruits.join(", "); // "apple, banana, orange"\nlet dashSeparated = fruits.join("-"); // "apple-banana-orange"\nlet noSeparator = fruits.join(""); // "applebananaorange"\n\n// Joining numbers\nlet numbers = [1, 2, 3, 4, 5];\nlet numberString = numbers.join(" + "); // "1 + 2 + 3 + 4 + 5"\n\n// Creating HTML lists\nlet items = ["Item 1", "Item 2", "Item 3"];\nlet htmlList = "<ul>\\n" + items.map(item => "  <li>" + item + "</li>").join("\\n") + "\\n</ul>";\n// "<ul>\\n  <li>Item 1</li>\\n  <li>Item 2</li>\\n  <li>Item 3</li>\\n</ul>"\n\n// Joining with conditional separators\nlet tags = ["javascript", "programming", "web"];\nlet tagString = tags.length > 0 ? "#" + tags.join(" #") : "";\n// "#javascript #programming #web"\n\n// Creating CSV data\nlet csvHeaders = ["Name", "Age", "City"];\nlet csvRow = ["John", "25", "New York"];\nlet csvLine = csvHeaders.join(",") + "\\n" + csvRow.join(",");\n// "Name,Age,City\\nJohn,25,New York"'
      },
      {
        title: 'Advanced joining techniques',
        code: '// Joining with different separators for last item\nfunction joinWithAnd(items) {\n  if (items.length === 0) return "";\n  if (items.length === 1) return items[0];\n  if (items.length === 2) return items[0] + " and " + items[1];\n  \n  return items.slice(0, -1).join(", ") + ", and " + items[items.length - 1];\n}\n\nlet fruits = ["apple", "banana", "orange"];\nlet naturalList = joinWithAnd(fruits); // "apple, banana, and orange"\n\n// Creating numbered lists\nlet tasks = ["Learn JavaScript", "Build a project", "Deploy to production"];\nlet numberedTasks = tasks.map((task, index) => (index + 1) + ". " + task).join("\\n");\n// "1. Learn JavaScript\\n2. Build a project\\n3. Deploy to production"\n\n// Joining with conditional formatting\nlet scores = [85, 92, 78, 95];\nlet scoreText = scores.map(score => {\n  if (score >= 90) return score + " (Excellent)";\n  if (score >= 80) return score + " (Good)";\n  return score + " (Needs improvement)";\n}).join(", ");\n// "85 (Good), 92 (Excellent), 78 (Needs improvement), 95 (Excellent)"\n\n// Creating URL query strings\nlet params = {\n  name: "John",\n  age: "25",\n  city: "New York"\n};\nlet queryString = Object.entries(params)\n  .map(([key, value]) => key + "=" + encodeURIComponent(value))\n  .join("&");\n// "name=John&age=25&city=New%20York"'
      }
    ]
  }
];

export default splittingContent; 