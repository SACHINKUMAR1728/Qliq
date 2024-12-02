/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gaming-blue': '#00f6ff',
        'gaming-purple': '#9333ea',
        'dark-bg': '#0a0a0a',
        'card-bg': '#1a1a1a'
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}