import * as THREE from './three.js-master/build/three.module.js';
console.log(THREE)

export 

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#start-ar').addEventListener('click', activateXR);
    document.querySelector('#end-ar').addEventListener('click', () => console.log('end'));
});