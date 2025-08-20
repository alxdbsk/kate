/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '150%', letterSpacing: '0%' }],
        'h2': ['32px', { lineHeight: '150%', letterSpacing: '0%' }],
        'h3': ['28px', { lineHeight: '150%', letterSpacing: '0%' }],
        'p1': ['24px', { lineHeight: '150%', letterSpacing: '0%' }],
        'p2': ['18px', { lineHeight: '150%', letterSpacing: '0%' }],
        'p3': ['16px', { lineHeight: '150%', letterSpacing: '0%' }],
        'caption': ['12px', { lineHeight: '150%', letterSpacing: '0%' }],
      },
      colors: {
        white: '#FFFFFF',
        grey: {
          75: '#FDFDFD',
          100: '#F8F8F8',
          200: '#E6E6E6',
          300: '#D5D5D5',
          400: '#B1B1B1',
          500: '#909090',
          600: '#6D6D6D',
          700: '#464646',
          800: '#222222',
          900: '#1E1E1E',
        },
        blue: {
          50: '#EBEDFA',
          100: '#C7CDF0',
          200: '#AA4EE5',
          300: '#8290D9',
          400: '#6073CD',
          500: '#4057BF',
          600: '#37499A',
          700: '#2D3877',
          800: '#222854',
          900: '#151B33',
          950: '#080A12',
        },
        text: {
          primary: '#1E1E1E',
          secondary: '#464646',
        },
        surface: {
          white: '#FFFFFF',
          primary: '#F8F8F8',
          secondary: '#EBEDFA',
        },
        stroke: {
          secondary: '#E6E6E6',
          primary: '#B1B1B1',
          brand: '#909090',
        },
        icon: '#C7CDF0',
        'tile-background': '#C7CDF0',
        rainbow: {
          purple: '#6147FF',
          violet: '#3D1DFF',
          pink: '#D451FF',
          coral: '#EC458D',
          orange: '#FFCA8B',
        },
      },
    },
  },
  plugins: [],
}

