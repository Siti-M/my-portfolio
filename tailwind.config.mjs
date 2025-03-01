/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#ebe1d7',
        darkHover: '#2a004a',
        darkTheme: '#11001f',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        SpaceGrotesk: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow:{
        'brown' : '3px 3px 0 #776B5D',
        'white' : '3px 3px 0 #fff',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
