import React from 'react';
import { Link } from '../renderer/Link'

export const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer className={`bg-white shadow-inner ${className} mt-auto`}>
      <div className="container mx-auto py-6 px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Boxento. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link to="/privacy" className="text-sm text-indigo-600 hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="text-sm text-indigo-600 hover:underline">Terms of Service</Link>
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://twitter.com/boxento" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
            Twitter
          </a>
          <a href="https://instagram.com/boxento" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
            Instagram
          </a>
          <a href="https://tiktok.com/@boxento" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
};