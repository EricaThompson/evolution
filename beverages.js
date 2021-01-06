const beverageArray = [];

class Beverage {
    constructor() {
        this.x = canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 25;
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
        const beverage = new Image();
        beverage.src = 'BEVERAGE.png';
        ctx.drawImage(beverage, this.x, this.y, 25, 15);
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
    if (beverageArray.length > 200) {
        beverageArray.pop(beverageArray[0])
    }

    for (let i = 0; i < beverageArray.length; i++) {
        //collision
        if (beverageArray[i].distance < beverageArray[i].radius + tama.radius) {
            if (!beverageArray[i].counted) {
                thirst++;
                beverageArray[i].counted = true;
                beverageArray.splice(i, 1)
            }

        }
    }
}