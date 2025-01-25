/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#040a42",
      },
      boxShadow: {
        "custom-white": "0px 0px 15px 7px rgba(108, 191, 255, 0.7)",
      },
      animation: {
        'animate-bg': 'animateBg 10s linear infinite',
        'pulse': 'pulse 2s linear infinite',
      },
      keyframes: {
        animateBg: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '80%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
  },
  plugins: [],
};
