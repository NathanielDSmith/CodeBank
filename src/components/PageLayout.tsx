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
  language?: string;
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
  language = 'javascript',
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
        <div className="py-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-green-400 font-mono">
            <span className="text-green-500/70">&gt;</span>
            <span className="text-sm tracking-widest uppercase">Initializing</span>
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
          </div>
          <div className="w-48 h-px bg-green-900 rounded overflow-hidden">
            <div className="h-full bg-green-400 rounded animate-pulse" style={{ width: '60%' }} />
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="py-16 flex flex-col items-center gap-4">
          <div className="bg-black/50 border border-green-500/30 rounded-lg p-6 text-center max-w-sm w-full">
            <p className="text-green-500/70 font-mono text-xs uppercase tracking-widest mb-2">Error</p>
            <p className="text-green-300 font-mono text-sm mb-5">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2 border border-green-500/50 text-green-300 rounded font-mono text-sm hover:bg-green-500/10 hover:border-green-400 hover:text-green-200 transition-all duration-300"
            >
              &gt; RETRY
            </button>
          </div>
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
          <div className="max-w-3xl mx-auto py-8 space-y-6">
            {/* Header */}
            <div className="border-b border-green-500/20 pb-6">
              <p className="text-green-500/60 font-mono text-xs uppercase tracking-widest mb-2">&gt; overview</p>
              <h2 className="text-2xl font-bold text-green-400 font-mono mb-3">{title}</h2>
              <p className="text-green-300/90 font-mono text-sm leading-relaxed">
                {fallbackContent?.description || `Welcome to ${title}! This section covers essential concepts.`}
              </p>
            </div>

            {/* Benefits */}
            {fallbackContent?.benefits && (
              <div className="bg-black/50 border border-green-500/20 rounded-lg p-5">
                <h3 className="text-xs font-bold text-green-400 mb-3 font-mono uppercase tracking-widest flex items-center gap-2">
                  <span className="text-green-500/60">&gt;_</span> Why this matters
                </h3>
                <p className="text-green-300/80 font-mono text-sm leading-relaxed">{fallbackContent.benefits}</p>
              </div>
            )}

            {/* Topics + difficulty side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Topics */}
              {fallbackContent?.topics && (
                <div className="bg-black/50 border border-green-500/20 rounded-lg p-5">
                  <h3 className="text-xs font-bold text-green-400 mb-3 font-mono uppercase tracking-widest flex items-center gap-2">
                    <span>◆</span> What's covered
                  </h3>
                  <ul className="space-y-2">
                    {fallbackContent.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2 text-green-300/80 font-mono text-sm">
                        <span className="text-green-500/60 flex-shrink-0 mt-0.5">▸</span>
                        <span>{topic.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links + difficulty */}
              <div className="space-y-4">
                {fallbackContent?.difficulty && (
                  <div className="bg-black/50 border border-green-500/20 rounded-lg px-5 py-3 flex items-center justify-between">
                    <span className="text-xs font-mono text-green-500/60 uppercase tracking-widest">Difficulty</span>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded border border-green-500/40 text-green-300 bg-green-500/10">
                      {fallbackContent.difficulty}
                    </span>
                  </div>
                )}

                {fallbackContent?.usefulLinks && (
                  <div className="bg-black/50 border border-green-500/20 rounded-lg p-5">
                    <h3 className="text-xs font-bold text-green-400 mb-3 font-mono uppercase tracking-widest">Resources</h3>
                    <div className="space-y-2">
                      {fallbackContent.usefulLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-green-400/70 hover:text-green-300 font-mono text-sm transition-colors duration-300 group"
                        >
                          <span className="text-green-500/50 group-hover:text-green-400 transition-colors duration-300">→</span>
                          <span className="group-hover:underline">{link.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <p className="text-green-500/50 font-mono text-xs text-center pt-2">
              ← select a section to get started
            </p>
          </div>
        );
      }

      // If there's an active section but no content, show a different message
      const currentSection = sections.find(s => s.id === activeSection);
      return (
        <div className="py-16 text-center">
          <p className="text-green-500/50 font-mono text-xs uppercase tracking-widest mb-2">&gt; {currentSection?.title}</p>
          <p className="text-green-400/60 font-mono text-sm">
            Content coming soon...
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
                      <h5 className="text-xs font-bold text-green-400 mb-2 font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <span className="text-green-500/70">&gt;_</span> Concept
                      </h5>
                      <p className="text-green-200/90 text-sm font-mono leading-relaxed">
                        {example.explanation}
                      </p>
                    </div>
                  )}

                  {example.keyIdeas && example.keyIdeas.length > 0 && (
                    <div className="bg-black/40 border border-green-400/20 rounded-lg p-3 mb-3">
                      <h5 className="text-xs font-bold text-green-400 mb-2 font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <span>◆</span> Key Ideas
                      </h5>
                      <ul className="space-y-1.5 text-sm font-mono">
                        {example.keyIdeas.map((idea, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-green-200/90">
                            <span className="text-green-400 flex-shrink-0 mt-0.5">→</span>
                            <span>{idea}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {example.pitfalls && example.pitfalls.length > 0 && (
                    <div className="bg-yellow-950/20 border border-yellow-500/20 rounded-lg p-3 mb-3">
                      <h5 className="text-xs font-bold text-yellow-400/80 mb-2 font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <span>⚠</span> Pitfalls
                      </h5>
                      <ul className="space-y-1.5 text-sm font-mono">
                        {example.pitfalls.map((pitfall, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-yellow-200/70">
                            <span className="text-yellow-500/60 flex-shrink-0 mt-0.5">!</span>
                            <span>{pitfall}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <CodeBlock code={example.code} language={language} />
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