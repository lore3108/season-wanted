import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2f8',
          100: '#fce7f3',
          500: '#e8336d',
          600: '#d92d63',
          700: '#bb2255',
        },
        ink: '#17163a',
        panel: '#f6f5fb',
      },
      boxShadow: {
        soft: '0 20px 45px -25px rgba(23, 22, 58, 0.4)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
