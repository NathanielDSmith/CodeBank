const content = [
  {
    title: "State Management",
    examples: [
      {
        title: "setState — Local State",
        explanation: "setState is the right tool for state that belongs to a single widget and doesn't need to be shared. It's simple, easy to reason about, and has zero dependencies. Don't reach for a state management package until you actually need shared or complex state.",
        keyIdeas: [
          "Only use setState for state that directly affects this widget's build output",
          "setState is synchronous — the rebuild is scheduled, not immediate",
          "For async operations, check 'mounted' before calling setState"
        ],
        pitfalls: [
          "Calling setState after the widget is disposed will throw — always check mounted",
          "Don't perform logic inside setState(() { ... }) — update variables only"
        ],
        code: `class _MyWidgetState extends State<MyWidget> {
  bool _isLoading = false;
  String? _result;

  Future<void> _fetchData() async {
    setState(() => _isLoading = true);

    final data = await someApiCall();

    // Guard against widget being disposed during the await
    if (!mounted) return;

    setState(() {
      _isLoading = false;
      _result = data;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) return const CircularProgressIndicator();
    if (_result != null) return Text(_result!);
    return ElevatedButton(
      onPressed: _fetchData,
      child: const Text('Load'),
    );
  }
}`
      },
      {
        title: "InheritedWidget — Lifting State Up",
        explanation: "When state needs to be shared between widgets that aren't in a direct parent-child relationship, you lift it up to a common ancestor. InheritedWidget is Flutter's built-in mechanism for propagating state down the tree efficiently — widgets only rebuild if the data they depend on actually changed.",
        keyIdeas: [
          "InheritedWidget is what packages like Provider are built on top of",
          "Use of(context) to read the nearest ancestor InheritedWidget",
          "updateShouldNotify controls whether descendants rebuild on changes"
        ],
        code: `// Define the InheritedWidget
class AppTheme extends InheritedWidget {
  final bool isDarkMode;
  final VoidCallback toggleTheme;

  const AppTheme({
    super.key,
    required this.isDarkMode,
    required this.toggleTheme,
    required super.child,
  });

  static AppTheme of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<AppTheme>()!;
  }

  @override
  bool updateShouldNotify(AppTheme old) => isDarkMode != old.isDarkMode;
}

// Consume it anywhere in the subtree
class ThemeToggle extends StatelessWidget {
  const ThemeToggle({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = AppTheme.of(context);
    return Switch(
      value: theme.isDarkMode,
      onChanged: (_) => theme.toggleTheme(),
    );
  }
}`
      },
      {
        title: "ValueNotifier — Lightweight Reactive State",
        explanation: "ValueNotifier is a lightweight observable value built into Flutter. Pair it with ValueListenableBuilder to rebuild only the part of the UI that cares about it. A good middle ground between setState and a full state management package.",
        code: `class _PageState extends State<Page> {
  final _counter = ValueNotifier<int>(0);

  @override
  void dispose() {
    _counter.dispose(); // Always dispose!
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // Only this rebuilds when _counter changes
        ValueListenableBuilder<int>(
          valueListenable: _counter,
          builder: (context, value, _) {
            return Text('Count: $value', style: const TextStyle(fontSize: 32));
          },
        ),
        ElevatedButton(
          onPressed: () => _counter.value++,
          child: const Text('Increment'),
        ),
      ],
    );
  }
}`
      },
    ]
  }
];

export default content;
