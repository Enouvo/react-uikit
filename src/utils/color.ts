import BezierEasing from "bezier-easing";
import tinycolor from "tinycolor2";

const baseEasing = BezierEasing(0.26, 0.09, 0.37, 0.18);

const primaryEasing = baseEasing(0.6);
const currentEasing = (index: number) => baseEasing(index * 0.1);

export function generateHoverColor(color: string, ratio = 5) {
  return tinycolor
    .mix("#ffffff", color, (currentEasing(ratio) * 100) / primaryEasing)
    .toHexString();
}

export function generateActiveColor(color: string, ratio = 7) {
  return tinycolor
    .mix(
      "#333333",
      color,
      (1 - (currentEasing(ratio) - primaryEasing) / (1 - primaryEasing)) * 100
    )
    .toHexString();
}

export function generateShadowColor(color: string, ratio = 9) {
  return tinycolor
    .mix(
      "#ffffff",
      color,
      (1 - (currentEasing(ratio) - primaryEasing) / (1 - primaryEasing)) * 100
    )
    .toRgbString();
}
