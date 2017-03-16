import { makeColors, makePalette } from "./makeColorsAndPalette";
import constants from "./constants";

const shades = ["20", "30", "40", "50", "60", "70", "80"];

const cycleHues = [
  "red",
  "magenta-red",
  "red-magenta",
  "magenta",
  "purple-magenta",
  "magenta-purple",
  "purple",
  "light-purple",
  "violet",
  "indigo",
  "deep-blue",
  "blue",
  "light-blue",
  "cyan",
  "teal-cyan",
  "teal",
  "teal-green",
  "green",
  "light-green",
  "lime",
  "yellow",
  "amber",
  "yellow-orange",
  "orange",
  "orange-red"
];

const cycleValues = [
  ["#FFC0C0", "#FF8C8C", "#FF6767", "#FF4343", "#D13438", "#A4262C", "#761721"],
  ["#F4ABBA", "#E6808A", "#E74856", "#E81123", "#C50F1F", "#A80000", "#750B1C"],
  ["#EDBED3", "#ed7eac", "#EE3F86", "#EA005E", "#C30052", "#970044", "#6B0036"],
  ["#E8A3DE", "#e66fc2", "#E43BA6", "#E3008C", "#BF0077", "#9B0062", "#77004D"],
  ["#DE94E0", "#d066c9", "#C239B3", "#B4009E", "#9A0089", "#800074", "#5C005C"],
  ["#DEA2ED", "#c774d7", "#B146C2", "#881798", "#721481", "#5C126B", "#460F54"],
  ["#CFC4F5", "#ab94d6", "#8764B8", "#744DA9", "#5C2E91", "#4E257F", "#401B6C"],
  ["#C3C3F4", "#afa6ee", "#9C89E9", "#886CE4", "#735BC1", "#5E4A9D", "#49397A"],
  ["#B5B5E2", "#9c96e0", "#8378DE", "#7160E8", "#5A4EBC", "#49409A", "#373277"],
  ["#BEBEE5", "#9493dd", "#6B69D6", "#4F4BD9", "#413EB3", "#32318C", "#242466"],
  ["#A6BDFF", "#7C96F9", "#4F6BED", "#2849EC", "#203DBD", "#19318D", "#11255E"],
  ["#ABC9ED", "#7BA7FF", "#3B78FF", "#0046FF", "#0037DA", "#0027B4", "#00188F"],
  ["#B3DBF2", "#83BEEC", "#3A96DD", "#0078D7", "#0063B1", "#004E8C", "#003966"],
  ["#99ECFF", "#69EAFF", "#31D2F7", "#00BCF2", "#0099BC", "#006F94", "#005B70"],
  ["#91E5DF", "#61D6D6", "#30C6CC", "#00B7C3", "#009CA4", "#038387", "#006666"],
  ["#C2F2E9", "#81E6D3", "#41DABC", "#00CEA6", "#00B294", "#008272", "#005E50"],
  ["#A8E5C2", "#70DDA5", "#38D487", "#00CC6A", "#00AE56", "#10893E", "#00722E"],
  ["#AAE5AA", "#79DB75", "#47D041", "#16C60C", "#13A10E", "#107C10", "#0B6A0B"],
  ["#D5E5AE", "#B7DF74", "#9AD93A", "#7CD300", "#6BB700", "#599B00", "#498205"],
  ["#F8FFB3", "#E4F577", "#D1EC3C", "#BAD80A", "#A4CF0C", "#8CBD18", "#73AA24"],
  ["#F9F1A5", "#FAEC6E", "#FFF100", "#FCE100", "#DFBE00", "#C19C00", "#986F0B"],
  ["#FFE5B6", "#FFD679", "#FFC83D", "#FFB900", "#EAA300", "#D48C00", "#AB620D"],
  ["#FFDABB", "#FFC988", "#FFAA44", "#FF8C00", "#D47300", "#B05E0D", "#7F4200"],
  ["#F2D5C9", "#F7B189", "#F7894A", "#F7630C", "#CA5010", "#A74109", "#7F2F08"],
  ["#EEC7C2", "#EE9889", "#EF6950", "#F03A17", "#DA3B01", "#A52613", "#7F1D10"]
];

const otherHues = ["brown", "green-gray", "slate", "warm-gray", "gray"];

const otherValues = [
  ["#F7D7C4", "#D8B094", "#BB9167", "#AC744C", "#8E562E", "#603D30", "#4D291C"],
  ["#CAE0D9", "#A3BFB7", "#7D9D95", "#567C73", "#486860", "#3B534D", "#2D3F3A"],
  ["#BAC8CC", "#A0AEB2", "#859599", "#69797E", "#5A686C", "#4A5459", "#394146"],
  ["#CBC6C4", "#B1ADAB", "#989391", "#7A7574", "#6E6A68", "#5D5A58", "#4C4A48"],
  ["#F2F2F2", "#E6E6E6", "#CCCCCC", "#767676", "#393939", "#2B2B2B", "#1F1F1F"]
];

////////////////////////////////////////////////////

const noShadePalette = {
  black: "#000000",
  white: "#FFFFFF"
};

const cycleColors = makeColors({
  values: cycleValues,
  hues: cycleHues,
  shades: shades,
  palette: constants.UNIVERSAL,
  isCycle: true
});

const cyclePalette = makePalette({
  values: cycleValues,
  hues: cycleHues,
  shades: shades
});

const otherColors = makeColors({
  values: otherValues,
  hues: otherHues,
  shades: shades,
  palette: constants.UNIVERSAL
});

const otherPalette = makePalette({
  values: otherValues,
  hues: otherHues,
  shades: shades
});

const palette = {
  ...cyclePalette,
  ...otherPalette,
  ...noShadePalette
};

const colors = {
  ...cycleColors,
  ...otherColors
};

export { colors, palette };
