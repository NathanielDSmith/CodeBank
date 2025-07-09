const basicsContent = [
  {
    title: 'String Length and Access',
    examples: [
      {
        title: 'Getting string length and accessing characters',
        code: `// JavaScript: Get the length of a string
let message = "Hello, World!";
let length = message.length;
console.log(length); // 13

// Access individual characters
let firstChar = message[0]; // "H"
let lastChar = message[message.length - 1]; // "!"

# Python: Get the length of a string
message = "Hello, World!"
length = len(message)
print(length)  # 13

# Access individual characters
first_char = message[0]  # "H"
last_char = message[-1]  # "!"

// Java: Get the length of a string
String message = "Hello, World!";
int length = message.length();
System.out.println(length); // 13

// Access individual characters
char firstChar = message.charAt(0); // 'H'
char lastChar = message.charAt(message.length() - 1); // '!'`
      },
      {
        title: 'String concatenation and interpolation',
        code: `// JavaScript: String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// Template literals (ES6)
let age = 25;
let greeting = \`Hello, my name is \${firstName} and I am \${age} years old\`;

# Python: String concatenation
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name  # "John Doe"

# f-strings (Python 3.6+)
age = 25
greeting = f"Hello, my name is {first_name} and I am {age} years old"

// Java: String concatenation
String firstName = "John";
String lastName = "Doe";
String fullName = firstName + " " + lastName; // "John Doe"

// String.format()
int age = 25;
String greeting = String.format("Hello, my name is %s and I am %d years old", firstName, age);`
      }
    ]
  },
  {
    title: 'String Comparison and Checking',
    examples: [
      {
        title: 'Comparing strings and checking content',
        code: `// JavaScript: String comparison
let str1 = "hello";
let str2 = "hello";
let str3 = "Hello";

console.log(str1 === str2); // true
console.log(str1 === str3); // false
console.log(str1.toLowerCase() === str3.toLowerCase()); // true

// Checking if string contains substring
let text = "JavaScript is awesome";
let hasJavaScript = text.includes("JavaScript"); // true

# Python: String comparison
str1 = "hello"
str2 = "hello"
str3 = "Hello"

print(str1 == str2)  # True
print(str1 == str3)  # False
print(str1.lower() == str3.lower())  # True

# Checking if string contains substring
text = "Python is awesome"
has_python = "Python" in text  # True

// Java: String comparison
String str1 = "hello";
String str2 = "hello";
String str3 = "Hello";

System.out.println(str1.equals(str2)); // true
System.out.println(str1.equals(str3)); // false
System.out.println(str1.equalsIgnoreCase(str3)); // true

// Checking if string contains substring
String text = "Java is awesome";
boolean hasJava = text.contains("Java"); // true`
      }
    ]
  }
];

export default basicsContent; 