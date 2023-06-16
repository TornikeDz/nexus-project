/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      'SfBd': ["SF Pro Bold"],
      'SfMd': ["SF Pro Medium"],
      'SfRg': ["SF Pro Regular"],
      'CrStd': ["Circular STD"]
    },
    extend: {
      colors: {
        'white': "#FFFFFF",
        'light': "#E8E6EC",

        'purple-light': {
          100: "#F2EFFE",
          300: "#D7CFFD",
          400: "#A39CB5",
          700: "#5F517D"
        },
        'violet': {
          'soft': "#9D71FD",
          'dark': "#543E81",
          'darkest': "#1A0745"
        },

      }
    },
  },
  plugins: [],
}
