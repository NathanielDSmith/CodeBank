import { ContentSection } from '../../types';

const bestPracticesContent: ContentSection[] = [
  {
    title: 'Array Best Practices',
    examples: [
      {
        title: 'Immutability',
        code: `// ❌ Bad: Mutating original array
const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Mutates original array

// ✅ Good: Creating new array
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6]; // New array

// ✅ Good: Using functional methods
const doubled = numbers.map(num => num * 2);
const filtered = numbers.filter(num => num > 3);
const sorted = [...numbers].sort((a, b) => a - b);`
      },
      {
        title: 'Defensive Programming',
        code: `// Always check if array exists and has items
function processArray(array) {
  // ✅ Good: Defensive checks
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }
  
  if (array.length === 0) {
    return [];
  }
  
  return array.map(item => item * 2);
}

// ✅ Good: Safe array access
const getItemSafely = (array, index) => {
  if (!Array.isArray(array) || index < 0 || index >= array.length) {
    return undefined;
  }
  return array[index];
};

// ✅ Good: Default values
const processWithDefaults = (array = []) => {
  return array.filter(item => item !== null && item !== undefined);
};`
      }
    ]
  },
  {
    title: 'Code Organization',
    examples: [
      {
        title: 'Separation of Concerns',
        code: `// ✅ Good: Separate data transformation logic
class ArrayProcessor {
  static filterByType(array, type) {
    return array.filter(item => typeof item === type);
  }
  
  static transformNumbers(array, operation) {
    return array
      .filter(item => typeof item === 'number')
      .map(operation);
  }
  
  static groupBy(array, keyFn) {
    return array.reduce((groups, item) => {
      const key = keyFn(item);
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
      return groups;
    }, {});
  }
}

// Usage
const data = [1, 'hello', 2, 'world', 3];
const numbers = ArrayProcessor.filterByType(data, 'number');
const doubled = ArrayProcessor.transformNumbers(data, x => x * 2);
const grouped = ArrayProcessor.groupBy(data, item => typeof item);`
      },
      {
        title: 'Error Handling',
        code: `// ✅ Good: Proper error handling
class SafeArrayOperations {
  static tryMap(array, mapper) {
    try {
      if (!Array.isArray(array)) {
        throw new Error('Input must be an array');
      }
      
      return array.map((item, index) => {
        try {
          return mapper(item, index);
        } catch (error) {
          console.warn(\`Error processing item at index \${index}:\`, error);
          return null;
        }
      }).filter(item => item !== null);
    } catch (error) {
      console.error('Array operation failed:', error);
      return [];
    }
  }
  
  static validateArray(array, validator) {
    if (!Array.isArray(array)) {
      return { isValid: false, error: 'Not an array' };
    }
    
    const errors = [];
    array.forEach((item, index) => {
      try {
        if (!validator(item)) {
          errors.push(\`Invalid item at index \${index}\`);
        }
      } catch (error) {
        errors.push(\`Validation error at index \${index}: \${error.message}\`);
      }
    });
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// Usage
const numbers = [1, 2, 'invalid', 4, 5];
const result = SafeArrayOperations.tryMap(numbers, x => x * 2);
const validation = SafeArrayOperations.validateArray(numbers, x => typeof x === 'number');`
      }
    ]
  },
  {
    title: 'Performance Best Practices',
    examples: [
      {
        title: 'Efficient Iteration',
        code: `// ✅ Good: Choose the right iteration method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// For simple iteration
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// For functional operations
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);

// For early termination
const findFirstEven = numbers.find(num => num % 2 === 0);
const hasEven = numbers.some(num => num % 2 === 0);
const allEven = numbers.every(num => num % 2 === 0);

// For side effects
numbers.forEach(num => console.log(num));`
      },
      {
        title: 'Memory Management',
        code: `// ✅ Good: Avoid memory leaks
class MemoryEfficientProcessor {
  constructor() {
    this.cache = new Map();
    this.maxCacheSize = 1000;
  }
  
  processArray(array, processor) {
    const key = JSON.stringify(array);
    
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    
    const result = processor(array);
    
    // Prevent cache from growing too large
    if (this.cache.size >= this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(key, result);
    return result;
  }
  
  clearCache() {
    this.cache.clear();
  }
}

// ✅ Good: Use WeakMap for object keys
const objectCache = new WeakMap();

function cacheObjectResult(obj, processor) {
  if (objectCache.has(obj)) {
    return objectCache.get(obj);
  }
  
  const result = processor(obj);
  objectCache.set(obj, result);
  return result;
}`
      }
    ]
  },
  {
    title: 'Testing Best Practices',
    examples: [
      {
        title: 'Unit Testing Arrays',
        code: `// ✅ Good: Comprehensive array testing
class ArrayTestUtils {
  static testArrayOperation(operation, testCases) {
    const results = [];
    
    testCases.forEach(({ input, expected, description }) => {
      try {
        const result = operation(input);
        const passed = JSON.stringify(result) === JSON.stringify(expected);
        
        results.push({
          description,
          passed,
          input,
          expected,
          actual: result
        });
      } catch (error) {
        results.push({
          description,
          passed: false,
          input,
          expected,
          error: error.message
        });
      }
    });
    
    return results;
  }
  
  static generateTestData(size = 100) {
    return Array.from({ length: size }, (_, i) => ({
      id: i,
      value: Math.random() * 100,
      category: ['A', 'B', 'C'][i % 3]
    }));
  }
}

// Example usage
const testCases = [
  {
    input: [1, 2, 3, 4, 5],
    expected: [2, 4, 6, 8, 10],
    description: 'Double all numbers'
  },
  {
    input: [],
    expected: [],
    description: 'Empty array'
  },
  {
    input: [1, 'invalid', 3],
    expected: [2, 6],
    description: 'Mixed types'
  }
];

const doubleNumbers = arr => arr
  .filter(x => typeof x === 'number')
  .map(x => x * 2);

const results = ArrayTestUtils.testArrayOperation(doubleNumbers, testCases);
console.log('Test Results:', results);`
      },
      {
        title: 'Edge Case Testing',
        code: `// ✅ Good: Test edge cases
const edgeCaseTests = [
  // Null and undefined
  { input: null, expected: [], description: 'Null input' },
  { input: undefined, expected: [], description: 'Undefined input' },
  
  // Empty arrays
  { input: [], expected: [], description: 'Empty array' },
  
  // Single element
  { input: [1], expected: [2], description: 'Single element' },
  
  // Large arrays
  { 
    input: Array.from({ length: 10000 }, (_, i) => i),
    expected: Array.from({ length: 10000 }, (_, i) => i * 2),
    description: 'Large array'
  },
  
  // Nested arrays
  { 
    input: [[1, 2], [3, 4], [5, 6]],
    expected: [[2, 4], [6, 8], [10, 12]],
    description: 'Nested arrays'
  }
];

// Test function that handles edge cases
const robustArrayProcessor = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  
  return array.map(item => {
    if (Array.isArray(item)) {
      return item.map(x => x * 2);
    }
    return typeof item === 'number' ? item * 2 : item;
  });
};

const edgeResults = ArrayTestUtils.testArrayOperation(robustArrayProcessor, edgeCaseTests);`
      }
    ]
  }
];

export default bestPracticesContent; 