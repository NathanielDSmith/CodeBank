export default [
  {
    title: "Context with Timeout",
    code: `package main

import (
    "context"
    "fmt"
    "time"
)

func longRunningTask(ctx context.Context) string {
    select {
    case <-time.After(5 * time.Second):
        return "Task completed"
    case <-ctx.Done():
        return "Task cancelled: " + ctx.Err().Error()
    }
}

func main() {
    // Create context with 3 second timeout
    ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
    defer cancel()
    
    result := longRunningTask(ctx)
    fmt.Println(result)
}`
  },
  {
    title: "Custom Error Types",
    code: `package main

import (
    "fmt"
    "time"
)

type ValidationError struct {
    Field string
    Value interface{}
    Message string
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("validation error on %s: %v - %s", e.Field, e.Value, e.Message)
}

type AgeError struct {
    Age int
    Min int
    Max int
}

func (e AgeError) Error() string {
    return fmt.Sprintf("age %d is outside valid range [%d, %d]", e.Age, e.Min, e.Max)
}

func validateAge(age int) error {
    if age < 0 {
        return &ValidationError{Field: "age", Value: age, Message: "age cannot be negative"}
    }
    if age > 150 {
        return &AgeError{Age: age, Min: 0, Max: 150}
    }
    return nil
}

func main() {
    ages := []int{25, -5, 200, 30}
    
    for _, age := range ages {
        if err := validateAge(age); err != nil {
            fmt.Printf("Error: %v\\n", err)
        } else {
            fmt.Printf("Age %d is valid\\n", age)
        }
    }
}`
  },
  {
    title: "Reflection",
    code: `package main

import (
    "fmt"
    "reflect"
)

type Person struct {
    Name string \`json:"name" validate:"required"\`
    Age  int    \`json:"age" validate:"min:0,max:150"\`
    City string \`json:"city"\`
}

func inspectStruct(v interface{}) {
    t := reflect.TypeOf(v)
    v_val := reflect.ValueOf(v)
    
    fmt.Printf("Type: %s\\n", t.Name())
    fmt.Printf("Kind: %s\\n", t.Kind())
    fmt.Printf("Num fields: %d\\n\\n", t.NumField())
    
    for i := 0; i < t.NumField(); i++ {
        field := t.Field(i)
        value := v_val.Field(i)
        
        fmt.Printf("Field: %s\\n", field.Name)
        fmt.Printf("  Type: %s\\n", field.Type)
        fmt.Printf("  Tag: %s\\n", field.Tag)
        fmt.Printf("  Value: %v\\n\\n", value.Interface())
    }
}

func main() {
    person := Person{
        Name: "Alice",
        Age:  30,
        City: "New York",
    }
    
    inspectStruct(person)
}`
  },
  {
    title: "Generics (Go 1.18+)",
    code: `package main

import "fmt"

// Generic function that works with any comparable type
func findIndex[T comparable](slice []T, item T) int {
    for i, v := range slice {
        if v == item {
            return i
        }
    }
    return -1
}

// Generic struct
type Stack[T any] struct {
    items []T
}

func NewStack[T any]() *Stack[T] {
    return &Stack[T]{items: make([]T, 0)}
}

func (s *Stack[T]) Push(item T) {
    s.items = append(s.items, item)
}

func (s *Stack[T]) Pop() (T, bool) {
    if len(s.items) == 0 {
        var zero T
        return zero, false
    }
    
    item := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    return item, true
}

func (s *Stack[T]) Size() int {
    return len(s.items)
}

func main() {
    // Using generic function
    numbers := []int{1, 2, 3, 4, 5}
    index := findIndex(numbers, 3)
    fmt.Printf("Index of 3: %d\\n", index)
    
    strings := []string{"apple", "banana", "cherry"}
    strIndex := findIndex(strings, "banana")
    fmt.Printf("Index of 'banana': %d\\n", strIndex)
    
    // Using generic struct
    intStack := NewStack[int]()
    intStack.Push(1)
    intStack.Push(2)
    intStack.Push(3)
    
    fmt.Printf("Stack size: %d\\n", intStack.Size())
    
    if item, ok := intStack.Pop(); ok {
        fmt.Printf("Popped: %d\\n", item)
    }
}`
  },
  {
    title: "Worker Pool Pattern",
    code: `package main

import (
    "fmt"
    "sync"
    "time"
)

type Job struct {
    ID       int
    Data     string
    Duration time.Duration
}

type Result struct {
    JobID  int
    Output string
    Error  error
}

func worker(id int, jobs <-chan Job, results chan<- Result, wg *sync.WaitGroup) {
    defer wg.Done()
    
    for job := range jobs {
        fmt.Printf("Worker %d processing job %d\\n", id, job.ID)
        
        // Simulate work
        time.Sleep(job.Duration)
        
        result := Result{
            JobID:  job.ID,
            Output: fmt.Sprintf("Processed: %s", job.Data),
        }
        
        results <- result
    }
}

func main() {
    const numWorkers = 3
    const numJobs = 10
    
    jobs := make(chan Job, numJobs)
    results := make(chan Result, numJobs)
    
    var wg sync.WaitGroup
    
    // Start workers
    for i := 1; i <= numWorkers; i++ {
        wg.Add(1)
        go worker(i, jobs, results, &wg)
    }
    
    // Send jobs
    for i := 1; i <= numJobs; i++ {
        jobs <- Job{
            ID:       i,
            Data:     fmt.Sprintf("data-%d", i),
            Duration: time.Duration(i%3+1) * time.Second,
        }
    }
    close(jobs)
    
    // Wait for all workers to finish
    go func() {
        wg.Wait()
        close(results)
    }()
    
    // Collect results
    for result := range results {
        fmt.Printf("Job %d completed: %s\\n", result.JobID, result.Output)
    }
    
    fmt.Println("All jobs completed!")
}`
  }
]; 