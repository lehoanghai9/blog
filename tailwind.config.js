/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {  
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'Mono' : ['Fira Code', "monospace"]
      },
      backgroundImage: {
        'herobg': "url('assets/icons/bg/hherobg.svg')",
      },
    },
  },
  plugins: [],
}

