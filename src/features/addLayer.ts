import { TDirection } from "../types/TDirection";
import { boxHeight } from "../const/boxHeight";
import { generateBox } from "./generateBox";
import { stack } from "../const/stack";

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
