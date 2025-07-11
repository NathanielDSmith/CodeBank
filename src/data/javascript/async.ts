const asyncContent = [
  {
    title: 'Promises basics',
    examples: [
      {
        title: 'Creating a promise',
        code: '// Create a simple promise\nconst myPromise = new Promise((resolve, reject) => {\n  // Simulate some work\n  setTimeout(() => {\n    const success = Math.random() > 0.5;\n    if (success) {\n      resolve("Operation successful!");\n    } else {\n      reject("Operation failed!");\n    }\n  }, 1000);\n});\n\n// Use the promise\nmyPromise\n  .then(result => console.log("Success:", result))\n  .catch(error => console.log("Error:", error));'
      },
      {
        title: 'Promise with fetch (API calls)',
        code: '// Fetch data from an API\nfetch("https://jsonplaceholder.typicode.com/posts/1")\n  .then(response => {\n    if (!response.ok) {\n      throw new Error("Network response was not ok");\n    }\n    return response.json();\n  })\n  .then(data => {\n    console.log("Data received:", data);\n  })\n  .catch(error => {\n    console.error("Error fetching data:", error);\n  });'
      }
    ]
  },
  {
    title: 'Async/await (modern way)',
    examples: [
      {
        title: 'Basic async/await',
        code: '// Convert the promise example to async/await\nasync function performOperation() {\n  try {\n    const result = await myPromise;\n    console.log("Success:", result);\n  } catch (error) {\n    console.log("Error:", error);\n  }\n}\n\nperformOperation();'
      },
      {
        title: 'Async/await with fetch',
        code: 'async function fetchUserData() {\n  try {\n    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");\n    \n    if (!response.ok) {\n      throw new Error("Failed to fetch user data");\n    }\n    \n    const user = await response.json();\n    console.log("User:", user.name);\n    return user;\n  } catch (error) {\n    console.error("Error:", error);\n  }\n}\n\nfetchUserData();'
      }
    ]
  },
  {
    title: 'Multiple async operations',
    examples: [
      {
        title: 'Running promises in parallel',
        code: 'async function fetchMultipleUsers() {\n  try {\n    // Fetch multiple users at the same time\n    const promises = [\n      fetch("https://jsonplaceholder.typicode.com/users/1"),\n      fetch("https://jsonplaceholder.typicode.com/users/2"),\n      fetch("https://jsonplaceholder.typicode.com/users/3")\n    ];\n    \n    const responses = await Promise.all(promises);\n    const users = await Promise.all(\n      responses.map(response => response.json())\n    );\n    \n    console.log("All users:", users);\n  } catch (error) {\n    console.error("Error:", error);\n  }\n}\n\nfetchMultipleUsers();'
      }
    ]
  }
];

export default asyncContent; 