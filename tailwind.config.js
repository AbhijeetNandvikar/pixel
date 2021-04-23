// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        postLg: "500px",
      }),
      width: (theme) => ({
        postLg: "500px",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
