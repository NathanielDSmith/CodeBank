import { ContentSection } from '../../types';

const chunkingContent: ContentSection[] = [
  {
    title: 'Array Chunking Basics',
    examples: [
      {
        title: 'Basic Chunking',
        code: `// Manual chunking
function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunks = chunkArray(numbers, 3);
console.log(chunks);
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]`
      },
      {
        title: 'Using Array Methods',
        code: `// Using reduce for chunking
function chunkWithReduce(array, size) {
  return array.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
}

const data = ['a', 'b', 'c', 'd', 'e', 'f'];
const result = chunkWithReduce(data, 2);
console.log(result);
// Output: [['a', 'b'], ['c', 'd'], ['e', 'f']]`
      }
    ]
  },
  {
    title: 'Array Partitioning',
    examples: [
      {
        title: 'Basic Partitioning',
        code: `// Partition array into even and odd numbers
function partition(array, predicate) {
  return array.reduce((result, item) => {
    if (predicate(item)) {
      result[0].push(item);
    } else {
      result[1].push(item);
    }
    return result;
  }, [[], []]);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [evens, odds] = partition(numbers, num => num % 2 === 0);
console.log('Evens:', evens); // [2, 4, 6, 8, 10]
console.log('Odds:', odds);   // [1, 3, 5, 7, 9]`
      },
      {
        title: 'Multiple Partitions',
        code: `// Partition into multiple categories
function multiPartition(array, classifier) {
  return array.reduce((partitions, item) => {
    const category = classifier(item);
    if (!partitions[category]) {
      partitions[category] = [];
    }
    partitions[category].push(item);
    return partitions;
  }, {});
}

const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
  { name: 'Diana', grade: 'C' }
];

const byGrade = multiPartition(students, student => student.grade);
console.log(byGrade);
// Output: { A: [...], B: [...], C: [...] }`
      }
    ]
  },
  {
    title: 'Advanced Chunking Patterns',
    examples: [
      {
        title: 'Overlapping Chunks',
        code: `// Create overlapping chunks (sliding window)
function slidingChunks(array, size, step = 1) {
  const chunks = [];
  for (let i = 0; i <= array.length - size; i += step) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

const data = [1, 2, 3, 4, 5, 6];
const sliding = slidingChunks(data, 3, 1);
console.log(sliding);
// Output: [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]]`
      },
      {
        title: 'Weighted Chunking',
        code: `// Chunk based on cumulative weight
function weightedChunk(array, weightFn, maxWeight) {
  const chunks = [];
  let currentChunk = [];
  let currentWeight = 0;

  for (const item of array) {
    const itemWeight = weightFn(item);
    
    if (currentWeight + itemWeight > maxWeight && currentChunk.length > 0) {
      chunks.push(currentChunk);
      currentChunk = [item];
      currentWeight = itemWeight;
    } else {
      currentChunk.push(item);
      currentWeight += itemWeight;
    }
  }
  
  if (currentChunk.length > 0) {
    chunks.push(currentChunk);
  }
  
  return chunks;
}

const tasks = [
  { name: 'Task 1', duration: 2 },
  { name: 'Task 2', duration: 3 },
  { name: 'Task 3', duration: 1 },
  { name: 'Task 4', duration: 4 }
];

const scheduled = weightedChunk(tasks, task => task.duration, 5);
console.log(scheduled);
// Output: [[Task 1, Task 2], [Task 3], [Task 4]]`
      }
    ]
  },
  {
    title: 'Performance Considerations',
    examples: [
      {
        title: 'Memory Efficient Chunking',
        code: `// Generator-based chunking for large arrays
function* chunkGenerator(array, size) {
  for (let i = 0; i < array.length; i += size) {
    yield array.slice(i, i + size);
  }
}

// Usage with large datasets
const largeArray = Array.from({ length: 1000000 }, (_, i) => i);

for (const chunk of chunkGenerator(largeArray, 1000)) {
  // Process each chunk without loading everything into memory
  console.log('Processing chunk:', chunk.length);
}`
      },
      {
        title: 'Lazy Evaluation',
        code: `// Lazy chunking with iterator
class LazyChunker {
  constructor(array, size) {
    this.array = array;
    this.size = size;
    this.index = 0;
  }

  next() {
    if (this.index >= this.array.length) {
      return { done: true };
    }

    const chunk = this.array.slice(this.index, this.index + this.size);
    this.index += this.size;
    
    return { value: chunk, done: false };
  }

  [Symbol.iterator]() {
    return this;
  }
}

const data = [1, 2, 3, 4, 5, 6, 7, 8];
const lazyChunker = new LazyChunker(data, 3);

for (const chunk of lazyChunker) {
  console.log(chunk);
}
// Output: [1, 2, 3], [4, 5, 6], [7, 8]`
      }
    ]
  },
  {
    title: 'Real-World Examples',
    examples: [
      {
        title: 'API Request Batching',
        code: `// Batch API requests to avoid rate limits
async function batchApiRequests(items, batchSize = 10) {
  const batches = [];
  for (let i = 0; i < items.length; i += batchSize) {
    batches.push(items.slice(i, i + batchSize));
  }

  const results = [];
  for (const batch of batches) {
    const batchPromises = batch.map(item => 
      fetch(\`/api/item/\${item.id}\`)
    );
    
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
    
    // Add delay between batches to respect rate limits
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  return results;}`
      },
      {
        title: 'Data Processing Pipeline',
        code: `// Process data in chunks for better performance
function processDataInChunks(data, chunkSize, processor) {
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }

  return chunks.map((chunk, index) => {
    console.log(\`Processing chunk \${index + 1}/\${chunks.length}\`);
    return processor(chunk);
  });
}

// Example usage
const largeDataset = Array.from({ length: 10000 }, (_, i) => i);
const processed = processDataInChunks(
  largeDataset, 
  1000, 
  chunk => chunk.map(x => x * 2)
);`
      },
      {
        title: 'UI Rendering Optimization',
        code: `// Render large lists in chunks for smooth UI
class VirtualList {
  constructor(items, chunkSize = 50) {
    this.items = items;
    this.chunkSize = chunkSize;
    this.visibleItems = [];
    this.currentIndex = 0;
  }

  renderNextChunk() {
    const chunk = this.items.slice(
      this.currentIndex, 
      this.currentIndex + this.chunkSize
    );
    
    this.visibleItems.push(...chunk);
    this.currentIndex += this.chunkSize;
    
    return chunk;
  }

  hasMore() {
    return this.currentIndex < this.items.length;
  }
}

// Usage in React-like component
const virtualList = new VirtualList(Array.from({ length: 1000 }, (_, i) => i));

function renderChunk() {
  if (virtualList.hasMore()) {
    const chunk = virtualList.renderNextChunk();
    // Render chunk to DOM
    console.log('Rendered chunk:', chunk.length, 'items');
    
    // Schedule next chunk
    setTimeout(renderChunk, 16); // ~60fps
  }
}`
      }
    ]
  }
];

export default chunkingContent; 