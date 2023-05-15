import * as THREE from "three";
import { addLayer } from "./helpers.ts";

let camera, renderer;
const originalBoxSize = 3;

const init = () => {
  window.scene = new THREE.Scene();

  // Foundation
  addLayer(0, 0, originalBoxSize, originalBoxSize);

  // First layer
  addLayer(-10, 0, originalBoxSize, originalBoxSize, "x");

  // Light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  window.scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.position.set(10, 20, 0);
  window.scene.add(directionalLight);

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
  window.scene.add(camera);
  camera.position.z = 5;

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas')
})
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(window.scene, camera);

  document.body.appendChild(renderer.domElement);
};

init();


// import * as THREE from 'three'

// // Scene
// const scene = new THREE.Scene()

// // Object
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// // Sizes
// const sizes = {
//     width: 800,
//     height: 600
// }

// // Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z = 3
// scene.add(camera)

// // Renderer
// const renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector('canvas')
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)