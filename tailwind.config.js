module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {

    screens : {
      'mobile': '300px',
      'sd': '600px',
      'lg': '800px',
      'xl':'1200px'
    },

    colors: {
      'primary' : '#6A518A',
      'auth-primary': '#573B79',
      'white': '#fff',
      'auth-submit': '#304FC2',
      'gray': '#7E7D7D',
      'red-error': '#E12E2E',
      'secundary' : '#F19D00',
      'link': '#0D69DE',
      'gray-text' : '#EBEBEB',
      'border-line' : '#E5E5E5', 
      'transparent' : 'rgba(0,0,0,0.2)',
      'green-user' : '#0FB45A',
      'blue-bar' : '#0079BF'
    },
    fontFamily:{
      'ubuntu' : ['Ubuntu', 'sans-serif'],
      'inter' : ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}