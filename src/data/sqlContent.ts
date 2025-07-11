const sqlSections = [
  { id: 'overview', title: 'Overview', icon: '📖' },
  { id: 'basics', title: 'SQL Basics', icon: '🗄️' },
  { id: 'select', title: 'SELECT Statements', icon: '🔎' },
  { id: 'where', title: 'WHERE Clauses', icon: '📋' },
  { id: 'join', title: 'JOIN Operations', icon: '🔗' },
  { id: 'aggregate', title: 'Aggregate Functions', icon: '∑' },
  { id: 'insert', title: 'INSERT/UPDATE/DELETE', icon: '✏️' },
  { id: 'index', title: 'Indexing & Performance', icon: '⚡' }
];

interface SQLContentSection {
  title: string;
  examples: { title: string; code: string }[];
}

interface SQLContent {
  [key: string]: SQLContentSection[];
}

const sqlContent: SQLContent = {
  basics: [
    {
      title: 'What is SQL?',
      examples: [
        {
          title: 'SQL stands for Structured Query Language',
          code: '-- SQL is used to manage and query relational databases.'
        },
        {
          title: 'Basic SQL statement structure',
          code: `-- Most SQL statements follow this pattern:
-- SELECT columns FROM table WHERE condition;`
        }
      ]
    }
  ],
  select: [
    {
      title: 'Selecting data from a table',
      examples: [
        {
          title: 'Select all columns',
          code: 'SELECT * FROM users;'
        },
        {
          title: 'Select specific columns',
          code: 'SELECT name, email FROM users;'
        }
      ]
    }
  ],
  where: [
    {
      title: 'Filtering results with WHERE',
      examples: [
        {
          title: 'Simple WHERE clause',
          code: 'SELECT * FROM users WHERE age >= 18;'
        },
        {
          title: 'Multiple conditions (AND/OR)',
          code: 'SELECT * FROM users WHERE age >= 18 AND city = "London";'
        }
      ]
    }
  ],
  join: [
    {
      title: 'Combining tables with JOIN',
      examples: [
        {
          title: 'INNER JOIN example',
          code: `SELECT users.name, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;`
        },
        {
          title: 'LEFT JOIN example',
          code: `SELECT users.name, orders.amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;`
        }
      ]
    }
  ],
  aggregate: [
    {
      title: 'Aggregate functions',
      examples: [
        {
          title: 'COUNT, SUM, AVG, MIN, MAX',
          code: `SELECT COUNT(*) FROM users;
SELECT AVG(age) FROM users;
SELECT SUM(amount) FROM orders;`
        },
        {
          title: 'GROUP BY usage',
          code: `SELECT city, COUNT(*)
FROM users
GROUP BY city;`
        }
      ]
    }
  ],
  insert: [
    {
      title: 'Adding and updating data',
      examples: [
        {
          title: 'INSERT new row',
          code: 'INSERT INTO users (name, email, age) VALUES ("Alice", "alice@email.com", 22);'
        },
        {
          title: 'UPDATE existing row',
          code: 'UPDATE users SET age = 23 WHERE name = "Alice";'
        },
        {
          title: 'DELETE a row',
          code: 'DELETE FROM users WHERE name = "Alice";'
        }
      ]
    }
  ],
  index: [
    {
      title: 'Improving performance with indexes',
      examples: [
        {
          title: 'Create an index',
          code: 'CREATE INDEX idx_users_email ON users(email);'
        },
        {
          title: 'Drop an index',
          code: 'DROP INDEX idx_users_email;'
        }
      ]
    }
  ]
};

export { sqlSections, sqlContent }; 