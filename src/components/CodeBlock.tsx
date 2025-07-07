import React from 'react';
import { CodeBlockProps } from '../types/index';

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'javascript' }) => {
  return (
    <div 
      className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto"
      role="code"
      aria-label={`${language} code example`}
    >
      <pre className="text-sm font-mono whitespace-pre m-0">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock; 