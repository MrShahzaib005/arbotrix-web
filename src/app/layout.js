import "./globals.css";
// Adjust the font imports below if you are using something else (like Inter or Roboto)
import { Inter } from "next/font/google"; 
import Footer from "@/components/layout/Footer"; // Import the new footer

const inter = Inter({ subsets: ["latin"] });

// This handles the Global SEO and OpenGraph configurations
export const metadata = {
  title: {
    template: '%s | Arbotrix Robotics',
    default: 'Arbotrix Robotics | Engineered Autonomy',
  },
  description: 'Custom robotics integration, autonomous platforms, and ROS2 engineering pipelines. We build hardware that works and software that scales.',
  openGraph: {
    title: 'Arbotrix Robotics',
    description: 'Precision engineering for industrial and commercial automation.',
    url: 'https://arbotrix.com',
    siteName: 'Arbotrix',
    images: [
      {
        url: '/og-image.jpg', // Sumaiya needs to place a cool 1200x630 image in the /public folder named og-image.jpg
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

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