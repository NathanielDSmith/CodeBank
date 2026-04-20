const content = [
  {
    title: "Navigation",
    examples: [
      {
        title: "Navigator — Push and Pop",
        explanation: "Flutter's Navigator manages a stack of routes. Pushing a route displays a new screen; popping removes it and returns to the previous one. This is the simplest approach for small apps or flows with few screens.",
        keyIdeas: [
          "Navigator.push adds a screen to the stack — the user sees the new screen",
          "Navigator.pop removes the current screen — the user returns to the previous one",
          "You can pass data back when popping using Navigator.pop(context, result)"
        ],
        code: `// Push to a new screen
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => const DetailScreen(id: 42),
  ),
);

// Push and wait for a result
final result = await Navigator.push<String>(
  context,
  MaterialPageRoute(builder: (context) => const InputScreen()),
);
if (result != null) {
  print('User entered: $result');
}

// Pop back (optionally returning data)
Navigator.pop(context, 'user input here');

// Push and remove all previous routes (e.g. after login)
Navigator.pushAndRemoveUntil(
  context,
  MaterialPageRoute(builder: (context) => const HomePage()),
  (route) => false,
);`
      },
      {
        title: "Named Routes",
        explanation: "Named routes let you define your app's navigation structure centrally and navigate by name rather than constructing routes inline. Useful when the same screen is navigated to from multiple places.",
        code: `// Define routes in MaterialApp
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => const HomePage(),
    '/profile': (context) => const ProfilePage(),
    '/settings': (context) => const SettingsPage(),
  },
)

// Navigate by name
Navigator.pushNamed(context, '/profile');

// Pass arguments with named routes
Navigator.pushNamed(
  context,
  '/profile',
  arguments: {'userId': 42},
);

// Receive arguments in the target screen
class ProfilePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments
        as Map<String, dynamic>;
    final userId = args['userId'] as int;
    return Text('User ID: $userId');
  }
}`
      },
      {
        title: "go_router — Declarative Routing",
        explanation: "go_router is the recommended routing package for Flutter apps that need deep linking, web URL support, or complex navigation logic. It's declarative — you define routes as a tree, and navigation is driven by URL paths.",
        keyIdeas: [
          "Supports deep linking and web URLs out of the box",
          "Redirect logic is centralised — easy to protect routes behind auth",
          "context.go() replaces the stack, context.push() adds to it"
        ],
        code: `// pubspec.yaml: go_router: ^13.0.0

final _router = GoRouter(
  initialLocation: '/',
  redirect: (context, state) {
    final isLoggedIn = Auth.instance.isLoggedIn;
    if (!isLoggedIn && state.matchedLocation != '/login') {
      return '/login';
    }
    return null;
  },
  routes: [
    GoRoute(path: '/', builder: (_, __) => const HomePage()),
    GoRoute(path: '/login', builder: (_, __) => const LoginPage()),
    GoRoute(
      path: '/profile/:id',
      builder: (context, state) {
        final id = state.pathParameters['id']!;
        return ProfilePage(userId: id);
      },
    ),
  ],
);

// Wire it in
MaterialApp.router(routerConfig: _router)

// Navigate
context.go('/');            // Replace stack
context.push('/profile/42'); // Push onto stack
context.pop();              // Pop`
      },
    ]
  }
];

export default content;
