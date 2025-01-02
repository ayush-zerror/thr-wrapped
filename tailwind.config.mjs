/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "600px" }, // Target devices between 500px and 639px
        md: { min: "601px", max: "767px" }, // Target devices between 640px and 767px
        lg: { min: "768px", max: "1023px" }, // Target devices between 768px and 1023px
        xl: { min: "1024px", max: "1279px" }, // Target devices between 1024px and 1279px
        xxl: { min: "1280px", max: "1535px" }, // Target devices between 1280px and 1535px
      },
    },
  },
  plugins: [],
};
