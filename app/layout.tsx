import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'components/theme-provider';
import { fontGeist, fontHeading, fontSans, fontUrban } from 'fonts';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://giritconsulting.com'),
  title: {
    default: 'Girit Consulting',
    template: '%s | Girit Consulting',
  },
  description:
    'Girit Consulting is a software development company that provides custom software solutions to businesses.',
  keywords: [
    'healthcare',
    'automation',
    'medical',
    'digital health',
    'healthcare technology',
    'medical automation',
  ],
  authors: [{ name: 'Girit Consulting Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://giritconsulting.com',
    siteName: 'Girit Consulting',
    title: 'Girit Consulting',
    description:
      'Girit Consulting is a software development company that provides custom software solutions to businesses.',
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
      'Girit Consulting is a software development company that provides custom software solutions to businesses.',
    images: ['https://giritconsulting.com/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
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
          'bg-background min-h-screen font-sans text-[#003a43] dark:text-white antialiased',
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
