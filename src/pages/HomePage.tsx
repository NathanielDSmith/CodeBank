import React from 'react';
import { useNavigate } from 'react-router-dom';
import CodeCard from '../components/CodeCard';
import { LanguageTopic } from '../types/index';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const languageTopics: LanguageTopic[] = [
    {
      id: 1,
      title: "JavaScript Basics",
      description: "Complete beginner guide with side navigation and search",
      category: "Frontend",
      topics: [
        "Variables & Data Types",
        "Functions & Scope",
        "Arrays & Objects",
        "Strings & Numbers",
        "Conditionals & Loops",
        "DOM & Events"
      ],
      icon: "⚡",
      color: "yellow"
    },
    {
      id: 2,
      title: "React Common Tasks",
      description: "Everyday React patterns and solutions",
      category: "Frontend",
      topics: [
        "Components & Props",
        "State Management",
        "Hooks & Lifecycle",
        "Event Handling",
        "Forms & Inputs",
        "API Integration"
      ],
      icon: "⚛️",
      color: "cyan"
    },
    {
      id: 3,
      title: "CSS Layout Tricks",
      description: "Quick CSS solutions for common layout problems",
      category: "Styling",
      topics: [
        "Flexbox & Grid",
        "Centering Elements",
        "Responsive Design",
        "Positioning",
        "Animations",
        "Media Queries"
      ],
      icon: "🎨",
      color: "purple"
    },
    {
      id: 4,
      title: "HTML Structure",
      description: "Common HTML patterns and semantic elements",
      category: "Frontend",
      topics: [
        "Semantic Elements",
        "Forms & Inputs",
        "Images & Media",
        "Links & Navigation",
        "Tables & Lists",
        "Meta Tags"
      ],
      icon: "🌐",
      color: "orange"
    },
    {
      id: 5,
      title: "String Manipulation",
      description: "Common string operations and text processing",
      category: "Programming",
      topics: [
        "String Methods",
        "Text Formatting",
        "Search & Replace",
        "Splitting & Joining",
        "Case Conversion",
        "Validation"
      ],
      icon: "📝",
      color: "blue"
    },
    {
      id: 6,
      title: "Array Operations",
      description: "Common array methods and manipulations",
      category: "Programming",
      topics: [
        "Array Methods",
        "Filtering & Sorting",
        "Mapping & Reducing",
        "Adding & Removing",
        "Searching",
        "Transforming"
      ],
      icon: "📋",
      color: "green"
    },
    {
      id: 7,
      title: "Object Manipulation",
      description: "Working with objects and data structures",
      category: "Programming",
      topics: [
        "Object Properties",
        "Destructuring",
        "Spread Operator",
        "Object Methods",
        "JSON Handling",
        "Deep Cloning"
      ],
      icon: "📦",
      color: "indigo"
    },
    {
      id: 8,
      title: "Async Programming",
      description: "Handling asynchronous operations and promises",
      category: "Programming",
      topics: [
        "Promises",
        "Async/Await",
        "Error Handling",
        "API Calls",
        "Event Listeners",
        "Timers"
      ],
      icon: "⏱️",
      color: "emerald"
    },
    {
      id: 9,
      title: "Python Basics",
      description: "Essential Python syntax and patterns for beginners",
      category: "Backend",
      topics: [
        "Variables & Data Types",
        "Functions & Loops",
        "Lists & Dictionaries",
        "String Manipulation",
        "File I/O",
        "Error Handling"
      ],
      icon: "🐍",
      color: "green"
    },
    {
      id: 10,
      title: "TypeScript Basics",
      description: "Type-safe JavaScript for scalable apps",
      category: "Frontend",
      topics: [
        "Types & Interfaces",
        "Functions & Generics",
        "Type Assertions",
        "Enums & Tuples",
        "Type Narrowing",
        "Modules"
      ],
      icon: "🟦",
      color: "blue"
    },
    {
      id: 11,
      title: "Vue Common Tasks",
      description: "Everyday Vue.js patterns and solutions",
      category: "Frontend",
      topics: [
        "Components & Props",
        "Reactivity & Data",
        "Directives",
        "Event Handling",
        "Computed & Watchers",
        "Vue Router"
      ],
      icon: "🟩",
      color: "emerald"
    },
    {
      id: 12,
      title: "Ruby on Rails",
      description: "Rails basics and common web development tasks",
      category: "Backend",
      topics: [
        "MVC Structure",
        "Routing",
        "ActiveRecord",
        "Migrations",
        "Controllers & Views",
        "RESTful APIs"
      ],
      icon: "💎",
      color: "red"
    }
  ];

  const handleCardClick = (topic: LanguageTopic) => {
    // Map topic titles to routes
    const routeMap: { [key: string]: string } = {
      "JavaScript Basics": "/javascript-basics",
      "React Common Tasks": "/react-common-tasks",
      "CSS Layout Tricks": "/css-layout-tricks",
      "Git Daily Commands": "/git-daily-commands",
      "Python Basics": "/python",
      "TypeScript Basics": "/typescript",
      "Vue Common Tasks": "/vue",
      "Ruby on Rails": "/rails"
    };
    
    const route = routeMap[topic.title];
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold text-gray-900">
                  <span className="text-blue-600">Code</span>Bank
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Programming guides with search & navigation
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Programming Guides
          </h2>
          <p className="text-gray-600">
            Each guide includes side navigation, search, and extensive code examples
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {languageTopics.map((topic) => (
            <CodeCard
              key={topic.id}
              topic={topic}
              onClick={() => handleCardClick(topic)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage; 