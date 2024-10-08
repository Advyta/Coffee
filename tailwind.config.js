const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: " oklch(13.35% 0.041 45.95)",
        "background-40": "oklch(13.35% 0.041 45.95 / 40%)",
        "detail-text-bg": "oklch(24% 0.004 286 / 60%)",
        "card-bg": "oklch(32% 0.041 45.95 / 40%)",
        "inactive-text": "oklch(80% 0.02 90)",
        "active-text": "oklch(95% 0.02 90)",
        "dark-text": "oklch(10% 0.05 270)",
        "cta-color": "oklch(56.5% 0.04 45.95)",
        "button-color": "oklch(80% 0.05 80)",
        placeholder: "oklch(80% 0.05 80 / 50%)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        //  'bg-one': "url('/src/assets/mike-kenneally-tNALoIZhqVM-unsplash.jpg')",
      },
      aspectRatio: {
        "bg-1": "16 / 9",
        "bg-2": "3 / 4",
      },
      height: {
        "1/15": "15%",
      },
      listStyleImage: {
        coffeeBean: 'url("/src/app/assets/coffee-bean.png")',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "oklch(80% 0.05 80)",
          secondary: "oklch(32% 0.041 45.95 / 40%)",
          accent: "oklch(65% 0.02 90)",
          neutral: "oklch(95% 0.02 90)",
        },
      },
    ],
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".page-title": {
          fontFamily: "lato",
          fontSize: "clamp(2.25rem, 3.101vw + 1.523rem, 4.5rem)",
          // lineHeight: '2.75rem',
          fontWeight: "400",
          fontStyle: "Italic",
        },
        ".heading-1": {
          fontFamily: "lato",
          fontSize: "clamp(2rem, 2.756vw + 1.354rem, 4rem)",
        },
        ".heading-2": {
          fontFamily: "lato",
          fontSize: "clamp(1.75rem, 2.498vw + 1.165rem, 3.563rem)",
        },
        ".heading-3": {
          fontFamily: "lato",
          fontSize: "clamp(1.5rem, 0.345vw + 1.419rem, 1.75rem)",
        },
        ".body-l": {
          fontFamily: "lato",
          fontSize: "clamp(1rem, 0.172vw + 0.96rem, 1.125rem)",
          letterSpacing: "0.01em",
        },
        ".body-m": {
          fontFamily: "lato",
          fontSize: "clamp(0.875rem, 0.172vw + 0.835rem, 1rem)",
          letterSpacing: "0.035em",
        },
        ".body-s": {
          fontFamily: "lato",
          fontSize: "clamp(0.75rem, 0.172vw + 0.71rem, 0.875rem)",
          letterSpacing: "0.048em",
        },
      });
    }),
    require("daisyui"),
  ],
};
