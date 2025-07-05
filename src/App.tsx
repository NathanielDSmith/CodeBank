import React, { useState } from 'react';
import './App.css';
import CodeCard from './components/CodeCard';
import { LanguageTopic } from './types';

function App() {
  const [selectedTopic, setSelectedTopic] = useState<LanguageTopic | null>(null);

  const languageTopics: LanguageTopic[] = [
    {
      id: 1,
      title: "JavaScript Basics",
      description: "Common JavaScript patterns and snippets you use every day",
      category: "Frontend",
      topics: [
        "How to loop through arrays",
        "How to check if something exists",
        "How to convert strings to numbers",
        "How to get current date/time",
        "How to add/remove from arrays",
        "How to find things in arrays"
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
        "How to add state to component",
        "How to pass data between components",
        "How to handle form inputs",
        "How to make API calls",
        "How to show/hide elements",
        "How to handle button clicks"
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
        "How to center things",
        "How to make responsive grid",
        "How to make sticky header",
        "How to add hover effects",
        "How to make mobile menu",
        "How to fix common spacing issues"
      ],
      icon: "🎨",
      color: "purple"
    },
    {
      id: 4,
      title: "Git Daily Commands",
      description: "Git commands you use all the time",
      category: "Tools",
      topics: [
        "How to save your changes",
        "How to switch branches",
        "How to see what changed",
        "How to undo mistakes",
        "How to push to GitHub",
        "How to pull latest changes"
      ],
      icon: "📚",
      color: "gray"
    },
    {
      id: 5,
      title: "HTML Structure",
      description: "Common HTML patterns and semantic elements",
      category: "Frontend",
      topics: [
        "How to make a form",
        "How to add images",
        "How to make links",
        "How to organize content",
        "How to add meta tags",
        "How to make tables"
      ],
      icon: "🌐",
      color: "orange"
    },
    {
      id: 6,
      title: "Console Debugging",
      description: "Quick debugging tricks and console commands",
      category: "Development",
      topics: [
        "How to log variables",
        "How to check object properties",
        "How to test functions",
        "How to see network requests",
        "How to find errors",
        "How to clear console"
      ],
      icon: "🐛",
      color: "red"
    },
    {
      id: 7,
      title: "String Manipulation",
      description: "Common string operations and text processing",
      category: "Programming",
      topics: [
        "How to capitalize text",
        "How to remove spaces",
        "How to split strings",
        "How to replace text",
        "How to check if contains",
        "How to get string length"
      ],
      icon: "📝",
      color: "blue"
    },
    {
      id: 8,
      title: "Array Operations",
      description: "Common array methods and manipulations",
      category: "Programming",
      topics: [
        "How to add to array",
        "How to remove from array",
        "How to find item in array",
        "How to sort array",
        "How to filter array",
        "How to map array"
      ],
      icon: "📋",
      color: "green"
    }
  ];

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
              Quick reference for common coding tasks
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Quick Code Reference
          </h2>
          <p className="text-gray-600">
            Find the code you need for everyday programming tasks
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {languageTopics.map((topic) => (
            <CodeCard
              key={topic.id}
              topic={topic}
              onClick={() => setSelectedTopic(topic)}
            />
          ))}
        </div>
      </main>

      {/* Modal for Topic Details */}
      {selectedTopic && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div className="flex items-center">
                <span className="text-3xl mr-3">{selectedTopic.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {selectedTopic.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {selectedTopic.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
              <div className="mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {selectedTopic.category}
                </span>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Common Tasks:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedTopic.topics.map((topic, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-400 mr-3">•</span>
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center py-8">
                <div className="text-gray-500 mb-4">
                  Each task would have the exact code you need with a simple explanation.
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Code Examples
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
