/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Scans all Vue, JS, and TypeScript files
  ],
  darkMode: "class", // Enables class-based dark mode support
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(232.69deg, #5A72EA 28.37%, #8468B1 95.18%)",
        "gradient-left-right": "linear-gradient(to right, #5A72EA, #8468B1)",
        "gradient-custom-dark":
          "linear-gradient(232.69deg, #2E2E2E 28.37%,rgb(1, 1, 1) 95.18%)",
        "gradient-left-right-dark":
          "linear-gradient(to right, #2E2E2E,rgb(1, 13, 37))",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.4s ease-in-out",
        "fade-in-right-to-left": "fadeRightToLeft 0.5s ease-in-out",
        "fade-in-left-to-right": "fadeLeftToRight 0.5s ease-in-out",
        "fade-scale": "fadeScale 0.3s ease-in-out",
      },
      keyframes: {
        fadeRightToLeft: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeLeftToRight: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(100%)" },
        },
        fadeScale: {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      colors: {
        primary: "#1E40AF",
        blue: "#5A72EA",
        dark: "#181818",
        "purple-light": "#D9DFFF",
        secondary: "#9333EA",
        "primary-dark": "#0F256E",
        "blue-dark": "#3B50C0",
        "dark-dark": "#121212",
        "secondary-dark": "#6D1CBF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        gradient: "0px 0px 0px #5A72EA, 0px 12px 0px #8468B1",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1460px",
      },
    },
  },
  plugins: [],
};
