import * as THREE from "../js/three.module.js";
export default function E02 ({x,y,z}) {

//// Mandarina

var geometry019 = new THREE.SphereGeometry(3, 40, 40);

var material019 = new THREE.MeshBasicMaterial({
    color: 0xFF8C00
});

var mesh019 = new THREE.Mesh(geometry019, material019);

mesh019.position.set(0, 3, 25);

//scene.add(mesh019);


// Tallo

var geometry020 = new THREE.CylinderGeometry(0.5, 0.1,2, 20);
var material020 = new THREE.MeshBasicMaterial({
    color: 0x5C3A1E
});
var mesh020 = new THREE.Mesh(geometry020, material020);
mesh020.position.set(0, 6, 25);
//scene.add(mesh020);

const Mandarina = new THREE.Group();
Mandarina.add(mesh019,mesh020);
Mandarina.position.set(x,y,z);
return Mandarina;

}