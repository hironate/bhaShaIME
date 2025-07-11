import Link from 'next/link';
import {
  ArrowRight,
  Package,
  Code2,
  Book,
  Zap,
  ChevronsRight,
} from 'lucide-react';
import DocsNavigation from '@/components/DocsNavigation';
import InstallationGuide from '@/components/docs/InstallationGuide';
import QuickStartGuide from '@/components/docs/QuickStartGuide';

export const metadata = {
  title: 'Documentation - BhaSha IME',
  description:
    'Complete documentation for BhaSha IME React transliteration plugin including hooks, components, and API reference.',
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Sidebar Navigation */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-20 pt-8">
              <DocsNavigation />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 lg:pl-8">
            <div className="py-8">
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Documentation
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Learn how to integrate BhaSha IME into your React
                  applications, or use it standalone in any HTML page.
                </p>
              </div>

              {/* Quick Links to Usage Patterns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <Link href="/docs/use-bhasha-ime" className="group h-full">
                  <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors h-full flex flex-col min-h-[140px]">
                    <Zap className="text-green-600 mb-3" size={24} />
                    <h3 className="font-semibold text-gray-900 mb-2">
                      React Hooks
                    </h3>
                    <p className="text-sm text-gray-600 flex-grow">
                      Flexible integration with `useBhaShaIME` and
                      `useDirectInputTransliteration`.
                    </p>
                  </div>
                </Link>
                <Link href="/docs/bhashainput" className="group h-full">
                  <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors h-full flex flex-col min-h-[140px]">
                    <Package className="text-blue-600 mb-3" size={24} />
                    <h3 className="font-semibold text-gray-900 mb-2">
                      React Components
                    </h3>
                    <p className="text-sm text-gray-600 flex-grow">
                      Ready-to-use `BhaShaInput` and `BhaShaTextarea`
                      components.
                    </p>
                  </div>
                </Link>
                <Link href="/docs/injector" className="group h-full">
                  <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors h-full flex flex-col min-h-[140px]">
                    <Code2 className="text-orange-600 mb-3" size={24} />
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Injector Script
                    </h3>
                    <p className="text-sm text-gray-600 flex-grow">
                      Use in any HTML page without a framework.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Documentation Sections */}
              <div className="space-y-16">
                <section id="installation">
                  <InstallationGuide />
                </section>

                <section id="quick-start">
                  <QuickStartGuide />
                </section>
              </div>

              {/* Footer Navigation */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex justify-between">
                  <Link
                    href="/"
                    className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
                  >
                    <span>← Back to Home</span>
                  </Link>
                  <Link
                    href="https://github.com/hironate/bhaShaIME"
                    target="_blank"
                    className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
                  >
                    <span>View on GitHub</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
