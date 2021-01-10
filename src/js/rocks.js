const rockArray = [];
const rockImage = new Image();
rockImage.src = './public/src/images/rolling-rock.png'

class Rock {
    constructor() {
        this.x = canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 5;
        this.speed = Math.random() * 5 + 1;
        this.distance;
        this.counted = false;
        this.frame = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteWidth = 34;
        this.spriteHeight = 32;
    }

    update() {
        this.x -= this.speed;
        const dx = this.x - tama.x;
        const dy = this.y - tama.y;
        this.distance = Math.sqrt(dx * dx + dy * dy)

        //cycle through x frames
        if (frame % 5 === 0 ){
            this.frame++;
            if (this.frame >= 12) this.frame = 0
            
            //cycle through x axis
            if (this.frame === 2 || this.frame === 5 || this.frame === 8 || this.frame === 11) {
                this.frameX = 0
            } else {
                this.frameX++;
            }
        
            //cycle through y axis
            if (this.frame < 2) this.frameY = 0;
            else if (this.frame < 5) this.frameY = 1;
            else if (this.frame < 8) this.frameY = 2;
            else if (this.frame < 11) this.frameY = 3;
            else this.frameY = 0;
            
        }
    }

    draw() {
        //hitbox
        // ctx.fillStyle = 'white';
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        // ctx.fill();

        ctx.drawImage(rockImage, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - 10, this.y - 11, canvas.width / 18 , canvas.height / 20)
        //old rock
        // const rock = new Image();
        // rock.src = 'ROCK.png';
        // ctx.drawImage(rock, this.x, this.y, canvas.height / 20, canvas.width / 30);
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
    if (rockArray.length > 300) {
        rockArray.pop(rockArray[0])
    }

    for (let i = 0; i < rockArray.length; i++) {
        //collision
        if (rockArray[i].distance < rockArray[i].radius + tama.radius) {
            if (!rockArray[i].counted) {
                life -= 25;
                // healthProgressBar -= 25;

                rockArray[i].counted = true;
                rockArray.splice(i, 1);

                if (mode === 'unlimited') {
                    damage += 1000;
                    // console.log('rocks unl damage', damage)
                    // healthProgressBar.level = life;
                }
            }
            
            

        }
    }
}