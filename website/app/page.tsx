import Link from 'next/link';
import {
  ArrowRight,
  Code,
  Zap,
  Languages,
  Shield,
  Cpu,
  Users,
  Github,
} from 'lucide-react';
import LiveDemo from '@/components/LiveDemo';
import CodeExample from '@/components/CodeExample';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Free & Open Source{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Indian Language
            </span>{' '}
            Typing Software
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A powerful, lightweight JS & React plugin for real-time Indian
            language transliteration. Type in English and get beautiful scripts
            in 23+ languages instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/#demo" className="btn-secondary">
              Try Live Demo
            </Link>
          </div>
        </div>

        {/* Quick Install */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-6 text-center">
            <p className="text-gray-400 text-sm mb-3">Install via npm</p>
            <code className="text-green-400 font-mono text-base">
              npm install @bhashaime/core
            </code>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for modern React apps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to add Indian language support to your React
              application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real-time
              </h3>
              <p className="text-gray-600 text-sm">
                Instant transliteration as you type. No delays, no loading
                states.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Languages className="text-purple-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multi-language
              </h3>
              <p className="text-gray-600 text-sm">
                Gujarati, Hindi, and more Indian languages with proper script
                support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                TypeScript
              </h3>
              <p className="text-gray-600 text-sm">
                Full TypeScript support with comprehensive type definitions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-orange-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tested
              </h3>
              <p className="text-gray-600 text-sm">
                137+ comprehensive tests ensuring reliability and accuracy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="text-red-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Lightweight
              </h3>
              <p className="text-gray-600 text-sm">
                Minimal bundle size with tree-shakable exports and no
                dependencies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Flexible
              </h3>
              <p className="text-gray-600 text-sm">
                Hook, components, or direct class usage. Choose what works for
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Free and Open-Source for Everyone
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              BhaSha IME is committed to breaking down language barriers. Our
              software is, and always will be, free and open-source.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Truly Free
              </h3>
              <p className="text-gray-600 text-sm">
                No hidden costs, no premium versions. Use it for personal or
                commercial projects without any fees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Github className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Open Source
              </h3>
              <p className="text-gray-600 text-sm">
                The code is publicly available on GitHub. We encourage you to
                contribute, inspect, and customize it to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section id="demo" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Try it yourself
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience real-time transliteration in action
            </p>
          </div>

          <LiveDemo />
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple to integrate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Just a few lines of code to get started
            </p>
          </div>

          <CodeExample />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to add Indian language support?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get started in minutes with our comprehensive documentation and
            examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Read Documentation</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="https://github.com/hironate/bhaShaIME"
              target="_blank"
              className="btn-secondary"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
