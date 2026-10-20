import * as THREE from "../js/three.module.js";
export default function E04 ({x,y,z}) {


//// Tamal (Hoja de Maíz)

var geometryTamal = new THREE.CylinderGeometry(2, 1.2, 7, 32);
var materialTamal = new THREE.MeshBasicMaterial({
    color: 0x90A955 // Color verde/seco de hoja de maiz
});

var meshTamal = new THREE.Mesh(geometryTamal, materialTamal);
meshTamal.scale.set(1.4, 1, 0.7); // Aplastado para dar forma rectangular/ovalada
meshTamal.rotation.z = Math.PI / 6; // Ligeramente inclinado
meshTamal.position.set(0, 3, 2);

//scene.add(meshTamal);


// Amarra del Tamal (Tira de hoja)

var geometryTira = new THREE.CylinderGeometry(2.1, 2.1, 0.6, 32);
var materialTira = new THREE.MeshBasicMaterial({
    color: 0x4F6D7A // Tono más oscuro de contraste para el amarre
});
var meshTira = new THREE.Mesh(geometryTira, materialTira);
meshTira.scale.set(1.42, 1, 0.72);
meshTira.rotation.z = Math.PI / 6;
meshTira.position.set(0, 3, 2);
//scene.add(meshTira);

const tam = new THREE.Group();
tam.add(meshTamal,meshTira);
tam.position.set(x,y,z);
return tam;

}