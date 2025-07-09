const basicsContent = [
  {
    title: 'Array Creation and Access',
    examples: [
      {
        title: 'Creating arrays and accessing elements',
        code: `// JavaScript: Creating arrays
let emptyArray = [];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

// Accessing elements
let fruits = ["apple", "banana", "orange"];
let firstFruit = fruits[0]; // "apple"
let lastFruit = fruits[fruits.length - 1]; // "orange"

# Python: Creating lists
empty_list = []
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, None]

# Accessing elements
fruits = ["apple", "banana", "orange"]
first_fruit = fruits[0]  # "apple"
last_fruit = fruits[-1]  # "orange"

// Java: Creating arrays
int[] numbers = {1, 2, 3, 4, 5};
String[] fruits = {"apple", "banana", "orange"};
int firstFruit = fruits[0]; // "apple"
int lastFruit = fruits[fruits.length - 1]; // "orange"`
      },
      {
        title: 'Array.isArray() and type checking',
        code: `// JavaScript: Checking if something is an array
let array = [1, 2, 3];
console.log(Array.isArray(array)); // true
console.log(Array.isArray("hello")); // false

function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}

# Python: Checking if something is a list
my_list = [1, 2, 3]
print(isinstance(my_list, list))  # True
print(isinstance("hello", list))  # False

def is_empty_list(lst):
    return isinstance(lst, list) and len(lst) == 0

// Java: Checking array type
int[] array = {1, 2, 3};
boolean isArray = array.getClass().isArray(); // true
boolean isEmpty = array.length == 0; // false`
      }
    ]
  },
  {
    title: 'Basic Array Methods',
    examples: [
      {
        title: 'push, pop, shift, unshift',
        code: `// JavaScript: Adding and removing elements
let numbers = [1, 2, 3];

// push() - adds to the end
numbers.push(4); // [1, 2, 3, 4]
let lastElement = numbers.pop(); // removes 4

// unshift() - adds to the beginning
numbers.unshift(0); // [0, 1, 2, 3]
let firstElement = numbers.shift(); // removes 0

# Python: Adding and removing elements
numbers = [1, 2, 3]

# append() - adds to the end
numbers.append(4)  # [1, 2, 3, 4]
last_element = numbers.pop()  # removes 4

# insert() - adds to the beginning
numbers.insert(0, 0)  # [0, 1, 2, 3]
first_element = numbers.pop(0)  # removes 0

// Java: Using ArrayList
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(1); numbers.add(2); numbers.add(3);

// Add to end
numbers.add(4); // [1, 2, 3, 4]
int lastElement = numbers.remove(numbers.size() - 1);

// Add to beginning
numbers.add(0, 0); // [0, 1, 2, 3]
int firstElement = numbers.remove(0);`
      },
      {
        title: 'slice and splice',
        code: `// JavaScript: slice() - creates a copy
let numbers = [1, 2, 3, 4, 5];
let firstThree = numbers.slice(0, 3); // [1, 2, 3]
let lastThree = numbers.slice(-3); // [3, 4, 5]

// splice() - modifies original array
let fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1); // removes "banana"

# Python: slicing - creates a copy
numbers = [1, 2, 3, 4, 5]
first_three = numbers[0:3]  # [1, 2, 3]
last_three = numbers[-3:]  # [3, 4, 5]

# del - modifies original list
fruits = ["apple", "banana", "orange"]
del fruits[1]  # removes "banana"

// Java: Using subList and remove
ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
List<Integer> firstThree = numbers.subList(0, 3); // [1, 2, 3]
numbers.remove(1); // removes element at index 1`
      }
    ]
  }
];

export default basicsContent; 