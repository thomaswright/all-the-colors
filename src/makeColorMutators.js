import constants from "./constants";
import R from "ramda";

/**
colorInfo = {
  id: color,
  colorSpace:
  hex:
  rgba:
  hsl:
  palette:
  hue:
  shade:
  hueCycle: []
  shades: []
  isAccent:
}
*/

const INC = "INC";
const DEC = "DEC";

const makeColorMutators = (colorDict, colorPalettes) => {

  const getColorInfo = color => colorDict[color];
  const getHue = color => getColorInfo(color).hue
  const getShade = color => getColorInfo(color).shade
  // // Maybe for later
  // const getPalette = color => getColorInfo(color).palette
  // const getColorInfo_ = color => {
  //   const colorInfo = getColorInfo(color)
  //   return {
  //     hue: colorInfo.hue,
  //     shade: colorInfo.shade,
  //     palette: colorInfo.palette,
  //   }
  // }
  const isLegible = (colorA, colorB) => {
    const colorAInfo = getColorInfo(colorA);
    const colorBInfo = getColorInfo(colorB);
    const colorAShade = colorAInfo.palette === constants.MATERIAL
      ? colorAInfo.shade / 10
      : colorAInfo

    const colorBShade = colorBInfo.palette === constants.MATERIAL
      ? colorBInfo.shade / 10
      : colorBInfo

    return Math.abs(colorAShade - colorBShade) >= 500
  }
  const changeShade = (color, steps_, op) => {
    const colorInfo = getColorInfo(color);
    const shadeIndex = R.findIndex(R.equals(color), colorInfo.shades);
    const steps = steps_ === undefined ? 1 : steps_;
    const newIndex_ = op === INC
      ? shadeIndex + steps
      : op === DEC ? shadeIndex - steps : shadeIndex;

    const shadeArrayTop = R.length(colorInfo.shades) - 1;
    const newIndex = newIndex_ < 0
      ? 0
      : newIndex_ > shadeArrayTop ? shadeArrayTop : newIndex_;

    if (colorInfo.shades && colorInfo.shades[newIndex]) {
      return colorInfo.shades[newIndex];
    } else {
      // TODO: maybe alert that color is not available
      return color;
    }
  };

  const getAccentShade = shade => {
    switch (shade) {
      case "50":
        return "A100";
      case "100":
        return "A100";
      case "200":
        return "A200";
      case "300":
        return "A200";
      case "400":
        return "A400";
      case "500":
        return "A400";
      case "600":
        return "A400";
      case "700":
        return "A700";
      case "800":
        return "A700";
      case "900":
        return "A700";
      default:
        return shade;
    }
  };

  const getUnaccentShade = shade => {
    switch (shade) {
      case "A100":
        return "100";
      case "A200":
        return "200";
      case "A400":
        return "400";
      case "A700":
        return "700";
      default:
        return shade;
    }
  };

  const darken = (color, steps) => {
    return changeShade(color, steps, INC);
  };

  const lighten = (color, steps) => {
    return changeShade(color, steps, DEC);
  };

  const accent = color => {
    const colorInfo = getColorInfo(color);
    if (colorInfo.palette === constants.MATERIAL && colorInfo.isAccentable) {
      return colorPalettes[colorInfo.palette][colorInfo.hue][
        getAccentShade(colorInfo.shade)
      ];
    } else {
      return color;
    }
  };

  const unaccent = color => {
    const colorInfo = getColorInfo(color);
    if (colorInfo.palette === constants.MATERIAL && colorInfo.isUnaccentable) {
      return colorPalettes[colorInfo.palette][colorInfo.hue][
        getUnaccentShade(colorInfo.shade)
      ];
    } else {
      return color;
    }
  };

  const getComplimentary = color => {
    const colorInfo = getColorInfo(color);
    if (colorInfo.hueCycle) {
      const halfOfHues = R.length(colorInfo.hueCycle) / 2;
      return shiftHue(color, halfOfHues);
    } else {
      return color;
    }
  };

  const shiftHue = (color, shift) => {
    const colorInfo = getColorInfo(color);
    if (colorInfo.hueCycle) {
      const hueIndex = R.findIndex(R.equals(color), colorInfo.hueCycle);

      if (hueIndex === -1) {
        return color;
      }
      const lastIndex = R.length(colorInfo.hueCycle);
      const newIndex = R.mathMod(hueIndex + shift, lastIndex);
      // console.log({ colorInfo, hueIndex, newIndex, shift});

      return colorInfo.hueCycle[newIndex];
    } else {
      return color;
    }
  };

  return {
    darken,
    lighten,
    accent,
    unaccent,
    getComplimentary,
    shiftHue,
    getHue,
    getShade,
    isLegible
  };
};

export default makeColorMutators;
