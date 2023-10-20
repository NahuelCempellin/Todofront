/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      const layout = {
        ".bg": {
          background: "#efefef",
          color: "black",
          width: "100%",
          minHeight: "100vh",
        },
      };
      addComponents(layout);
    },
  ],
};
