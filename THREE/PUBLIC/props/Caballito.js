//tequila

import * as THREE from "../js/three.module.js";
export default function E03({ x, y, z }){

var geometry17 = new THREE.CylinderGeometry(6,5,23,20,40);
var material17 = new THREE.MeshPhysicalMaterial({
   color: 0xDED8B6,
    transmission: 1,  
    opacity: 1,       
    transparent: true,
    roughness: 0.1,   
    ior: 1.5,         
    thickness: 0.5 
})
var mesh17= new THREE.Mesh(geometry17,material17);
//scene.add(mesh17);
mesh17.position.set(0,11.5,0);

//liquidos del tequila 
var geometry18 = new THREE.CylinderGeometry(4,3,20.1,20,40);
var material18 = new THREE.MeshBasicMaterial({
   color: 0xD4BD42,
   
})
var mesh18= new THREE.Mesh(geometry18,material18);
//scene.add(mesh18);
mesh18.position.set(0,13,0);


const caballito = new THREE.Group();
caballito.add(mesh18,mesh17);
caballito.position.set(x,y,z);
return caballito;

}