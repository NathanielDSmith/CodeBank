import React from 'react';
import { SidePanelProps } from '../types/index';

const SidePanel: React.FC<SidePanelProps> = ({
  sections,
  activeSection,
  searchTerm,
  onSectionChange,
  onSearchChange,
  isOpen = true,
  onToggle
}) => {
  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-28 right-4 z-50">
        <button
          onClick={onToggle}
          className="bg-black/80 backdrop-blur-sm border border-green-500/50 rounded-lg p-3 text-green-400 hover:text-green-300 transition-colors duration-300"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onToggle}
        />
      )}

      {/* Side Panel */}
      <div className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:w-64 w-80 flex-shrink-0
        fixed lg:relative top-0 left-0 h-full lg:h-auto
        z-50 lg:z-auto
        transition-transform duration-300 ease-in-out
      `}>
        <div className="bg-black/90 backdrop-blur-sm border border-green-500/30 p-6 h-full lg:h-auto lg:sticky lg:top-8 overflow-y-auto">
          <div className="lg:hidden flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-green-400 font-mono">NAVIGATION</h3>
            <button
              onClick={onToggle}
              className="text-green-400 hover:text-green-300 transition-colors duration-300"
              aria-label="Close navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <h3 className="hidden lg:block text-lg font-semibold text-green-400 mb-4 font-mono">NAVIGATION</h3>
          
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
                onClick={() => {
                  onSectionChange(section.id);
                  // Close mobile menu after selection
                  if (window.innerWidth < 1024) {
                    onToggle?.();
                  }
                }}
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
    </>
  );
};

export default SidePanel; 