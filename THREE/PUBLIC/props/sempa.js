//Flores 
import * as THREE from "../js/three.module.js";
export default function E01({ x, y, z }){

//FLOR DE SEMPASÚCHIL
var geometry1 = new THREE.TorusKnotGeometry(5.50,4.50,200, 9, 2, 90);
var material1 = new THREE.MeshPhongMaterial({
    color: 0xE07B00,
    shininess: 100,
    specular: 0xEB1C24
});


var mesh1 = new THREE.Mesh(geometry1, material1);

mesh1.castShadow = true; 
mesh1.receiveShadow = true; 

mesh1.rotation.x = THREE.MathUtils.degToRad(90);
mesh1.position.set(0, 6, 0);

//   scene.add(mesh1);



var geometry2 = new THREE.TorusKnotGeometry(5.50,5.50,200, 6, 9, 90);
var material2 = new THREE.MeshPhongMaterial({
    color: 0xE07B00,
    shininess: 100,
    specular: 0xEB1C24
});


var mesh2 = new THREE.Mesh(geometry2, material2);

mesh2.castShadow = true; 
mesh2.receiveShadow = true; 

mesh2.rotation.x = THREE.MathUtils.degToRad(90);
mesh2.position.set(30, 6, 0);

//scene.add(mesh2);

const flores = new THREE.Group();
flores.add(mesh1,mesh2);
flores.position.set(x,y,z);
return flores;
}