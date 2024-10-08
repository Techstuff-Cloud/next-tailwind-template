import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import { myCustomThemeFour, myCustomThemeOne, myCustomThemeThree, myCustomThemeTwo } from './themes/base';
import { muiTheme1 } from './themes/theme1';
import { muiTheme2 } from './themes/theme2';

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
        primary: {
          DEFAULT: `rgb(var(--color-primary-500))`,
          foreground: `rgb(var(--color-primary-50))`,
        },
        secondary: {
          DEFAULT: `rgb(var(--color-secondary-500))`,
          foreground: `rgb(var(--color-secondary-50))`,
        },
        tertiary: {
          DEFAULT: `rgb(var(--color-tertiary-500))`,
          foreground: `rgb(var(--color-tertiary-50))`,
        },
        success: {
          DEFAULT: `rgb(var(--color-success-500))`,
          foreground: `rgb(var(--color-success-50))`,
        },
        warning: {
          DEFAULT: `rgb(var(--color-warning-500))`,
          foreground: `rgb(var(--color-warning-50))`,
        },
        destructive: {
          DEFAULT: `rgb(var(--color-error-500))`,
          foreground: `rgb(var(--color-error-50))`,
        },
        muted: {
          DEFAULT: `rgb(var(--color-surface-100))`,
          foreground: `rgb(var(--color-surface-600))`,
        },
        accent: {
          DEFAULT: `rgb(var(--color-tertiary-500))`,
          foreground: `rgb(var(--color-tertiary-200))`,
        },
        popover: {
          DEFAULT: `rgb(var(--color-surface-50))`,
          foreground: `rgb(var(--color-surface-700))`,
        },
        card: {
          DEFAULT: `rgb(var(--color-surface-200))`,
          foreground: `rgb(var(--color-surface-900))`,
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
        custom: [myCustomThemeOne, myCustomThemeTwo, myCustomThemeThree, myCustomThemeFour, muiTheme1, muiTheme2],
      },
    }),
  ],
} satisfies Config;

export default config;
