import * as THREE from "three";
import { addLayer } from "../features/addLayer";
import { originalBoxSize } from "../const/originalBoxSize";

let camera: THREE.OrthographicCamera, scene: THREE.Scene;

export const init = () => {
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
  addLayer(0, 0, originalBoxSize, originalBoxSize);
  addLayer(-10, 2, originalBoxSize, originalBoxSize, "x");
};

export { camera, scene };
