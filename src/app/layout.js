import { Outfit, Forum } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body-custom',
  display: 'swap',
});

const forum = Forum({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading-custom',
  display: 'swap',
});

export const metadata = {
  title: 'Smart Awnings & Canopies | Premium Outdoor Shading',
  description: 'Design, supply and install premium outdoor shading and shelter systems for homes and commercial spaces across the UK.',
  keywords: 'awnings, canopies, retractable roofs, pergolas, bioclimatic louvres, UK, outdoor shading',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${forum.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
