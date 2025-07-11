import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '32x32' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      {
        url: '/favicon/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        url: '/favicon/favicon.svg',
        color: '#3b82f6',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/favicon/favicon.svg',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
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
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BhaSha IME" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="BhaSha IME" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
