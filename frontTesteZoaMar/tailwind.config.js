/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://i.im.ge/2024/06/14/K874SF.imagem-2024-06-13-153411570.png')",
      },
      zIndex: {
        '999': '999',
        '-1': '-1'
      }
    },
  },
  plugins: [],
}