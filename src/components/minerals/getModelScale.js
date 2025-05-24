// utils/getModelScale.js (renamed)
export default function getModelScale(label) {
    switch (label) {
      case "Coltan": return [0.15, 0.15, 0.15];
      case "Cassiterite": return [0.08, 0.08, 0.08];
      case "Wolfram": return [2, 2, 2];
      case "Amethyst": return [16, 16, 16];
      case "Sapphire": return [1, 1, 1];
      case "Tourmaline": return [0.03, 0.03, 0.03];
      case "Beryl": return [1, 1, 1];
      case "Gold": return [15, 15, 15];
      case "Lithium": return [1, 1, 1];
      case "Clays for Bricks": return [1, 1, 1];
      case "Sand": return [0.2, 0.75, 0.25];
      case "Gravel": return [0.3, 0.3, 0.3];
      // case "Glass and Ceramics": return [6, 6, 6];
      case "Peat": return [0.015, 0.015, 0.015];
      case "Oil (Petroleum)": return [1.5, 1.5, 1.5];
      case "Methane Gas": return [1.9, 1.9, 1.9];
      default: return [1, 1, 1];
    }
  }