import * as THREE from "../js/three.module.js";
export default function E07 ({x,y,z}) {


//vela
var geometry018 = new THREE.CylinderGeometry(2,1,2,40,40, false,0,Math.PI*2);
var material018 = new THREE.MeshBasicMaterial({color:0xffffff,
opacity:0.35,
side: THREE.DoubleSide});
var mesh018 = new THREE.Mesh(geometry018,material018);
mesh018.position.set(-10,1,0);
//scene.add(mesh018);

//fuego
var geometry027  = new THREE.TetrahedronGeometry(.5,1);
var material027 = new THREE.MeshBasicMaterial({color:0xFFA50fa55ff50050,
side: THREE.DoubleSide});
var mesh027 = new THREE.Mesh(geometry027,material027);
mesh027.position.set(-10,3,-0);
//scene.add(mesh027);


const vel = new THREE.Group();
vel.add(mesh019,mesh020);
vel.position.set(x,y,z);
return vel;

}