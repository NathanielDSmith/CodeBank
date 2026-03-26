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
    route: "/javascript-basics"
  },
  {
    id: 2,
    title: "Python Basics",
    description: "Essential Python syntax and patterns for beginners",
    category: "Programming Languages",
    topics: [
      "Variables & Data Types",
      "Functions & Loops",
      "Lists & Dictionaries",
      "String Manipulation",
      "File I/O",
      "Error Handling"
    ],
    icon: "🐍",
    color: "green",
    route: "/python"
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
    route: "/java"
  },
  {
    id: 3,
    title: "TypeScript Basics",
    description: "Type-safe JavaScript for scalable apps",
    category: "Programming Languages",
    topics: [
      "Types & Interfaces",
      "Functions & Generics",
      "Type Assertions",
      "Enums & Tuples",
      "Type Narrowing",
      "Modules"
    ],
    icon: "🔷",
    color: "blue",
    route: "/typescript"
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
    route: "/csharp"
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
    route: "/go"
  },
  {
    id: 4,
    title: "React Common Tasks",
    description: "Everyday React patterns and solutions",
    category: "Frontend Frameworks",
    topics: [
      "Components & Props",
      "State Management",
      "Hooks & Lifecycle",
      "Event Handling",
      "Forms & Inputs",
      "API Integration"
    ],
    icon: "⚛️",
    color: "cyan",
    route: "/react-common-tasks"
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
    route: "/vue"
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
    route: "/html-structure"
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
    route: "/css-layout-tricks"
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
    route: "/string-manipulation"
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
    route: "/array-operations"
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
    route: "/object-manipulation"
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
    route: "/async-programming"
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
    route: "/rails"
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
    route: "/sql-basics"
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
    route: "/git-daily-commands"
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
    route: "/docker-basics"
  }
];
