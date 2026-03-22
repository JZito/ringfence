import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#1a1d23",
          card: "#22262e",
          hover: "#2a2e38",
        },
        border: {
          DEFAULT: "#2e3340",
          bright: "#3d4250",
        },
        text: {
          primary: "#e2e5ea",
          muted: "#6b7280",
        },
        accent: {
          green: "#7db88f",
          yellow: "#c9a84c",
          blue: "#7b9ec4",
          red: "#ef4444",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
      boxShadow: {
        glow: "0 0 8px rgba(125, 184, 143, 0.15)",
        "glow-yellow": "0 0 8px rgba(201, 168, 76, 0.15)",
      },
      keyframes: {
        pulse_slow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        pulse_slow: "pulse_slow 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
