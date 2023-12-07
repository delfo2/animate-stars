import { getRandomNumber } from "./utils/numberHelpers.js";

function drawStar(pen, x, y, rotate) {
    pen.beginPath();
    pen.moveTo(x + 10, y + 10);
    pen.lineTo(x - 4, y + 18);
    pen.lineTo(x - 2, y + 3);
    pen.lineTo(x - 12, y - 4);
    pen.lineTo(x, y - 7);
    pen.lineTo(x + 7, y - 17);
    pen.lineTo(x + 14, y - 7);
    pen.lineTo(x + 26, y - 5);
    pen.lineTo(x + 17, y + 4);
    pen.lineTo(x + 21, y + 17);
    pen.lineTo(x + 8, y + 10);
    pen.fillStyle = "yellow";
    pen.fill();

    pen.closePath();
}

export class Star {
    x = 0;
    y = 0;
    maxX = 0;
    maxY = 0;
    alive = true;

    constructor(maxX, maxY) {
        this.x = getRandomNumber(maxX);
        this.y = getRandomNumber(maxY);
        this.maxX = maxX;
        this.maxY = maxY;
    }
    render(pen) {
        pen.save();
        drawStar(pen, this.x, this.y, this.rotate);
        console.log(this.rotate);
        pen.restore();
    }
    animate() {
        this.aliveChecker();
        if (this.alive) {
            this.x -= 1;
            this.y += 1;
        }
    }
    aliveChecker() {
        if (
            this.x > this.maxX ||
            this.x < -20 ||
            this.y > this.maxY + 10 ||
            this.y < -10
        ) {
            this.alive = false;
        }
    }
}
