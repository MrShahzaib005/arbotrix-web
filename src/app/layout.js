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
      <body className={inter.className}>
        {/* Everything inside 'children' is your pages (Hero, Navbar, etc.) */}
        {children}
        
        {/* The Footer stays pinned at the bottom of the layout globally */}
        <Footer />
      </body>
    </html>
  );
}