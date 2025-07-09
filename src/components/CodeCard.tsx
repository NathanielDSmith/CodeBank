import React from 'react';
import { LanguageTopic } from '../types/index';

interface CodeCardProps {
  topic: LanguageTopic;
  onClick: () => void;
}

const CodeCard: React.FC<CodeCardProps> = ({ topic, onClick }) => {
  const getColorClasses = (color: string) => {
    // Matrix theme - all categories get green styling with different intensities
    const colors: { [key: string]: string } = {
      'yellow': 'bg-green-600 text-black font-bold',
      'blue': 'bg-green-500 text-black font-bold',
      'green': 'bg-green-400 text-black font-bold',
      'purple': 'bg-green-700 text-green-100 font-bold',
      'gray': 'bg-green-800 text-green-200 font-bold',
      'cyan': 'bg-green-500 text-black font-bold',
      'emerald': 'bg-green-400 text-black font-bold',
      'indigo': 'bg-green-600 text-black font-bold',
      'orange': 'bg-green-500 text-black font-bold',
      'red': 'bg-green-700 text-green-100 font-bold'
    };
    return colors[color] || 'bg-green-600 text-black font-bold';
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${topic.title} guide`}
      className="group bg-black/70 backdrop-blur-sm rounded-lg border border-green-500/50 hover:border-green-400 transition-all duration-500 cursor-pointer transform hover:-translate-y-1 hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500/20 font-mono"
    >
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-3xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              {topic.icon}
            </div>
            <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold flex-shrink-0 ${getColorClasses(topic.color)}`}>
              {topic.category}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-green-400 line-clamp-2 group-hover:text-green-300 transition-colors">
              {topic.title}
            </h3>
          </div>
        </div>
        
        <p className="text-green-300 text-sm mb-6 line-clamp-2 leading-relaxed">
          {topic.description}
        </p>
        
        <div className="mb-6">
          <h4 className="text-xs font-bold text-green-400 mb-3 uppercase tracking-wider">
            TOPICS COVERED:
          </h4>
          <div className="space-y-2">
            {topic.topics.slice(0, 3).map((topicItem: string, index: number) => (
              <div key={index} className="flex items-start text-sm text-green-300 group-hover:text-green-200 transition-colors">
                <span className="text-green-400 mr-2 text-sm flex-shrink-0 mt-0.5" aria-hidden="true">$</span>
                <span className="line-clamp-2 font-medium leading-relaxed">{topicItem}</span>
              </div>
            ))}
            {topic.topics.length > 3 && (
              <div className="text-xs text-green-400 font-semibold mt-2">
                +{topic.topics.length - 3} MORE TOPICS
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-center text-green-400 group-hover:text-green-300 transition-colors font-semibold">
          <span className="text-sm font-mono">ACCESS GUIDE</span>
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CodeCard; 