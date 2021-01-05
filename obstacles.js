const obstaclesArray = [];

class Obstacle {
    constructor(){
        this.top = (Math.random() * canvas.height/3) + 20;
        this.bottom = (Math.random() * canvas.height/3) + 20;
        this.x = canvas.width;
        this.y = canvas.height;
        this.width = 20;
        // this.  color = 'hsl(' + hue + '100%, 50%';
        this.color = 'hsla(' + hue + ', 100%, 50%, 0.8)'
        this.counted = false;
    }

    draw(){
        // const bang = new Image();
        // bang.src = 'star.png';
        // ctx.drawImage(bang, Math.floor(Math.random() * (canvas.width - 25)), Math.floor(Math.random() * (canvas.height - 25)), 250, 250);
        // ctx.drawImage(bang, tama.x, tama.y, 50, 50);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top)
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }

    update(){
        this.x -= gamespeed ;
        if (!this.counted && this.x < tama.x){
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

function handleObstacles(){
    //happens periodically, every 50 frames
    if (frame%50 === 0 ){
        obstaclesArray.unshift(new Obstacle);
    }

    for (let i = 0; i < obstaclesArray.length; i++){
        obstaclesArray[i].update();
    }

    //to not have too many obstacles for performance
    if (obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0])
    }
}

