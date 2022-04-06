module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'primary': '#E25645',
      'secondary': '#1E1A21',
      'white': '#FFFFFF',
      'third': '#F1E9E5',
      'selected-text': '#A3A3FF',
      'theme': '#3F3FFF',
        'nav': '#404053',
        
        'input-border': '#565666',
        'input': '#2A2A35',
        'card': '##9E9E9E',
    },
    fontFamily: {
      
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
