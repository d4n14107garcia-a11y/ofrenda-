//PAN DE MUERTO 
import * as THREE from "../js/three.module.js";
export default function E02({ x, y, z }){

    const pan = new THREE.Group();

    // Base del pan 
    var geometry7 = new THREE.SphereGeometry(10.5, 84, 62, 0, Math.PI * 2, 0, Math.PI / 2);
    var material7 = new THREE.MeshBasicMaterial({ 
        color: 0xBA8A3D,
         side: THREE.DoubleSide
         });
    var mesh7 = new THREE.Mesh(geometry7, material7);
    mesh7.position.set(0, 0, 0);
    pan.add(mesh7);

    // HUESOS - Cabeza hueso central 
    var geometry11 = new THREE.SphereGeometry(2.6, 90, 80);
    var material11 = new THREE.MeshBasicMaterial({
         color: 0xAB7424,
        side: THREE.DoubleSide
     });
    var mesh11 = new THREE.Mesh(geometry11, material11);
    mesh11.position.set(0, 10, 0);
    pan.add(mesh11); 

    // Primer hueso (Tira 1)
    var geometry9 = new THREE.TorusGeometry(3, 1.2, 20, 200, 30);
    var material9 = new THREE.MeshBasicMaterial({ 
        color: 0xAB7424, 
        side: THREE.DoubleSide 
    });
    var mesh9 = new THREE.Mesh(geometry9, material9);
    mesh9.position.set(-4, 7, 0);

    var geometry12 = new THREE.SphereGeometry(2.6, 90, 80);
    var material12 = new THREE.MeshBasicMaterial({ 
        color: 0xAB7424, 
        side: THREE.DoubleSide 
    });
    var mesh12 = new THREE.Mesh(geometry12, material12);
    mesh12.position.set(-7.5, 4.5, 0);

    var uno = new THREE.Group();
    uno.add(mesh9, mesh12);
    uno.position.set(-1, 0, 0);
    pan.add(uno); 

    // Segundo hueso (Tira 2)
    var geometry10 = new THREE.TorusGeometry(3, 1.2, 20, 200, 30);
    var material10 = new THREE.MeshBasicMaterial({ 
        color: 0xAB7424, 
        side: THREE.DoubleSide
     });
    var mesh10 = new THREE.Mesh(geometry10, material10);
    mesh10.position.set(5, 7, 0);

    var geometry8 = new THREE.SphereGeometry(2.6, 90, 80);
    var material8 = new THREE.MeshBasicMaterial({ 
        color: 0xAB7424, 
        side: THREE.DoubleSide 
    });
    var mesh8 = new THREE.Mesh(geometry8, material8);
    mesh8.position.set(9.5, 5.4, 0);

    var dos = new THREE.Group();
    dos.add(mesh10, mesh8);
    dos.position.set(-1, 0, 0);
    pan.add(dos); 

    // Tercera tira de hueso 
    var geometry13 = new THREE.SphereGeometry(2.6, 90, 80);
    var material13 = new THREE.MeshBasicMaterial({ 
        color: 0xAB7424, 
        side: THREE.DoubleSide 
    });
    var mesh13 = new THREE.Mesh(geometry13, material13);
    mesh13.position.set(0, 6, 8);

    var geometry14 = new THREE.TorusGeometry(3, 1.2, 20, 200, 30);
    var material14 = new THREE.MeshBasicMaterial({ 
        color: 0xAB7424, 
        side: THREE.DoubleSide 
    });
    var mesh14 = new THREE.Mesh(geometry14, material14);
    mesh14.rotation.y = -Math.PI / 2;
    mesh14.position.set(0, 7, 5);

    var tres = new THREE.Group();
    tres.add(mesh13, mesh14);
    tres.position.set(0, 0, 0);
    pan.add(tres); 

    // Cuarta tira de hueso 
    var geometry15 = new THREE.SphereGeometry(2.6, 90, 80);
    var material15 = new THREE.MeshBasicMaterial({ 
        color: 0xAB7424, 
        side: THREE.DoubleSide 
    });
    var mesh15 = new THREE.Mesh(geometry15, material15);
    mesh15.position.set(0, 6, -8);

    var geometry16 = new THREE.TorusGeometry(3, 1.2, 20, 200, 30);
    var material16 = new THREE.MeshBasicMaterial({ 
        color: 0xAB7424, 
        side: THREE.DoubleSide 
    });
    var mesh16 = new THREE.Mesh(geometry16, material16);
    mesh16.rotation.y = -Math.PI / 2;
    mesh16.position.set(0, 7, -5);

    var UNO = new THREE.Group();
    UNO.add(mesh15, mesh16);
    UNO.position.set(0, 0, 0);
    pan.add(UNO); 


    pan.position.set(x, y, z);
    return pan;
}
