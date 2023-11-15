import { addLayer } from "../features/addLayer";
import { boxHeight } from "../const/boxHeight";
import { camera, scene } from "./init";
import { originalBoxSize } from "../const/originalBoxSize";
import { renderer } from "./render";
import { stack } from "../const/stack";
import { addOverhang } from "../features/addOverhang";

let gameStarted = false;

const animation = () => {
  const speed = 0.15;

  const topLayer = stack[stack.length - 1];
  topLayer.threejs.position[topLayer.direction || "x"] += speed;

  if (camera.position.y < boxHeight * (stack.length - 2) + 4) {
    camera.position.y += speed;
  }

  renderer.render(scene, camera);
};

export const gameLoop = () => {
  if (!gameStarted) {
    renderer.setAnimationLoop(animation);
    gameStarted = true;
  } else {
    const topLayer = stack[stack.length - 1];
    const prevLayer = stack[stack.length - 2];

    const direction = topLayer.direction || "x";

    const delta =
      topLayer.threejs.position[direction] -
      prevLayer.threejs.position[direction];

    const overhandSize = Math.abs(delta);

    const size = direction === "x" ? topLayer.width : topLayer.depth;

    const overlap = size - overhandSize;

    if (overlap > 0) {
      const newWidth = direction === "x" ? overlap : topLayer.width;
      const newDepth = direction === "z" ? overlap : topLayer.depth;

      topLayer.width = newWidth;
      topLayer.depth = newDepth;

      topLayer.threejs.scale[direction] = overlap / size;
      topLayer.threejs.position[direction] -= delta / 2;

      // Overhang
      const overhangShift = (overlap / 2 + overhandSize / 2) * Math.sign(delta);
      const overhangX =
        direction === "x"
          ? topLayer.threejs.position.x + overhangShift
          : topLayer.threejs.position.x;
      const overhangZ =
        direction === "z"
          ? topLayer.threejs.position.z + overhangShift
          : topLayer.threejs.position.z;

      const overhangWidth = direction === "x" ? overhandSize : newWidth;
      const overhangDepth = direction === "z" ? overhandSize : newDepth;

      addOverhang(overhangX, overhangZ, overhangWidth, overhangDepth);

      const nextX = direction === "x" ? topLayer.threejs.position.x : -10;
      const nextZ = direction === "z" ? topLayer.threejs.position.z : -10;
      const nextDirection = direction === "x" ? "z" : "x";

      addLayer(nextX, nextZ, newWidth, newDepth, nextDirection);
    }
  }
};
