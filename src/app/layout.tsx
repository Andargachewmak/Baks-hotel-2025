// app/layout.tsx

import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { ThemeProvider } from 'next-themes';
import ScrollToTop from '@/components/ScrollToTop';
import SEOProvider from './SEOProvider';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Baks Hotel',
  description:
    'Stay Your Way at Baks Hotel - Your Premier Destination for Comfort and Luxury',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
          <SEOProvider /> {/* ✅ Inject SEO config globally */}
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
