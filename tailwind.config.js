/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          '100': '#5D18F8',
          '200': '#4718D4',
          '300': '#7942f5' 
        },
        'secondary': {
          '100': '#22C55E',
          '200': '#03a63f',
          '300': '#4ddb81' 
        }
      },
      backgroundImage: {
        'login-pattern': "url('https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
