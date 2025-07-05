import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeaderProps } from '../types/index';

const PageHeader: React.FC<PageHeaderProps> = ({ title, icon }) => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link to="/" className="text-blue-600 hover:text-blue-800 mr-4">
              ← Back to CodeBank
            </Link>
            <div className="flex items-center">
              <span className="text-3xl mr-3">{icon}</span>
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader; 