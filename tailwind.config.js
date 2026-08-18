/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        page: '#F6F3F3',
        surface: '#ECEAEA',
        ink: {
          DEFAULT: '#343030',
          muted: '#555555',
          subtle: '#A0A0A0',
          placeholder: '#9F9F9F'
        },
        line: {
          DEFAULT: '#E1E1E1',
          soft: '#E7E7E7',
          strong: '#B5B5B5'
        },
        brand: {
          DEFAULT: '#403432',
          hover: '#776763',
          disabled: '#C1B4B1',
          cart: '#5B3A32',
          fg: '#F4F6F9'
        }
      },
      fontFamily: {
        sans: ['Merriweather', 'Georgia', 'Times New Roman', 'serif']
      },
      fontSize: {
        h1: ['24px', { lineHeight: '36px', fontWeight: '700' }],
        h2: ['18px', { lineHeight: '27px', fontWeight: '400' }],
        h3: ['16px', { lineHeight: '24px', fontWeight: '700' }],
        h4: ['14px', { lineHeight: '21px', fontWeight: '700' }],
        h5: ['14px', { lineHeight: '21px', fontWeight: '400' }],
        h6: ['14px', { lineHeight: '21px', fontWeight: '300' }]
      },
      maxWidth: {
        container: '1280px'
      },
      spacing: {
        header: '96px'
      }
    }
  },
  plugins: []
}
