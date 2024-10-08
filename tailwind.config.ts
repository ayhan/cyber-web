import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          start: "hsl(var(--card-start))",
          end: "hsl(var(--card-end))",
        },
        percentage: {
          DEFAULT: "hsl(var(--card))",
          start: "hsl(var(--percentage-start))",
          end: "hsl(var(--percentage-end))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
        },
        critical: {
          red: "hsl(var(--critical-red))",
        },
        high: {
          orange: "hsl(var(--high-orange))",
        },
        medium: {
          yellow: "hsl(var(--medium-yellow))",
        },
        low: {
          gray: "hsl(var(--low-gray))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ridangerng: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        success: "0 2px 4px rgba(34, 197, 94, 0.6)",
        danger: "0 2px 4px rgba(239, 68, 68, 0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
