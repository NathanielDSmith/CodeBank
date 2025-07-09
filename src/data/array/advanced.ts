import { ContentSection } from '../../types';

const advancedContent: ContentSection[] = [
  {
    title: 'Advanced Array Patterns',
    examples: [
      {
        title: 'Memoization with Arrays',
        code: `// Memoized array operations
function memoizedArrayOperation() {
  const cache = new Map();
  
  return function(array, operation) {
    const key = JSON.stringify(array) + operation.name;
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = operation(array);
    cache.set(key, result);
    return result;
  };
}

const memoized = memoizedArrayOperation();

const expensiveOperation = (arr) => {
  // Simulate expensive computation
  return arr.reduce((sum, num) => sum + Math.pow(num, 2), 0);
};

const data = [1, 2, 3, 4, 5];
console.log(memoized(data, expensiveOperation)); // Computed
console.log(memoized(data, expensiveOperation)); // Cached`
      },
      {
        title: 'Array Decorators',
        code: `// Array method decorators
function withLogging(target, propertyKey, descriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args) {
    console.log(\`Calling \${propertyKey} with args:\`, args);
    const result = originalMethod.apply(this, args);
    console.log(\`Result:\`, result);
    return result;
  };
  
  return descriptor;
}

class ArrayProcessor {
  @withLogging
  static filterEvenNumbers(array) {
    return array.filter(num => num % 2 === 0);
  }
  
  @withLogging
  static doubleNumbers(array) {
    return array.map(num => num * 2);
  }
}

const numbers = [1, 2, 3, 4, 5, 6];
ArrayProcessor.filterEvenNumbers(numbers);
ArrayProcessor.doubleNumbers(numbers);`
      }
    ]
  },
  {
    title: 'Functional Programming Patterns',
    examples: [
      {
        title: 'Point-Free Style',
        code: `// Point-free array operations
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

// Utility functions
const filter = fn => arr => arr.filter(fn);
const map = fn => arr => arr.map(fn);
const reduce = fn => initial => arr => arr.reduce(fn, initial);

// Point-free operations
const isEven = num => num % 2 === 0;
const double = num => num * 2;
const sum = (a, b) => a + b;

const processNumbers = pipe(
  filter(isEven),
  map(double),
  reduce(sum)(0)
);

const numbers = [1, 2, 3, 4, 5, 6];
console.log(processNumbers(numbers)); // 24 (2+4+6 doubled)`
      },
      {
        title: 'Monadic Operations',
        code: `// Maybe monad for safe array operations
class Maybe {
  constructor(value) {
    this.value = value;
  }
  
  static of(value) {
    return new Maybe(value);
  }
  
  map(fn) {
    return this.value === null || this.value === undefined
      ? Maybe.of(null)
      : Maybe.of(fn(this.value));
  }
  
  flatMap(fn) {
    return this.map(fn).join();
  }
  
  join() {
    return this.value instanceof Maybe ? this.value : this;
  }
}

// Safe array operations
const safeArrayOperation = (array, operation) => {
  return Maybe.of(array)
    .map(arr => Array.isArray(arr) ? arr : null)
    .map(operation)
    .map(result => result || []);
};

const numbers = [1, 2, 3, 4, 5];
const result = safeArrayOperation(numbers, arr => arr.filter(n => n > 3));
console.log(result.value); // [4, 5]`
      }
    ]
  },
  {
    title: 'Iterator Patterns',
    examples: [
      {
        title: 'Custom Array Iterators',
        code: `// Custom array iterator with filtering
class FilteredArrayIterator {
  constructor(array, predicate) {
    this.array = array;
    this.predicate = predicate;
    this.index = 0;
  }

  next() {
    while (this.index < this.array.length) {
      const item = this.array[this.index];
      this.index++;
      
      if (this.predicate(item)) {
        return { value: item, done: false };
      }
    }
    
    return { done: true };
  }

  [Symbol.iterator]() {
    return this;
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenIterator = new FilteredArrayIterator(numbers, num => num % 2 === 0);

for (const even of evenIterator) {
  console.log(even); // 2, 4, 6, 8, 10
}`
      },
      {
        title: 'Generator-Based Iterators',
        code: `// Generator for array combinations
function* arrayCombinations(array, size) {
  if (size === 1) {
    for (const item of array) {
      yield [item];
    }
    return;
  }
  
  for (let i = 0; i <= array.length - size; i++) {
    const first = array[i];
    const remaining = array.slice(i + 1);
    
    for (const combination of arrayCombinations(remaining, size - 1)) {
      yield [first, ...combination];
    }
  }
}

const items = ['a', 'b', 'c'];
for (const combo of arrayCombinations(items, 2)) {
  console.log(combo);
}
// Output: ['a', 'b'], ['a', 'c'], ['b', 'c']`
      }
    ]
  },
  {
    title: 'Optimization Patterns',
    examples: [
      {
        title: 'Lazy Evaluation',
        code: `// Lazy array operations
class LazyArray {
  constructor(array) {
    this.array = array;
    this.operations = [];
  }
  
  filter(predicate) {
    this.operations.push({ type: 'filter', fn: predicate });
    return this;
  }
  
  map(transform) {
    this.operations.push({ type: 'map', fn: transform });
    return this;
  }
  
  execute() {
    let result = [...this.array];
    
    for (const operation of this.operations) {
      if (operation.type === 'filter') {
        result = result.filter(operation.fn);
      } else if (operation.type === 'map') {
        result = result.map(operation.fn);
      }
    }
    
    return result;
  }
}

const lazyArray = new LazyArray([1, 2, 3, 4, 5, 6])
  .filter(num => num % 2 === 0)
  .map(num => num * 2);

console.log(lazyArray.execute()); // [4, 8, 12]`
      },
      {
        title: 'Memory-Efficient Processing',
        code: `// Stream-like array processing
class ArrayStream {
  constructor(array) {
    this.array = array;
    this.index = 0;
  }
  
  hasNext() {
    return this.index < this.array.length;
  }
  
  next() {
    return this.array[this.index++];
  }
  
  forEach(consumer) {
    while (this.hasNext()) {
      consumer(this.next());
    }
  }
  
  collect() {
    const result = [];
    this.forEach(item => result.push(item));
    return result;
  }
}

const stream = new ArrayStream([1, 2, 3, 4, 5]);
stream.forEach(item => console.log(\`Processing: \${item}\`));`
      }
    ]
  }
];

export default advancedContent; 