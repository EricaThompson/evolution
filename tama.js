class Tama {
    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.width = canvas.width / 30;
        this.height = canvas.height / 20;
        this.weight = .5;
        this.radius = 25;
    }

    update(){
        let curve = Math.sin(angle) * 20
        if (this.y > canvas.height - (this.height * 3) + curve){
            this.y = canvas.height - (this.height * 3) + curve;
            this. vy = 1;
        } else {
            this.vy += this.weight;
            this.vy *= .8;
            this.y += this.vy;
        }

        // stops from going over top
        // if (this.y < 0 + this.height){
        //     this.y = 0 + this.height;
        //     this.vy = 0;
        // }

        if(spacePressed && this.y > this.height - 100)
            this.boost();             
    }

    draw(){
        // ctx.fillStyle = 'black';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        const tama = new Image();
        tama.src = 'ASTRONAUT.png';
        ctx.drawImage(tama, this.x, this.y, 70 , 125);

    }

    boost(){
        this.vy -= 3;
        // handleExhaust();
        // const tama = new Image();
        // tama.src = 'ASTRONAUT.png';
        // ctx.drawImage(tama, this.x, this.y + 50, 70, 125);
    }
}

const tama = new Tama();
