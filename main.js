const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;


let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let rest = 25;
let thirst = 25;
let life = 100;
let love = 25;
let gamespeed = 2;
let feeling = '🙂';
// let statusColor = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';

const gradient = ctx.createLinearGradient(0,0,150,0);
gradient.addColorStop('0', '#cbc9c9');
gradient.addColorStop('1', '#CFE3CB');
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

    //scorecard
    ctx.fillStyle = 'white';
    ctx.fillText(feeling, 10, 30)
    ctx.fillText('😴 ', 10, 45)
    ctx.fillText('🚰 ', 10, 60)
    ctx.fillText('💌 ', 10, 75)
    ctx.fillText('evolve', 130, 13)
    ctx.beginPath();
    ctx.moveTo(110, 0);
    ctx.lineTo(110, 80);
    ctx.stroke();
    ctx.fillStyle = gradient;
    ctx.fillRect(25, 24, (life / 100) * 100, 5);
    ctx.fillRect(25, 39, (rest / 100) * 100, 5);
    ctx.fillRect(25, 54, (thirst / 100) * 100, 5);
    ctx.fillRect(25, 69, (love / 100) * 100, 5);
    if (handleGameOver()){
        return;
    }
    requestAnimationFrame(animate);
    // angle+=0.1;
    hue++;
    frame++;
    handleDecline();
    handleFeeling();
    handleGameOver(); 

}

animate();

window.addEventListener('keydown', function(e){
    if (e.code === "Space") spacePressed = true;
})

window.addEventListener('keyup', function (e) {
    if (e.code === "Space") spacePressed = false;
})


function handleFeeling(){
    //if statement is faster than switch
    //else if doesn't work..
    if (life < 90){
        feeling = '🙃'
    } 
    
    if (life < 80){
        feeling = '😒'
    }
    
    if (life < 70) {
        feeling = '😶'
    }
    
    if (life < 60) {
        feeling = '😐'
    }
    
    if (life < 50) {
        feeling = '😧'
    }
    
    if (life < 40) {
        feeling = '😞'
    }
    
    if (life < 30) {
        feeling = '😓'
    }
    
    if (life < 20) {
        feeling = '😥'
    }
    
    if (life < 10) {
        feeling = '😪'
    }
    
    if (life <= 1 ) {
        feeling = '😪'
        // ctx.font = '25px helvetica'
    } 
}

function handleDecline(){
    if (frame % 50 === 0) {
        rest--;
    }

    if (frame % 50 === 0) {
        thirst--;
    }

    if (frame % 50 === 0) {
        love--;
    }

    if (frame % 50 === 0) {
        life--;
    }
}

function handleGameOver(){
    if (thirst <= 0) {
        ctx.fillStyle = 'black';
        ctx.fillText("You're too thirsty! Try again!", 160, canvas.height / 2 - 10);
        return true;
    } 

    if (rest <= 0) {
        ctx.fillStyle = 'black';
        ctx.fillText('Not enough sleep! Try again!', 160, canvas.height / 2 - 10);
        return true;
    }

    if (love <= 0) {
        ctx.fillStyle = 'black';
        ctx.fillText('Your heart was broken! Try again!', 160, canvas.height / 2 - 10);
        return true;
    }
}



