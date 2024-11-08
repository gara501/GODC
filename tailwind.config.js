/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel-regular': ['Cinzel-Regular', 'sans-serif'],
        'cinzel-bold': ['Cinzel-Bold', 'sans-serif'],
        'cinzel-semibold': ['Cinzel-SemiBold', 'sans-serif'],
        'cinzel-black': ['Cinzel-Black', 'sans-serif'],
        'cinzel-medium': ['Cinzel-Medium', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/src/assets/img/bg.jpg')"
      },
      backgroundPosition: {
        'top-center': 'center top -5rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

