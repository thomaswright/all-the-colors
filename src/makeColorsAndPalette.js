const makeColors = (
  {
    values,
    hues,
    shades,
    palette: palette_,
    isCycle = false,
    isAccentable = false,
    isUnaccentable = false
  }
) => {
  let colors = {};
  values.forEach((hueShades, i) => {
    hueShades.forEach((shadeValue, j) => {
      if (shades[j]) {
        colors[shadeValue] = {
          id: shadeValue,
          colorSpace: "hex",
          hex: shadeValue,
          rgba: null, // TODO
          hsl: null, // TODO
          palette: palette_,
          hue: hues[i],
          shade: shades[j],
          hueCycle: (
            isCycle ? values.map((hueShades, i) => hueShades[j]) : undefined
          ),
          shades: hueShades,
          isAccentable,
          isUnaccentable
        };
      }
    });
  });
  return colors;
};

const makePalette = ({ values, hues, shades }) => {
  let palette = {};
  values.forEach((hueShades, i) => {
    palette[hues[i]] = {};
    hueShades.forEach((shadeValue, j) => {
      if (shades[j]) {
        palette[hues[i]][shades[j]] = shadeValue;
      }
    });
  });
  return palette;
};

export { makeColors, makePalette };
