import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../styles/globals.css';
import { siteMetadata } from '@/constants/siteMetadata';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: {
    icon: siteMetadata.icon,
  },
  keywords: ['Nicholas Millett', 'Full Stack Developer', 'Web Developer', 'Portfolio', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Nicholas Millett', url: 'https://yourdomain.com' }],
  creator: 'Nicholas Millett',
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: 'https://yourdomain.com',
    siteName: 'Nicholas Millett',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nicholas Millett Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: '@yourTwitterHandle',
    images: ['/og-image.jpg'],
  },
  metadataBase: new URL('https://yourdomain.com'),
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 👇 This is the inline dark mode script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
