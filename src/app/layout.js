import "./globals.css";
import { Manrope, Montserrat } from "next/font/google";
import Footer from "@/components/layout/Footer";

// The Body Font: Clean, legible, highly professional
const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope", // New CSS variable
  display: "swap",
});

// The Heading Font: Geometric, wide, industrial
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// This handles the Global SEO and OpenGraph configurations
export const metadata = {
  metadataBase: new URL('https://arbotrix.com'), // Your actual live domain
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
  return (
    <html lang="en" className="scroll-smooth">
      {/* 3. Inject manrope.variable instead of inter.variable */}
      <body className={`${manrope.variable} ${montserrat.variable} font-sans overflow-x-hidden antialiased bg-[#0B0D14] text-white`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}