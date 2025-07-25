const errorsContent = [
  {
    title: 'Try-catch blocks',
    examples: [
      {
        title: 'Basic try-catch',
        code: 'try {\n  // Code that might cause an error\n  const result = 10 / 0;\n  console.log("Result:", result);\n} catch (error) {\n  // Handle the error\n  console.error("An error occurred:", error.message);\n}\n\nconsole.log("Code continues to run...");'
      },
      {
        title: 'Try-catch with finally',
        code: 'try {\n  // Code that might cause an error\n  const data = JSON.parse("invalid json");\n  console.log("Data:", data);\n} catch (error) {\n  console.error("Error parsing JSON:", error.message);\n} finally {\n  // This always runs, whether there was an error or not\n  console.log("Cleanup completed");\n}'
      }
    ]
  },
  {
    title: 'Throwing custom errors',
    examples: [
      {
        title: 'Creating custom errors',
        code: 'function divideNumbers(a, b) {\n  if (b === 0) {\n    throw new Error("Cannot divide by zero!");\n  }\n  \n  if (typeof a !== "number" || typeof b !== "number") {\n    throw new TypeError("Both arguments must be numbers");\n  }\n  \n  return a / b;\n}\n\ntry {\n  const result = divideNumbers(10, 0);\n  console.log("Result:", result);\n} catch (error) {\n  console.error("Error:", error.message);\n}'
      },
      {
        title: 'Custom error classes',
        code: 'class ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = "ValidationError";\n    this.field = field;\n  }\n}\n\nfunction validateUser(user) {\n  if (!user.name) {\n    throw new ValidationError("Name is required", "name");\n  }\n  \n  if (!user.email) {\n    throw new ValidationError("Email is required", "email");\n  }\n  \n  return true;\n}\n\ntry {\n  validateUser({ name: "John" }); // Missing email\n} catch (error) {\n  if (error instanceof ValidationError) {\n    console.error(`Validation error in ${error.field}: ${error.message}`);\n  }\n}'
      }
    ]
  },
  {
    title: 'Error handling best practices',
    examples: [
      {
        title: 'Handling specific error types',
        code: 'async function fetchData() {\n  try {\n    const response = await fetch("https://api.example.com/data");\n    \n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    \n    const data = await response.json();\n    return data;\n  } catch (error) {\n    if (error.name === "TypeError") {\n      console.error("Network error:", error.message);\n    } else if (error.name === "SyntaxError") {\n      console.error("Invalid JSON response:", error.message);\n    } else {\n      console.error("Unknown error:", error.message);\n    }\n    \n    // Return a default value or re-throw\n    return null;\n  }\n}'
      }
    ]
  }
];

export default errorsContent; 