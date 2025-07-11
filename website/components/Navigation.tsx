'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Github, ExternalLink } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="BhaSha IME Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-semibold text-gray-900 text-base">
              BhaSha IME
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/docs"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/#demo"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Demo
            </Link>
            <Link
              href="https://github.com/hironate/bhaShaIME"
              target="_blank"
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://www.npmjs.com/package/@bhashaime/core"
              target="_blank"
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ExternalLink size={16} />
              <span>npm</span>
            </Link>
            <Link href="/docs" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link
                href="/docs"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="/#demo"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Demo
              </Link>
              <Link
                href="https://github.com/hironate/bhaShaIME"
                target="_blank"
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://www.npmjs.com/package/@bhashaime/core"
                target="_blank"
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ExternalLink size={16} />
                <span>npm</span>
              </Link>
              <Link href="/docs" className="btn-primary w-fit">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
