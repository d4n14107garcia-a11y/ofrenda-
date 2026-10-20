import * as THREE from "../js/three.module.js";
export default function E06 ({x,y,z}) {


//caballito
var geometry019 = new THREE.CylinderGeometry(3,2,6,40,40, false,0,Math.PI*2);
var material019 = new THREE.MeshBasicMaterial({color:0xfffffff,
transparent:true,
opacity:0.35,
side: THREE.DoubleSide});
var mesh019 = new THREE.Mesh(geometry019,material019);
mesh019.position.set(20,3,0);
//scene.add(mesh019);

//bebida
var geometry020 = new THREE.CylinderGeometry(2,1,3,40,40, false,0,Math.PI*2);
var material020 = new THREE.MeshBasicMaterial({color:0xcd8f53f,
opacity:0.55,
side: THREE.DoubleSide});
var mesh020 = new THREE.Mesh(geometry020,material020);
mesh020.position.set(20,2,0);
//scene.add(mesh020);

const tequile = new THREE.Group();
tequile.add(mesh019,mesh020);
tequile.position.set(x,y,z);
return tequile;
}
