import React, { useEffect, useMemo, useState } from 'react';
import { CodeBlockProps } from '../types/index';

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'javascript' }) => {
  const [isCopied, setIsCopied] = useState(false);

  const codeToCopy = useMemo(() => code ?? '', [code]);

  useEffect(() => {
    if (!isCopied) return;
    const t = window.setTimeout(() => setIsCopied(false), 1500);
    return () => window.clearTimeout(t);
  }, [isCopied]);

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(codeToCopy);
        setIsCopied(true);
        return;
      }
    } catch {
      // Fall through to the legacy fallback
    }

    // Legacy fallback: hidden textarea + execCommand
    try {
      const textarea = document.createElement('textarea');
      textarea.value = codeToCopy;
      textarea.setAttribute('readonly', 'true');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setIsCopied(true);
    } catch {
      // If copying fails, we intentionally do nothing to avoid disruptive UX.
    }
  };

  return (
    <div 
      className="bg-gray-900 text-green-400 p-3 sm:p-4 rounded-lg overflow-x-auto relative"
      role="code"
      aria-label={`${language} code example`}
    >
      <button
        type="button"
        onClick={copyToClipboard}
        className="absolute top-2 right-2 px-2 py-1 text-xs font-mono rounded bg-black/40 border border-green-500/20 text-green-300 hover:text-green-200 hover:border-green-500/40 transition-colors"
        aria-label="Copy code to clipboard"
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="text-xs sm:text-sm font-mono whitespace-pre-wrap break-words m-0">
        <code className="break-all">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock; 