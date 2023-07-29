/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        aquaForest: {
          '50': '#f1f8f4',
          '100': '#dcefe2',
          '200': '#bcdec8',
          '300': '#90c5a6',
          '400': '#65a984',
          '500': '#3f8a64',
          '600': '#2e6d4f',
          '700': '#245840',
          '800': '#1f4634',
          '900': '#1a3a2b',
          '950': '#0e2019',
        },      
      },
    },
  },
  plugins: [],
}
