/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0E14',
          900: '#0D1119',
          800: '#12161F',
          700: '#181D29',
          600: '#232838',
          500: '#2E3448',
        },
        mist: {
          100: '#E8EAF0',
          300: '#B4B9C9',
          500: '#8B92A5',
          700: '#5C6376',
        },
        signal: {
          indigo: '#6366F1',
          violet: '#A855F7',
          cyan: '#22D3EE',
          amber: '#F59E0B',
        },
        paper: {
          50: '#FAFAF9',
          100: '#F2F1EE',
          200: '#E4E2DC',
          800: '#242320',
          900: '#17160F',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(139,146,165,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,146,165,0.06) 1px, transparent 1px)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1.5deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(99,102,241,0.5)',
        'glow-cyan': '0 0 60px -15px rgba(34,211,238,0.4)',
        card: '0 4px 24px -4px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
