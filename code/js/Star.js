import { getRandomNumber } from "./utils/numberHelpers.js";

function drawStar(pen, x, y, rotate, size) {
    pen.save(); // Salva o estado do contexto do canvas
    pen.translate(x, y); // Translada para a posição (x, y)
    pen.rotate(rotate); // Rotaciona conforme a propriedade 'rotate'
    pen.scale(size, size);

    pen.beginPath();
    for (let i = 0; i < 5; i++) {
        pen.lineTo(
            Math.cos(((18 + i * 72) / 180) * Math.PI) * 26,
            -Math.sin(((18 + i * 72) / 180) * Math.PI) * 26
        );
        pen.lineTo(
            Math.cos(((54 + i * 72) / 180) * Math.PI) * 10,
            -Math.sin(((54 + i * 72) / 180) * Math.PI) * 10
        );
    }
    pen.fillStyle = "yellow";
    pen.fill();
    pen.closePath();

    pen.restore();
}

export class Star {
    alive = true;
    x = 0;
    y = 0;
    initialX = 0;
    initialY = 0;
    maxX = 0;
    maxY = 0;
    rotate = 0;
    size = 0;
    adult = false;

    constructor(maxX, maxY) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.x = getRandomNumber(maxX);
        this.y = getRandomNumber(maxY);
        this.initialX = this.x;
        this.initialY = this.y;
        this.rotate = Math.random() * 2 * Math.PI; // Define uma rotação aleatória inicial
    }

    render(pen) {
        pen.save();
        drawStar(pen, this.x, this.y, this.rotate, this.size);
        pen.restore();
    }

    animate() {
        this.aliveChecker();
        if (this.alive) {
            this.x -= 1;
            this.y += 1;
            this.rotate += 0.02;
            this.sizeGrowth(0.01);
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
    sizeGrowth(growth) {
        if (!this.adult) {
            if (this.x > this.initialX / 2 && this.y > this.initialY / 2) {
                this.size += growth;
            } else {
                this.adult = true;
            }

            if (this.size > 1) {
                this.adult = true;
            }
        }

        if (this.adult && this.size > 0) {
            this.size -= growth;
        }
        if (this.size === 0) {
            this.alive = false;
        }
    }
}
