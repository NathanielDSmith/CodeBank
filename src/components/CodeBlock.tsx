import React from 'react';
import { CodeBlockProps } from '../types/index';

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'javascript' }) => {
  return (
    <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
      <code className="text-sm font-mono whitespace-pre">{code}</code>
    </div>
  );
};

export default CodeBlock; 