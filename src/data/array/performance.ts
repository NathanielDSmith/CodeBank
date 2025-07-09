import { ContentSection } from '../../types';

const performanceContent: ContentSection[] = [
  {
    title: 'Array Performance Optimization',
    examples: [
      {
        title: 'Time Complexity Analysis',
        code: `// Understanding array method performance
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// O(n) - Linear time
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

// O(log n) - Binary search (requires sorted array)
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

// Performance comparison
const largeArray = Array.from({ length: 1000000 }, (_, i) => i);
const target = 999999;

console.time('Linear Search');
linearSearch(largeArray, target);
console.timeEnd('Linear Search');

console.time('Binary Search');
binarySearch(largeArray, target);
console.timeEnd('Binary Search');`
      },
      {
        title: 'Memory Optimization',
        code: `// Memory-efficient array operations
class MemoryEfficientArray {
  constructor() {
    this.data = [];
    this.deletedIndices = new Set();
  }
  
  add(item) {
    this.data.push(item);
  }
  
  delete(index) {
    // Mark as deleted instead of removing
    this.deletedIndices.add(index);
  }
  
  get(index) {
    if (this.deletedIndices.has(index)) {
      return undefined;
    }
    return this.data[index];
  }
  
  compact() {
    // Only compact when necessary
    if (this.deletedIndices.size > this.data.length / 2) {
      this.data = this.data.filter((_, index) => !this.deletedIndices.has(index));
      this.deletedIndices.clear();
    }
  }
  
  toArray() {
    return this.data.filter((_, index) => !this.deletedIndices.has(index));
  }
}

const efficientArray = new MemoryEfficientArray();
for (let i = 0; i < 1000; i++) {
  efficientArray.add(i);
}

// Delete many items
for (let i = 0; i < 500; i++) {
  efficientArray.delete(i);
}

// Compact only when needed
efficientArray.compact();
console.log(efficientArray.toArray().length);`
      }
    ]
  },
  {
    title: 'Optimization Techniques',
    examples: [
      {
        title: 'Avoiding Common Pitfalls',
        code: `// ❌ Bad: Multiple array iterations
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Bad approach
const badApproach = (arr) => {
  const evens = arr.filter(num => num % 2 === 0);
  const doubled = evens.map(num => num * 2);
  const sum = doubled.reduce((acc, num) => acc + num, 0);
  return sum;
};

// ✅ Good: Single iteration
const goodApproach = (arr) => {
  return arr.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + (num * 2);
    }
    return sum;
  }, 0);
};

console.log(badApproach(numbers)); // 60
console.log(goodApproach(numbers)); // 60 (same result, better performance)`
      },
      {
        title: 'Efficient Data Structures',
        code: `// Using Set for fast lookups
class OptimizedArrayProcessor {
  constructor() {
    this.uniqueItems = new Set();
    this.itemCounts = new Map();
  }
  
  addItem(item) {
    this.uniqueItems.add(item);
    this.itemCounts.set(item, (this.itemCounts.get(item) || 0) + 1);
  }
  
  hasItem(item) {
    return this.uniqueItems.has(item); // O(1) lookup
  }
  
  getItemCount(item) {
    return this.itemCounts.get(item) || 0;
  }
  
  getUniqueItems() {
    return Array.from(this.uniqueItems);
  }
  
  getMostFrequent() {
    let maxCount = 0;
    let mostFrequent = null;
    
    for (const [item, count] of this.itemCounts) {
      if (count > maxCount) {
        maxCount = count;
        mostFrequent = item;
      }
    }
    
    return mostFrequent;
  }
}

const processor = new OptimizedArrayProcessor();
const items = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];

items.forEach(item => processor.addItem(item));

console.log(processor.hasItem('apple')); // true
console.log(processor.getItemCount('apple')); // 3
console.log(processor.getMostFrequent()); // 'apple'`
      }
    ]
  },
  {
    title: 'Benchmarking and Profiling',
    examples: [
      {
        title: 'Performance Measurement',
        code: `// Performance benchmarking utility
class ArrayBenchmark {
  static measure(name, fn, iterations = 1000) {
    const start = performance.now();
    
    for (let i = 0; i < iterations; i++) {
      fn();
    }
    
    const end = performance.now();
    const average = (end - start) / iterations;
    
    console.log(\`\${name}: \${average.toFixed(4)}ms average\`);
    return average;
  }
  
  static compare(functions) {
    const results = [];
    
    for (const [name, fn] of Object.entries(functions)) {
      const time = this.measure(name, fn);
      results.push({ name, time });
    }
    
    results.sort((a, b) => a.time - b.time);
    
    console.log('\\nPerformance Ranking:');
    results.forEach((result, index) => {
      console.log(\`\${index + 1}. \${result.name}: \${result.time.toFixed(4)}ms\`);
    });
    
    return results;
  }
}

// Example benchmarks
const testArray = Array.from({ length: 10000 }, (_, i) => i);

const functions = {
  'forEach': () => {
    let sum = 0;
    testArray.forEach(num => sum += num);
    return sum;
  },
  'for...of': () => {
    let sum = 0;
    for (const num of testArray) {
      sum += num;
    }
    return sum;
  },
  'for loop': () => {
    let sum = 0;
    for (let i = 0; i < testArray.length; i++) {
      sum += testArray[i];
    }
    return sum;
  },
  'reduce': () => {
    return testArray.reduce((sum, num) => sum + num, 0);
  }
};

ArrayBenchmark.compare(functions);`
      },
      {
        title: 'Memory Usage Monitoring',
        code: `// Memory usage monitoring
class MemoryMonitor {
  static getMemoryUsage() {
    if (performance.memory) {
      return {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit
      };
    }
    return null;
  }
  
  static logMemoryUsage(label = '') {
    const usage = this.getMemoryUsage();
    if (usage) {
      console.log(\`\${label} Memory Usage:\`, {
        used: \`\${(usage.used / 1024 / 1024).toFixed(2)} MB\`,
        total: \`\${(usage.total / 1024 / 1024).toFixed(2)} MB\`,
        limit: \`\${(usage.limit / 1024 / 1024).toFixed(2)} MB\`
      });
    }
  }
  
  static measureMemoryImpact(fn) {
    const before = this.getMemoryUsage();
    const result = fn();
    const after = this.getMemoryUsage();
    
    if (before && after) {
      const difference = after.used - before.used;
      console.log(\`Memory impact: \${(difference / 1024).toFixed(2)} KB\`);
    }
    
    return result;
  }
}

// Example usage
MemoryMonitor.logMemoryUsage('Before operation');

const largeArray = Array.from({ length: 100000 }, (_, i) => i);
MemoryMonitor.measureMemoryImpact(() => {
  return largeArray.map(x => x * 2).filter(x => x % 2 === 0);
});

MemoryMonitor.logMemoryUsage('After operation');`
      }
    ]
  }
];

export default performanceContent; 