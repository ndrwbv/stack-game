import * as THREE from "three";

let stack = [];
const boxHeight = 1; // height of each layer

export const addLayer = (
  x: number,
  z: number,
  width: number,
  depth: number,
  direction: string = "x"
) => {
  const y = boxHeight * stack.length;

  const layer = {
    ...generateBox(x, y, z, width, depth),
    direction,
  };

  stack.push(layer);
};

export const generateBox = (x: number, y: number, z: number, width: number, depth: number) => {
  const geometry = new THREE.BoxGeometry(width, boxHeight, depth);

  const color = new THREE.Color(`hsl(${30 + stack.length * 4}, 100%, 50%)`);
  const material = new THREE.MeshLamberMaterial({ color });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);

  window.scene.add(mesh);

  return {
    threejs: mesh,
    width,
    depth,
  };
};
