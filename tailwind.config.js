module.exports = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(172, 67%, 45%)",
        verydarkcyan: "hsl(183, 100%, 15%)",
        darkgraycyan1: "hsl(186, 14%, 43%)",
        darkgraycyan2: "hsl(184, 14%, 56%)",
        lightgraycyan: "hsl(189, 41%, 97%)",
      },
    },
  },
  plugins: [],
};
