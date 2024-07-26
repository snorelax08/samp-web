const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Raindrop {
    constructor(x, y, speed, length, opacity) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.length = length;
        this.opacity = opacity;
    }

    fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(174,194,224,${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
    }
}

const raindrops = [];
for (let i = 0; i < 500; i++) {
    raindrops.push(new Raindrop(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 4 + 1, Math.random() * 20 + 10, Math.random() * 0.5 + 0.2));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    raindrops.forEach(raindrop => {
        raindrop.fall();
        raindrop.draw();
    });
    requestAnimationFrame(animate);
}

animate();
