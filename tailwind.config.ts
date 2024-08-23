import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import { omkalaTheme } from './themes/omkala';

const config = {
  darkMode: 'class',
  content: [
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        gray: {
          50: 'rgb(var(--color-gray-50))',
          100: 'rgb(var(--color-gray-100))',
          200: 'rgb(var(--color-gray-200))',
          300: 'rgb(var(--color-gray-300))',
          400: 'rgb(var(--color-gray-400))',
          500: 'rgb(var(--color-gray-500))',
          600: 'rgb(var(--color-gray-600))',
          700: 'rgb(var(--color-gray-700))',
          800: 'rgb(var(--color-gray-800))',
          900: 'rgb(var(--color-gray-900))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities, e }: { addUtilities: any; e: (className: string) => string }) {
      const newUtilities = {
        [`button.${e('bg-tertiary')}:hover`]: {
          backgroundColor: `rgb(var(--color-tertiary-400)) !important`,
        },
        [`button.${e('bg-warning')}:hover`]: {
          backgroundColor: `rgb(var(--color-warning-400)) !important`,
        },
        [`button.${e('bg-success')}`]: {
          color: `black !important`,
        },
        [`button.${e('bg-success')}:hover`]: {
          backgroundColor: `rgb(var(--color-success-400)) !important`,
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    forms,
    typography,
    animate,
    skeleton({
      themes: {
        preset: ['skeleton'],
        custom: [omkalaTheme],
      },
    }),
  ],
} satisfies Config;

export default config;
