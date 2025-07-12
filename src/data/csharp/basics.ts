const basicsContent = [
  {
    title: 'Variables and Data Types',
    examples: [
      {
        title: 'Basic variable declarations',
        code: `// Simple variables
int age = 25;
string name = "John";
double price = 19.99;
bool isActive = true;

// Print to console
Console.WriteLine("Hello World");
Console.WriteLine("Age: " + age);
Console.WriteLine("Name: " + name);`
      },
      {
        title: 'Constants',
        code: `// Constants - values that never change
const double PI = 3.14159;
const string COMPANY_NAME = "My Company";

// Use constants
double radius = 5;
double area = PI * radius * radius;
Console.WriteLine("Area: " + area);`
      }
    ]
  },
  {
    title: 'Classes and Objects',
    examples: [
      {
        title: 'Simple class',
        code: `// Define a class
public class Person
{
    // Properties (variables that belong to the class)
    public string Name;
    public int Age;
    
    // Constructor - runs when we create a new Person
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
    
    // Method - function that belongs to the class
    public void SayHello()
    {
        Console.WriteLine("Hello, I'm " + Name);
    }
}

// Create and use a Person object
Person person = new Person("Alice", 30);
person.SayHello();
Console.WriteLine(person.Name + " is " + person.Age + " years old");`
      },
      {
        title: 'Simple properties',
        code: `public class Product
{
    // Auto-property - C# creates the get/set for you
    public string Name { get; set; }
    public decimal Price { get; set; }
    
    // Constructor
    public Product(string name, decimal price)
    {
        Name = name;
        Price = price;
    }
    
    // Method to display product info
    public void DisplayInfo()
    {
        Console.WriteLine("Product: " + Name);
        Console.WriteLine("Price: $" + Price);
    }
}

// Usage
Product product = new Product("Laptop", 999.99m);
product.DisplayInfo();`
      }
    ]
  },
  {
    title: 'Collections',
    examples: [
      {
        title: 'Arrays and Lists',
        code: `// Array - fixed size
string[] colors = { "Red", "Green", "Blue" };
int[] numbers = new int[3]; // Empty array with 3 spaces

// List - can grow and shrink
List<string> fruits = new List<string>();
fruits.Add("Apple");
fruits.Add("Banana");
fruits.Add("Orange");

// Loop through a list
for (int i = 0; i < fruits.Count; i++)
{
    Console.WriteLine("Fruit " + i + ": " + fruits[i]);
}

// Or use foreach (easier)
foreach (string fruit in fruits)
{
    Console.WriteLine("I like " + fruit);
}`
      },
      {
        title: 'Dictionary',
        code: `// Dictionary - key-value pairs
Dictionary<string, int> scores = new Dictionary<string, int>();

// Add items
scores.Add("Alice", 95);
scores.Add("Bob", 87);
scores.Add("Charlie", 92);

// Get a value
int aliceScore = scores["Alice"];
Console.WriteLine("Alice's score: " + aliceScore);

// Check if key exists
if (scores.ContainsKey("David"))
{
    Console.WriteLine("David's score: " + scores["David"]);
}
else
{
    Console.WriteLine("David not found");
}`
      }
    ]
  }
];

export default basicsContent; 