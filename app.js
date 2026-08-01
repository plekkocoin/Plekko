import * as THREE from 
"https://unpkg.com/three@0.160.0/build/three.module.js";

import { GLTFLoader } from 
"https://unpkg.com/three@0.160.0/examples/jsm/loaders/GLTFLoader.js";


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
45,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(
window.innerWidth,
350
);

document
.getElementById("fish3d")
.appendChild(renderer.domElement);


const light = new THREE.HemisphereLight(
0xffffff,
0x004466,
3
);

scene.add(light);


const loader = new GLTFLoader();

loader.load(
"models/plekko.glb",
function(gltf){

const fish = gltf.scene;

fish.scale.set(
1.5,
1.5,
1.5
);

scene.add(fish);

animate();

}
);


camera.position.z = 5;


function animate(){

requestAnimationFrame(animate);

renderer.render(
scene,
camera
);

}
