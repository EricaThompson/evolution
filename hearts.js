
const heartArray = [];

class Heart {
    constructor() {
        this.x = canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 25;
        this.speed = Math.random() * 5 + 1;
        this.distance;
        this.color = 'hsla(' + hue + ', 100%, 50%, 0.8)';

    }

    update() {
        this.x -= this.speed;
    }

    draw() {
        const heart = new Image();
        heart.src = 'HEART.png';
        ctx.drawImage(heart, this.x, this.y, canvas.height / 20, canvas.width / 30);
    }

}

function handleHearts() {
    if (frame % 50 === 0) {
        heartArray.push(new Heart());
    }

    for (let i = 0; i < heartArray.length; i++) {
        heartArray[i].update();
        heartArray[i].draw();
    }

    //to not have too many heart for performance
    if (heartArray.length > 200) {
        heartArray.pop(heartArray[0])
    }
}