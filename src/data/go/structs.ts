export default [
  {
    title: "Basic Struct",
    code: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func main() {
    person := Person{Name: "Alice", Age: 30}
    fmt.Printf("Name: %s, Age: %d\\n", person.Name, person.Age)
}`
  },
  {
    title: "Struct with Methods",
    code: `package main

import "fmt"

type Rectangle struct {
    Width  float64
    Height float64
}

// Method with value receiver
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

// Method with pointer receiver
func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    fmt.Printf("Area: %f\\n", rect.Area())
    
    rect.Scale(2)
    fmt.Printf("Scaled Area: %f\\n", rect.Area())
}`
  },
  {
    title: "Interface Definition",
    code: `package main

import "fmt"

type Shape interface {
    Area() float64
    Perimeter() float64
}

type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return 3.14159 * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
    return 2 * 3.14159 * c.Radius
}

type Square struct {
    Side float64
}

func (s Square) Area() float64 {
    return s.Side * s.Side
}

func (s Square) Perimeter() float64 {
    return 4 * s.Side
}

func main() {
    shapes := []Shape{
        Circle{Radius: 5},
        Square{Side: 4},
    }
    
    for _, shape := range shapes {
        fmt.Printf("Area: %f, Perimeter: %f\\n", shape.Area(), shape.Perimeter())
    }
}`
  },
  {
    title: "Embedded Structs",
    code: `package main

import "fmt"

type Animal struct {
    Name string
    Age  int
}

func (a Animal) Describe() string {
    return fmt.Sprintf("%s is %d years old", a.Name, a.Age)
}

type Dog struct {
    Animal      // Embedded struct
    Breed string
}

func (d Dog) Bark() string {
    return "Woof!"
}

func main() {
    dog := Dog{
        Animal: Animal{Name: "Buddy", Age: 3},
        Breed:  "Golden Retriever",
    }
    
    fmt.Println(dog.Describe()) // Inherited method
    fmt.Println(dog.Bark())      // Dog's own method
}`
  },
  {
    title: "Interface Composition",
    code: `package main

import "fmt"

type Reader interface {
    Read() string
}

type Writer interface {
    Write(data string)
}

// Composed interface
type ReadWriter interface {
    Reader
    Writer
}

type File struct {
    content string
}

func (f *File) Read() string {
    return f.content
}

func (f *File) Write(data string) {
    f.content = data
}

func main() {
    file := &File{}
    
    // File implements ReadWriter
    var rw ReadWriter = file
    
    rw.Write("Hello, Go!")
    fmt.Println(rw.Read())
}`
  }
]; 