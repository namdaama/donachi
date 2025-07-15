/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 技術仕様書に合わせた配色
        'primary-color': '#2c5aa0',      // メインブルー
        'secondary-color': '#f4a261',     // アクセントオレンジ
        // 既存の色も残す
        'deep-blue': '#1a237e',
        'space-blue': '#0d47a1',
        'light-blue': '#1976d2',
        'accent-orange': '#ff6f00',
        'accent-green': '#00c853',
        'text-dark': '#263238',
        'text-gray': '#546e7a',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}