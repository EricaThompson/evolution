const starsArray = [];
// const bang = new Image();
// bang.src = './src/images/STAR.png';

class Star {
    constructor(){
        this.x = canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 25;
        this.speed = Math.random() * 5 + 1;
        this.distance;
        this.color = 'hsla(' + hue + ', 100%, 50%, 0.8)';
        
    }

    update(){
        this.x -= this.speed;
    }

    draw(){

        const bang = new Image();
        bang.src = './public/src/images/STAR.png';
        ctx.drawImage(bang, this.x, this.y, 30, 30);

    }

}

function handleStars(){
    if (frame % 50 === 0){
        starsArray.push(new Star());
    }
    
    for (let i = 0; i < starsArray.length; i++) {
        starsArray[i].update();
        starsArray[i].draw();
    }

    //to not have too many stars for performance
    if (starsArray.length > 300) {
        starsArray.pop(starsArray[0])
    }
}