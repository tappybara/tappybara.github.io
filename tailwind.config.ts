import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      sans: ['NATS', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        slate: '#EEEEEE'
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0%' }
        }
      },
      animation: {
        blink: 'blink 1.2s linear infinite'
      }
    }
  },
  plugins: []
};
export default config;
