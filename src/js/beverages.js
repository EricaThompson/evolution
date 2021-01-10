const beverageArray = [];
const beverage = new Image();
beverage.src = './public/src/images/BEVERAGE.png';

class Beverage {
    constructor() {
        this.x = canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 7;
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
        // ctx.fillStyle = 'white';
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        // ctx.fill();
        ctx.drawImage(beverage, this.x - 11, this.y - 10, canvas.width / 23, canvas.height / 25);
    }

}

function handleBeverages() {
    if (frame % 50 === 0) {
        beverageArray.push(new Beverage());
    }

    for (let i = 0; i < beverageArray.length; i++) {
        beverageArray[i].update();
        beverageArray[i].draw();
    }

    //to not have too many beverages for performance
    if (beverageArray.length > 300) {
        beverageArray.pop(beverageArray[0])
    }

    for (let i = 0; i < beverageArray.length; i++) {
        //collision
        if (beverageArray[i].distance < beverageArray[i].radius + tama.radius) {
            if (!beverageArray[i].counted) {
                thirst += 10;
                beverageArray[i].counted = true;
                beverageArray.splice(i, 1)
            }

        }
    }
}