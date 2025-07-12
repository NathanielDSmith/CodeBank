const advancedContent = [
  {
    title: 'Advanced C# Features',
    examples: [
      {
        title: 'Records and pattern matching',
        code: `// Records (C# 9.0+)
public record Person(string Name, int Age);

public record Employee(string Name, int Age, string Department) : Person(Name, Age);

// Pattern matching
public string GetDisplayName(object obj)
{
    return obj switch
    {
        Person p => $"Person: {p.Name}",
        Employee e => $"Employee: {e.Name} ({e.Department})",
        string s => $"String: {s}",
        int i => $"Number: {i}",
        _ => "Unknown type"
    };
}

// Usage
var person = new Person("Alice", 30);
var employee = new Employee("Bob", 25, "Engineering");

Console.WriteLine(GetDisplayName(person));    // Person: Alice
Console.WriteLine(GetDisplayName(employee));  // Employee: Bob (Engineering)
Console.WriteLine(GetDisplayName("Hello"));   // String: Hello`
      },
      {
        title: 'Extension methods',
        code: `// Extension methods
public static class StringExtensions
{
    public static bool IsPalindrome(this string str)
    {
        var clean = str.ToLower().Replace(" ", "");
        return clean == new string(clean.Reverse().ToArray());
    }
    
    public static string ToTitleCase(this string str)
    {
        if (string.IsNullOrEmpty(str))
            return str;
            
        return char.ToUpper(str[0]) + str.Substring(1).ToLower();
    }
}

public static class EnumerableExtensions
{
    public static IEnumerable<T> Shuffle<T>(this IEnumerable<T> source)
    {
        var random = new Random();
        return source.OrderBy(x => random.Next());
    }
}

// Usage
string text = "racecar";
Console.WriteLine(text.IsPalindrome()); // True

string name = "john doe";
Console.WriteLine(name.ToTitleCase()); // John doe

var numbers = new List<int> { 1, 2, 3, 4, 5 };
var shuffled = numbers.Shuffle();`
      }
    ]
  },
  {
    title: 'Reflection and Attributes',
    examples: [
      {
        title: 'Custom attributes',
        code: `// Custom attribute
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class AuthorAttribute : Attribute
{
    public string Name { get; }
    public string Version { get; }
    
    public AuthorAttribute(string name, string version = "1.0")
    {
        Name = name;
        Version = version;
    }
}

// Using the attribute
[Author("John Doe", "2.0")]
public class Calculator
{
    [Author("Jane Smith")]
    public int Add(int a, int b)
    {
        return a + b;
    }
}

// Reading attributes with reflection
public static void PrintAuthorInfo(Type type)
{
    var authorAttr = type.GetCustomAttribute<AuthorAttribute>();
    if (authorAttr != null)
    {
        Console.WriteLine($"Author: {authorAttr.Name}, Version: {authorAttr.Version}");
    }
}

// Usage
PrintAuthorInfo(typeof(Calculator));`
      },
      {
        title: 'Dynamic programming',
        code: `// Dynamic programming with reflection
public class DynamicCalculator
{
    public dynamic Add(dynamic a, dynamic b)
    {
        return a + b;
    }
    
    public dynamic Multiply(dynamic a, dynamic b)
    {
        return a * b;
    }
}

// Using dynamic
public void ProcessData()
{
    dynamic calculator = new DynamicCalculator();
    
    // Works with different types
    var result1 = calculator.Add(5, 3);        // 8
    var result2 = calculator.Add("Hello", " World"); // "Hello World"
    var result3 = calculator.Multiply(4, 2.5); // 10.0
    
    Console.WriteLine(result1);
    Console.WriteLine(result2);
    Console.WriteLine(result3);
}

// ExpandoObject for dynamic properties
public void CreateDynamicObject()
{
    dynamic person = new ExpandoObject();
    person.Name = "Alice";
    person.Age = 30;
    person.SayHello = new Action(() => Console.WriteLine($"Hello, I'm {person.Name}"));
    
    person.SayHello(); // Hello, I'm Alice
    Console.WriteLine($"{person.Name} is {person.Age} years old");
}`
      }
    ]
  }
];

export default advancedContent; 