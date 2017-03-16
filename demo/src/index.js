import React from "react";
import { render } from "react-dom";
import allTheColors from "../../src";

const primaryColor = allTheColors["material"]["blue"]["500"];
// --> material blue 500, "#2196f3"
const secondaryColor = allTheColors.getComplimentary(primaryColor);
// --> material amber 500, "#ffc107"
const teriaryColor = allTheColors.lighten(primaryColor, 2);
// --> material blue 300, "#64b5f6"
const anotherColor = allTheColors.darken(primaryColor, 3);
// --> material blue 800, "#1565c0"
const superDarkColor = allTheColors.darken(primaryColor, 999);
// --> material blue 900, "#0d47a1", exceeding bounds just hits boundary
const yetAnotherColor = allTheColors.shiftHue(primaryColor, 2);
// --> material cyan 500, "#00bcd4"
const princelyColor = allTheColors.shiftHue(primaryColor, -2);
// --> material deep-purple 500, "#673ab7"
const accentColor = allTheColors.accent(primaryColor);
// --> material blue A400, "#2979ff"
const unaccentColor = allTheColors.unaccent(accentColor);
// --> material blue 400, "#42a5f5"
const darkerAccentColor = allTheColors.darken(accentColor, 1);
// --> material blue A700, "#2962ff"
const primaryHueName = allTheColors.getHue(primaryColor);
// --> 'blue'
const primaryShadeName = allTheColors.getShade(primaryColor);
// --> '500'

const exampleColors = [
  primaryColor,
  secondaryColor,
  teriaryColor,
  anotherColor,
  superDarkColor,
  yetAnotherColor,
  princelyColor,
  accentColor,
  unaccentColor,
  darkerAccentColor,
  primaryHueName,
  primaryShadeName
];

let Demo = React.createClass({
  render() {
    return (
      <div>
        {exampleColors.map((backgroundColor, i) => {
          return (
            <div key={i} style={{ backgroundColor, width: 100, height: 50 }} />
          );
        })}
      </div>
    );
  }
});

render(<Demo />, document.querySelector("#demo"));
