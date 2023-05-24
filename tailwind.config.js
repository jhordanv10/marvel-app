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
          2: "#5B5A56",
          3: "#3C3C41",
          4: "#1E2328",
        },
        black: "#111111",
        blue: "#1DA5B4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-link":
          "linear-gradient(0deg, #231f20 0%, rgba(34, 34, 34, 0) 100%)",
        "gradient-card":
          "linear-gradient(360deg, #090C14 0%, #171A20 36.49%, #272C34 114.84%)",
        "progress-bar":
          "linear-gradient(180deg, #31969D 0%, #65E6F4 31.77%, #24AEBD 66.15%, #1299A8 98.96%)",
      },
      height: {
        header: "116px",
        afterHeader: "0.5px",
      },

      gradientColorStops: {
        "link-start": "#231F20",
        "link-end": "#222222",
      },

      minWidth: {
        100: "100px",
        120: "120px",
      },
      maxWidth: {
        80: "80px",
        header: "1312px",
        page: "1432px",
      },
      minHeight: {
        45: "45px",
      },
      boxShadow: {
        linearBar:
          "0px 0px 4px #FFA942, 0px 0px 4px rgba(255, 169, 66, 0.25), 0px 0px 7px rgba(255, 169, 66, 0.25)",
        cardHover: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        link: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      letterSpacing: {
        2: "2px",
      },
      skew: {
        18: "-18deg",
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
