// utils/getModelScale.js (renamed)
export default function getModelScale(label) {
    switch (label) {
      case "Coltan": return [0.5, 0.5, 0.5];
      case "Cassiterite": return [0.04, 0.04, 0.04];
      case "Wolfram": return [1, 1, 1];
      case "Amethyst": return [0.05, 0.05, 0.05];
      case "Sapphire": return [1.2, 1.2, 1.2];
      case "Tourmaline": return [5, 5, 5];
      case "Beryl": return [0.15, 0.15, 0.15];
      case "Gold": return [10, 10, 10];
      case "Lithium": return [0.4, 0.4, 0.4];
      case "Clays for Bricks": return [0.003, 0.003, 0.003];
      case "Sand": return [0.2, 0.75, 0.25];
      case "Gravel": return [1.3, 1.3, 1.3];
      case "Glass and Ceramics": return [6, 6, 6];
      case "Peat": return [0.01, 0.01, 0.01];
      case "Oil (Petroleum)": return [1.5, 1.5, 1.5];
      case "Methane Gas": return [1.5, 1.5, 1.5];
      default: return [1, 1, 1];
    }
  }