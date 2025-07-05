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
      <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
        
        {/* Search Box */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search topics..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <nav className="space-y-2">
          {filteredSections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.title}
            </button>
          ))}
          
          {filteredSections.length === 0 && (
            <div className="text-gray-500 text-sm py-2">
              No topics found matching "{searchTerm}"
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default SidePanel; 