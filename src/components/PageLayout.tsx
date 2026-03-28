import React from 'react';
import PageHeader from './PageHeader';
import SidePanel from './SidePanel';
import ContentSection from './ContentSection';
import CodeBlock from './CodeBlock';
import { Section } from '../types/index';

interface Example {
  title: string;
  code: string;
  /**
   * Optional knowledge-base fields.
   * Existing content modules only provide { title, code }, so these stay optional.
   */
  explanation?: string;
  keyIdeas?: string[];
  pitfalls?: string[];
}

interface Section {
  title: string;
  examples: Example[];
}

interface PageLayoutProps {
  title: string;
  icon: string;
  sections: Section[];
  activeSection: string;
  searchTerm: string;
  content: Section[] | null;
  loading: boolean;
  error: string | null;
  isSidePanelOpen: boolean;
  onSectionChange: (sectionId: string) => void;
  onSearchChange: (term: string) => void;
  onToggleSidePanel: () => void;
  fallbackContent?: {
    description: string;
    benefits?: string;
    difficulty?: string;
    topics: Array<{ icon: string; text: string }>;
    usefulLinks?: Array<{ name: string; url: string }>;
  };
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  icon,
  sections,
  activeSection,
  searchTerm,
  content,
  loading,
  error,
  isSidePanelOpen,
  onSectionChange,
  onSearchChange,
  onToggleSidePanel,
  fallbackContent
}) => {
  // const [activeTab, setActiveTab] = React.useState<'notes' | 'quiz'>('notes');

  // React.useEffect(() => {
  //   // When you switch sections, default back to Notes.
  //   setActiveTab('notes');
  // }, [activeSection]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-green-400 font-mono">INITIALIZING...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono">
            {sections.find(s => s.id === activeSection)?.title}
          </h2>
          <p className="text-red-400 mb-4 font-mono">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-mono transition-colors duration-300"
          >
            RETRY
          </button>
        </div>
      );
    }

    // if (activeTab === 'quiz') {
    //   const sectionTitle =
    //     sections.find((s) => s.id === activeSection)?.title ?? title;
    //
    //   return (
    //     <div className="space-y-4">
    //       <div className="bg-black/50 border border-green-500/30 rounded-lg p-4 sm:p-6">
    //         <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 mb-2 font-mono matrix-glow">
    //           Quiz: {sectionTitle}
    //         </h2>
    //         <p className="text-green-300 font-mono leading-relaxed">
    //           Quiz mode is scaffolding only for now. When you add quiz data, this panel will render questions and collect answers.
    //         </p>
    //       </div>
    //
    //       <div className="bg-black/50 border border-green-500/30 rounded-lg p-4 sm:p-6">
    //         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    //           <div className="text-green-400 font-mono">
    //             <span className="text-xs uppercase tracking-wider text-green-500/80 block mb-1">
    //               Status
    //             </span>
    //             <span className="text-sm">Coming soon</span>
    //           </div>
    //
    //           <button
    //             disabled
    //             className="px-4 py-2 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg font-mono opacity-80 cursor-not-allowed"
    //           >
    //             Start Quiz
    //           </button>
    //         </div>
    //
    //         <div className="mt-4 space-y-3">
    //           {[1, 2, 3].map((n) => (
    //             <div key={n} className="border border-green-500/20 rounded-lg p-3">
    //               <div className="flex items-start justify-between gap-3">
    //                 <div className="text-green-400 font-mono text-sm">
    //                   Q{n}
    //                 </div>
    //                 <div className="text-green-500/70 font-mono text-xs">
    //                   Placeholder
    //                 </div>
    //               </div>
    //               <div className="mt-2 h-3 bg-green-500/10 rounded w-full" />
    //               <div className="mt-2 h-3 bg-green-500/10 rounded w-11/12" />
    //               <div className="mt-2 h-3 bg-green-500/10 rounded w-10/12" />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }

    if (!content) {
      // If overview section is selected or no active section, show the enhanced landing content
      if (!activeSection || activeSection === 'overview') {
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono">
              {title}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Description */}
              <p className="text-green-300 font-mono text-lg leading-relaxed">
                {fallbackContent?.description || `Welcome to ${title}! This section covers essential concepts.`}
              </p>
              
              {/* Benefits */}
              {fallbackContent?.benefits && (
                <div className="bg-black/50 border border-green-500/30 rounded-lg p-6 text-left">
                  <h3 className="text-lg font-bold text-green-400 mb-3 font-mono">Why Learn This:</h3>
                  <p className="text-green-300 font-mono leading-relaxed">{fallbackContent.benefits}</p>
                </div>
              )}
              
              {/* Difficulty */}
              {fallbackContent?.difficulty && (
                <div className="inline-block">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-600 text-black">
                    {fallbackContent.difficulty}
                  </span>
                </div>
              )}
              
              {/* Topics */}
              {fallbackContent?.topics && (
                <div className="bg-black/50 border border-green-500/30 rounded-lg p-6 text-left">
                  <h3 className="text-lg font-bold text-green-400 mb-4 font-mono">What you'll learn:</h3>
                  <ul className="space-y-2 text-green-300 font-mono">
                    {fallbackContent.topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2">{topic.icon}</span>
                        <span>{topic.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Useful Links */}
              {fallbackContent?.usefulLinks && (
                <div className="bg-black/50 border border-green-500/30 rounded-lg p-6 text-left">
                  <h3 className="text-lg font-bold text-green-400 mb-4 font-mono">Useful Resources:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {fallbackContent.usefulLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-300 hover:text-green-200 font-mono transition-colors duration-300 group"
                      >
                        <span className="text-green-400 mr-2 group-hover:scale-110 transition-transform duration-300">🔗</span>
                        <span className="group-hover:underline">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              <p className="text-green-400 font-mono mt-6 text-sm">
                Select a topic from the sidebar to get started!
              </p>
            </div>
          </div>
        );
      }
      
      // If there's an active section but no content, show a different message
      const currentSection = sections.find(s => s.id === activeSection);
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-green-400 mb-4 font-mono">
            {currentSection?.title || title}
          </h2>
          <p className="text-green-300 font-mono">
            Content for {currentSection?.title} will be added here...
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 mb-4 font-mono matrix-glow">
          {sections.find(s => s.id === activeSection)?.title}
        </h2>
        
        {content.map((section, index) => (
          <ContentSection key={index} title={section.title}>
            <div className="space-y-4">
              {section.examples.map((example: Example, exampleIndex: number) => (
                <div key={exampleIndex} className="bg-black/50 border border-green-500/30 rounded-lg p-4">
                  <h4 className="font-medium text-green-300 mb-2 font-mono">{example.title}</h4>
                  {example.explanation && (
                    <div className="bg-black/40 border border-green-500/20 rounded-lg p-3 mb-3">
                      <h5 className="text-xs font-bold text-green-400 mb-2 font-mono uppercase tracking-wider">
                        Concept
                      </h5>
                      <p className="text-green-200 text-sm font-mono leading-relaxed whitespace-pre-wrap">
                        {example.explanation}
                      </p>
                    </div>
                  )}

                  {example.keyIdeas && example.keyIdeas.length > 0 && (
                    <div className="bg-black/40 border border-green-500/20 rounded-lg p-3 mb-3">
                      <h5 className="text-xs font-bold text-green-400 mb-2 font-mono uppercase tracking-wider">
                        Key ideas
                      </h5>
                      <ul className="space-y-1 text-green-200 text-sm font-mono list-disc pl-5">
                        {example.keyIdeas.map((idea, idx) => (
                          <li key={idx}>{idea}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {example.pitfalls && example.pitfalls.length > 0 && (
                    <div className="bg-black/40 border border-green-500/20 rounded-lg p-3 mb-3">
                      <h5 className="text-xs font-bold text-green-400 mb-2 font-mono uppercase tracking-wider">
                        Pitfalls
                      </h5>
                      <ul className="space-y-1 text-green-200 text-sm font-mono list-disc pl-5">
                        {example.pitfalls.map((pitfall, idx) => (
                          <li key={idx}>{pitfall}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <CodeBlock code={example.code} />
                </div>
              ))}
            </div>
          </ContentSection>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix digital rain background */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-rain"></div>
      </div>
      
      {/* Scan lines effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="scanlines"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-green-900/10"></div>
      
      <PageHeader title={title} icon={icon} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 relative z-10">
        <div className="flex gap-4 sm:gap-8">
          <SidePanel
            sections={sections}
            activeSection={activeSection}
            searchTerm={searchTerm}
            onSectionChange={onSectionChange}
            onSearchChange={onSearchChange}
            isOpen={isSidePanelOpen}
            onToggle={onToggleSidePanel}
          />
          
          <div className="flex-1 min-w-0">
            {/* Notes | Quiz scaffold — quiz hidden until feature is built */}
            {/* <div className="mb-4">
              <div
                role="tablist"
                aria-label="Quiz and notes tabs"
                className="flex gap-2 border-b border-green-500/20"
              >
                <button
                  role="tab"
                  aria-selected={activeTab === 'notes'}
                  className={`px-4 py-2 -mb-px rounded-t-lg font-mono text-sm transition-colors ${
                    activeTab === 'notes'
                      ? 'bg-green-500/20 text-green-200 border border-green-500/30 border-b-black/0'
                      : 'bg-black/0 text-green-400 hover:text-green-200'
                  }`}
                  onClick={() => setActiveTab('notes')}
                >
                  Notes
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === 'quiz'}
                  className={`px-4 py-2 -mb-px rounded-t-lg font-mono text-sm transition-colors ${
                    activeTab === 'quiz'
                      ? 'bg-green-500/20 text-green-200 border border-green-500/30 border-b-black/0'
                      : 'bg-black/0 text-green-400 hover:text-green-200'
                  }`}
                  onClick={() => setActiveTab('quiz')}
                >
                  Quiz
                </button>
              </div>
            </div> */}

            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout; 