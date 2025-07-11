import ClassDocumentation from '@/components/docs/ClassDocumentation';
import DocsNavigation from '@/components/DocsNavigation';

export const metadata = {
  title: 'BhaSha Class - BhaSha IME Documentation',
  description:
    'Documentation for the BhaSha class in BhaSha IME, for advanced and non-React usage.',
};

export default function BhaShaEnginePage() {
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
              <div className="mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  BhaSha Class
                </h1>
              </div>
              <ClassDocumentation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
