import { LanguageTopic } from '../types';

/** Homepage topic list — stable reference for useMemo in HomePage */
export const LANGUAGE_TOPICS: LanguageTopic[] = [
  {
    id: 1,
    title: "JavaScript Basics",
    description: "Complete beginner guide with side navigation and search",
    category: "Programming Languages",
    topics: [
      "Variables & Data Types",
      "Functions & Scope",
      "Arrays & Objects",
      "Strings & Numbers",
      "Conditionals & Loops",
      "DOM & Events"
    ],
    icon: "⚡",
    color: "yellow",
    route: "/javascript-basics",
    status: "stub"
  },
  {
    id: 2,
    title: "Python",
    description: "In-depth Python — from core syntax to real-world patterns",
    category: "Programming Languages",
    topics: [
      "Variables & Data Types",
      "Functions & Scope",
      "Lists, Dicts & Sets",
      "OOP & Classes",
      "Error Handling",
      "Modules & Packages"
    ],
    icon: "🐍",
    color: "green",
    route: "/python",
    status: "deep"
  },
  {
    id: 16,
    title: "Java",
    description: "Enterprise programming with object-oriented design",
    category: "Programming Languages",
    topics: [
      "Variables & Data Types",
      "Classes & Objects",
      "Collections Framework",
      "Streams & Lambdas",
      "Spring Boot",
      "Android Development"
    ],
    icon: "☕",
    color: "orange",
    route: "/java",
    status: "stub"
  },
  {
    id: 3,
    title: "TypeScript",
    description: "In-depth TypeScript — types, generics, and real-world patterns",
    category: "Programming Languages",
    topics: [
      "Types & Interfaces",
      "Generics",
      "Type Narrowing",
      "Utility Types",
      "Advanced Patterns",
      "Modules & Config"
    ],
    icon: "🔷",
    color: "blue",
    route: "/typescript",
    status: "deep"
  },
  {
    id: 17,
    title: "C#",
    description: "Microsoft's flagship language for enterprise and game development",
    category: "Programming Languages",
    topics: [
      "Variables & Classes",
      "LINQ & Collections",
      "Async/Await",
      "ASP.NET Core",
      "Unity Development",
      "Design Patterns"
    ],
    icon: "⚡",
    color: "purple",
    route: "/csharp",
    status: "stub"
  },
  {
    id: 18,
    title: "Go",
    description: "Google's language for fast, concurrent programming",
    category: "Programming Languages",
    topics: [
      "Variables & Functions",
      "Goroutines & Concurrency",
      "Channels & Communication",
      "Web Servers",
      "Structs & Interfaces",
      "Package Management"
    ],
    icon: "🚀",
    color: "cyan",
    route: "/go",
    status: "stub"
  },
  {
    id: 4,
    title: "React",
    description: "In-depth React — hooks, patterns, and production thinking",
    category: "Frontend Frameworks",
    topics: [
      "Components & Props",
      "useState & useEffect",
      "Custom Hooks",
      "Context & State",
      "Performance",
      "Patterns & Pitfalls"
    ],
    icon: "⚛️",
    color: "cyan",
    route: "/react-common-tasks",
    status: "deep"
  },
  {
    id: 5,
    title: "Vue Common Tasks",
    description: "Everyday Vue.js patterns and solutions",
    category: "Frontend Frameworks",
    topics: [
      "Components & Props",
      "Reactivity & Data",
      "Directives",
      "Event Handling",
      "Computed & Watchers",
      "Vue Router"
    ],
    icon: "💚",
    color: "emerald",
    route: "/vue",
    status: "stub"
  },
  {
    id: 7,
    title: "HTML Structure",
    description: "Common HTML patterns and semantic elements",
    category: "Web Technologies",
    topics: [
      "Semantic Elements",
      "Forms & Inputs",
      "Images & Media",
      "Links & Navigation",
      "Tables & Lists",
      "Meta Tags"
    ],
    icon: "🌐",
    color: "orange",
    route: "/html-structure",
    status: "stub"
  },
  {
    id: 8,
    title: "CSS Layout Tricks",
    description: "Quick CSS solutions for common layout problems",
    category: "Web Technologies",
    topics: [
      "Flexbox & Grid",
      "Centering Elements",
      "Responsive Design",
      "Positioning",
      "Animations",
      "Media Queries"
    ],
    icon: "🎨",
    color: "purple",
    route: "/css-layout-tricks",
    status: "stub"
  },
  {
    id: 9,
    title: "String Manipulation",
    description: "Common string operations and text processing",
    category: "Programming Concepts",
    topics: [
      "String Methods",
      "Text Formatting",
      "Search & Replace",
      "Splitting & Joining",
      "Case Conversion",
      "Validation"
    ],
    icon: "📝",
    color: "blue",
    route: "/string-manipulation",
    status: "stub"
  },
  {
    id: 10,
    title: "Array Operations",
    description: "Common array methods and manipulations",
    category: "Programming Concepts",
    topics: [
      "Array Methods",
      "Filtering & Sorting",
      "Mapping & Reducing",
      "Adding & Removing",
      "Searching",
      "Transforming"
    ],
    icon: "📊",
    color: "green",
    route: "/array-operations",
    status: "stub"
  },
  {
    id: 11,
    title: "Object Manipulation",
    description: "Working with objects and data structures",
    category: "Programming Concepts",
    topics: [
      "Object Properties",
      "Destructuring",
      "Spread Operator",
      "Object Methods",
      "JSON Handling",
      "Deep Cloning"
    ],
    icon: "📦",
    color: "indigo",
    route: "/object-manipulation",
    status: "stub"
  },
  {
    id: 12,
    title: "Async Programming",
    description: "Handling asynchronous operations and promises",
    category: "Programming Concepts",
    topics: [
      "Promises",
      "Async/Await",
      "Error Handling",
      "API Calls",
      "Event Listeners",
      "Timers"
    ],
    icon: "⏱️",
    color: "emerald",
    route: "/async-programming",
    status: "stub"
  },
  {
    id: 6,
    title: "Ruby on Rails",
    description: "Rails basics and common web development tasks",
    category: "Backend Frameworks",
    topics: [
      "MVC Structure",
      "Routing",
      "ActiveRecord",
      "Migrations",
      "Controllers & Views",
      "RESTful APIs"
    ],
    icon: "💎",
    color: "red",
    route: "/rails",
    status: "stub"
  },
  {
    id: 14,
    title: "SQL Basics",
    description: "Essential SQL queries and database operations",
    category: "Database & Data",
    topics: [
      "SELECT Statements",
      "WHERE Clauses",
      "JOIN Operations",
      "Aggregate Functions",
      "INSERT/UPDATE/DELETE",
      "Indexing & Performance"
    ],
    icon: "🗄️",
    color: "blue",
    route: "/sql-basics",
    status: "stub"
  },
  {
    id: 13,
    title: "Git Daily Commands",
    description: "Essential Git commands for daily development",
    category: "Tools & Platforms",
    topics: [
      "Basic Commands",
      "Branching & Merging",
      "Remote Repositories",
      "Stashing & Resetting",
      "Conflict Resolution",
      "Best Practices"
    ],
    icon: "📚",
    color: "orange",
    route: "/git-daily-commands",
    status: "stub"
  },
  {
    id: 19,
    title: "Flutter & Dart",
    description: "Cross-platform mobile development with Flutter and Dart",
    category: "Mobile Development",
    topics: [
      "Widgets & State",
      "Layout & Composition",
      "Navigation",
      "Async & Futures",
      "HTTP & APIs",
      "Forms & Input"
    ],
    icon: "🐦",
    color: "cyan",
    route: "/flutter"
  },
  {
    id: 15,
    title: "Docker Basics",
    description: "Containerization and deployment fundamentals",
    category: "DevOps & Deployment",
    topics: [
      "Docker Images",
      "Containers & Volumes",
      "Docker Compose",
      "Networking",
      "Best Practices",
      "Deployment"
    ],
    icon: "🐳",
    color: "cyan",
    route: "/docker-basics",
    status: "stub"
  }
];
