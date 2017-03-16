import React from 'react'
import {
  colors as materialColors,
  palette as materialPalette
} from './material'

import {
  colors as universalColors,
  palette as universalPalette
} from './universal'

import {
  colors as ibmColors,
  palette as ibmPalette
} from './ibm'

import makeColorMutators from './makeColorMutators'

const colorDict = {
  ...materialColors,
  ...universalColors,
  ...ibmColors,
}

const colorPalettes = {
  material: materialPalette,
  universal: universalPalette,
  ibm: ibmPalette,
}

const colorMutator = makeColorMutators(colorDict, colorPalettes)

const allTheColors = {
  ...colorPalettes,
  ...colorMutator
}

export default allTheColors
