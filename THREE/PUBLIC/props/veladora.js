import * as THREE from "../js/three.module.js";
export default function E04({ x, y, z }){

//baso de vela 
var geometry3 = new THREE.CylinderGeometry(11,5,11,30,90);
var material3 = new THREE.MeshPhysicalMaterial({
    color: 0xDBD4CE,
    transmission: 1,  
    opacity: 1,       
    transparent: true,
    roughness: 0.1,   
    ior: 1.5,         
    thickness: 0.5
})
var mesh3 = new THREE.Mesh(geometry3,material3);
//scene.add(mesh3);
mesh3.position.set(0,6,0);

var geometry2 = new THREE.CylinderGeometry(9,3,10,30,90);
var material2 = new THREE.MeshPhongMaterial({
    color: 0xDBD4CE,
    side: THREE.DoubleSide,
   //wireframe: true 
})
var mesh2 = new THREE.Mesh(geometry2,material2);
//scene.add(mesh2);
mesh2.position.set(0,7,0);

var geometry4 = new THREE.BoxGeometry(0.5,3,0.5,1);
var material4 = new THREE.MeshBasicMaterial({
    color: 0xDBCCBD,
    side: THREE.DoubleSide,
   //wireframe: true 
})
var mesh4 = new THREE.Mesh(geometry4,material4);
//scene.add(mesh4);
mesh4.position.set(0,13,0);

var geometry5 = new THREE.ConeGeometry(1,3,20,50,200);
var material5 = new THREE.MeshPhysicalMaterial({
    color: 0xA6880F,
   //wireframe: true
    
})
var mesh5 = new THREE.Mesh(geometry5,material5);
mesh5.castShadow = true; 
mesh5.receiveShadow = true; 
//scene.add(mesh5);
mesh5.position.set(0,15,0);

var vela = new THREE.Group();
vela.add(mesh2,mesh3,mesh4,mesh5);
vela.position.set(-30,0,0);
//scene.add(vela);

const veladora = new THREE.Group();
veladora.add(mesh2,mesh3,mesh4,mesh5);
veladora.position.set(x,y,z);
return veladora;

}