// utils/getModelScale.js (renamed)
export default function getModelScale(label) {
    switch (label) {
      case "Coltan": return [1, 1, 1];
      case "Cassiterite": return [0.08, 0.08, 0.08];
      case "Wolfram": return [2, 2, 2];
      case "Amethyst": return [0.08, 0.08, 0.08];
      case "Sapphire": return [2, 2, 2];
      case "Tourmaline": return [7, 7, 7];
      case "Beryl": return [0.25, 0.25, 0.25];
      case "Gold": return [20, 20, 20];
      case "Lithium": return [0.65, 0.65, 0.65];
      case "Clays for Bricks": return [0.003, 0.003, 0.003];
      case "Sand": return [0.2, 0.75, 0.25];
      case "Gravel": return [1.9, 1.9, 1.9];
      // case "Glass and Ceramics": return [6, 6, 6];
      case "Peat": return [0.015, 0.015, 0.015];
      case "Oil (Petroleum)": return [1.5, 1.5, 1.5];
      case "Methane Gas": return [1.9, 1.9, 1.9];
      default: return [1, 1, 1];
    }
  }