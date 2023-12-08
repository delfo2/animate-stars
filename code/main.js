import { Star } from "./js/Star.js";

const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");
const maxStars = 30;

const debug = document.querySelector("#debug");
function putDebug(text) {
    const p = document.createElement('p');
    p.textContent = text;
    debug.appendChild(p);
}
function clearDebug() {
    debug.innerHTML = '';
}

let myStars = [];
function createStar() {
    if(myStars.length < maxStars) {
        const star = new Star(canvas.width, canvas.height);
        myStars.push(star);
    }
}
function starManage() {
    createStar();
    myStars = myStars.filter((star) => star.alive);
    myStars.forEach((star) => {
        star.render(pen);
        star.animate();
    })
}

function start() {
    clearDebug();

    pen.clearRect(0, 0, canvas.width, canvas.height);
    starManage();

    putDebug(myStars.length);

    requestAnimationFrame(start);
}

start();