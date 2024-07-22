/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Sen: 'Sen'
    },
    container: {
      center: true,
      padding: '4rem'
    },
    extend: {
      colors: {
        dark_primary: '#22063f',
        bg_light_primary: '#f8f4ff',
        gray: '#b7c5d3'
      },
      backgroundImage: {
        primaryLinear: 'linear-gradient(135deg, #bf8bec 0%, #ae95e2 100%)'
      },
      dropShadow: {
        primary: '-5px 35px 40px rgba(223, 229, 236, 0.9)'
      }
    }
  },
  plugins: []
}
