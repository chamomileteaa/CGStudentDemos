import * as THREE from './build/three.module.js';
import {setScene, setSceneElements, scene, camera, renderer} from "./setup.js";

setScene();
setSceneElements();

let movingForwards = false;
let movingRight = false;
let movingLeft = false;
let movingBackwards = false;

const Pos = new THREE.Vector3(0,0,-5);
const Dir = new THREE.Vector3(0,0,1);

function movementLoop()
{
    if(movingForwards)
    {
        Pos.x += 3;
        Pos.z += 3;
    }
    if(movingRight)
    {

    }
    if(movingLeft)
    {

    }
    if(movingBackwards)
    {

    }

    camera.position.set(Pos.x,Pos.y,Pos.z);
    camera.lookAt(Pos.x + Dir.x, Pos.y + Dir.y, Pos.z + Dir.z);
    renderer.render(scene,camera);
}

renderer.setAnimationLoop(movementLoop);

function resizeRenderView() {
    const width = document.querySelector(".render-view").clientWidth;
    const height = document.querySelector(".render-view").clientHeight;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
    renderer.render(scene,camera);
}

function onKeyDown(event)
{
    console.log("Key Presesed")
    switch(event.key)
    {
        case "ArrowUp" : case "w": movingForwards = true;break;
        case "ArrowDown" : case "s": movingBackwards = true;break;
        case "ArrowLeft" : case "a": movingLeft = true;break;
        case "ArrowRight" : case "d": movingRight = true;break;

    }
}

//Event Listeners
window.addEventListener( 'resize', resizeRenderView);
window.addEventListener( 'keydown', onKeyDown);