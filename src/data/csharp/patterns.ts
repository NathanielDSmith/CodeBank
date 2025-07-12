const patternsContent = [
  {
    title: 'Common Design Patterns',
    examples: [
      {
        title: 'Observer pattern',
        code: `// Observer pattern for event handling
public interface IObserver
{
    void Update(string message);
}

public class Subject
{
    private List<IObserver> observers = new List<IObserver>();
    
    public void Attach(IObserver observer)
    {
        observers.Add(observer);
    }
    
    public void Detach(IObserver observer)
    {
        observers.Remove(observer);
    }
    
    public void Notify(string message)
    {
        foreach (var observer in observers)
        {
            observer.Update(message);
        }
    }
}

public class Logger : IObserver
{
    public void Update(string message)
    {
        Console.WriteLine($"[LOG] {message}");
    }
}

public class EmailNotifier : IObserver
{
    public void Update(string message)
    {
        Console.WriteLine($"[EMAIL] Sending notification: {message}");
    }
}

// Usage
var subject = new Subject();
subject.Attach(new Logger());
subject.Attach(new EmailNotifier());
subject.Notify("User logged in");`
      },
      {
        title: 'Factory pattern',
        code: `// Factory pattern for object creation
public interface IAnimal
{
    void MakeSound();
}

public class Dog : IAnimal
{
    public void MakeSound()
    {
        Console.WriteLine("Woof!");
    }
}

public class Cat : IAnimal
{
    public void MakeSound()
    {
        Console.WriteLine("Meow!");
    }
}

public class AnimalFactory
{
    public IAnimal CreateAnimal(string animalType)
    {
        return animalType.ToLower() switch
        {
            "dog" => new Dog(),
            "cat" => new Cat(),
            _ => throw new ArgumentException($"Unknown animal type: {animalType}")
        };
    }
}

// Usage
var factory = new AnimalFactory();
var dog = factory.CreateAnimal("dog");
var cat = factory.CreateAnimal("cat");

dog.MakeSound(); // Woof!
cat.MakeSound(); // Meow!`
      }
    ]
  },
  {
    title: 'Advanced Patterns',
    examples: [
      {
        title: 'Repository pattern',
        code: `// Repository pattern for data access
public interface IRepository<T>
{
    Task<T> GetByIdAsync(int id);
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(int id);
}

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}

public class UserRepository : IRepository<User>
{
    private readonly ApplicationDbContext _context;
    
    public UserRepository(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task<User> GetByIdAsync(int id)
    {
        return await _context.Users.FindAsync(id);
    }
    
    public async Task<IEnumerable<User>> GetAllAsync()
    {
        return await _context.Users.ToListAsync();
    }
    
    public async Task<User> AddAsync(User user)
    {
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return user;
    }
    
    public async Task UpdateAsync(User user)
    {
        _context.Users.Update(user);
        await _context.SaveChangesAsync();
    }
    
    public async Task DeleteAsync(int id)
    {
        var user = await GetByIdAsync(id);
        if (user != null)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }
    }
}

// Usage with dependency injection
public class UserService
{
    private readonly IRepository<User> _userRepository;
    
    public UserService(IRepository<User> userRepository)
    {
        _userRepository = userRepository;
    }
    
    public async Task<User> GetUserAsync(int id)
    {
        return await _userRepository.GetByIdAsync(id);
    }
}`
      },
      {
        title: 'Strategy pattern',
        code: `// Strategy pattern for different algorithms
public interface IPaymentStrategy
{
    void ProcessPayment(decimal amount);
}

public class CreditCardPayment : IPaymentStrategy
{
    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine("Processing credit card payment: $" + amount);
    }
}

public class PayPalPayment : IPaymentStrategy
{
    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine("Processing PayPal payment: $" + amount);
    }
}

public class CryptoPayment : IPaymentStrategy
{
    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine("Processing crypto payment: $" + amount);
    }
}

public class PaymentProcessor
{
    private IPaymentStrategy _strategy;
    
    public void SetPaymentStrategy(IPaymentStrategy strategy)
    {
        _strategy = strategy;
    }
    
    public void ProcessPayment(decimal amount)
    {
        _strategy?.ProcessPayment(amount);
    }
}

// Usage
var processor = new PaymentProcessor();

processor.SetPaymentStrategy(new CreditCardPayment());
processor.ProcessPayment(100.00m);

processor.SetPaymentStrategy(new PayPalPayment());
processor.ProcessPayment(50.00m);

processor.SetPaymentStrategy(new CryptoPayment());
processor.ProcessPayment(25.00m);`
      }
    ]
  }
];

export default patternsContent; 