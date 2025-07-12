export default [
  {
    title: "Basic HTTP Server",
    code: `package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, Go!")
    })
    
    fmt.Println("Server starting on :8080")
    http.ListenAndServe(":8080", nil)
}`
  },
  {
    title: "HTTP Server with JSON Response",
    code: `package main

import (
    "encoding/json"
    "net/http"
)

type User struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age"\`
}

func main() {
    http.HandleFunc("/user", func(w http.ResponseWriter, r *http.Request) {
        user := User{Name: "Alice", Age: 30}
        
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(user)
    })
    
    http.ListenAndServe(":8080", nil)
}`
  },
  {
    title: "HTTP Server with Query Parameters",
    code: `package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/greet", func(w http.ResponseWriter, r *http.Request) {
        name := r.URL.Query().Get("name")
        if name == "" {
            name = "World"
        }
        
        fmt.Fprintf(w, "Hello, %s!", name)
    })
    
    http.ListenAndServe(":8080", nil)
}`
  },
  {
    title: "HTTP Server with Different Methods",
    code: `package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/api/users", func(w http.ResponseWriter, r *http.Request) {
        switch r.Method {
        case "GET":
            fmt.Fprintf(w, "Getting users")
        case "POST":
            fmt.Fprintf(w, "Creating user")
        case "PUT":
            fmt.Fprintf(w, "Updating user")
        case "DELETE":
            fmt.Fprintf(w, "Deleting user")
        default:
            http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
        }
    })
    
    http.ListenAndServe(":8080", nil)
}`
  },
  {
    title: "Static File Server",
    code: `package main

import (
    "net/http"
)

func main() {
    // Serve static files from "static" directory
    fs := http.FileServer(http.Dir("static"))
    http.Handle("/static/", http.StripPrefix("/static/", fs))
    
    // Serve index.html at root
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        http.ServeFile(w, r, "static/index.html")
    })
    
    http.ListenAndServe(":8080", nil)
}`
  }
]; 