/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { xs: "220px", md: "664px" },
      fontFamily: {
        kumbh: "Kumbh Sans",
      },
    },
    colors: {
      orange: "hsl(26, 100%, 55%)",
      paleorange: "hsl(25, 100%, 94%)",
      darkblue: " hsl(220, 13%, 13%)",
      darkgrayishblue: "hsl(219, 9%, 45%)",
      grayishblue: " hsl(220, 14%, 75%)",
      lightgrayishblue: " hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      blackopacity: "rgba(0, 0, 0, 0.750)",
    },
  },
  plugins: [],
};
