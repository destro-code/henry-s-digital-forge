import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Instrument Serif", "Georgia", "serif"],
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          raised: "hsl(var(--surface-raised))",
        },
        border: "hsl(var(--border))",
        muted: "hsl(var(--muted-foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        signal: "hsl(var(--signal))",
        destructive: "hsl(var(--destructive))",
      },
      borderRadius: {
        sm: "3px",
        md: "6px",
      },
      keyframes: {
        "status-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "status-pulse": "status-pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
