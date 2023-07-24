module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      inter: ['Inter'],
    },
    extend: {
      boxShadow: {
        sm: '2px 2px 4px rgba(51, 103, 214, 0.04)',
      },
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        scaleUp: 'scaleUp .3s ease-out',
      },
      lineHeight: {
        xs: '14px',
        sm: '16px',
        base: '22px',
        lg: '24px',
        xl: '26px',
        '2xl': '28px',
        '3xl': '30px',
        '4xl': '46px',
        '5xl': '58px',
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '14px',
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
        '3xl': '24px',
      },
      backgroundImage: {
        'main-background': "url('/src/assets/images/main-background.png')",
      },
    },
  },
  plugins: [
    ({ addBase }) => {
      addBase({
        '.text-xs': {
          'line-height': '14px',
        },
        '.text-sm': {
          'line-height': '16px',
        },
        '.text-base': {
          'line-height': '22px',
        },
        '.text-lg': {
          'line-height': '24px',
        },
        '.text-xl': {
          'line-height': '26px',
        },
        '.text-2xl': {
          'line-height': '28px',
        },
        '.text-3xl': {
          'line-height': '30px',
        },
        '.text-5xl': {
          'line-height': '58px',
        },
      });
    },
  ],
  corePlugins: {
    preflight: false,
  },
};
