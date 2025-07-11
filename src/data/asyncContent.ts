const asyncSections = [
  { id: 'overview', title: 'Overview', icon: '📖' },
  { id: 'basics', title: 'Async Basics', icon: '⏱️' },
  { id: 'promises', title: 'Promises', icon: '🤝' },
  { id: 'async-await', title: 'Async/Await', icon: '⚡' },
  { id: 'error-handling', title: 'Error Handling', icon: '⚠️' },
  { id: 'api-calls', title: 'API Calls', icon: '🌐' },
  { id: 'parallel', title: 'Parallel Execution', icon: '🔄' }
];

interface AsyncContentSection {
  title: string;
  examples: { title: string; code: string }[];
}

interface AsyncContent {
  [key: string]: AsyncContentSection[];
}

const asyncContent: AsyncContent = {
  basics: [
    {
      title: 'What is Asynchronous Programming?',
      examples: [
        {
          title: 'Synchronous vs Asynchronous',
          code: `// Synchronous (blocking)
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3

// Asynchronous (non-blocking)
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// Output: 1, 3, 2 (after 1 second)`
        },
        {
          title: 'Why use async programming?',
          code: `// Without async - blocks the UI
const result = fetch('https://api.example.com/data');
console.log(result); // This blocks until complete

// With async - doesn't block
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
// UI remains responsive while waiting`
        }
      ]
    }
  ],
  promises: [
    {
      title: 'Creating and using Promises',
      examples: [
        {
          title: 'Basic Promise',
          code: `const myPromise = new Promise((resolve, reject) => {
  // Simulate some async work
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));`
        },
        {
          title: 'Promise with .then()',
          code: `fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(user => {
    console.log('User:', user.name);
    return user.email;
  })
  .then(email => {
    console.log('Email:', email);
  })
  .catch(error => {
    console.error('Error:', error);
  });`
        }
      ]
    }
  ],
  'async-await': [
    {
      title: 'Using async/await (modern way)',
      examples: [
        {
          title: 'Basic async/await',
          code: `async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log('User:', user.name);
    return user;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function
getUser();`
        },
        {
          title: 'Multiple async operations',
          code: `async function getMultipleUsers() {
  try {
    const user1 = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user2 = await fetch('https://jsonplaceholder.typicode.com/users/2');
    
    const data1 = await user1.json();
    const data2 = await user2.json();
    
    console.log('User 1:', data1.name);
    console.log('User 2:', data2.name);
  } catch (error) {
    console.error('Error:', error);
  }
}`
        }
      ]
    }
  ],
  'error-handling': [
    {
      title: 'Handling errors in async code',
      examples: [
        {
          title: 'Try-catch with async/await',
          code: `async function fetchUser(id) {
  try {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error.message);
    return null;
  }
}

// Usage
const user = await fetchUser(1);
if (user) {
  console.log('User found:', user.name);
} else {
  console.log('User not found');
}`
        },
        {
          title: 'Error handling with Promises',
          code: `fetch('https://jsonplaceholder.typicode.com/users/999')
  .then(response => {
    if (!response.ok) {
      throw new Error('User not found');
    }
    return response.json();
  })
  .then(user => {
    console.log('User:', user);
  })
  .catch(error => {
    console.error('Error:', error.message);
    // Handle the error gracefully
  })
  .finally(() => {
    console.log('Request completed');
  });`
        }
      ]
    }
  ],
  'api-calls': [
    {
      title: 'Making API calls',
      examples: [
        {
          title: 'GET request',
          code: `async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    posts.slice(0, 3).forEach(post => {
      console.log(\`\${post.id}: \${post.title}\`);
    });
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

getPosts();`
        },
        {
          title: 'POST request',
          code: `async function createPost() {
  try {
    const newPost = {
      title: 'My New Post',
      body: 'This is the content of my post',
      userId: 1
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost)
    });

    const createdPost = await response.json();
    console.log('Created post:', createdPost);
  } catch (error) {
    console.error('Failed to create post:', error);
  }
}

createPost();`
        }
      ]
    }
  ],
  parallel: [
    {
      title: 'Running operations in parallel',
      examples: [
        {
          title: 'Promise.all() - wait for all',
          code: `async function getMultipleUsers() {
  try {
    const promises = [
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/users/2'),
      fetch('https://jsonplaceholder.typicode.com/users/3')
    ];

    const responses = await Promise.all(promises);
    const users = await Promise.all(
      responses.map(response => response.json())
    );

    users.forEach(user => {
      console.log(\`User: \${user.name}\`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

getMultipleUsers();`
        },
        {
          title: 'Promise.race() - wait for first',
          code: `async function getFastestResponse() {
  try {
    const promises = [
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/users/2'),
      fetch('https://jsonplaceholder.typicode.com/users/3')
    ];

    const fastestResponse = await Promise.race(promises);
    const user = await fastestResponse.json();
    
    console.log('Fastest response:', user.name);
  } catch (error) {
    console.error('Error:', error);
  }
}

getFastestResponse();`
        }
      ]
    }
  ]
};

export { asyncSections, asyncContent }; 