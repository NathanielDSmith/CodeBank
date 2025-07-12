const basicsContent = [
  {
    title: 'Variables and Data Types',
    examples: [
      {
        title: 'Basic variable declarations',
        code: `package main

import "fmt"

func main() {
    // Simple variables
    var name string = "John"
    var age int = 25
    var price float64 = 19.99
    var isActive bool = true
    
    // Short variable declaration (Go's way)
    message := "Hello World"
    count := 42
    
    // Print to console
    fmt.Println("Hello World")
    fmt.Println("Name:", name)
    fmt.Println("Age:", age)
    fmt.Println("Message:", message)
}`
      },
      {
        title: 'Constants',
        code: `package main

import "fmt"

func main() {
    // Constants - values that never change
    const PI = 3.14159
    const COMPANY_NAME = "My Company"
    
    // Use constants
    radius := 5.0
    area := PI * radius * radius
    fmt.Println("Area:", area)
    
    // Multiple constants
    const (
        SUNDAY = 0
        MONDAY = 1
        TUESDAY = 2
    )
    
    fmt.Println("Monday is day", MONDAY)
}`
      }
    ]
  },
  {
    title: 'Functions',
    examples: [
      {
        title: 'Simple functions',
        code: `package main

import "fmt"

// Function that takes parameters and returns a value
func add(a int, b int) int {
    return a + b
}

// Function with multiple return values (Go's special feature)
func divide(a int, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("cannot divide by zero")
    }
    return a / b, nil
}

// Function with no parameters
func sayHello() {
    fmt.Println("Hello!")
}

func main() {
    // Call functions
    sayHello()
    
    result := add(5, 3)
    fmt.Println("5 + 3 =", result)
    
    // Handle multiple return values
    quotient, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("10 / 2 =", quotient)
    }
}`
      },
      {
        title: 'Function with named return values',
        code: `package main

import "fmt"

// Named return values - Go's way of making code clearer
func getPersonInfo() (name string, age int, city string) {
    name = "Alice"
    age = 30
    city = "New York"
    return // Go knows what to return
}

func main() {
    // Call the function
    name, age, city := getPersonInfo()
    
    fmt.Println("Name:", name)
    fmt.Println("Age:", age)
    fmt.Println("City:", city)
}`
      }
    ]
  },
  {
    title: 'Control Flow',
    examples: [
      {
        title: 'If statements and loops',
        code: `package main

import "fmt"

func main() {
    // If statement
    age := 18
    if age >= 18 {
        fmt.Println("You are an adult")
    } else {
        fmt.Println("You are a minor")
    }
    
    // For loop (Go's only loop)
    for i := 0; i < 5; i++ {
        fmt.Println("Count:", i)
    }
    
    // For loop like a while loop
    count := 0
    for count < 3 {
        fmt.Println("While count:", count)
        count++
    }
    
    // For loop with range (like foreach)
    fruits := []string{"Apple", "Banana", "Orange"}
    for index, fruit := range fruits {
        fmt.Printf("Fruit %d: %s\n", index, fruit)
    }
}`
      },
      {
        title: 'Switch statement',
        code: `package main

import "fmt"

func main() {
    day := "Monday"
    
    // Switch statement
    switch day {
    case "Monday":
        fmt.Println("Start of work week")
    case "Tuesday", "Wednesday", "Thursday":
        fmt.Println("Middle of the week")
    case "Friday":
        fmt.Println("TGIF!")
    case "Saturday", "Sunday":
        fmt.Println("Weekend!")
    default:
        fmt.Println("Unknown day")
    }
    
    // Switch with expression
    age := 25
    switch {
    case age < 18:
        fmt.Println("Minor")
    case age < 65:
        fmt.Println("Adult")
    default:
        fmt.Println("Senior")
    }
}`
      }
    ]
  }
];

export default basicsContent; 