const content = [
  {
    title: "Async & Futures",
    examples: [
      {
        title: "Future and async/await",
        explanation: "Dart is single-threaded but handles async operations through an event loop. A Future represents a value that will be available at some point. async/await is syntactic sugar that makes async code read like synchronous code.",
        keyIdeas: [
          "async functions always return a Future, even if you return a plain value",
          "await suspends execution of the current function but doesn't block the thread",
          "Use try/catch around await to handle errors — just like synchronous code"
        ],
        pitfalls: [
          "Forgetting await means you're working with the Future object, not its value",
          "Don't use async in initState directly — call an async method from initState instead"
        ],
        code: `// Basic Future and async/await
Future<String> fetchUsername(int id) async {
  final response = await http.get(Uri.parse('/api/users/$id'));
  if (response.statusCode == 200) {
    return jsonDecode(response.body)['username'] as String;
  }
  throw Exception('Failed to fetch user $id');
}

// Calling it
void load() async {
  try {
    final name = await fetchUsername(1);
    print('Hello, $name');
  } catch (e) {
    print('Error: $e');
  }
}

// Running multiple futures in parallel
Future<void> loadAll() async {
  final results = await Future.wait([
    fetchUsername(1),
    fetchUsername(2),
    fetchUsername(3),
  ]);
  print(results); // [user1, user2, user3]
}`
      },
      {
        title: "FutureBuilder",
        explanation: "FutureBuilder lets you build UI reactively based on the state of a Future. It handles the loading, success, and error states for you, rebuilding whenever the Future's state changes.",
        pitfalls: [
          "Don't create the Future inside build() — it gets recreated on every rebuild. Create it in initState or as a field",
          "Always handle all ConnectionState cases to avoid blank screens"
        ],
        code: `class UserProfile extends StatefulWidget {
  final int userId;
  const UserProfile({super.key, required this.userId});

  @override
  State<UserProfile> createState() => _UserProfileState();
}

class _UserProfileState extends State<UserProfile> {
  late final Future<User> _userFuture;

  @override
  void initState() {
    super.initState();
    // Create the future once, not inside build()
    _userFuture = fetchUser(widget.userId);
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<User>(
      future: _userFuture,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const CircularProgressIndicator();
        }
        if (snapshot.hasError) {
          return Text('Error: \${snapshot.error}');
        }
        if (!snapshot.hasData) {
          return const Text('No user found');
        }

        final user = snapshot.data!;
        return ListTile(
          title: Text(user.name),
          subtitle: Text(user.email),
        );
      },
    );
  }
}`
      },
      {
        title: "Streams and StreamBuilder",
        explanation: "A Stream is like a Future but delivers multiple values over time. Use streams for real-time data — WebSocket messages, database listeners, sensor readings. StreamBuilder is to streams what FutureBuilder is to futures.",
        code: `// A stream that emits values over time
Stream<int> countUp() async* {
  for (int i = 0; i <= 10; i++) {
    yield i;
    await Future.delayed(const Duration(seconds: 1));
  }
}

// StreamBuilder
StreamBuilder<int>(
  stream: countUp(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return const Text('Starting...');
    }
    if (snapshot.connectionState == ConnectionState.done) {
      return const Text('Done!');
    }
    return Text(
      '\${snapshot.data}',
      style: const TextStyle(fontSize: 48),
    );
  },
)

// StreamController for manual stream control
final _controller = StreamController<String>();

// Push values in
_controller.sink.add('new message');

// Listen
_controller.stream.listen((msg) => print(msg));

// Always close when done
_controller.close();`
      },
    ]
  }
];

export default content;
