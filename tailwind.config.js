/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        surface: {
          primary: "var(--surface-primary)",
          secondary: "var(--surface-secondary)",
        },
        content: {
          primary: "var(--content-primary)",
          secondary: "var(--content-secondary)",
          tertiary: "var(--content-tertiary)",
        },
        border: {
          subtle: "var(--border-subtle)",
        },
      },
      letterSpacing: {
        tight: "-0.03em",
        label: "0.08em",
      },
    },
  },
  plugins: [],
};
