export const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: 3,
};

export const redButton = {
  width: "200px",
  height: "50px",
  fontSize: "15px",
  fontWeight: "600",
  textTransform: "none",
  gap: "5px",
};

export const generateShades = (num, startColor, endColor) => {
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

const smallPadding = ["opponent", "date", "time", "tv"];

export const getPaddingValue = (value) => {
  if (smallPadding.includes(value)) return "5px";
  return "18px";
};
