import { makeColors, makePalette } from './makeColorsAndPalette'
import constants from './constants'
import R from 'ramda'

const shades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900'
]

const accentShades = [
  'A100',
  'A200',
  'A400',
  'A700'
]


const cycleHues = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
]

const cycleValues = [
  ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c',],
  ['#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f',],
  ['#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c',],
  ['#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#512da8', '#4527a0', '#311b92',],
  ['#e8eaf6', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e',],
  ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1',],
  ['#e1f5fe', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b',],
  ['#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064',],
  ['#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#004d40',],
  ['#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20',],
  ['#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e',],
  ['#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717',],
  ['#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17',],
  ['#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00',],
  ['#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100',],
  ['#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c',],
]

const accentValues = [
  ['#ff8a80', '#ff5252', '#ff1744', '#d50000',],
  ['#ff80ab', '#ff4081', '#f50057', '#c51162',],
  ['#ea80fc', '#e040fb', '#d500f9', '#aa00ff',],
  ['#b388ff', '#7c4dff', '#651fff', '#6200ea',],
  ['#8c9eff', '#536dfe', '#3d5afe', '#304ffe',],
  ['#82b1ff', '#448aff', '#2979ff', '#2962ff',],
  ['#80d8ff', '#40c4ff', '#00b0ff', '#0091ea',],
  ['#84ffff', '#18ffff', '#00e5ff', '#00b8d4',],
  ['#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5',],
  ['#b9f6ca', '#69f0ae', '#00e676', '#00c853',],
  ['#ccff90', '#b2ff59', '#76ff03', '#64dd17',],
  ['#f4ff81', '#eeff41', '#c6ff00', '#aeea00',],
  ['#ffff8d', '#ffff00', '#ffea00', '#ffd600',],
  ['#ffe57f', '#ffd740', '#ffc400', '#ffab00',],
  ['#ffd180', '#ffab40', '#ff9100', '#ff6d00',],
  ['#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00',],
]

const otherHues = [
  "brown",
  "blue-grey",
  "grey"
]

const otherValues = [
  ['#efebe9', '#d7ccc8', '#bcaaa4', '#a1887f', '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e', '#3e2723',],
  ['#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#455a64', '#37474f', '#263238',],
  ['#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121',],
]

const noShadePalette = {
  'black': '#000000',
  'white': '#ffffff',
  // 'transparent': 'rgba(0, 0, 0, 0)',
  // 'full-black': 'rgba(0, 0, 0, 1)',
  // 'dark-black': 'rgba(0, 0, 0, 0.87)',
  // 'light-black': 'rgba(0, 0, 0, 0.54)',
  // 'min-black': 'rgba(0, 0, 0, 0.26)',
  // 'faint-black': 'rgba(0, 0, 0, 0.12)',
  // 'full-white': 'rgba(255, 255, 255, 1)',
  // 'dark-white': 'rgba(255, 255, 255, 0.87)',
  // 'light-white': 'rgba(255, 255, 255, 0.54)',
}

////////////////////////////////////////////////////

const cycleColors = makeColors({
  values: cycleValues,
  hues: cycleHues,
  shades: shades,
  palette: constants.MATERIAL,
  isCycle: true,
  isAccentable: true,
})

const cyclePalette = makePalette({
  values: cycleValues,
  hues: cycleHues,
  shades: shades,
})

const accentCyleColors = makeColors({
  values: accentValues,
  hues: cycleHues,
  shades: accentShades,
  palette: constants.MATERIAL,
  isCycle: true,
  isUnaccentable: true,
})

const accentCyclePalette = makePalette({
  values: accentValues,
  hues: cycleHues,
  shades: accentShades,
})

const otherColors = makeColors({
  values: otherValues,
  hues: otherHues,
  shades: shades,
  palette: constants.MATERIAL,
})

const otherPalette = makePalette({
  values: otherValues,
  hues: otherHues,
  shades: shades,
})

const combinedCyclePalette = R.mapObjIndexed((shadeValues, hue) => {
  return {
    ...shadeValues,
    ...accentCyclePalette[hue]
  }
}, cyclePalette)

const palette = {
  ...combinedCyclePalette,
  ...otherPalette,
  ...noShadePalette
}

const colors = {
  ...cycleColors,
  ...accentCyleColors,
  ...otherColors,
}


export {
  colors,
  palette
}
