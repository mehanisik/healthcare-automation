import type { Metadata, Viewport } from 'next';
import { env } from '#/env';
import { cn } from '#/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { fontGeist, fontHeading, fontSans, fontUrban } from 'fonts';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import 'styles/globals.css';

const defaultUrl = env.BASE_URL ? `${env.BASE_URL}` : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: 'Girit Consulting',
    template: '%s | Girit Consulting',
  },
  description:
    'Girit Consulting is a healthcare management company that provides custom software solutions to businesses.',
  keywords: [
    'healthcare',
    'automation',
    'medical',
    'digital health',
    'healthcare technology',
    'medical automation',
    'healthcare management',
  ],
  authors: [{ name: 'Girit Consulting Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: defaultUrl,
    siteName: 'Girit Consulting',
    title: 'Girit Consulting',
    description:
      'Girit Consulting is a healthcare management company that provides custom software solutions to businesses.',
    images: [
      {
        url: 'https://giritconsulting.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Girit Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girit Consulting',
    description:
      'Girit Consulting is a healthcare management company that provides custom software solutions to businesses.',
    images: [`${defaultUrl}/twitter-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

type RootLayoutProps = {
  children: React.ReactNode;
};

/**
 * Defines the root layout for the Girit Consulting Next.js application, applying global metadata, theming, and essential providers.
 *
 * Wraps all page content with HTML structure, global styles, theme management, analytics, and notification components.
 *
 * @param children - The page content to render within the layout.
 * @returns The complete HTML structure for the application's root layout.
 */
export default function RootLayout({ children }: Readonly<RootLayoutProps>): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="application-name" content="Girit Consulting" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={cn(
          'bg-background min-h-screen font-sans text-foreground antialiased',
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable,
          fontGeist.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <Analytics />
          <SpeedInsights />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
