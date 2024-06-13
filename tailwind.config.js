import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        right:
          "4px 0 6px -1px rgba(0, 0, 0, 0.5), 2px 0 4px -2px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
