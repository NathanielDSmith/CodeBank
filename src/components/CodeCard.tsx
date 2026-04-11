import React from 'react';
import { Link } from 'react-router-dom';
import { LanguageTopic } from '../types/index';
import { TOPIC_ICON_MAP } from '../data/iconMap';

interface CodeCardProps {
  topic: LanguageTopic;
  /** When set, the card is a link (better a11y). Otherwise uses onClick. */
  to?: string;
  onClick?: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: (topic: LanguageTopic) => void;
}

const CodeCard: React.FC<CodeCardProps> = React.memo(({ topic, to, onClick, isFavorite = false, onToggleFavorite }) => {
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
    if (onClick && (event.key === 'Enter' || event.key === ' ')) {
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

  // Resolve icon: brand SVG from map, or fall back to the emoji string
  const iconEntry = topic.route ? TOPIC_ICON_MAP[topic.route] : undefined;
  const IconComponent = iconEntry?.icon as React.ComponentType<{ size?: number; style?: React.CSSProperties }> | undefined;
  const iconColor = iconEntry?.color;

  const cardClassName = "bg-black/70 backdrop-blur-sm rounded-lg border border-green-500/50 hover:border-green-400 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500/20 font-mono";

  const cardContent = (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          {/* Icon — brand SVG or emoji fallback */}
          <div className="mr-4 flex-shrink-0 min-w-[3rem] min-h-[3rem] flex items-center justify-center bg-black/30 rounded-lg p-2 border border-green-500/30 group-hover:border-green-400/50 transition-all duration-300 group-hover:scale-110">
            {IconComponent ? (
              <IconComponent size={28} style={{ color: iconColor }} />
            ) : (
              <span className="text-2xl">{topic.icon}</span>
            )}
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
              <span className="text-green-500/70 mr-2 text-sm flex-shrink-0 mt-0.5" aria-hidden="true">▸</span>
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
      <div className="flex items-center justify-between">
        <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors font-semibold">
          <span className="text-sm font-mono">ACCESS GUIDE</span>
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        {topic.status === 'deep' && (
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded border border-green-400/60 text-green-300 bg-green-500/10">
            ◆ IN DEPTH
          </span>
        )}
        {topic.status === 'stub' && (
          <span className="text-xs font-mono px-2 py-0.5 rounded border border-green-500/25 text-green-500/50 bg-black/20">
            // in progress
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="relative group">
      {onToggleFavorite && (
        <button
          onClick={handleStarClick}
          className="absolute -top-3 -right-3 z-20 p-2 rounded-full bg-black/80 shadow-lg border border-green-500/60 hover:border-yellow-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500/50"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.25)' }}
        >
          <svg
            className={`w-5 h-5 transition-all duration-300 ${
              isFavorite ? 'text-yellow-400 fill-current' : 'text-green-400 hover:text-yellow-400'
            }`}
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>
      )}
      {to ? (
        <Link
          to={to}
          className={`block no-underline text-inherit ${cardClassName}`}
          aria-label={`View ${topic.title} guide`}
        >
          {cardContent}
        </Link>
      ) : (
        <div
          onClick={onClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label={`View ${topic.title} guide`}
          className={cardClassName}
        >
          {cardContent}
        </div>
      )}
    </div>
  );
};

});

export default CodeCard;
