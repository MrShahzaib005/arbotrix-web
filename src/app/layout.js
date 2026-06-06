import "./globals.css";
// Adjust the font imports below if you are using something else (like Inter or Roboto)
import { Inter } from "next/font/google"; 
import Footer from "@/components/layout/Footer"; // Import the new footer

const inter = Inter({ subsets: ["latin"] });

// This handles the Global SEO and OpenGraph configurations
export const metadata = {
  metadataBase: new URL('https://arbotrix.com'), // Your actual live domain
  title: {
    default: 'Arbotrix | Engineering Autonomous Systems',
    template: '%s | Arbotrix', // Automatically appends the site name to child pages
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
        url: '/images/arbotrix-og.jpg', // Create a 1200x630 banner image for this
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 1. overflow-x-hidden: Kills horizontal scrolling and black voids permanently.
        2. antialiased: Makes the font render smoother and thinner.
        3. bg-[#0B0D14] text-white: Sets a reliable global baseline.
      */}
      <body className={`${inter.className} overflow-x-hidden antialiased bg-[#0B0D14] text-white`}>
        
        {children}
        
        <Footer />
      </body>
    </html>
  );
}