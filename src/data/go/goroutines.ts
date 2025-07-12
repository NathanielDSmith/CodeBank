const goroutinesContent = [
  {
    title: 'Goroutines Basics',
    examples: [
      {
        title: 'Simple goroutines',
        code: `package main

import (
    "fmt"
    "time"
)

// Function that will run as a goroutine
func sayHello(name string) {
    fmt.Println("Hello from", name)
}

func main() {
    // Start a goroutine (runs in background)
    go sayHello("Alice")
    
    // Start another goroutine
    go sayHello("Bob")
    
    // Main function continues immediately
    fmt.Println("Main function continues...")
    
    // Wait a bit so we can see the goroutines run
    time.Sleep(1 * time.Second)
    
    fmt.Println("Main function ends")
}`
      },
      {
        title: 'Multiple goroutines',
        code: `package main

import (
    "fmt"
    "time"
)

func countNumbers(name string) {
    for i := 1; i <= 5; i++ {
        fmt.Printf("%s: %d\n", name, i)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    // Start multiple goroutines
    go countNumbers("Counter A")
    go countNumbers("Counter B")
    go countNumbers("Counter C")
    
    // Main function waits
    time.Sleep(1 * time.Second)
    
    fmt.Println("All counters finished!")
}`
      }
    ]
  },
  {
    title: 'Anonymous Functions',
    examples: [
      {
        title: 'Goroutines with anonymous functions',
        code: `package main

import (
    "fmt"
    "time"
)

func main() {
    // Start goroutine with anonymous function
    go func() {
        fmt.Println("Hello from anonymous function!")
    }()
    
    // Start goroutine with parameters
    go func(name string) {
        fmt.Println("Hello", name)
    }("Alice")
    
    // Wait for goroutines to finish
    time.Sleep(500 * time.Millisecond)
    
    fmt.Println("Main function ends")
}`
      },
      {
        title: 'Goroutines with loops',
        code: `package main

import (
    "fmt"
    "time"
)

func main() {
    // Start 5 goroutines in a loop
    for i := 1; i <= 5; i++ {
        go func(id int) {
            fmt.Printf("Worker %d starting\n", id)
            time.Sleep(200 * time.Millisecond)
            fmt.Printf("Worker %d finished\n", id)
        }(i)
    }
    
    // Wait for all workers
    time.Sleep(1 * time.Second)
    fmt.Println("All workers finished!")
}`
      }
    ]
  }
];

export default goroutinesContent; 