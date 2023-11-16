import { boxHeight } from "../const/boxHeight";
import { overhangs } from "../const/overhangs";
import { stack } from "../const/stack";
import { generateBox } from "./generateBox";

export const addOverhang = (
  x: number,
  z: number,
  width: number,
  depth: number
): void => {
  const y = boxHeight * (stack.length - 1);
  const overhang = generateBox(x, y, z, width, depth, true);
  overhangs.push(overhang);
};
