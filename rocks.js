const rockArray = [];

class Rock {
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
        const rock = new Image();
        rock.src = 'ROCK.png';
        ctx.drawImage(rock, this.x, this.y, 25, 15);
    }

}

function handleRocks() {
    if (frame % 50 === 0) {
        rockArray.push(new Rock());
    }

    for (let i = 0; i < rockArray.length; i++) {
        rockArray[i].update();
        rockArray[i].draw();
    }

    //to not have too many rock for performance
    if (rockArray.length > 200) {
        rockArray.pop(rockArray[0])
    }
}