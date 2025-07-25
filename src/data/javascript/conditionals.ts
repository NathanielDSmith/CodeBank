const conditionalsContent = [
  {
    title: 'If statements and comparisons',
    examples: [
      {
        title: 'Basic if statement',
        code: 'const age = 18;\n\nif (age >= 18) {\n  console.log("You are an adult");\n} else {\n  console.log("You are a minor");\n}\n\n// Output: "You are an adult"'
      },
      {
        title: 'If-else if-else chain',
        code: 'const score = 85;\n\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else if (score >= 70) {\n  console.log("Grade: C");\n} else {\n  console.log("Grade: F");\n}\n\n// Output: "Grade: B"'
      }
    ]
  },
  {
    title: 'Comparison operators and logical operators',
    examples: [
      {
        title: 'Comparison operators',
        code: 'const a = 5;\nconst b = 10;\n\nconsole.log(a < b);   // true\nconsole.log(a > b);   // false\nconsole.log(a <= 5);  // true\nconsole.log(b >= 10); // true\nconsole.log(a === 5); // true (strict equality)\nconsole.log(a == "5"); // true (loose equality)\nconsole.log(a !== "5"); // true (strict inequality)'
      },
      {
        title: 'Logical operators (AND, OR, NOT)',
        code: 'const isLoggedIn = true;\nconst hasPermission = false;\nconst isAdmin = true;\n\n// AND operator (&&)\nif (isLoggedIn && hasPermission) {\n  console.log("User can access");\n} else {\n  console.log("Access denied");\n}\n\n// OR operator (||)\nif (isLoggedIn || isAdmin) {\n  console.log("User can view content");\n}\n\n// NOT operator (!)\nif (!hasPermission) {\n  console.log("User needs permission");\n}'
      }
    ]
  },
  {
    title: 'Ternary operator (shorthand if-else)',
    examples: [
      {
        title: 'Basic ternary operator',
        code: 'const age = 20;\nconst message = age >= 18 ? "You can vote" : "You cannot vote";\nconsole.log(message); // "You can vote"\n\n// Multiple conditions\nconst score = 85;\nconst grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";\nconsole.log(grade); // "B"'
      }
    ]
  }
];

export default conditionalsContent; 