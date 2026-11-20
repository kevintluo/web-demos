// Shared Tailwind CDN theme: loaded right after cdn.tailwindcss.com on every page.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        harbour: { DEFAULT: '#12403f', dark: '#0b2b2a', light: '#e3ece9' },
        cream: '#f7f1e6',
        copper: { DEFAULT: '#9c5524', light: '#d9a273' }, // DEFAULT passes 4.5:1 with white text
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
