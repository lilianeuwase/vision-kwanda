// theme.js
import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      orange: {
        50: "#f9e0d9", // Lightest
        100: "#f1c1b5",
        200: "#e7a292",
        300: "#da8370",
        400: "#cb654f",
        500: "#BB4430", // Main primary color
        600: "#9a3a29",
        700: "#7a3022",
        800: "#5b261c",
        900: "#3e1d15", // Darkest
      },
      green: {
        50: "#c0ead7", // Lightest
        100: "#9fdfc3",
        200: "#7cd3b0",
        300: "#da8370",
        400: "#54c89d",
        500: "#09BC8A", // Main primary color
        600: "#189a72",
        700: "#1d795a",
        800: "#1c5a44",
        900: "#183d2f", // Darkest

      },
      black: {
        50: "#d6d5d5",
        100: "#aeadad",
        200: "#888686",
        300: "#646162",
        400: "#423f40",
        500: "#231f20", // Main dark color

      },
      yellow: {
        50: "#fff3db",
        100: "#ffe7b7",
        200: "#ffdc93",
        300: "#fcd16f",
        400: "#f7c647",
        500: "#f0bb00", // Main accent color
        600: "#c49910",
        700: "#9a7815",
        800: "#725916",
        900: "#4c3c13",
      },
      white: {
        10: "#ffffff",
        50: "#fffef7",
        100: "#fffcee",
        200: "#fff9e3",
        300: "#fff6d9",
        400: "#fff3cf",
        500: "#f3dfa2", // Main light color
        600: "#d1b67f",
        700: "#ae8e5d",
        800: "#8c664a",
        900: "#694c38",
      },
      background: {
        50: "#ffffff",
        100: "#fffdfc",
        200: "#fefaf9",
        300: "#fdf7f6",
        400: "#fcf4f3",
        500: "#efe6dd", // Main background color
        600: "#cdb8b1",
        700: "#ab8a85",
        800: "#895e59",
        900: "#69422d",
      },
      service: {
        500: "#C8F1EB",
        100: "#7ADBD2",
        200: "#FAD1D7",
        300: "#F7F0E8",
        400: "#D4D4D4",
      },
      black: {
     10: "#000000",
      },
    },
    fonts: {
      heading: `'Montserrat', sans-serif`,
      body: `'Montserrat', sans-serif`,
    },
  },
});
