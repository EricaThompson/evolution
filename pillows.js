const pillowArray = [];

class Pillow {
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
        const pillow = new Image();
        pillow.src = 'PILLOW.png';
        ctx.drawImage(pillow, this.x, this.y, 25, 15);
    }

}

function handlePillows() {
    if (frame % 50 === 0) {
        pillowArray.push(new Pillow());
    }

    for (let i = 0; i < pillowArray.length; i++) {
        pillowArray[i].update();
        pillowArray[i].draw();
    }

    //to not have too many pillow for performance
    if (pillowArray.length > 200) {
        pillowArray.pop(pillowArray[0])
    }
}