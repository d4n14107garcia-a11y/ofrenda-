import * as THREE from "../js/three.module.js";
export default function E03 ({x,y,z}) {


// Pan de Muerto
var geoPanBase = new THREE.SphereGeometry(3, 32, 16);
var matPan = new THREE.MeshBasicMaterial({ color: 0xc68a4c });
var meshPanBase = new THREE.Mesh(geoPanBase, matPan);
meshPanBase.scale.set(1, 0.5, 1);
meshPanBase.position.set(10, 1.5, 0);
//scene.add(meshPanBase);

var geoPanBolita = new THREE.SphereGeometry(0.6, 16, 16);
var meshPanBolita = new THREE.Mesh(geoPanBolita, matPan);
meshPanBolita.position.set(10, 3, 0);
//scene.add(meshPanBolita);

var geoHueso1 = new THREE.CylinderGeometry(0.2, 0.2, 5, 16);
var meshHueso1 = new THREE.Mesh(geoHueso1, matPan);
meshHueso1.rotation.z = Math.PI / 2;
meshHueso1.position.set(10, 2.6, 0);
//scene.add(meshHueso1);

var geoHueso2 = new THREE.CylinderGeometry(0.2, 0.2, 5, 16);
var meshHueso2 = new THREE.Mesh(geoHueso2, matPan);
meshHueso2.rotation.x = Math.PI / 2;
meshHueso2.position.set(10, 2.6, 0);
//scene.add(meshHueso2);


const PanM = new THREE.Group();
PanM.add(meshPanBase,meshPanBolita,meshHueso1,meshHueso2);
PanM.position.set(x,y,z);
return PanM;
}