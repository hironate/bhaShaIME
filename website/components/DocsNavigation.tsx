'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    title: 'Getting Started',
    href: '#getting-started',
    children: [
      { title: 'Installation', href: '#installation' },
      { title: 'Quick Start', href: '#quick-start' },
    ],
  },
  {
    title: 'Usage Patterns',
    href: '#usage-patterns',
    children: [
      { title: 'React Hook', href: '#hook-documentation' },
      { title: 'Input Component', href: '#component-documentation' },
      { title: 'Textarea Component', href: '#component-documentation' },
      { title: 'Direct Class Usage', href: '#class-documentation' },
    ],
  },

  {
    title: 'Examples',
    href: '#examples',
    children: [
      { title: 'Basic Usage', href: '#examples' },
      { title: 'Advanced Patterns', href: '#examples' },
      { title: 'Custom Styling', href: '#examples' },
    ],
  },
  {
    title: 'API Reference',
    href: '#api-reference',
    children: [
      { title: 'Hook API', href: '#api-reference' },
      { title: 'Component Props', href: '#api-reference' },
      { title: 'Class Methods', href: '#api-reference' },
    ],
  },
];

export default function DocsNavigation() {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    'Getting Started': true,
    'Usage Patterns': true,
  });

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <nav className="space-y-2">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Contents</h2>
      </div>

      {navigationItems.map((item) => (
        <div key={item.title}>
          {item.children ? (
            <div>
              <button
                onClick={() => toggleSection(item.title)}
                className="flex items-center justify-between w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span>{item.title}</span>
                {expandedSections[item.title] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              {expandedSections[item.title] && (
                <div className="ml-4 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              href={item.href}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
