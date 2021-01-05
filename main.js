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

    //scorecard
    ctx.fillStyle = 'white';
    ctx.fillText(feeling + ' ' + life, 10, 30)
    ctx.fillText('😴 ' + rest, 10, 45)
    ctx.fillText('🚰 ' + thirst, 10, 60)
    ctx.fillText('💌 ' + love, 10, 75)
    ctx.fillText('evolve', 130, 13)
    ctx.beginPath();
    ctx.moveTo(120, 0);
    ctx.lineTo(120, 80);
    ctx.stroke();

    requestAnimationFrame(animate);
    // angle+=0.1;
    hue++;
    frame++;
    decline();
    handleFeeling();
    

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
        feeling = '😭'
    }
    
    if (life <= 0) {
        feeling = '😪'
    } else {

    }


}

function decline(){
    if (frame % 500 === 0) {
        rest--;
    }

    if (frame % 500 === 0) {
        thirst--;
    }

    if (frame % 500 === 0) {
        love--;
    }

    if (frame % 500 === 0) {
        life--;
    }
}
