/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0908',
        surface: '#14100F',
        'surface-muted': '#1A1514',
        maroon: '#800F2F',
        rose: '#FFCCD5',
        'rose-mid': '#F4A3B4',
        'text-primary': '#F5F1EC',
        'text-muted': '#9A9490',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderColor: {
        hairline: 'rgba(245,241,236,0.08)',
      },
      backgroundColor: {
        'glass': 'rgba(20,16,15,0.7)',
      },
      boxShadow: {
        'rose-glow': '0 8px 30px rgba(255,204,213,0.18)',
        'rose-glow-lg': '0 12px 40px rgba(255,204,213,0.25)',
        'maroon-glow': '0 0 60px rgba(128,15,47,0.35)',
        'maroon-glow-lg': '0 0 120px rgba(128,15,47,0.35)',
      },
      borderRadius: {
        'pill': '999px',
        'card': '16px',
        'banner': '24px',
      },
      maxWidth: {
        'container': '1280px',
      },
      backdropBlur: {
        'glass': '12px',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'particle': 'particle 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) scale(1)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
