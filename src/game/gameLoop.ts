import { addLayer } from "../features/addLayer";
import { boxHeight } from "../const/boxHeight";
import { camera, scene } from "./init";
import { originalBoxSize } from "../const/originalBoxSize";
import { renderer } from "./render";
import { stack } from "../features/stack";

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
    console.log("game started");
    const topLayer = stack[stack.length - 1];
    const direction = topLayer.direction;

    const nextX = direction === "x" ? 0 : -10;
    const nextZ = direction === "z" ? 0 : -10;
    const newWidth = originalBoxSize;
    const newDepth = originalBoxSize;
    const nextDirection = direction === "x" ? "z" : "x";

    addLayer(nextX, nextZ, newWidth, newDepth, nextDirection);
  }
};
