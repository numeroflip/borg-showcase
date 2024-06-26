const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          200: "#CCF3E8",
          450: "#13E5BF",
          DEFAULT: "#01C38D",
        },
        petrol: {
          300: "#8F96A180",
          700: "#364053",
          750: "#30353E",
          800: "#191E29",
        },
        purple: {
          450: "#AD95FF",
          500: "#7869FF",
        },
        blue: {
          400: "#7ABCFF",
          500: "#2D95FF",
        },
      },
    },
  },
  plugins: [],
} as const;
export default config;
