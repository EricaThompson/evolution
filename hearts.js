
const heartArray = [];

class Heart {
    constructor() {
        this.x = canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 10;
        this.speed = Math.random() * 5 + 1;
        this.distance;
        this.counted = false;
    }

    update() {
        this.x -= this.speed;
        const dx = this.x - tama.x;
        const dy = this.y - tama.y;
        this.distance = Math.sqrt(dx * dx + dy * dy)
    }

    draw() {
        //hitbox
        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(this.x + 10, this.y + 10, this.radius, 0, Math.PI * 2)
        // ctx.fill();

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

    for (let i = 0; i < heartArray.length; i++) {
        //collision
        if (heartArray[i].distance < heartArray[i].radius + tama.radius) {
            if (!heartArray[i].counted) {
                love += 10;
                heartArray[i].counted = true;
                heartArray.splice(i, 1)
            }

        }
    }
}