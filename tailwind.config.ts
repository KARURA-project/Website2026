import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - White & Red Theme
        'mars-red': '#E63946',      // Primary red accent
        'deep-red': '#D62828',      // Darker red for hover states
        'light-red': '#F1FAEE',     // Very light red/cream for subtle backgrounds
        'charcoal': '#1D3557',      // Dark text
        'slate-gray': '#457B9D',    // Secondary accent (colorblind-friendly)
        
        // Keep for backwards compatibility
        'neonblue': '#00D9FF',
        'bluewood': '#2C3E50',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config