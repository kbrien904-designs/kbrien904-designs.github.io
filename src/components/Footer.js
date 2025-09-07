import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-slate-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-slate-600">
            © 2025 Kathleen O'Brien. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 mt-1">
            Designed with ❤️ in New York
          </p>
        </div>
        <div className="flex space-x-6">
          <Link to="/privacy" className="text-slate-600 hover:text-red-500 transition-colors">Privacy</Link>
          <Link to="/terms" className="text-slate-600 hover:text-red-500 transition-colors">Terms</Link>
          <Link to="/sitemap" className="text-slate-600 hover:text-red-500 transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;