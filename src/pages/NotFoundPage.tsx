import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-mono font-bold text-green-400 mb-3">
          404
        </h1>
        <p className="text-green-200 font-mono text-sm sm:text-base leading-relaxed mb-6">
          This page doesn&apos;t exist in CodeBank.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg bg-green-500/20 text-green-200 border border-green-500/30 hover:border-green-400 hover:text-green-100 transition-colors font-mono"
          >
            Go Home
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg bg-black/40 text-green-300 border border-green-500/30 hover:border-green-400 hover:text-green-100 transition-colors font-mono"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

