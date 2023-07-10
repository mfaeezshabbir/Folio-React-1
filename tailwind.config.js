/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pri: "var(--primary-color)",
        sec: "var(--secondary-color)",
        bg: "var(--background-color)",
        bg2: "var(--background2-color)",
        bg3: "var(--background3-color)",
        txt: "var(--text-color)",
        acc: "var(--accent-color)",
        bor: "var(--border-color)",
        hgh: "var(--highlight-color)",
      },
    },
  },

  plugins: [],
};
