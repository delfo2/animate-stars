import { Star } from "./js/Star.js";

const canvas = document.querySelector("#canvas");
const pen = canvas.getContext("2d");

const debug = document.querySelector("#debug");

let myStars = [];
function createStar() {
    if(myStars.length < 10) {
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
    pen.clearRect(0, 0, canvas.width, canvas.height);
    starManage();

    requestAnimationFrame(start);
}

start();