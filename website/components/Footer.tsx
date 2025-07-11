import Link from 'next/link';
import { Github, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">भ</span>
              </div>
              <span className="font-semibold text-gray-900">BhaSha IME</span>
            </div>
            <p className="text-sm text-gray-600 max-w-sm">
              Real-time Indian language transliteration for React applications.
              Type in English, get beautiful Indian scripts.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/#demo"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Live Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/docs#examples"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages & Keyboards */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Languages & Keyboards
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-gray-600">
                  English to Gujarati
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-600">English to Hindi</span>
              </li>
              <li>
                <span className="text-sm text-gray-600">Shruti Keyboard</span>
              </li>
              <li>
                <span className="text-sm text-gray-600">
                  Devanagari Keyboard
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-600">
                  Indian Language IME
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://github.com/hironate/bhaShaIME"
                  target="_blank"
                  className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.npmjs.com/package/@bhashaime/core"
                  target="_blank"
                  className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>npm Package</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/hironate/bhaShaIME/issues"
                  target="_blank"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Report Issues
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://github.com/hironate/bhaShaIME/discussions"
                  target="_blank"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Discussions
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/hironate/bhaShaIME/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contributing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="text-center">
            <p className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
              BhaSha IME supports English to Gujarati transliteration, English
              to Hindi typing, Devanagari script keyboard, Shruti keyboard
              layout, Indian language input method, online transliteration tool,
              phonetic typing, Unicode conversion, and regional language support
              for web applications and React components.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 BhaSha IME. Built with{' '}
            <Heart size={14} className="inline text-red-500" /> for the Indian
            language community.
          </p>
          <p className="text-sm text-gray-600 mt-4 md:mt-0">
            Open source under MIT License
          </p>
        </div>
      </div>
    </footer>
  );
}
