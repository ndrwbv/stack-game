import * as THREE from "three";
import { boxHeight } from "./boxHeight";
import { stack } from "./stack";
import { scene } from "./init";
import { TDirection } from "./TDirection";

export interface IGeneratedBox {
  threejs: THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshLambertMaterial,
    THREE.Object3DEventMap
  >;
  width: number;
  depth: number;
  direction?: TDirection;
}

export const generateBox = (
  x: number,
  y: number,
  z: number,
  width: number,
  depth: number,
  direction?: TDirection
): IGeneratedBox => {
  const geometry = new THREE.BoxGeometry(width, boxHeight, depth);

  const color = new THREE.Color(`hsl(${30 + stack.length * 4}, 100%, 50%)`);
  const material = new THREE.MeshLambertMaterial({ color });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);

  scene.add(mesh);

  return {
    threejs: mesh,
    width,
    depth,
    direction,
  };
};
