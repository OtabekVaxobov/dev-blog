import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        'purple-dark': {
          colors: {
            background: '#180828', // or DEFAULT
            foreground: '#c084fc', // or 50 to 900 DEFAULT
            primary: {
              DEFAULT: '#180828',
              foreground: '#006FEE',
            },
          },
        },
        cyberpunk: {
          colors: {
            background: '#efc11a', // or DEFAULT
            foreground: '#18171c', // or 50 to 900 DEFAULT
            primary: {
              DEFAULT: '#efc11a',
              foreground: '#18171c',
            },
          },
        },
        light: {
          colors: {
            background: '#FFFFFF', // or DEFAULT
            foreground: '#11181C', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE',
            },
          },
        },
        dark: {
          colors: {
            background: '#000000', // or DEFAULT
            foreground: '#ECEDEE', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE',
            },
          },
        },
      },
    }),
  ],
};
export default config;
