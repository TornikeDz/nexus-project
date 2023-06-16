/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'SfBd': ["SF Pro Bold"],
      'SfMd': ["SF Pro Medium"],
      'SfRg': ["SF Pro Regular"],
      'CrStd': ["Circular STD"]
    },
    extend: {
      
    },
  },
  plugins: [],
}
