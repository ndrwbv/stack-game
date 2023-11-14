const originalBoxSize = 3;
import { addLayer } from "./addLayer";

export const start = () => {
  addLayer(0, 0, originalBoxSize, originalBoxSize);

  addLayer(-1, 2, originalBoxSize, originalBoxSize, "x");
  addLayer(-10, 2, originalBoxSize, originalBoxSize, "x");
  addLayer(1, 2, originalBoxSize, originalBoxSize, "x");
  addLayer(1, 2, originalBoxSize, originalBoxSize, "x");
};
