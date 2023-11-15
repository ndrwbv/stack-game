import * as THREE from "three";
import { camera, scene } from "./init";

export let renderer: THREE.WebGLRenderer;

export const render = () => {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);

  document.body.appendChild(renderer.domElement);
};
