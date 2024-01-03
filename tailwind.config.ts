import type { Config } from 'tailwindcss';

import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import animate from 'tailwindcss-animate';

import { skeleton } from '@skeletonlabs/tw-plugin';
import { baseTheme } from './themes/base';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: {
          background: `rgb(${baseTheme.properties['--color-surface-700']})`,
          foreground: `rgb(${baseTheme.properties['--color-surface-100']})`,
          primary: {
            DEFAULT: `rgb(${baseTheme.properties['--color-primary-50']})`,
            foreground: `rgb(${baseTheme.properties['--color-primary-700']})`,
          },
          secondary: {
            DEFAULT: `rgb(${baseTheme.properties['--color-secondary-700']})`,
            foreground: `rgb(${baseTheme.properties['--color-secondary-50']})`,
          },
          destructive: {
            DEFAULT: `rgb(${baseTheme.properties['--color-error-50']})`,
            foreground: `rgb(${baseTheme.properties['--color-error-600']})`,
          },
          muted: {
            DEFAULT: `rgb(${baseTheme.properties['--color-surface-600']})`,
            foreground: `rgb(${baseTheme.properties['--color-surface-100']})`,
          },
          accent: {
            DEFAULT: `rgb(${baseTheme.properties['--color-tertiary-200']})`,
            foreground: `rgb(${baseTheme.properties['--color-tertiary-700']})`,
          },
          popover: {
            DEFAULT: `rgb(${baseTheme.properties['--color-surface-700']})`,
            foreground: `rgb(${baseTheme.properties['--color-surface-50']})`,
          },
          card: {
            DEFAULT: `rgb(${baseTheme.properties['--color-surface-900']})`,
            foreground: `rgb(${baseTheme.properties['--color-surface-200']})`,
          },
          border: `rgb(${baseTheme.properties['--color-surface-700']})`,
          input: `rgb(${baseTheme.properties['--color-surface-700']})`,
          ring: `rgb(${baseTheme.properties['--color-surface-300']})`,
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: `rgb(${baseTheme.properties['--color-primary-500']})`,
          foreground: `rgb(${baseTheme.properties['--color-primary-50']})`,
        },
        secondary: {
          DEFAULT: `rgb(${baseTheme.properties['--color-secondary-500']})`,
          foreground: `rgb(${baseTheme.properties['--color-secondary-50']})`,
        },
        tertiary: {
          DEFAULT: `rgb(${baseTheme.properties['--color-tertiary-500']})`,
          foreground: `rgb(${baseTheme.properties['--color-tertiary-50']})`,
        },
        success: {
          DEFAULT: `rgb(${baseTheme.properties['--color-success-500']})`,
          foreground: `rgb(${baseTheme.properties['--color-success-50']})`,
        },
        warning: {
          DEFAULT: `rgb(${baseTheme.properties['--color-warning-500']})`,
          foreground: `rgb(${baseTheme.properties['--color-warning-50']})`,
        },
        destructive: {
          DEFAULT: `rgb(${baseTheme.properties['--color-error-500']})`,
          foreground: `rgb(${baseTheme.properties['--color-error-50']})`,
        },
        muted: {
          DEFAULT: `rgb(${baseTheme.properties['--color-surface-100']})`,
          foreground: `rgb(${baseTheme.properties['--color-surface-600']})`,
        },
        accent: {
          DEFAULT: `rgb(${baseTheme.properties['--color-tertiary-700']})`,
          foreground: `rgb(${baseTheme.properties['--color-tertiary-200']})`,
        },
        popover: {
          DEFAULT: `rgb(${baseTheme.properties['--color-surface-50']})`,
          foreground: `rgb(${baseTheme.properties['--color-surface-700']})`,
        },
        card: {
          DEFAULT: `rgb(${baseTheme.properties['--color-surface-200']})`,
          foreground: `rgb(${baseTheme.properties['--color-surface-900']})`,
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
  },
  plugins: [
    function ({
      addUtilities,
      e,
    }: {
      addUtilities: any;
      e: (className: string) => string;
    }) {
      const newUtilities = {
        [`button.${e('bg-primary')}:hover`]: {
          backgroundColor: `rgb(${baseTheme.properties['--color-primary-400']}) !important`,
        },
        [`button.${e('bg-secondary')}:hover`]: {
          backgroundColor: `rgb(${baseTheme.properties['--color-secondary-400']}) !important`,
        },
        [`button.${e('bg-destructive')}:hover`]: {
          backgroundColor: `rgb(${baseTheme.properties['--color-error-400']}) !important`,
        },
        [`button.${e('bg-tertiary')}:hover`]: {
          backgroundColor: `rgb(${baseTheme.properties['--color-tertiary-400']}) !important`,
        },
        [`button.${e('bg-warning')}:hover`]: {
          backgroundColor: `rgb(${baseTheme.properties['--color-warning-400']}) !important`,
        },
        [`button.${e('bg-success')}:hover`]: {
          backgroundColor: `rgb(${baseTheme.properties['--color-success-400']}) !important`,
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
        custom: [baseTheme],
      },
    }),
  ],
};
export default config;
