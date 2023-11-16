import { addLayer } from "../features/addLayer";
import { boxHeight } from "../const/boxHeight";
import { camera, init, scene, world } from "./init";
import { renderer } from "./render";
import { stack } from "../const/stack";
import { addOverhang } from "../features/addOverhang";
import { overhangs } from "../const/overhangs";
import * as CANNON from "cannon";

let gameStarted = false;

let fixedTimeStep = 1.0 / 60.0; // seconds
let maxSubSteps = 3;
let lastTime: number | undefined;

const updatePhysics = (time: number) => {
  if (lastTime !== undefined) {
    let dt = (time - lastTime) / 1000;
    world.step(fixedTimeStep, dt, maxSubSteps);
  }

  // Copy coordinates from Cannon.js to Three.js
  overhangs.forEach((element) => {
    element.threejs.position.copy(element.cannonjs.position as any);
    element.threejs.quaternion.copy(element.cannonjs.quaternion as any);
  });

  lastTime = time;
};

const animation = (time: number) => {
  const speed = 0.05;
  const topLayer = stack[stack.length - 1];
  topLayer.threejs.position[topLayer.direction || "x"] += speed;
  topLayer.cannonjs.position[topLayer.direction || "x"] += speed;

  // 4 initial camera heigth
  if (camera.position.y < boxHeight * (stack.length - 2) + 4) {
    camera.position.y += speed;
  }

  updatePhysics(time);
  renderer.render(scene, camera);
};

export const gameLoop = () => {
  if (!gameStarted) {
    renderer.setAnimationLoop(animation);
    gameStarted = true;
    toggleGameScreen(false);
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

      topLayer.cannonjs.position[direction] -= delta / 2;
      topLayer.cannonjs.position[direction] -= delta / 2;
      const shape = new CANNON.Box(
        new CANNON.Vec3(newWidth / 2, boxHeight / 2, newDepth / 2)
      );
      topLayer.cannonjs.shapes = [];
      topLayer.cannonjs.addShape(shape);

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
    } else {

      topLayer.cannonjs.position[direction] -= delta / 2;
      topLayer.cannonjs.position[direction] -= delta / 2;
      const shape = new CANNON.Box(
        new CANNON.Vec3( topLayer.width / 2, boxHeight / 2,  topLayer.depth / 2)
      );
      topLayer.cannonjs.shapes = [];
      topLayer.cannonjs.addShape(shape);
      addOverhang(topLayer.threejs.position.x, topLayer.threejs.position.z, topLayer.width, topLayer.depth);
      scene.remove(topLayer.threejs)
      
      gameStarted = false;
      toggleGameScreen(true);
    }
  }
};

const reStartGame = () => {
  resetGame();
  toggleGameScreen(false);
};

const resetGame = () => {
  while(scene.children.length > 0){ 
    scene.remove(scene.children[0]); 
}

  while (stack.length > 0) {
    stack.pop();
  }
  init()
};

const toggleGameScreen = (show: boolean) => {
  const el = document.getElementById("game-start-screen");
  if (!el) return;

  if (show) {
    el.style.display = "flex";
    return;
  }

  el.style.display = "none";
};

document.getElementById("game-start-screen")?.addEventListener("click", () => {
  reStartGame();
});
