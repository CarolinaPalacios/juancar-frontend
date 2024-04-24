/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile-xs': { min: '0px', max: '400px' },
        'mobile-sm': { min: '400px', max: '540px' },
        'mobile-md': { min: '541px', max: '1000px' },
        'tablet-md': { min: '1001px', max: '1279px' },
        'desktop-lg': { min: '1280px' },
        'desktop-xl': { min: '1536px' },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
