# all-the-colors

<!-- [![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls] -->


bow to your corporate color overlords...

<!-- ```js
//
const rgbaColors = allTheColors.rgba // rgba decimal colors
const hslColors = allTheColors.hsl

```

For all functions, the argument color space determines the return value color space. You can use allTheColors, allTheColors.hex, allTheColors.rgba, or allTheColors.hsl to access these functions, no difference. -->

**all-the-colors** is a collection of ui color palettes with a set of functions for their manipulation. Included are google's material color palette, microsoft universal color palette, and ibm's design language color palette.

# Motivation

Building apps for multiple platforms, you often want to conform to recommended palettes while maintaining color relations within your app. You may also want to preserve these relations but quickly iterate through a generative base color. This library helps achieve both those goals.

# Install
```
npm install all-the-colors
```

# Use

Colors are accessed as such
```js
import allTheColors from 'all-the-colors'

const myFavoriteColor = allTheColors[palette][hue][shade]
// --> myFavoriteColor = '#XXXXXX'
```

Hue and shade names for each palette are specified below. Here, for example, is how you'd access a middle blue for each palette:
```js

const materialBlue = allTheColors['material']['blue']['500']
// --> material blue 500, "#2196f3"
const universalBlue = allTheColors['universal']['blue']['50']
// --> universal blue 50, "#0037DA"
const ibmBlue = allTheColors['ibm']['blue']['50']
// --> ibm blue 50, '#2d74da'
// OR
const ibmBlue = allTheColors['ibm']['blue']['core']
// --> ibm blue 50, '#2d74da', see notes below on ibm 'core'
```

A common way to use this library would be to pick a primary color and then use our mutation functions to build your theme around it. You can then vary this base color to suite your taste and vary the palette to fit the platform. As an example, let's use that middle blue as a base.

```js
const primaryColor = allTheColors['material']['blue']['500']
// --> material blue 500, "#2196f3"
const secondaryColor = allTheColors.getComplimentary(primaryColor)
// --> material amber 500, "#ffc107"
const teriaryColor = allTheColors.lighten(primaryColor, 2)
// --> material blue 300, "#64b5f6"
const primaryDarkColor = allTheColors.darken(primaryColor, 3)
// --> material blue 800, "#1565c0"
const primaryShadowColor = allTheColors.darken(primaryColor, 999)
// --> material blue 900, "#0d47a1", exceeding bounds just hits boundary
const neighborColor = allTheColors.shiftHue(primaryColor, 2)
// --> material cyan 500, "#00bcd4"
const anotherNeighborColor =  allTheColors.shiftHue(primaryColor, -2)
// --> material deep-purple 500, "#673ab7"
const isAGoodTextCombo = allTheColors.isLegible(primaryShadowColor, teriaryColor)
// --> true, checks if difference between shades is greater than 500 (50),
// a reasonable estimation of legibility
// 900 - 300 = 600, ✔
const isAGoodTextCombo2 = allTheColors.isLegible(primaryColor, teriaryColor)
// --> false,
// 500 - 300 = 200, ✘

```

### Type Spec

```js

getComplimentary(color: string): string
lighten(color: string, increment: int): string
darken(color: string, increment: int): string
shiftHue(color: string, increment: int): string
isLegible(color: string, color: string): bool
accent(color: string): string // only works on some material palette colors

```

# Palette Details

### Google Material Design Color Palette

```js
// palette name
'material'

// hues in hue-shift cycle, use normal and accent shades
'red'
'pink'
'purple'
'deep-purple'
'indigo'
'blue'
'light-blue'
'cyan'
'teal'
'green'
'light-green'
'lime'
'yellow'
'amber'
'orange'
'deep-orange'

// other hues, use normal shades
'brown'
'blue-grey'
'grey'

// normal shades
'50', '100', '200', '300', '400', '500', '600', '700', '800', '900'

// accent shades
'A100', 'A200', 'A400', 'A700'

// other hues, use no shade
'black'
'white'

```

For the hue-shift cycle material colors you can use the accent (and unaccent) functions.

```js
const primaryColor = allTheColors['material']['blue']['500']
const accentColor = allTheColors.accent(primaryColor)
// --> material blue A400, "#2979ff"
// will associate with closest accent color
// 50, 100 -> A100
// 200, 300 -> A200
// 400, 500, 600 -> A400
// 700, 800, 900 -> A700

const unaccentColor = allTheColors.unaccent(accentColor)
// --> material blue 400, "#42a5f5"

// accent colors can be lighten, darkened, and hueShifted as well
const darkerAccentColor = allTheColors.darken(accentColor, 1)
// --> material blue A700, "#2962ff"
```

### IBM Design Language Color Palette

```js
// palette
'ibm'

// hues in hue-shift cycle, use normal shades
'red'
'magenta'
'purple'
'violet'
'indigo'
'ultramarine'
'blue'
'cerulean'
'aqua'
'teal'
'green'
'lime'
'yellow'
'gold'
'orange'
'peach'

// gray hues, use normal shades
'gray'
'cool-gray'
'warm-gray'

// normal shades
'1', '10', '20', '30', '40', '50', '60', '70', '80', '90'

// off-white hues, use off-white shades
'neutral-white'
'cool-white'
'warm-white'

// off-white shades
'1', '2', '3', '4'

// black hue
'black'

// black shade
'100'

// white hue
'white'

// white shade
'0'

```
The 'core' shade references a shade dependent on the the value spectrum for each hue, e.g.
```js
const ibmBlue = allTheColors['ibm']['blue']['core']
// --> ibm blue 50, '#2d74da'
const ibmCerulean = allTheColors['ibm']['cerulean']['core']
// --> ibm cerulean 40, '#009bef'
const ibmGold = allTheColors['ibm']['gold']['core']
// --> ibm gold 20, '#ffb000'

```


### Microsoft Universal Color Palette

We've taken some liberties with the microsoft universal color palette:
- In the spec, no hue or shade names are supplied, so we've created (hopefully reasonable) names below.
- Also in the spec, the purple hues only have 6 shades as opposed to 7 for the rest of the spectrum. We've produced a shade for these hues between the lightest and second lightest shades (what looks to be the most natural place for this addition) in order to establish spectrum symmetry and make the mutation functions shift colors sensibly.

```js

// hues in hue-cycle, use normal shades
'red'
'magenta-red'
'red-magenta'
'magenta'
'purple-magenta'
'magenta-purple'
'purple'
'light-purple'
'violet'
'indigo'
'deep-blue'
'blue'
'light-blue'
'cyan'
'teal-cyan'
'teal'
'teal-green'
'green'
'light-green'
'lime'
'yellow'
'amber'
'yellow-orange'
'orange'
'orange-red'

// other hues, use normal shades
"brown"
"green-gray"
"slate"
"warm-gray"
"gray"

// normal shades
"20", "30", "40", "50", "60", "70", "80"

// other hues, use no shade
"black"
"white"

```



## Additional Resources

For more extensive color manipulation, check out chroma-js

<!-- [build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo -->
