const javaSections = [
  { id: 'basics', title: 'Java Basics', icon: '☕' },
  { id: 'classes', title: 'Classes & Objects', icon: '🏗️' },
  { id: 'collections', title: 'Collections', icon: '📦' },
  { id: 'streams', title: 'Streams & Lambdas', icon: '🌊' },
  { id: 'spring', title: 'Spring Boot', icon: '🌱' },
  { id: 'android', title: 'Android Development', icon: '📱' }
];

interface JavaContentSection {
  title: string;
  examples: { title: string; code: string }[];
}

interface JavaContent {
  [key: string]: JavaContentSection[];
}

const javaContent: JavaContent = {
  basics: [
    {
      title: 'Variables and Data Types',
      examples: [
        {
          title: 'Basic variable declaration',
          code: `// Primitive data types
int age = 25;
double price = 19.99;
boolean isActive = true;
char grade = 'A';

// Reference types (objects)
String name = "John Doe";
Integer count = 42; // Wrapper class

// Final variables (constants)
final double PI = 3.14159;
final String COMPANY_NAME = "TechCorp";`
        },
        {
          title: 'String manipulation',
          code: `String firstName = "John";
String lastName = "Doe";

// String concatenation
String fullName = firstName + " " + lastName;
System.out.println(fullName); // "John Doe"

// String methods
String message = "  Hello World  ";
System.out.println(message.trim()); // "Hello World"
System.out.println(message.toUpperCase()); // "  HELLO WORLD  "
System.out.println(message.length()); // 15

// String formatting
String formatted = String.format("Name: %s, Age: %d", firstName, 25);
System.out.println(formatted); // "Name: John, Age: 25"`
        }
      ]
    }
  ],
  classes: [
    {
      title: 'Creating Classes and Objects',
      examples: [
        {
          title: 'Basic class definition',
          code: `public class Person {
    // Instance variables (fields)
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Setter methods
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    // Method
    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
    }
}

// Usage
Person person = new Person("Alice", 30);
person.introduce(); // "Hi, I'm Alice and I'm 30 years old."`
        },
        {
          title: 'Inheritance and polymorphism',
          code: `// Parent class
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void makeSound() {
        System.out.println("Some animal sound");
    }
}

// Child class
public class Dog extends Animal {
    public Dog(String name) {
        super(name); // Call parent constructor
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof!");
    }
    
    public void fetch() {
        System.out.println(name + " is fetching the ball");
    }
}

// Usage
Animal animal = new Animal("Generic Animal");
Dog dog = new Dog("Buddy");

animal.makeSound(); // "Some animal sound"
dog.makeSound();    // "Buddy says: Woof!"
dog.fetch();        // "Buddy is fetching the ball"

// Polymorphism
Animal myPet = new Dog("Rex");
myPet.makeSound(); // "Rex says: Woof!"`
        }
      ]
    }
  ],
  collections: [
    {
      title: 'Working with Collections',
      examples: [
        {
          title: 'ArrayList basics',
          code: `import java.util.ArrayList;
import java.util.List;

// Creating and adding elements
List<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Accessing elements
System.out.println(fruits.get(0)); // "Apple"
System.out.println(fruits.size()); // 3

// Iterating through list
for (String fruit : fruits) {
    System.out.println(fruit);
}

// Using forEach (Java 8+)
fruits.forEach(System.out::println);

// Removing elements
fruits.remove("Banana");
System.out.println(fruits); // [Apple, Orange]`
        },
        {
          title: 'HashMap and HashSet',
          code: `import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

// HashMap - key-value pairs
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);
scores.put("Charlie", 92);

// Accessing values
System.out.println(scores.get("Alice")); // 95
System.out.println(scores.containsKey("Bob")); // true

// Iterating through HashMap
for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// HashSet - unique elements
Set<String> uniqueNames = new HashSet<>();
uniqueNames.add("Alice");
uniqueNames.add("Bob");
uniqueNames.add("Alice"); // Duplicate, won't be added

System.out.println(uniqueNames.size()); // 2
System.out.println(uniqueNames); // [Alice, Bob]`
        }
      ]
    }
  ],
  streams: [
    {
      title: 'Streams and Lambda Expressions',
      examples: [
        {
          title: 'Basic stream operations',
          code: `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter even numbers
List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
System.out.println(evenNumbers); // [2, 4, 6, 8, 10]

// Map (transform) numbers
List<Integer> doubled = numbers.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList());
System.out.println(doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Reduce (sum all numbers)
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
System.out.println(sum); // 55

// Method reference
numbers.forEach(System.out::println);`
        },
        {
          title: 'Complex stream operations',
          code: `import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

class Person {
    private String name;
    private int age;
    private String city;
    
    public Person(String name, int age, String city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    
    // Getters
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getCity() { return city; }
}

List<Person> people = Arrays.asList(
    new Person("Alice", 25, "New York"),
    new Person("Bob", 30, "Boston"),
    new Person("Charlie", 25, "New York"),
    new Person("Diana", 35, "Boston")
);

// Group by city
Map<String, List<Person>> byCity = people.stream()
    .collect(Collectors.groupingBy(Person::getCity));
System.out.println(byCity);

// Average age by city
Map<String, Double> avgAgeByCity = people.stream()
    .collect(Collectors.groupingBy(
        Person::getCity,
        Collectors.averagingInt(Person::getAge)
    ));
System.out.println(avgAgeByCity); // {New York=25.0, Boston=32.5}

// Find people older than 25
List<Person> olderThan25 = people.stream()
    .filter(p -> p.getAge() > 25)
    .collect(Collectors.toList());`
        }
      ]
    }
  ],
  spring: [
    {
      title: 'Spring Boot Basics',
      examples: [
        {
          title: 'Simple REST controller',
          code: `import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;

@RestController
@RequestMapping("/api")
public class UserController {
    
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
    
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
    
    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.update(id, user);
    }
    
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
    }
}`
        },
        {
          title: 'Service layer with dependency injection',
          code: `import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> findAll() {
        return userRepository.findAll();
    }
    
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }
    
    public User save(User user) {
        return userRepository.save(user);
    }
    
    public User update(Long id, User userDetails) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
        
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        
        return userRepository.save(user);
    }
    
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}`
        }
      ]
    }
  ],
  android: [
    {
      title: 'Android Activity Basics',
      examples: [
        {
          title: 'Basic Activity with UI',
          code: `import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private TextView textView;
    private Button button;
    private int counter = 0;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        // Find views by ID
        textView = findViewById(R.id.textView);
        button = findViewById(R.id.button);
        
        // Set click listener
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                counter++;
                textView.setText("Count: " + counter);
            }
        });
    }
}

// Layout file (activity_main.xml)
/*
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Count: 0"
        android:textSize="24sp" />

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Increment"
        android:layout_marginTop="16dp" />

</LinearLayout>
*/`
        },
        {
          title: 'RecyclerView with adapter',
          code: `import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.recyclerview.widget.RecyclerView;
import java.util.List;

public class UserAdapter extends RecyclerView.Adapter<UserAdapter.UserViewHolder> {
    private List<User> users;
    
    public UserAdapter(List<User> users) {
        this.users = users;
    }
    
    @Override
    public UserViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
            .inflate(R.layout.user_item, parent, false);
        return new UserViewHolder(view);
    }
    
    @Override
    public void onBindViewHolder(UserViewHolder holder, int position) {
        User user = users.get(position);
        holder.nameText.setText(user.getName());
        holder.emailText.setText(user.getEmail());
    }
    
    @Override
    public int getItemCount() {
        return users.size();
    }
    
    static class UserViewHolder extends RecyclerView.ViewHolder {
        TextView nameText, emailText;
        
        UserViewHolder(View itemView) {
            super(itemView);
            nameText = itemView.findViewById(R.id.nameText);
            emailText = itemView.findViewById(R.id.emailText);
        }
    }
}

// Usage in Activity
RecyclerView recyclerView = findViewById(R.id.recyclerView);
recyclerView.setLayoutManager(new LinearLayoutManager(this));
UserAdapter adapter = new UserAdapter(userList);
recyclerView.setAdapter(adapter);`
        }
      ]
    }
  ]
};

export { javaSections, javaContent }; 