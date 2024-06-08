import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      md2: "769px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      // Existing breakpoints...
      "custom-below-1280": { max: "1280px" },
      "custom-below-1024": { max: "1024px" },
      "custom-below-425": { max: "425px" },
      "custom-below-768": { max: "768px" },
      "custom-below-375": { max: "375px" },
      "custom-below-320": { max: "320px" },
      "custom-below-325": { max: "325px" },
    },
    extend: {
      colors: {
        "my-grey": "rgb(102,102,102",
      },
      fontFamily: {
        LufgaMedium: ["Lufga Medium"],
        LufgaBlack: ["Lufga Black"],
        LufgaBold: ["Lufga Bold"],
        GraphikMedium: ["Graphik Medium"],
      },
    },
  },
  plugins: [],
};
export default config;
