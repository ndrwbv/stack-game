import { TDirection } from "./TDirection";
import { boxHeight } from "./boxHeight";
import { generateBox } from "./generateBox";
import { stack } from "./stack";

export const addLayer = (
  x: number,
  z: number,
  width: number,
  depth: number,
  direction?: TDirection | undefined
): void => {
  const y = boxHeight * stack.length;

  const layer = generateBox(x, y, z, width, depth, direction);

  stack.push(layer);
};
