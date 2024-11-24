import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "geist-sans": ["var(--font-geist-sans)"],
        "geist-mono": ["var(--font-geist-mono)"],
      },
      boxShadow: {
        testimonial:
          "0 1.85px 3.15px rgba(0,0,0,0.005), 0 8.15px 6.52px rgba(0,0,0,0.008), 0 20px 13px rgba(0,0,0,0.01), 0 38.52px 25.48px rgba(0,0,0,0.012), 0 64.81px 46.85px rgba(0,0,0,0.015), 0 100px 80px rgba(0,0,0,0.02)",
      },
    },
  },
  plugins: [],
};

export default config;
