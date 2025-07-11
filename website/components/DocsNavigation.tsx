'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    title: 'Introduction',
    href: '/docs',
  },
  {
    title: 'Getting Started',
    href: '/docs#getting-started',
    children: [
      { title: 'Installation', href: '/docs#installation' },
      { title: 'Quick Start', href: '/docs#quick-start' },
    ],
  },
  {
    title: 'Hooks',
    href: '#',
    children: [
      { title: 'useBhaShaIME', href: '/docs/use-bhasha-ime' },
      {
        title: 'useDirectInputTransliteration',
        href: '/docs/use-direct-input-transliteration',
      },
    ],
  },
  {
    title: 'Components',
    href: '#',
    children: [
      { title: 'BhaShaInput', href: '/docs/bhashainput' },
      { title: 'BhaShaTextarea', href: '/docs/bhashatextarea' },
    ],
  },
  {
    title: 'Native',
    href: '#',
    children: [
      { title: 'BhaSha Class', href: '/docs/bhasha-engine' },
      { title: 'Injector Script', href: '/docs/injector' },
    ],
  },
];

export default function DocsNavigation() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    'Getting Started': true,
    Hooks: true,
    Components: true,
    Native: true,
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
                      className={`block py-1 text-sm transition-colors ${
                        pathname === child.href
                          ? 'text-blue-600 font-semibold'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
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
              className={`block py-2 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
