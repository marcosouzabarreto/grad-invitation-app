
/** @type {import('tailwindcss').Config} */
const config = {
  important: true,
  content: [
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#0E608E',
      'complementary': '#8E3B0E',
      'accent1': '#0EA4E6',
      'accent2': '#F2F2F2',
      'text': '#E0F4FD',
      'secondaryText': '#666666',
      'background': '#FFFFFF',
      'grey': '#D9D9D9',
      'black': '#000000'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      }
    },
  },
  plugins: [],
};
export default config;
