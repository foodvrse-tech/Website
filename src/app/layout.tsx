import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: 'FoodVrse Ventures',
  description: 'Building the Future of Food across Africa.',
  icons: {
    icon: 'https://i.postimg.cc/TY3PLwYV/LOGO-M.png',
    shortcut: 'https://i.postimg.cc/TY3PLwYV/LOGO-M.png',
    apple: 'https://i.postimg.cc/TY3PLwYV/LOGO-M.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Literata:opsz,wght@7..72,400;7..72,600;7..72,700&family=Poppins:wght@800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
