import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-grey": "rgb(102,102,102",
      },
      fontFamily: {
        "LufgaMedium": ["Lufga Medium"],
        "LufgaBlack": ["Lufga Black"],
        "LufgaBold": ["Lufga Bold"],
      },
    },
  },
  plugins: [],
};
export default config;
