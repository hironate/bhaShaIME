import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bhashaime.hirenkavad.com'),
  title: 'BhaSha IME - Free & Open Source JS Plugin for Indian Language Typing',
  description:
    'Free and open-source JavaScript and React plugin to type in 23 Indian languages. BhaSha IME is a powerful tool for real-time transliteration, supporting languages like Gujarati, Hindi, and more.',
  keywords: [
    'react',
    'transliteration',
    'gujarati',
    'hindi',
    'indian languages',
    'ime',
    'input method',
    'typescript',
    'javascript',
    'js plugin',
    'react plugin',
    'typing software',
    'free typing software',
    'open source typing software',
    'indian language typing',
    '23 indian languages',
    'indic typing',
  ],
  authors: [{ name: 'BhaSha IME Team' }],
  creator: 'BhaSha IME Team',
  publisher: 'BhaSha IME',
  openGraph: {
    title:
      'BhaSha IME - Free & Open Source JS Plugin for Indian Language Typing',
    description:
      'A powerful React plugin for real-time Indian language transliteration with support for Gujarati, Hindi, and more.',
    url: 'https://bhashaime.dev',
    siteName: 'BhaSha IME',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'BhaSha IME - Free & Open Source JS Plugin for Indian Language Typing',
    description:
      'A powerful React plugin for real-time Indian language transliteration with support for Gujarati, Hindi, and more.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <meta
          name="google-site-verification"
          content="m-x-QdOdaJRPgnHhSThB5EI3Ik36CrZK7X_zc_A_vIc"
        />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/images/browserconfig.xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BhaSha IME" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="BhaSha IME" />
        <meta
          name="description"
          content="A powerful React plugin for real-time Indian language transliteration with support for Gujarati, Hindi, and more."
        />
        <meta name="background-color" content="#ffffff" />
        <meta name="display" content="standalone" />
        <meta name="scope" content="/" />
        <meta name="start_url" content="/" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
