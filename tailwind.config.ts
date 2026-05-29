import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    // Breakpoints matched to Bootstrap 4 so responsiveness is identical.
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    // Container max-widths matched to Bootstrap 4 (.container), 15px gutters.
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
      },
    },
    extend: {
      colors: {
        navy: "#01173F",
        royal: "#0269BB",
        "dark-blue": "#013079",
        "light-gray": "#DFDFE1",
        "near-white": "#F9FCFD",
        "muted-gray": "#9F9B9D",
        maroon: "#1E0613",
        purple: "#6D4659",
      },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        heading: ["Oswald", "sans-serif"],
      },
      keyframes: {
        "sk-scaleout": {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1.0)", opacity: "0" },
        },
        "lc-bounce": {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-20px)" },
          "60%": { transform: "translateY(-10px)" },
        },
        "lc-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(37,211,102,0.55)" },
          "70%": { boxShadow: "0 0 0 18px rgba(37,211,102,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(37,211,102,0)" },
        },
        "slide-in": {
          from: { transform: "translateY(-30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "hero-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
            textShadow: "0 4px 24px rgba(0,0,0,0.35)",
          },
          "50%": {
            transform: "scale(1.03)",
            textShadow:
              "0 4px 24px rgba(0,0,0,0.35), 0 0 28px rgba(34,211,238,0.45)",
          },
        },
      },
      animation: {
        "sk-scaleout": "sk-scaleout 1s infinite ease-in-out",
        "lc-bounce": "lc-bounce 2s infinite",
        "lc-pulse": "lc-pulse 2.4s infinite",
        "slide-in": "slide-in 0.3s ease-out",
        "fade-in-up": "fade-in-up 0.3s ease-out",
        "hero-pulse": "hero-pulse 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
