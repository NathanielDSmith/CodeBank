const content = [
  {
    title: "Widgets",
    examples: [
      {
        title: "StatelessWidget",
        explanation: "A StatelessWidget describes part of the UI that doesn't change over time. It's rebuilt only when its parent changes its configuration. Use it for anything that depends purely on its constructor arguments — icons, labels, static layouts.",
        keyIdeas: [
          "Immutable — once built, the widget tree doesn't change",
          "The build() method can be called many times; keep it pure and fast",
          "Prefer StatelessWidget unless you need local mutable state"
        ],
        code: `class GreetingCard extends StatelessWidget {
  final String name;
  final String message;

  const GreetingCard({
    super.key,
    required this.name,
    required this.message,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(name, style: Theme.of(context).textTheme.headlineSmall),
            const SizedBox(height: 8),
            Text(message),
          ],
        ),
      ),
    );
  }
}`
      },
      {
        title: "StatefulWidget",
        explanation: "A StatefulWidget holds mutable state that can change during the widget's lifetime. The widget itself is immutable — the State object is what changes. Use it when you need to react to user input, timers, or async results.",
        keyIdeas: [
          "The Widget class and its State class are always separate objects",
          "setState() tells Flutter the state has changed and triggers a rebuild",
          "Only call setState() for state that actually affects the UI"
        ],
        pitfalls: [
          "Calling setState() with no actual state change wastes a rebuild",
          "Don't do heavy work inside setState() — update state, not logic",
          "Avoid storing BuildContext across async gaps (use mounted check)"
        ],
        code: `class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _count = 0;

  void _increment() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text('Count: $_count', style: const TextStyle(fontSize: 24)),
        const SizedBox(height: 16),
        ElevatedButton(
          onPressed: _increment,
          child: const Text('Increment'),
        ),
      ],
    );
  }
}`
      },
      {
        title: "Common Built-in Widgets",
        explanation: "Flutter ships with a large library of material and cupertino widgets. These cover the vast majority of UI needs — knowing the right widget to reach for is half the job.",
        code: `// Text with styling
Text(
  'Hello, Flutter!',
  style: TextStyle(
    fontSize: 20,
    fontWeight: FontWeight.bold,
    color: Colors.blue,
  ),
)

// Image from network
Image.network(
  'https://example.com/image.png',
  width: 200,
  height: 150,
  fit: BoxFit.cover,
)

// Icon
Icon(Icons.favorite, color: Colors.red, size: 32)

// Button variants
ElevatedButton(onPressed: () {}, child: const Text('Elevated'))
TextButton(onPressed: () {}, child: const Text('Text'))
OutlinedButton(onPressed: () {}, child: const Text('Outlined'))
IconButton(onPressed: () {}, icon: const Icon(Icons.add))

// Divider and spacing
const Divider()
const SizedBox(height: 16)
const Spacer()`
      },
    ]
  }
];

export default content;
