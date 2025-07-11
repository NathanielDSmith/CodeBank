import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CodeCard from '../components/CodeCard';
import { LanguageTopic } from '../types/index';
import { useFavorites } from '../hooks/useFavorites';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const { favorites, toggleFavorite, isFavorite, isLoaded } = useFavorites();

  const languageTopics: LanguageTopic[] = [
    // Programming Languages
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
      color: "yellow"
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
      color: "green"
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
      icon: "TS",
      color: "blue"
    },
    // Frontend Frameworks
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
      color: "cyan"
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
      icon: "V",
      color: "emerald"
    },
    // Backend Frameworks
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
      color: "red"
    },
    // Web Technologies
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
      color: "orange"
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
      icon: "CSS",
      color: "purple"
    },
    // Programming Concepts
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
      icon: "S",
      color: "blue"
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
      icon: "[]",
      color: "green"
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
      icon: "{}",
      color: "indigo"
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
      color: "emerald"
    },
    // Tools & Platforms
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
      color: "orange"
    },
    // Database & Data
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
      color: "blue"
    },
    // DevOps & Deployment
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
      color: "cyan"
    }
  ];

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...Array.from(new Set(languageTopics.map(topic => topic.category)))];
    return cats;
  }, [languageTopics]);

  // Get category stats
  const categoryStats = useMemo(() => {
    const stats = languageTopics.reduce((acc, topic) => {
      acc[topic.category] = (acc[topic.category] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
    return stats;
  }, [languageTopics]);

  // Filter topics based on category and search term
  const filteredTopics = useMemo(() => {
    return languageTopics.filter(topic => {
      const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.topics.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm, languageTopics]);

  const handleCardClick = (topic: LanguageTopic) => {
    // Map topic titles to routes
    const routeMap: { [key: string]: string } = {
      "JavaScript Basics": "/javascript-basics",
      "React Common Tasks": "/react-common-tasks",
      "CSS Layout Tricks": "/css-layout-tricks",
      "HTML Structure": "/html-structure",
      "String Manipulation": "/string-manipulation",
      "Array Operations": "/array-operations",
      "Object Manipulation": "/object-manipulation",
      "Git Daily Commands": "/git-daily-commands",
      "Python Basics": "/python",
      "TypeScript Basics": "/typescript",
      "Vue Common Tasks": "/vue",
      "Ruby on Rails": "/rails",
      "Docker Basics": "/docker-basics",
      "SQL Basics": "/sql-basics",
      "Async Programming": "/async-programming"
    };
    
    const route = routeMap[topic.title];
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix digital rain background */}
      <div className="absolute inset-0 opacity-20">
        <div className="matrix-rain"></div>
      </div>
      
      {/* Scan lines effect - more subtle */}
      <div className="absolute inset-0 opacity-10">
        <div className="scanlines"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-green-900/20"></div>
      
      {/* Glitch effect overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="glitch-overlay"></div>
      </div>
      
      {/* Matrix data streams - programming themed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main streams - Programming languages */}
        <div className="data-stream" style={{ left: '8%', animationDelay: '0s' }}>
          JAVASCRIPT
        </div>
        <div className="data-stream" style={{ left: '20%', animationDelay: '2s' }}>
          PYTHON
        </div>
        <div className="data-stream" style={{ left: '32%', animationDelay: '4s' }}>
          REACT
        </div>
        <div className="data-stream" style={{ left: '44%', animationDelay: '1s' }}>
          TYPESCRIPT
        </div>
        <div className="data-stream" style={{ left: '56%', animationDelay: '3s' }}>
          HTML
        </div>
        <div className="data-stream" style={{ left: '68%', animationDelay: '5s' }}>
          CSS
        </div>
        <div className="data-stream" style={{ left: '80%', animationDelay: '2s' }}>
          GIT
        </div>
        <div className="data-stream" style={{ left: '92%', animationDelay: '4s' }}>
          VUE
        </div>
        
        {/* Alternative streams - Programming concepts */}
        <div className="data-stream-alt" style={{ left: '12%', animationDelay: '1s' }}>
          FUNCTION
        </div>
        <div className="data-stream-alt" style={{ left: '24%', animationDelay: '3s' }}>
          ARRAY
        </div>
        <div className="data-stream-alt" style={{ left: '36%', animationDelay: '5s' }}>
          STRING
        </div>
        <div className="data-stream-alt" style={{ left: '48%', animationDelay: '2s' }}>
          OBJECT
        </div>
        <div className="data-stream-alt" style={{ left: '60%', animationDelay: '4s' }}>
          LOOP
        </div>
        <div className="data-stream-alt" style={{ left: '72%', animationDelay: '1s' }}>
          CLASS
        </div>
        <div className="data-stream-alt" style={{ left: '84%', animationDelay: '3s' }}>
          HOOK
        </div>
        
        {/* Slow streams - Code snippets */}
        <div className="data-stream-slow" style={{ left: '16%', animationDelay: '3s' }}>
          CONSOLE.LOG
        </div>
        <div className="data-stream-slow" style={{ left: '28%', animationDelay: '6s' }}>
          IMPORT
        </div>
        <div className="data-stream-slow" style={{ left: '40%', animationDelay: '2s' }}>
          EXPORT
        </div>
        <div className="data-stream-slow" style={{ left: '52%', animationDelay: '5s' }}>
          ASYNC
        </div>
        <div className="data-stream-slow" style={{ left: '64%', animationDelay: '1s' }}>
          AWAIT
        </div>
        <div className="data-stream-slow" style={{ left: '76%', animationDelay: '4s' }}>
          FETCH
        </div>
        <div className="data-stream-slow" style={{ left: '88%', animationDelay: '3s' }}>
          MAP
        </div>
      </div>
      
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm border-b border-green-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-4xl font-mono font-bold text-green-400 matrix-glow">
                  <span className="text-green-300">[</span>
                  <span className="glitch-text" data-text="CodeBank">CodeBank</span>
                  <span className="text-green-300">]</span>
                </h1>
              </div>
            </div>
            <div className="text-sm text-green-400 bg-black/50 px-4 py-2 rounded border border-green-500/30 font-mono matrix-glow">
              Personal Code Database
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in relative">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-mono font-black text-green-400 mb-6 leading-tight">
              <span className="text-green-300">$</span> INITIALIZE
              <span className="block text-green-300 animate-pulse typing-effect">
                DATABASE_CONNECTION
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-green-300 max-w-4xl mx-auto leading-relaxed font-mono">
              Personal collection of programming snippets, guides, and solutions accessible anywhere
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 border border-green-500/50 rounded font-mono matrix-glow">
                <span className="text-green-400 animate-pulse">⚡</span>
                <span className="text-sm font-semibold text-green-300">System Online</span>
                <span className="text-green-400 cursor-blink">_</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-12 relative">
          <div className="relative bg-black/50 backdrop-blur-sm rounded-lg border border-green-500/30 p-8 overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-mono font-bold text-center mb-8 text-green-400 glitch-text" data-text="Database Statistics">
                Database Statistics
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {Object.entries(categoryStats).map(([category, count], index) => (
                  <div 
                    key={category} 
                    className="group relative cursor-pointer"
                    style={{ animationDelay: `${index * 200}ms` }}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSearchTerm('');
                      // Scroll to the filtered content with mobile-friendly positioning
                      const filteredContent = document.getElementById('filtered-content');
                      if (filteredContent) {
                        const offset = window.innerWidth < 768 ? 80 : 20; // More offset on mobile
                        const elementPosition = filteredContent.offsetTop - offset;
                        window.scrollTo({
                          top: elementPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    <div className="relative bg-black/70 border border-green-500/50 rounded p-4 hover:border-green-400 hover:bg-black/80 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                      <div className="text-center">
                        <div className="text-4xl font-mono font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                          {count}
                        </div>
                        <div className="text-xs font-mono text-green-300 uppercase tracking-wide">
                          {category}
                        </div>
                        <div className="mt-2 w-6 h-0.5 bg-green-500 mx-auto opacity-60 group-hover:opacity-100 group-hover:w-8 transition-all duration-300"></div>
                        {/* Click indicator */}
                        <div className="mt-1 text-xs text-green-500/70 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          CLICK TO FILTER
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/70 border border-green-500/50 rounded font-mono">
                  <span className="text-sm text-green-300">Total Entries:</span>
                  <span className="text-lg font-bold text-green-400">
                    {languageTopics.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Favorites Section */}
        {isLoaded && favorites.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-mono font-bold text-center mb-8 text-green-400 glitch-text" data-text="Your Favorites">
              Your Favorites
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((topic, index) => (
                <div
                  key={topic.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-fade-in"
                >
                                  <CodeCard
                  topic={topic}
                  onClick={() => handleCardClick(topic)}
                  isFavorite={isFavorite(topic.id)}
                  onToggleFavorite={isLoaded ? toggleFavorite : undefined}
                />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter Controls */}
        <div className="mb-12 space-y-6 animate-fade-in">
          {/* Search Bar */}
          <div className="relative max-w-3xl mx-auto">
            <div className="relative group">
              {/* Terminal frame effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/50 via-green-400/30 to-green-500/50 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Glitch overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              
              <div className="relative bg-black/90 border-2 border-green-500/70 rounded-lg overflow-hidden">
                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent opacity-30 animate-pulse"></div>
                
                <div className="relative flex items-center">
                  {/* Terminal prompt */}
                  <div className="px-4 py-6 text-green-400 font-mono text-lg font-bold border-r border-green-500/50 bg-black/50">
                    <span className="text-green-300">root@codebank</span>
                    <span className="text-green-400 mx-2">:</span>
                    <span className="text-green-300">~</span>
                    <span className="text-green-400 mx-2">$</span>
                  </div>
                  
                  {/* Custom input area with dynamic cursor */}
                  <div className="flex-1 px-6 py-6 relative">
                    <input
                      type="text"
                      placeholder="grep -r 'pattern' /database/*"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyUp={(e) => setCursorPosition((e.target as HTMLInputElement).selectionStart || 0)}
                      onClick={(e) => setCursorPosition((e.target as HTMLInputElement).selectionStart || 0)}
                      className="w-full bg-transparent border-none outline-none text-lg text-green-300 font-mono placeholder-green-500/50 focus:placeholder-green-400/70 transition-colors duration-300"
                    />
                    
                    {/* Dynamic cursor positioned based on text */}
                    {searchTerm && (
                      <div 
                        className="absolute top-6 bottom-6 text-green-400 font-mono pointer-events-none"
                        style={{ 
                          left: `${6 + (cursorPosition * 0.6)}rem`,
                          transform: 'translateX(0)'
                        }}
                      >
                        <span className="cursor-blink text-2xl">|</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-6 py-3 rounded-lg text-sm font-mono font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                  selectedCategory === category
                    ? 'bg-green-500 text-black shadow-lg border border-green-400'
                    : 'bg-black/80 text-green-300 hover:text-green-400 border-2 border-green-500/50 hover:border-green-400'
                }`}
              >
                {/* Glitch effect for active buttons */}
                {selectedCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse rounded-lg"></div>
                )}
                
                {/* Terminal-style text */}
                <span className="relative z-10">
                  {category === 'all' ? 'ALL CATEGORIES' : category.toUpperCase()}
                </span>
                
                {/* Matrix glow effect */}
                <div className="absolute inset-0 bg-green-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/70 border border-green-500/50 rounded-lg font-mono">
              <span className="text-sm text-green-300">SHOWING</span>
              <span className="text-xl font-bold text-green-400">{filteredTopics.length}</span>
              <span className="text-sm text-green-300">OF</span>
              <span className="text-xl font-bold text-green-400">{languageTopics.length}</span>
              <span className="text-sm text-green-300">ENTRIES</span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div id="filtered-content" className="mb-8">
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTopics.map((topic, index) => (
              <div
                key={topic.id}
                style={{ animationDelay: `${index * 50}ms` }}
                className="animate-fade-in"
              >
                <CodeCard
                  topic={topic}
                  onClick={() => handleCardClick(topic)}
                  isFavorite={isFavorite(topic.id)}
                  onToggleFavorite={isLoaded ? toggleFavorite : undefined}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-green-300 text-8xl mb-6 animate-pulse-slow">🔍</div>
            <h3 className="text-2xl font-semibold text-green-400 mb-4 font-mono">NO DATA FOUND</h3>
            <p className="text-green-300 text-lg font-mono">Try adjusting your search terms or category filter</p>
          </div>
        )}
        </div>
      </main>
    </div>
  );
};

export default HomePage; 