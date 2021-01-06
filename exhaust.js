const exhaustArray = [];

class Exhaust {
    constructor(){
        this.x = tama.x - 8;
        this.y = tama.y - 10;
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1) - 0.5;
        this.color = 'hsla(' + hue +', 100%, 50%, 0.8)';
    }

    update(){
        this.x -= gamespeed;
        this.y += this.speedY;
    }

    
    draw(){
        ctx.fillStyle = this.color;
        if (!spacePressed) ctx.fillStyle = 'transparent';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleExhaust(){
    exhaustArray.unshift(new Exhaust);
    for (i = 0; i < exhaustArray.length; i++){
        exhaustArray[i].update();
        exhaustArray[i].draw();
    }

    if (exhaustArray.length > 10 ){
        for (let i = 0; i < 20; i++){
            exhaustArray.pop(exhaustArray[i])
        }  
    }
}