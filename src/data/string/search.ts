const searchContent = [
  {
    title: 'Finding Text in Strings',
    examples: [
      {
        title: 'Using indexOf and lastIndexOf',
        code: `// JavaScript: Finding the first occurrence
let text = "The quick brown fox jumps over the lazy dog";
let foxIndex = text.indexOf("fox"); // 16
let catIndex = text.indexOf("cat"); // -1 (not found)

// Finding the last occurrence
let repeatedText = "hello world hello";
let firstHello = repeatedText.indexOf("hello"); // 0
let lastHello = repeatedText.lastIndexOf("hello"); // 12

# Python: Finding the first occurrence
text = "The quick brown fox jumps over the lazy dog"
fox_index = text.find("fox")  # 16
cat_index = text.find("cat")  # -1 (not found)

# Finding the last occurrence
repeated_text = "hello world hello"
first_hello = repeated_text.find("hello")  # 0
last_hello = repeated_text.rfind("hello")  # 12

// Java: Finding the first occurrence
String text = "The quick brown fox jumps over the lazy dog";
int foxIndex = text.indexOf("fox"); // 16
int catIndex = text.indexOf("cat"); // -1 (not found)

// Finding the last occurrence
String repeatedText = "hello world hello";
int firstHello = repeatedText.indexOf("hello"); // 0
int lastHello = repeatedText.lastIndexOf("hello"); // 12`
      },
      {
        title: 'Using includes and startsWith/endsWith',
        code: `// JavaScript: Modern way to check if string contains substring
let message = "Welcome to JavaScript";
let hasWelcome = message.includes("Welcome"); // true
let hasPython = message.includes("Python"); // false

// Checking start and end of strings
let filename = "document.pdf";
let isDocument = filename.startsWith("document"); // true
let isPdf = filename.endsWith(".pdf"); // true

# Python: Modern way to check if string contains substring
message = "Welcome to Python"
has_welcome = "Welcome" in message  # True
has_java = "Java" in message  # False

# Checking start and end of strings
filename = "document.pdf"
is_document = filename.startswith("document")  # True
is_pdf = filename.endswith(".pdf")  # True

// Java: Modern way to check if string contains substring
String message = "Welcome to Java";
boolean hasWelcome = message.contains("Welcome"); // true
boolean hasPython = message.contains("Python"); // false

// Checking start and end of strings
String filename = "document.pdf";
boolean isDocument = filename.startsWith("document"); // true
boolean isPdf = filename.endsWith(".pdf"); // true`
      }
    ]
  },
  {
    title: 'Replacing Text',
    examples: [
      {
        title: 'Using replace and replaceAll',
        code: `// JavaScript: Basic string replacement
let text = "Hello World";
let replaced = text.replace("World", "JavaScript"); // "Hello JavaScript"

// Replace all occurrences (ES2021)
let sentence = "The cat and the cat";
let allCatsReplaced = sentence.replaceAll("cat", "dog"); // "The dog and the dog"

# Python: Basic string replacement
text = "Hello World"
replaced = text.replace("World", "Python")  # "Hello Python"

# Replace all occurrences
sentence = "The cat and the cat"
all_cats_replaced = sentence.replace("cat", "dog")  # "The dog and the dog"

// Java: Basic string replacement
String text = "Hello World";
String replaced = text.replace("World", "Java"); // "Hello Java"

// Replace all occurrences
String sentence = "The cat and the cat";
String allCatsReplaced = sentence.replace("cat", "dog"); // "The dog and the dog"`
      }
    ]
  }
];

export default searchContent; 