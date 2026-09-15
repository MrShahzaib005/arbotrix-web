/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sets 'Inter' as the default for all normal text
        sans: ['var(--font-manrope)', 'sans-serif'],
        // Creates the 'font-heading' class for Montserrat
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
      // ADDED THE SCAN ANIMATION HERE
      keyframes: {
        scan: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(550px)' },
        }
      },
      animation: {
        scan: 'scan 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};