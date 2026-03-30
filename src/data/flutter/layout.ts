const content = [
  {
    title: "Layout",
    examples: [
      {
        title: "Row and Column",
        explanation: "Row and Column are the bread and butter of Flutter layout. Row arranges children horizontally, Column vertically. Both use the same alignment properties — mainAxisAlignment controls along the main axis, crossAxisAlignment controls perpendicular to it.",
        keyIdeas: [
          "mainAxisAlignment: how children are spaced along the main axis (start, center, spaceBetween, etc.)",
          "crossAxisAlignment: how children align on the cross axis (start, center, stretch, etc.)",
          "children take as much space as they need unless constrained with Expanded or Flexible"
        ],
        pitfalls: [
          "Row inside a Row with no size constraints will throw an unbounded width error",
          "Use Expanded to fill remaining space, Flexible to fill but allow shrinking"
        ],
        code: `// Row — horizontal layout
Row(
  mainAxisAlignment: MainAxisAlignment.spaceBetween,
  crossAxisAlignment: CrossAxisAlignment.center,
  children: [
    const Icon(Icons.star),
    const Text('Rating'),
    const Text('4.8'),
  ],
)

// Column — vertical layout
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  crossAxisAlignment: CrossAxisAlignment.stretch,
  children: [
    const Text('Title', style: TextStyle(fontSize: 24)),
    const SizedBox(height: 8),
    const Text('Subtitle'),
    const SizedBox(height: 16),
    ElevatedButton(
      onPressed: () {},
      child: const Text('Action'),
    ),
  ],
)

// Expanded fills remaining space
Row(
  children: [
    const Icon(Icons.label),
    const SizedBox(width: 8),
    Expanded(
      child: Text('This text takes all remaining width'),
    ),
  ],
)`
      },
      {
        title: "Container and Padding",
        explanation: "Container is the workhorse widget for applying decoration, sizing, margin and padding all in one place. Padding is lighter when you only need spacing with no decoration.",
        keyIdeas: [
          "Use Padding when you only need spacing — it's cheaper than Container",
          "Container with no child sizes itself to its parent; with a child it wraps the child",
          "margin is space outside the container, padding is space inside"
        ],
        code: `// Container with decoration
Container(
  width: double.infinity,
  padding: const EdgeInsets.all(16),
  margin: const EdgeInsets.symmetric(horizontal: 24),
  decoration: BoxDecoration(
    color: Colors.blue.shade50,
    borderRadius: BorderRadius.circular(12),
    border: Border.all(color: Colors.blue.shade200),
    boxShadow: [
      BoxShadow(
        color: Colors.black.withOpacity(0.08),
        blurRadius: 8,
        offset: const Offset(0, 2),
      ),
    ],
  ),
  child: const Text('Decorated container'),
)

// Padding — lightweight spacing
Padding(
  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
  child: const Text('Padded text'),
)`
      },
      {
        title: "Stack and Positioned",
        explanation: "Stack layers widgets on top of each other. Children are positioned relative to the Stack's edges using Positioned. Useful for overlays, badges, and custom positioned elements.",
        code: `Stack(
  children: [
    // Base layer — fills the stack
    Image.network(
      'https://example.com/photo.jpg',
      fit: BoxFit.cover,
      width: double.infinity,
      height: 200,
    ),

    // Gradient overlay
    Positioned.fill(
      child: DecoratedBox(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Colors.transparent, Colors.black54],
          ),
        ),
      ),
    ),

    // Text anchored to bottom-left
    const Positioned(
      left: 16,
      bottom: 16,
      child: Text(
        'Photo caption',
        style: TextStyle(color: Colors.white, fontSize: 18),
      ),
    ),

    // Badge anchored to top-right
    Positioned(
      top: 8,
      right: 8,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        decoration: BoxDecoration(
          color: Colors.red,
          borderRadius: BorderRadius.circular(12),
        ),
        child: const Text('NEW', style: TextStyle(color: Colors.white, fontSize: 11)),
      ),
    ),
  ],
)`
      },
    ]
  }
];

export default content;
