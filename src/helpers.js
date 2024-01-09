export const generateShades = (num, startColor, endColor) => {
  //   let hex = color.replace("#", "");
  //   let r = parseInt(hex.substring(0, 2), 16);
  //   let g = parseInt(hex.substring(2, 4), 16);
  //   let b = parseInt(hex.substring(4, 6), 16);

  //   let shadesArray = [];

  //   // Calculate step size for interpolation
  //   let step = 1 / (numShades - 1);

  //   // Generate shades
  //   for (let i = 0; i < numShades; i++) {
  //     let shadeR = Math.round((1 - step * i) * 255 + step * i * r);
  //     let shadeG = Math.round((1 - step * i) * 255 + step * i * g);
  //     let shadeB = Math.round((1 - step * i) * 255 + step * i * b);

  //     let shadeHex = ((shadeR << 16) | (shadeG << 8) | shadeB)
  //       .toString(16)
  //       .padStart(6, "0");
  //     shadesArray.push(`#${shadeHex}`);
  //   }
  //   shadesArray.shift();

  //   return shadesArray;

  function hexToRgb(hex) {
    return [
      parseInt(hex.substring(1, 3), 16),
      parseInt(hex.substring(3, 5), 16),
      parseInt(hex.substring(5, 7), 16),
    ];
  }

  function rgbToHex(rgb) {
    return `#${rgb.map((val) => val.toString(16).padStart(2, "0")).join("")}`;
  }

  const startRGB = hexToRgb(startColor);
  const endRGB = hexToRgb(endColor);

  const colorRange = [];
  const step = 1 / (num - 1);

  for (let i = 0; i < num; i++) {
    const r = Math.round(startRGB[0] * (1 - step * i) + endRGB[0] * step * i);
    const g = Math.round(startRGB[1] * (1 - step * i) + endRGB[1] * step * i);
    const b = Math.round(startRGB[2] * (1 - step * i) + endRGB[2] * step * i);

    colorRange.push(rgbToHex([r, g, b]));
  }

  return colorRange;
};
