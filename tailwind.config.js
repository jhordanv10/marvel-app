/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: {
          1: "#F0E6D2",
          2: "#C8AA6E",
          3: "#C89B3C",
          4: "#42331A",
          5: "#463714",
          6: "#32281E",
        },
        gray: {
          3: "#3C3C41",
          4: "#1E2328",
        },
        black: "#111111",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-link":
          "linear-gradient(0deg, #231f20 0%, rgba(34, 34, 34, 0) 100%)",
      },
      height: {
        header: "116px",
        afterHeader: "0.5px",
      },

      gradientColorStops: {
        "link-start": "#231F20",
        "link-end": "#222222",
      },
      rotate: {
        "-180": "-180deg",
      },
      minWidth: {
        100: "100px",
        120: "120px",
      },
      maxWidth: {
        header: "1312px",
        page: "1230px",
      },
    },
    screens: {
      xs: "480px", // Tamaño para pantallas extra pequeñas (móviles)
      sm: "640px", // Tamaño para pantallas pequeñas (móviles)
      md: "768px", // Tamaño para pantallas medianas (tabletas)
      lg: "1024px", // Tamaño para pantallas grandes (pequeños laptops y computadoras de escritorio)
      xl: "1280px", // Tamaño para pantallas extra grandes (laptops y computadoras de escritorio)
      // Agrega más tamaños de pantalla personalizados según tus necesidades
    },
  },
  plugins: [],
};
