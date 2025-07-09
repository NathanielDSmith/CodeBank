import React from 'react';
import { SidePanelProps } from '../types/index';

const SidePanel: React.FC<SidePanelProps> = ({
  sections,
  activeSection,
  searchTerm,
  onSectionChange,
  onSearchChange
}) => {
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-black/70 backdrop-blur-sm rounded-lg border border-green-500/30 p-6 sticky top-8">
        <h3 className="text-lg font-semibold text-green-400 mb-4 font-mono">NAVIGATION</h3>
        
        {/* Search Box */}
        <div className="mb-4">
          <label htmlFor="search-topics" className="sr-only">
            Search topics
          </label>
          <input
            id="search-topics"
            type="text"
            placeholder="grep -r 'pattern' /*"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 bg-black/50 border border-green-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 text-green-300 font-mono placeholder-green-500/50"
            aria-label="Search topics in table of contents"
          />
        </div>
        
        <nav className="space-y-2" aria-label="Table of contents">
          {filteredSections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 font-mono ${
                activeSection === section.id
                  ? 'bg-green-500/20 text-green-300 border border-green-400 shadow-lg'
                  : 'text-green-400 hover:bg-green-500/10 hover:text-green-300 border border-transparent hover:border-green-500/50'
              }`}
              aria-current={activeSection === section.id ? 'page' : undefined}
            >
              <span className="mr-2" aria-hidden="true">{section.icon}</span>
              {section.title}
            </button>
          ))}
          
          {filteredSections.length === 0 && (
            <div className="text-green-500 text-sm py-2 font-mono" role="status">
              No topics found matching "{searchTerm}"
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default SidePanel; 