/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#C8A97E', // Warm gold
        secondary: '#1A1A1A', // Rich black
        accent: '#F4F0EA', // Warm light
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}