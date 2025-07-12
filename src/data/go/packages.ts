export default [
  {
    title: "Creating a Package",
    code: `// mathutils/math.go
package mathutils

func Add(a, b int) int {
    return a + b
}

func Multiply(a, b int) int {
    return a * b
}

func IsEven(n int) bool {
    return n%2 == 0
}

// main.go
package main

import (
    "fmt"
    "./mathutils"
)

func main() {
    result := mathutils.Add(5, 3)
    fmt.Printf("5 + 3 = %d\\n", result)
    
    product := mathutils.Multiply(4, 6)
    fmt.Printf("4 * 6 = %d\\n", product)
    
    fmt.Printf("Is 10 even? %t\\n", mathutils.IsEven(10))
}`
  },
  {
    title: "Package with Init Function",
    code: `// config/config.go
package config

import "fmt"

var AppName string
var Version string

func init() {
    AppName = "MyApp"
    Version = "1.0.0"
    fmt.Println("Config package initialized")
}

func GetInfo() string {
    return fmt.Sprintf("%s v%s", AppName, Version)
}

// main.go
package main

import (
    "fmt"
    "./config"
)

func main() {
    fmt.Println(config.GetInfo())
}`
  },
  {
    title: "Go Modules (go.mod)",
    code: `// go.mod
module myproject

go 1.21

require (
    github.com/gorilla/mux v1.8.0
    github.com/joho/godotenv v1.4.0
)

// main.go
package main

import (
    "fmt"
    "github.com/gorilla/mux"
    "github.com/joho/godotenv"
)

func main() {
    // Load environment variables
    godotenv.Load()
    
    // Create router
    r := mux.NewRouter()
    
    r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello from Go module!")
    })
    
    fmt.Println("Server starting...")
    http.ListenAndServe(":8080", r)
}`
  },
  {
    title: "Package with Exported and Unexported",
    code: `// user/user.go
package user

import "fmt"

// Exported (capitalized) - accessible from other packages
type User struct {
    Name string
    Age  int
}

// Unexported (lowercase) - only accessible within this package
type userConfig struct {
    maxAge int
    minAge int
}

// Exported function
func NewUser(name string, age int) *User {
    config := getUserConfig()
    
    if age < config.minAge || age > config.maxAge {
        return nil
    }
    
    return &User{Name: name, Age: age}
}

// Unexported function
func getUserConfig() userConfig {
    return userConfig{minAge: 0, maxAge: 150}
}

// Exported method
func (u *User) Display() {
    fmt.Printf("User: %s, Age: %d\\n", u.Name, u.Age)
}

// main.go
package main

import (
    "fmt"
    "./user"
)

func main() {
    newUser := user.NewUser("Alice", 30)
    if newUser != nil {
        newUser.Display()
    }
}`
  },
  {
    title: "Package with Interface",
    code: `// storage/storage.go
package storage

type Storage interface {
    Save(key string, value string) error
    Get(key string) (string, error)
    Delete(key string) error
}

// memory/memory.go
package memory

import "fmt"

type MemoryStorage struct {
    data map[string]string
}

func NewMemoryStorage() *MemoryStorage {
    return &MemoryStorage{
        data: make(map[string]string),
    }
}

func (m *MemoryStorage) Save(key, value string) error {
    m.data[key] = value
    return nil
}

func (m *MemoryStorage) Get(key string) (string, error) {
    value, exists := m.data[key]
    if !exists {
        return "", fmt.Errorf("key not found: %s", key)
    }
    return value, nil
}

func (m *MemoryStorage) Delete(key string) error {
    delete(m.data, key)
    return nil
}

// main.go
package main

import (
    "fmt"
    "./storage"
    "./memory"
)

func main() {
    var store storage.Storage = memory.NewMemoryStorage()
    
    store.Save("name", "Alice")
    store.Save("age", "30")
    
    name, _ := store.Get("name")
    age, _ := store.Get("age")
    
    fmt.Printf("Name: %s, Age: %s\\n", name, age)
}`
  }
]; 