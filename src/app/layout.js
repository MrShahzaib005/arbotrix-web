import "./globals.css";
import { Manrope, Montserrat } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://arbotrix.com'),
  title: {
    default: 'Arbotrix | Engineering Autonomous Systems',
    template: '%s | Arbotrix', 
  },
  description: 'Join the network. Arbotrix provides elite, task-based physical engineering courses in Applied Python, Connected Embedded Systems, and Autonomous Robotics.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Arbotrix | Next-Gen Hardware Engineering',
    description: 'Elite training in autonomous systems, robotics, and embedded IoT.',
    url: 'https://arbotrix.com',
    siteName: 'Arbotrix',
    images: [
      {
        url: '/images/arbotrix-og.jpg', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  // Replace G-XXXXXXXXXX with your actual GA4 Measurement ID
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${montserrat.variable} font-sans overflow-x-hidden antialiased bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white`}>
        {children}
        <Footer />
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}