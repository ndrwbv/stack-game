import * as THREE from "three";
import * as CANNON from "cannon";
import { addLayer } from "../features/addLayer";
import { originalBoxSize } from "../const/originalBoxSize";

let camera: THREE.OrthographicCamera, scene: THREE.Scene;
let world: CANNON.World;

const initCannnon = () => {
  world = new CANNON.World();
  world.gravity.set(0, -10, 0);
  world.broadphase = new CANNON.NaiveBroadphase();
  world.solver.iterations = 40;
};

export const init = () => {
  initCannnon();
  scene = new THREE.Scene();

  const ambiantLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambiantLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(10, 20, 0);
  scene.add(directionalLight);

  // Camera
  const width = 10;
  const height = width * (window.innerHeight / window.innerWidth);
  camera = new THREE.OrthographicCamera(
    width / -2,
    width / 2,
    height / 2,
    height / -2,
    1,
    100
  );

  camera.position.set(4, 4, 4);
  camera.lookAt(0, 0, 0);
  addLayer(0, 0, originalBoxSize, originalBoxSize, "z");
  addLayer(-10, 2, originalBoxSize, originalBoxSize, "x");
};

export { camera, scene, world };
