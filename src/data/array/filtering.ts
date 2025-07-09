const filteringContent = [
  {
    title: 'Filtering Arrays',
    examples: [
      {
        title: 'Using filter() method',
        code: `// JavaScript: Basic filtering
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4, 6, 8, 10]

// Filter odd numbers
let oddNumbers = numbers.filter(num => num % 2 !== 0); // [1, 3, 5, 7, 9]

# Python: Basic filtering
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter even numbers
even_numbers = [num for num in numbers if num % 2 == 0]  # [2, 4, 6, 8, 10]

# Filter odd numbers
odd_numbers = [num for num in numbers if num % 2 != 0]  # [1, 3, 5, 7, 9]

// Java: Using Stream API
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter even numbers
List<Integer> evenNumbers = numbers.stream()
    .filter(num -> num % 2 == 0)
    .collect(Collectors.toList()); // [2, 4, 6, 8, 10]`
      },
      {
        title: 'Advanced filtering techniques',
        code: `// JavaScript: Filtering objects
let users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 35, active: true }
];

let activeUsers = users.filter(user => user.active);
let youngUsers = users.filter(user => user.age < 30);

# Python: Filtering objects
users = [
    {"name": "Alice", "age": 25, "active": True},
    {"name": "Bob", "age": 30, "active": False},
    {"name": "Charlie", "age": 35, "active": True}
]

active_users = [user for user in users if user["active"]]
young_users = [user for user in users if user["age"] < 30]

// Java: Filtering objects
List<User> users = Arrays.asList(
    new User("Alice", 25, true),
    new User("Bob", 30, false),
    new User("Charlie", 35, true)
);

List<User> activeUsers = users.stream()
    .filter(User::isActive)
    .collect(Collectors.toList());`
      }
    ]
  },
  {
    title: 'Sorting Arrays',
    examples: [
      {
        title: 'Basic sorting with sort()',
        code: `// JavaScript: Basic sorting
let numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// Sort numbers (ascending)
numbers.sort((a, b) => a - b); // [1, 1, 2, 3, 4, 5, 6, 9]

// Sort strings
let fruits = ["banana", "apple", "orange"];
fruits.sort(); // ["apple", "banana", "orange"]

# Python: Basic sorting
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# Sort numbers (ascending)
numbers.sort()  # [1, 1, 2, 3, 4, 5, 6, 9]

# Sort strings
fruits = ["banana", "apple", "orange"]
fruits.sort()  # ["apple", "banana", "orange"]

// Java: Basic sorting
List<Integer> numbers = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6);

// Sort numbers (ascending)
Collections.sort(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

// Sort strings
List<String> fruits = Arrays.asList("banana", "apple", "orange");
Collections.sort(fruits); // ["apple", "banana", "orange"]`
      },
      {
        title: 'Advanced sorting techniques',
        code: `// JavaScript: Sorting objects
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 }
];

// Sort by age
users.sort((a, b) => a.age - b.age);

// Sort by name
users.sort((a, b) => a.name.localeCompare(b.name));

# Python: Sorting objects
users = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 30},
    {"name": "Charlie", "age": 20}
]

# Sort by age
users.sort(key=lambda user: user["age"])

# Sort by name
users.sort(key=lambda user: user["name"])

// Java: Sorting objects
List<User> users = Arrays.asList(
    new User("Alice", 25),
    new User("Bob", 30),
    new User("Charlie", 20)
);

// Sort by age
users.sort(Comparator.comparing(User::getAge));

// Sort by name
users.sort(Comparator.comparing(User::getName));`
      }
    ]
  }
];

export default filteringContent; 