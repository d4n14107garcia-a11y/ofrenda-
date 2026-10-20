
import * as THREE from "../js/three.module.js";
export default function E01 ({x,y,z}) {



//flor cempasuchil
var flor5 = new THREE.TorusKnotGeometry(4, 1,155, 6, 6, 80);
var mat5 = new THREE.MeshPhysicalMaterial({ color: 0XFFA500,
    transeisson:1,
    roughness:2.5,
    ior:2.5,
    tickness:2.5
 });
var mesh5 = new THREE.Mesh(flor5, mat5);
mesh5.position.set(2, 3, 2);
mesh5.rotation.set(Math.PI / 2, 0, 0);
mesh5.castShadow = true;
//scene.add(mesh5);

const flores = new THREE.Group();
flores.add(mesh5);
flores.position.set(x,y,z);
return flores;

}