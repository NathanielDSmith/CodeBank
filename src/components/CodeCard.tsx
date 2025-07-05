import React from 'react';
import { LanguageTopic } from '../types';

interface CodeCardProps {
  topic: LanguageTopic;
  onClick: () => void;
}

const CodeCard: React.FC<CodeCardProps> = ({ topic, onClick }) => {
  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      'yellow': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'blue': 'bg-blue-100 text-blue-800 border-blue-200',
      'green': 'bg-green-100 text-green-800 border-green-200',
      'purple': 'bg-purple-100 text-purple-800 border-purple-200',
      'gray': 'bg-gray-100 text-gray-800 border-gray-200',
      'cyan': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'emerald': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'indigo': 'bg-indigo-100 text-indigo-800 border-indigo-200'
    };
    return colors[color] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-200 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <span className="text-2xl mr-3">{topic.icon}</span>
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
              {topic.title}
            </h3>
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColorClasses(topic.color)}`}>
            {topic.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {topic.description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
            Topics Covered:
          </h4>
          <div className="space-y-1">
            {topic.topics.slice(0, 3).map((topicItem, index) => (
              <div key={index} className="flex items-center text-xs text-gray-600">
                <span className="text-gray-400 mr-2">•</span>
                <span className="line-clamp-1">{topicItem}</span>
              </div>
            ))}
            {topic.topics.length > 3 && (
              <div className="text-xs text-gray-500 mt-1">
                +{topic.topics.length - 3} more topics
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
          <span className="text-xs">View Full Guide</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CodeCard; 