// theme.js
import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      orange: {
        50: "#fce8e7", // Lightest
        100: "#f9c9c4",
        200: "#f4a3a0",
        300: "#ef7c7c",
        400: "#ea5658",
        500: "#BB4430", // Main primary color
        600: "#a83c2a",
        700: "#8a3121",
        800: "#6c2718",
        900: "#4f1d10", // Darkest
      },
      black: {
        50: "#e5e2e2",
        100: "#bfbcbc",
        200: "#999595",
        300: "#737070",
        400: "#4d4a4a",
        500: "#231f20", // Main dark color
        600: "#1f191a",
        700: "#1a1415",
        800: "#150f0f",
        900: "#100a0a",
      },
      yellow: {
        50: "#f0f9fa",
        100: "#c7ecee",
        200: "#a2e0e2",
        300: "#7ec4d6",
        400: "#59a8ca",
        500: "#7ebdc2", // Main accent color
        600: "#6ea9ae",
        700: "#5e959a",
        800: "#4e8086",
        900: "#3d6c72",
      },
      white: {
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
    },
    fonts: {
      heading: `'Montserrat', sans-serif`,
      body: `'Montserrat', sans-serif`,
    },
  },
});
