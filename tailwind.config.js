/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          950: "#090A0A", // Deep charcoal black
          900: "#121311", // Elevated surface black
          800: "#1E201C", // Secondary card surface
          700: "#2D302A", // Dark border/divider
          500: "#82796C", // Natural stone grey
        },
        ivory: {
          DEFAULT: "#F4F0E7", // Warm ivory primary
          muted: "#D8D2C5",   // Muted ivory
          dark: "#B8B2A5",    // Dark ivory
        },
        bronze: {
          DEFAULT: "#A8782C", // Muted bronze
          light: "#C09A5A",   // Gold accent
          dark: "#7A571E",
        },
        pine: {
          DEFAULT: "#1D2923", // Dark wood brown / pine green
          dark: "#121C17",
        },
        mist: {
          DEFAULT: "#B8C5CC", // Mountain mist blue
          dark: "#798A94",
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      }
    },
  },
  plugins: [],
};
