const webContent = [
  {
    title: 'ASP.NET Core Basics',
    examples: [
      {
        title: 'Basic controller',
        code: `[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;
    
    public UsersController(IUserService userService)
    {
        _userService = userService;
    }
    
    [HttpGet]
    public async Task<ActionResult<List<User>>> GetUsers()
    {
        var users = await _userService.GetAllAsync();
        return Ok(users);
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(int id)
    {
        var user = await _userService.GetByIdAsync(id);
        if (user == null)
            return NotFound();
            
        return Ok(user);
    }
    
    [HttpPost]
    public async Task<ActionResult<User>> CreateUser([FromBody] CreateUserRequest request)
    {
        var user = await _userService.CreateAsync(request);
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }
}`
      },
      {
        title: 'Dependency injection and services',
        code: `// Service interface
public interface IUserService
{
    Task<List<User>> GetAllAsync();
    Task<User> GetByIdAsync(int id);
    Task<User> CreateAsync(CreateUserRequest request);
}

// Service implementation
public class UserService : IUserService
{
    private readonly ApplicationDbContext _context;
    
    public UserService(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task<List<User>> GetAllAsync()
    {
        return await _context.Users.ToListAsync();
    }
    
    public async Task<User> GetByIdAsync(int id)
    {
        return await _context.Users.FindAsync(id);
    }
    
    public async Task<User> CreateAsync(CreateUserRequest request)
    {
        var user = new User
        {
            Name = request.Name,
            Email = request.Email
        };
        
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        
        return user;
    }
}

// Register in Startup.cs
public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<ApplicationDbContext>();
    services.AddScoped<IUserService, UserService>();
}`
      }
    ]
  },
  {
    title: 'Middleware and Configuration',
    examples: [
      {
        title: 'Custom middleware',
        code: `// Custom middleware
public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<RequestLoggingMiddleware> _logger;
    
    public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }
    
    public async Task InvokeAsync(HttpContext context)
    {
        var startTime = DateTime.UtcNow;
        
        await _next(context);
        
        var duration = DateTime.UtcNow - startTime;
        _logger.LogInformation($"Request {context.Request.Method} {context.Request.Path} took {duration.TotalMilliseconds}ms");
    }
}

// Extension method for easy registration
public static class RequestLoggingMiddlewareExtensions
{
    public static IApplicationBuilder UseRequestLogging(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<RequestLoggingMiddleware>();
    }
}

// Usage in Startup.cs
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseRequestLogging();
    app.UseRouting();
    app.UseEndpoints(endpoints => endpoints.MapControllers());
}`
      },
      {
        title: 'Configuration and appsettings',
        code: `// appsettings.json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=MyApp;Trusted_Connection=true;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning"
    }
  },
  "AllowedHosts": "*"
}

// Reading configuration
public class DatabaseSettings
{
    public string ConnectionString { get; set; }
}

// In Startup.cs
public void ConfigureServices(IServiceCollection services)
{
    var databaseSettings = Configuration.GetSection("DatabaseSettings").Get<DatabaseSettings>();
    services.Configure<DatabaseSettings>(Configuration.GetSection("DatabaseSettings"));
    
    services.AddDbContext<ApplicationDbContext>(options =>
        options.UseSqlServer(databaseSettings.ConnectionString));
}

// In controller
public class ConfigController : ControllerBase
{
    private readonly DatabaseSettings _settings;
    
    public ConfigController(IOptions<DatabaseSettings> settings)
    {
        _settings = settings.Value;
    }
    
    [HttpGet("connection")]
    public IActionResult GetConnectionInfo()
    {
        return Ok(new { ConnectionString = _settings.ConnectionString });
    }
}`
      }
    ]
  }
];

export default webContent; 