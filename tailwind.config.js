/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F0F0F0",
        stark: "#121212",
        "bauhaus-red": "#D02020",
        "bauhaus-blue": "#1040C0",
        "bauhaus-yellow": "#F0C020",
        "bauhaus-yellow-light": "#FFF9C4",
        "bauhaus-muted": "#E0E0E0",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        "hard-sm": "3px 3px 0px 0px #121212",
        "hard": "4px 4px 0px 0px #121212",
        "hard-md": "6px 6px 0px 0px #121212",
        "hard-lg": "8px 8px 0px 0px #121212",
        "hard-xl": "12px 12px 0px 0px #121212",
        "hard-white": "4px 4px 0px 0px #ffffff",
        "hard-yellow": "4px 4px 0px 0px #F0C020",
        "hard-red": "4px 4px 0px 0px #D02020",
        "hard-blue": "4px 4px 0px 0px #1040C0",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
        8: "8px",
      }
    },
  },
  plugins: [],
}
