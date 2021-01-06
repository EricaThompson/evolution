const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startBtn = document.querySelector('.start-button')
const welcome = document.querySelector('.welcome');
const gameOverText = document.querySelector('.game-over');
const tryAgain = document.querySelector('.try-again')

/*score is based on how many years 
it took you to become the astronaut.*/

canvas.width = 600;
canvas.height = 400;


let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let rest = 25;
let thirst = 25;
let love = 25;
let gamespeed = 2;
let feeling = '🙂';
let damage = 0;
let life = 1 ;
let level = 1;
let age = 0;

// let statusColor = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
let gameStarted = false;
let levelStarted = false;
let gameOver = false;

const gradient = ctx.createLinearGradient(0,0,150,0);
gradient.addColorStop('0', '#002554');
gradient.addColorStop('1', '#CFE3CB');
// gradient.addColorStop('0.55', '#4040ff');
// gradient.addColorStop('0.6', '#000');
// gradient.addColorStop('0.9', '#fff');

// canvas.height - 90;


function background(){
    gameOverText.classList.add('disappear')
    if (gameStarted) {
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    requestAnimationFrame(background);
    // angle+=0.1;
    frame++;

}

function animate(){
    welcome.classList.add('disappear')
    ctx.clearRect(0,0, canvas.width, canvas.height);

    // ctx.fillRect(10,canvas.height - 90,50,50);
    // handleObstacles();
    handleExhaust();
    tama.update();
    tama.draw();
    
    if (level === 0){
        handleHearts();
        handleStars();
    }

    if (level > 0){
        if (!levelStarted){
            rest = 25;
            thirst = 25;
            love = 25;
            gamespeed = 2;
            feeling = '🙂';
            damage = 0;
            levelStarted = true;
        }
        handleHearts();
        handleStars();
        handlePillows();
        handleBeverages();
        handleRocks();
        handleThirstHelper();
        handleRestHelper();
        ctx.fillStyle = gradient;
        ctx.fillText(feeling, 10, 30)
        ctx.fillText('😴 ', 10, 45)
        ctx.fillText('🚰 ', 10, 60)
        ctx.fillRect(25, 39, (rest / 100) * 100, 5);
        ctx.fillRect(25, 54, (thirst / 100) * 100, 5);
        ctx.fillRect(25, 24, (life / 100) * 100, 5);
        ctx.fillStyle = gradient;
        handleHealthHelper();
        handleLoveHelper();
    }

    
    // ctx.fillStyle = gradient;

    //scorecard
    ctx.fillStyle = 'white';
    // ctx.fillText(feeling, 10, 30)
    // ctx.fillText('😴 ', 10, 45)
    // ctx.fillText('🚰 ', 10, 60)
    ctx.fillText('💌 ', 10, 75)
    ctx.fillText('evolve', 130, 15)
    ctx.beginPath();
    ctx.moveTo(125, 0);
    ctx.lineTo(125, 80);
    ctx.strokeStyle = '#DBBC98'
    ctx.stroke();
    ctx.fillStyle = gradient;
    
    ctx.fillRect(25, 69, (love / 100) * 100, 5);
    if (handleGameOver()){
        gameOver = true;
        gameOverText.classList.remove('disappear')
        return;
    }
    requestAnimationFrame(animate);
    // angle+=0.1;
    hue++;
    frame++;
    handleDecline();
    handleFeeling();
    handleEvolution();
    
    
    handleGameOver(); 

}


// startBtn.addEventListener('click', animate, handleEndBackground)

if (!gameStarted) background();

if (gameOver) gameOverText.classList.remove('disappear')

//space bar players
window.addEventListener('keydown', function(e){
    if ((e.code === "Space" && !gameStarted) ) {
        // console.log('pressed')
        gameStarted = true; 
        gameOver = false;
        animate()
        // handleEndBackground()
    } 

    if (e.code === "Space" && gameOver) {
        frame = 0;
        rest = 25;
        thirst = 25;
        love = 25;
        gamespeed = 2;
        feeling = '🙂';
        damage = 0;
        // let life = 100;
        life = 1;
        gameStarted = true;
        gameOver = false;
        gameOverText.classList.add('disappear')
        animate()
        
    }

})

//click players
startBtn.addEventListener('mousedown', function (e) {
    if ((!gameStarted)) {
        // console.log('pressed')
        gameStarted = true;
        gameOver = false;
        animate()
        // handleEndBackground()
    }

    
})

tryAgain.addEventListener('click', function(){
    if (gameOver) {
        frame = 0;
        rest = 25;
        thirst = 25;
        love = 25;
        gamespeed = 2;
        feeling = '🙂';
        damage = 0;
        // let life = 100;
        life = 1;
        gameStarted = true;
        gameOver = false;
        gameOverText.classList.add('disappear')
        animate()
    }
})


window.addEventListener('keydown', function(e){
    if (e.code === "Space") spacePressed = true;
})

window.addEventListener('keyup', function (e) {
    if (e.code === "Space") spacePressed = false;
})

window.addEventListener('mousedown', function () {
    spacePressed = true;
})

window.addEventListener('mouseup', function () {
    spacePressed = false;
})





function handleEvolution(){
    // life > 100 && love > 100 && thirst > 100 && rest > 100
    if (love > 100) {
        ctx.fillStyle =  '#DBBC98';
        ctx.fillText("Press up or click to evolve!", 160, canvas.height / 2 - 10  );

        window.addEventListener('keydown', function (e) {
            if (e.code === "ArrowUp") level++
        }) 

    }

}


function handleThirstHelper(){
    if (thirst < 20) {
        ctx.fillStyle = '#DBBC98';
        ctx.fillText("i'm thirsty!", 160, canvas.height / 2 - 10);
        return true;
    }

    
}

function handleRestHelper(){
    if (rest < 20) {
        ctx.fillStyle = '#DBBC98';
        ctx.fillText("i'm tired!", 160, canvas.height / 2);
        return true;
    }
}

function handleLoveHelper() {
    if (love <= 25) {
        ctx.fillStyle = '#DBBC98';
        ctx.fillText("i'm sad!", 160, canvas.height / 2 + 10);
        return true;
    }
}

function handleHealthHelper(){
    if (life < 20) {
        ctx.fillStyle = '#DBBC98';
        ctx.fillText("i'm injured!", 160, canvas.height / 2 + 20);
        return true;
    }
}


function handleFeeling(){
    life = (rest + thirst + love / 5  ) - damage;
    feeling = '🙂';
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
    if (level === 0){
        if (frame % 50 === 0) {
            love--;
        }
    } 
    
        if (level > 0 && frame % 50 === 0) {
            rest--;
        }

        if (level > 0 && frame % 50 === 0) {
            thirst--;
        }


        if (level > 0 && frame % 50 === 0) {
            life--;
        }


    
}

function handleGameOver(){
    if (level === 0){
        if (love <= 0) {
            ctx.fillStyle = '#DBBC98';
            ctx.fillText('Your heart was broken! Try again!', 160, canvas.height / 2 - 10);
            return true;
        }
    }
    
    if (level > 0){
        if (life <= 0){
        ctx.fillStyle = '#DBBC98';
        ctx.fillText("You fainted! Try again!", 160, canvas.height / 2 - 10);
        return true;
        }

        if (thirst <= 0) {
            ctx.fillStyle = '#DBBC98';
            ctx.fillText("You're too thirsty! Try again!", 160, canvas.height / 2 - 10);
            return true;
        } 

        if (rest <= 0) {
            ctx.fillStyle = '#DBBC98';
            ctx.fillText('Not enough sleep! Try again!', 160, canvas.height / 2 - 10);
            return true;
        }

        if (love <= 0) {
            ctx.fillStyle = '#DBBC98';
            ctx.fillText('Your heart was broken! Try again!', 160, canvas.height / 2 - 10);
            return true;
        }
    }
}



