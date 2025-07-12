const linqContent = [
  {
    title: 'LINQ Basics',
    examples: [
      {
        title: 'Simple LINQ operations',
        code: `// Create a list of numbers
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Find even numbers
var evenNumbers = numbers.Where(n => n % 2 == 0);
foreach (int num in evenNumbers)
{
    Console.WriteLine("Even: " + num);
}

// Double each number
var doubled = numbers.Select(n => n * 2);
foreach (int num in doubled)
{
    Console.WriteLine("Doubled: " + num);
}

// Sort numbers
var sorted = numbers.OrderBy(n => n);
foreach (int num in sorted)
{
    Console.WriteLine("Sorted: " + num);
}`
      },
      {
        title: 'Working with strings',
        code: `// List of names
List<string> names = new List<string> { "Alice", "Bob", "Charlie", "David", "Eve" };

// Find names that start with 'A'
var namesStartingWithA = names.Where(name => name.StartsWith("A"));
foreach (string name in namesStartingWithA)
{
    Console.WriteLine("Name starting with A: " + name);
}

// Convert names to uppercase
var upperNames = names.Select(name => name.ToUpper());
foreach (string name in upperNames)
{
    Console.WriteLine("Uppercase: " + name);
}

// Sort names alphabetically
var sortedNames = names.OrderBy(name => name);
foreach (string name in sortedNames)
{
    Console.WriteLine("Sorted: " + name);
}`
      }
    ]
  },
  {
    title: 'Simple Aggregations',
    examples: [
      {
        title: 'Basic math operations',
        code: `List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };

// Sum all numbers
int sum = numbers.Sum();
Console.WriteLine("Sum: " + sum);

// Find the biggest number
int max = numbers.Max();
Console.WriteLine("Max: " + max);

// Find the smallest number
int min = numbers.Min();
Console.WriteLine("Min: " + min);

// Count how many numbers
int count = numbers.Count();
Console.WriteLine("Count: " + count);

// Average of all numbers
double average = numbers.Average();
Console.WriteLine("Average: " + average);`
      },
      {
        title: 'Working with objects',
        code: `// Simple class
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}

// List of people
List<Person> people = new List<Person>
{
    new Person { Name = "Alice", Age = 25 },
    new Person { Name = "Bob", Age = 30 },
    new Person { Name = "Charlie", Age = 35 },
    new Person { Name = "Diana", Age = 28 }
};

// Find people older than 30
var olderPeople = people.Where(p => p.Age > 30);
foreach (Person person in olderPeople)
{
    Console.WriteLine(person.Name + " is " + person.Age + " years old");
}

// Get just the names
var names = people.Select(p => p.Name);
foreach (string name in names)
{
    Console.WriteLine("Name: " + name);
}

// Sort by age
var sortedByAge = people.OrderBy(p => p.Age);
foreach (Person person in sortedByAge)
{
    Console.WriteLine(person.Name + " - " + person.Age);
}`
      }
    ]
  }
];

export default linqContent; 