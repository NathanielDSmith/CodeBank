const asyncContent = [
  {
    title: 'Async/Await Basics',
    examples: [
      {
        title: 'Basic async method',
        code: `// Async method that returns a Task
public async Task<string> GetDataAsync()
{
    // Simulate some async work
    await Task.Delay(1000);
    return "Data loaded successfully";
}

// Async method that returns a value
public async Task<int> CalculateAsync(int a, int b)
{
    await Task.Delay(500); // Simulate work
    return a + b;
}

// Usage
public async Task Main()
{
    var data = await GetDataAsync();
    Console.WriteLine(data);
    
    var result = await CalculateAsync(5, 3);
    Console.WriteLine($"Result: {result}");
}`
      },
      {
        title: 'Error handling with async',
        code: `public async Task<string> FetchDataAsync(string url)
{
    try
    {
        using var client = new HttpClient();
        var response = await client.GetAsync(url);
        response.EnsureSuccessStatusCode();
        return await response.Content.ReadAsStringAsync();
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"Network error: {ex.Message}");
        return null;
    }
    catch (TaskCanceledException)
    {
        Console.WriteLine("Request timed out");
        return null;
    }
}

// Usage with null checking
var data = await FetchDataAsync("https://api.example.com/data");
if (data != null)
{
    Console.WriteLine(data);
}`
      }
    ]
  },
  {
    title: 'Task Operations',
    examples: [
      {
        title: 'Running tasks in parallel',
        code: `public async Task<List<string>> LoadMultipleDataAsync()
{
    var tasks = new List<Task<string>>
    {
        FetchDataAsync("https://api1.example.com"),
        FetchDataAsync("https://api2.example.com"),
        FetchDataAsync("https://api3.example.com")
    };
    
    // Wait for all tasks to complete
    var results = await Task.WhenAll(tasks);
    return results.ToList();
}

// Wait for any task to complete
public async Task<string> GetFirstResultAsync()
{
    var tasks = new List<Task<string>>
    {
        FetchDataAsync("https://api1.example.com"),
        FetchDataAsync("https://api2.example.com")
    };
    
    var firstResult = await Task.WhenAny(tasks);
    return await firstResult;
}`
      },
      {
        title: 'Cancellation tokens',
        code: `public async Task<string> FetchWithTimeoutAsync(string url, int timeoutMs)
{
    using var cts = new CancellationTokenSource(timeoutMs);
    
    try
    {
        using var client = new HttpClient();
        var response = await client.GetAsync(url, cts.Token);
        return await response.Content.ReadAsStringAsync();
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("Request was cancelled due to timeout");
        return null;
    }
}

// Usage
var data = await FetchWithTimeoutAsync("https://api.example.com", 5000);`
      }
    ]
  }
];

export default asyncContent; 