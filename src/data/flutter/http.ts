const content = [
  {
    title: "HTTP & APIs",
    examples: [
      {
        title: "http package — Basic Requests",
        explanation: "The http package is Flutter's standard library for making HTTP requests. It's straightforward for simple use cases — GET, POST, PUT, DELETE. For more complex needs (interceptors, auth headers, cancellation) consider Dio instead.",
        keyIdeas: [
          "Always check response.statusCode — a 404 or 500 won't throw automatically",
          "http.get/post return Uint8List body — use response.body for String or response.bodyBytes for binary",
          "Add the http package: http: ^1.0.0 in pubspec.yaml"
        ],
        code: `import 'dart:convert';
import 'package:http/http.dart' as http;

// GET request
Future<List<Post>> fetchPosts() async {
  final response = await http.get(
    Uri.parse('https://jsonplaceholder.typicode.com/posts'),
    headers: {'Authorization': 'Bearer \${token}'},
  );

  if (response.statusCode == 200) {
    final List<dynamic> data = jsonDecode(response.body);
    return data.map((json) => Post.fromJson(json)).toList();
  }
  throw Exception('Failed to load posts: \${response.statusCode}');
}

// POST request
Future<Post> createPost(String title, String body) async {
  final response = await http.post(
    Uri.parse('https://jsonplaceholder.typicode.com/posts'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({'title': title, 'body': body, 'userId': 1}),
  );

  if (response.statusCode == 201) {
    return Post.fromJson(jsonDecode(response.body));
  }
  throw Exception('Failed to create post');
}

// Model class with fromJson
class Post {
  final int id;
  final String title;
  final String body;

  Post({required this.id, required this.title, required this.body});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['id'] as int,
      title: json['title'] as String,
      body: json['body'] as String,
    );
  }
}`
      },
      {
        title: "Error Handling and Timeouts",
        explanation: "Network calls can fail in many ways — no connection, server errors, timeouts. Wrapping calls in a typed result or using proper error handling prevents crashes and gives you control over what the user sees.",
        code: `Future<T> safeRequest<T>(Future<T> Function() request) async {
  try {
    return await request().timeout(
      const Duration(seconds: 10),
      onTimeout: () => throw TimeoutException('Request timed out'),
    );
  } on SocketException {
    throw Exception('No internet connection');
  } on TimeoutException {
    throw Exception('Request timed out — try again');
  } on HttpException catch (e) {
    throw Exception('HTTP error: \${e.message}');
  } on FormatException {
    throw Exception('Invalid response format');
  }
}

// Usage
final posts = await safeRequest(() => fetchPosts());`
      },
    ]
  }
];

export default content;
