import { makeColors, makePalette } from './makeColorsAndPalette'
import constants from './constants'
import R from 'ramda'

const shades = [
  '1',
  '10',
  '20',
  '30',
  '40',
  '50',
  '60',
  '70',
  '80',
  '90',
]

const cycleHues = [
  'red',
  'magenta',
  'purple',
  'violet',
  'indigo',
  'ultramarine',
  'blue',
  'cerulean',
  'aqua',
  'teal',
  'green',
  'lime',
  'yellow',
  'gold',
  'orange',
  'peach',

]

const cycleValues = [
  ['#f7e6e6','#fccec7','#ffaa9d','#ff806c','#ff5c49','#e62325','#aa231f','#83231e','#5c1f1b','#3e1d1b',],
  ['#f5e7eb','#f5cedb','#f7aac3','#f87eac','#ff509e','#dc267f','#a91560','#831b4c','#5d1a38','#401a29',],
  ['#f7e4fb','#efcef3','#e4adea','#d68adf','#cb71d7','#c22dd5','#9320a2','#71237c','#501e58','#3b1a40',],
  ['#ece8f5','#e2d2f4','#d2b5f0','#bf93eb','#b07ce8','#9753e1','#7732bb','#602797','#44216a','#321c4c',],
  ['#e9e8ff','#dcd4f7','#c7b6f7','#ae97f4','#9b82f3','#785ef0','#5a3ec8','#473793','#352969','#272149',],
  ['#e7e9f7','#d1d7f4','#b0bef3','#89a2f6','#648fff','#3c6df0','#3151b7','#2e3f8f','#252e6a','#20214f',],
  ['#e1ebf7','#c8daf4','#a8c0f3','#79a6f6','#5392ff','#2d74da','#1f57a4','#25467a','#1d3458','#19273c',],
  ['#deedf7','#c2dbf4','#95c4f3','#56acf2','#009bef','#047cc0','#175d8d','#1c496d','#1d364d','#1b2834',],
  ['#d1f0f7','#a0e3f0','#71cddd','#00b6cb','#12a3b4','#188291','#17616b','#164d56','#13393e','#122a2e',],
  ['#c0f5e8','#8ee9d4','#40d5bb','#00baa1','#00a78f','#008673','#006456','#124f44','#133a32','#122b26',],
  ['#cef3d1','#89eda0','#57d785','#34bc6e','#00aa5e','#00884b','#116639','#12512e','#123b22','#112c1b',],
  ['#d7f4bd','#b4e876','#95d13c','#81b532','#73a22c','#5b8121','#426200','#374c1a','#283912','#1f2a10',],
  ['#fbeaae','#fed500','#e3bc13','#c6a21a','#b3901f','#91721f','#70541b','#5b421a','#452f18','#372118',],
  ['#f5e8db','#ffd191','#ffb000','#e39d14','#c4881c','#9c6d1e','#74521b','#5b421c','#42301b','#2f261c',],
  ['#f5e8de','#fdcfad','#fcaf6d','#fe8500','#db7c00','#ad6418','#814b19','#653d1b','#482e1a','#33241c',],
  ['#f7e7e2','#f8d0c3','#faad96','#fc835c','#fe6100','#c45433','#993a1d','#782f1c','#56251a','#3a201b',],
]


const grayHues = [
  'gray',
  'cool-gray',
  'warm-gray',
]

const grayValues = [
  ['#eaeaea','#d8d8d8','#c0bfc0','#a6a5a6','#949394','#777677','#595859','#464646','#343334','#272727',],
  ['#e3ecec','#d0dada','#b8c1c1','#9fa7a7','#8c9696','#6f7878','#535a5a','#424747','#343334','#272727',],
  ['#efe9e9','#e2d5d5','#ccbcbc','#b4a1a1','#9e9191','#7d7373','#5f5757','#4b4545','#373232','#2a2626',],
]


const coreShades = [
  '50',
  '40',
  '50',
  '60',
  '70',
  '60',
  '50',
  '40',
  '30',
  '40',
  '30',
  '20',
  '10',
  '20',
  '30',
  '40',
  '50',
  '50',
  '50',
]

const coreValues = [
  '#e62325',
  '#ff509e',
  '#c22dd5',
  '#7732bb',
  '#473793',
  '#3151b7',
  '#2d74da',
  '#009bef',
  '#00b6cb',
  '#00a78f',
  '#34bc6e',
  '#95d13c',
  '#fed500',
  '#ffb000',
  '#fe8500',
  '#fe6100',
  '#777677',
  '#6f7878',
  '#7d7373',
]

const offWhiteShades = [
  '1',
  '2',
  '3',
  '4'
]

const offWhiteHues = [
  'neutral-white',
  'cool-white',
  'warm-white',
]

const offWhiteValues = [
  ['#fcfcfc','#f9f9f9','#f6f6f6','#f3f3f3',],
  ['#fbfcfc','#f8fafa','#f4f7f7','#f0f4f4',],
  ['#fdfcfc','#fbf8f8','#f9f6f6','#f6f3f3',],
]

const offWhiteCoreShades = [
  '1',
  '1',
  '1'
]

const offWhiteCoreValues = [
  '#fcfcfc',
  '#fbfcfc',
  '#fdfcfc'
]

const oneShadePalette = {
  'black': {'100': "#000"},
  'white': {'0': "#fff"}
}

////////////////////////////////////////////////////

const cycleColors = makeColors({
  values: cycleValues,
  hues: cycleHues,
  shades: shades,
  palette: constants.IBM,
  isCycle: true,
})

const cyclePalette = makePalette({
  values: cycleValues,
  hues: cycleHues,
  shades: shades,
})

const grayColors = makeColors({
  values: grayValues,
  hues: grayHues,
  shades: shades,
  palette: constants.IBM,
})

const grayPalette = makePalette({
  values: grayValues,
  hues: grayHues,
  shades: shades,
})

const combinedPalette = {
  ...cyclePalette,
  ...grayPalette
}

const corePalette = R.mapObjIndexed(
  (shadeValues, hue) => {
    const hueIndex = R.findIndex(R.equals(hue), cycleHues);
    return {
      ...shadeValues,
      ['core']: coreValues[hueIndex]
    }
  },
  combinedPalette
)

const offWhiteColors = makeColors({
  values: offWhiteValues,
  hues: offWhiteHues,
  shades: offWhiteShades,
  palette: constants.IBM,
})

const offWhitePalette = makePalette({
  values: offWhiteValues,
  hues: offWhiteHues,
  shades: offWhiteShades,
})

const palette = {
  ...corePalette,
  ...offWhitePalette,
  ...oneShadePalette
}

const colors = {
  ...cycleColors,
  ...grayColors,
  ...offWhiteColors
}

export {
  colors,
  palette
}
