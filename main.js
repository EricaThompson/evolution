const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;


let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let rest = 0;
let gamespeed = 2;

// const gradient = ctx.createLinearGradient(0,0,0,70);
// gradient.addColorStop('0.4', '#fff');
// gradient.addColorStop('0.5', '#000');
// gradient.addColorStop('0.55', '#4040ff');
// gradient.addColorStop('0.6', '#000');
// gradient.addColorStop('0.9', '#fff');

// canvas.height - 90;

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);

    // ctx.fillRect(10,canvas.height - 90,50,50);
    // handleObstacles();
    handleExhaust();
    tama.update();
    tama.draw();
    handleStars();
    handlePillows();
    handleBeverages();
    handleHearts();
    handleRocks();
    // ctx.fillStyle = gradient;
    ctx.fillStyle = 'black';
    ctx.fillText('rest: ' + rest, 10, 50)
    // ctx. font = '90px Georgia';
    // ctx.strokeText(score, 450, 70)
    // ctx.fillText(score, 450, 70);
    // handleCollisions();
    // if (handleCollisions()) return;
    requestAnimationFrame(animate);
    // angle+=0.1;
    hue++;
    frame++;
    

}
animate();

window.addEventListener('keydown', function(e){
    if (e.code === "Space") spacePressed = true;
})


window.addEventListener('keyup', function (e) {
    if (e.code === "Space") spacePressed = false;
})

const bang = new Image();
bang.src = 'star.png';

function handleCollisions(){
    for (let i = 0; i < obstaclesArray.length; i++){
        if (tama.x < obstaclesArray[i].x + obstaclesArray[i].width && tama.x + tama.width > obstaclesArray[i].x &&
            ((tama.y < 0 + obstaclesArray[i].top && tama.y + tama.height > 0) ||
                (tama.y > canvas.height - obstaclesArray[i].bottom &&
                    tama.y + tama.height < canvas.height))){
                        ctx.drawImage(bang, tama.x, tama.y, 50, 50);
                        // ctx.font = '25px Georgia';
                        // ctx.fillStyle = 'black';
                        // ctx.fillText('Game Over, your score is ' + score, 160, canvas.height/2 -10);

                        return true;
                    }
    }
}