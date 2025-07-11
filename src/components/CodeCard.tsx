import React from 'react';
import { LanguageTopic } from '../types/index';

interface CodeCardProps {
  topic: LanguageTopic;
  onClick: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: (topic: LanguageTopic) => void;
}

const CodeCard: React.FC<CodeCardProps> = ({ topic, onClick, isFavorite = false, onToggleFavorite }) => {
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

  const getIconStyle = (icon: string) => {
    // Special styling for text-based icons with consistent sizing and brighter colors
    if (icon === 'TS' || icon === 'V' || icon === 'CSS' || icon === 'S' || icon === '[]' || icon === '{}') {
      return 'font-mono font-bold text-xl bg-cyan-500/30 px-3 py-2 rounded border border-cyan-400/50 text-cyan-300 min-w-[3rem] min-h-[3rem] flex items-center justify-center';
    }
    // Default styling for emoji icons to match the size
    return 'text-3xl min-w-[3rem] min-h-[3rem] flex items-center justify-center';
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  const handleStarClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(topic);
    }
  };

  return (
    <div className="relative group">
      {/* Star button - floating above the card, not inside padding */}
      {onToggleFavorite && (
        <button
          onClick={handleStarClick}
          className="absolute -top-3 -right-3 z-20 p-2 rounded-full bg-black/80 shadow-lg border border-green-500/60 hover:border-yellow-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500/50"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.25)' }}
        >
          <svg
            className={`w-5 h-5 transition-all duration-300 ${
              isFavorite 
                ? 'text-yellow-400 fill-current' 
                : 'text-green-400 hover:text-yellow-400'
            }`}
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </button>
      )}
      <div
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`View ${topic.title} guide`}
        className="bg-black/70 backdrop-blur-sm rounded-lg border border-green-500/50 hover:border-green-400 transition-all duration-500 cursor-pointer transform hover:-translate-y-1 hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500/20 font-mono"
      >
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className={`mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${getIconStyle(topic.icon)}`}>
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
    </div>
  );
};

export default CodeCard; 