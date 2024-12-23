module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Content paths
  darkMode: 'class', // Dark mode
  theme: {
    extend: {
      animation: {
        rainbow: "rainbow var(--speed, 2s) infinite linear",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        wiggle: "wiggle 2s ease-in-out infinite", // Анимация покачивания
      },
      keyframes: {
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animationDelay: {
        100: "0.1s",
        300: "0.3s",
        500: "0.5s",
      },
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
      scrollbar: {
        hidden: {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none', // Firefox
        },
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.subtle-border': {
          backgroundColor: theme('colors.white'),
          border: '1px solid',
          borderColor: theme('colors.gray.200'),
          borderRadius: theme('borderRadius.2xl'),
          boxShadow: theme('boxShadow.custom'),
          transition: 'box-shadow 300ms ease',
          '&:hover': {
            boxShadow: theme('boxShadow.custom-hover'),
          },
        },
        '.overflow-hidden-x': {
          overflowX: 'hidden',
        },
      });
    },
  ],
};
