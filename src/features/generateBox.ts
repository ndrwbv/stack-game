import * as THREE from "three";
import * as CANNON from "cannon";
import { boxHeight } from "../const/boxHeight";
import { stack } from "../const/stack";
import { scene, world } from "../game/init";
import { TDirection } from "../types/TDirection";

export interface IGeneratedBox {
  threejs: THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshLambertMaterial,
    THREE.Object3DEventMap
  >;
  width: number;
  depth: number;
  direction?: TDirection;
  cannonjs: CANNON.Body;
}

export const generateBox = (
  x: number,
  y: number,
  z: number,
  width: number,
  depth: number,
  falls: boolean,
  direction?: TDirection
): IGeneratedBox => {
  const geometry = new THREE.BoxGeometry(width, boxHeight, depth);

  const color = new THREE.Color(`hsl(${30 + stack.length * 4}, 100%, 50%)`);
  const material = new THREE.MeshLambertMaterial({ color });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);

  scene.add(mesh);

  // Cannon
  const shape = new CANNON.Box(
    new CANNON.Vec3(width / 2, boxHeight / 2, depth / 2)
  );
  let mass = falls ? 5 : 0;
  const body = new CANNON.Body({ mass, shape });
  body.position.set(x, y, z);
  world.addBody(body);

  return {
    threejs: mesh,
    cannonjs: body,
    width,
    depth,
    direction,
  };
};
