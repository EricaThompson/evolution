const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startBtn = document.querySelector('.start-button')
const welcome = document.querySelector('.welcome');
const gameOverContainer = document.querySelector('.game-over')
const gameOverText = document.querySelector('.game-over-text');
const tryAgain = document.querySelector('.try-again');
const congrats = document.querySelector('.congrats');

const scorecard = document.querySelector('.scorecard');
const loveScore = document.querySelector('.love-score');
const age = document.querySelector('.year-count');
const helper = document.querySelector('.helper')
const loveHelper = document.querySelector('.love-helper')
const healthHelper = document.querySelector('.health-helper')
const restHelper = document.querySelector('.rest-helper')
const thirstHelper = document.querySelector('.thirst-helper')
const evolver = document.querySelector('.evolver')
const healthBar = document.querySelector('.health')
const loveProgressBar = document.querySelector('#love-progress');
const healthProgressBar = document.querySelector('#health-progress')
const restBar = document.querySelector('.rest')
const restProgressBar = document.querySelector('#rest-progress')
const thirstBar = document.querySelector('.thirst')
const thirstProgressBar = document.querySelector('#thirst-progress')
// healthHelper.classList.add('disappear')
// thirstHelper.classList.add('disappear')
// loveHelper.classList.add('disappear')
// restHelper.classList.add('disappear')

// helper.classList.add('disappear')

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
let life = 25 ;
let level = 0;
let year = 0;
let time = 0;
healthProgressBar.value = life;

// let statusColor = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
let gameStarted = false;
let levelStarted = false;
let gameOver = false;

const gradient = ctx.createLinearGradient(0,0,150,0);
gradient.addColorStop('0', 'transparent');
gradient.addColorStop('1', '#CFE3CB');
// gradient.addColorStop('0.55', '#4040ff');
// gradient.addColorStop('0.6', '#000');
// gradient.addColorStop('0.9', '#fff');

// canvas.height - 90;


function background(){
    tryAgain.classList.add('disappear')
    if (gameStarted) {
        return;
    }
    
    
    //! why are the beverages disappearing in the center? tama?
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // handleHearts();
    // handleBeverages();
    // handlePillows();
    // tama.update();
    // tama.draw(); 
    // level = 2;

    handleStars();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    // handleBeverages();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    // handleBeverages();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    // handleBeverages();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    // handleBeverages();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    // handleBeverages();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleStars();
    // handleBeverages();
    requestAnimationFrame(background);
    // angle+=0.1;
    frame++;

}


function animate(){
    scorecard.classList.remove('disappear')
    // console.log(level)
    welcome.classList.add('disappear')
    ctx.clearRect(0,0, canvas.width, canvas.height);
    healthHelper.classList.add('disappear')
    thirstHelper.classList.add('disappear')
    loveHelper.classList.add('disappear')
    restHelper.classList.add('disappear')
    healthBar.classList.add('disappear')
    canvas.classList.remove('level-1')
    canvas.classList.remove('level-2')
    canvas.classList.remove('level-3')
    thirstBar.classList.add('disappear')
    restBar.classList.add('disappear')

    // ctx.fillRect(10,canvas.height - 90,50,50);
    // handleObstacles();
    handleExhaust();
    tama.update();
    tama.draw();
    // console.log('level: ', level)

    //1. level
    
    if (level === 0){ 
        canvas.classList.add('level-0')
        

        age.innerHTML = year;
        // loveScore.innerHTML = `love`;
        // loveProgressBar.value -= love;

        handleHearts();
        handleStars();
        handleLoveHelper(); 

        //score
        // ctx.fillRect(25, 69, (love / 100) * 100, 5);
        // ctx.fillText('💌 ', 10, 75)
    }

    if (level === 1){
        healthBar.classList.remove('disappear')
        // love = 25;
        // life = 25;
        // scorecard.classList.remove('disappear')
        // life = 100;
        if (!levelStarted) {
            // life = 100;
            // // rest = 25;
            // // thirst = 25;
            // love = 25;
            // gamespeed = 2;
            // feeling = '🙂';
            // damage = 0;
            // canvas.classList.remove('level-0')
            // canvas.classList.add('level-1')
            // levelStarted = true;
        }

        canvas.classList.add('level-1')
        handleHearts();
        handleStars();
        handleRocks();
        handleLoveHelper();
        handleHealthHelper();
        
        //score
        ctx.fillStyle = gradient;
        // ctx.fillText(feeling, 10, 30)
        // ctx.fillRect(25, 24, ((life - damage) / 100) * 100, 5);
        // ctx.fillRect(25, 69, (love / 100) * 100, 5);
        // ctx.fillText('💌 ', 10, 75)
        // ctx.fillText('age ', 10, 15)
        levelStarted = false;
    }

    if (level === 2){
        //background
        canvas.classList.add('level-2')
        restBar.classList.remove('disappear')
        thirstBar.classList.remove('disappear')
        healthBar.classList.remove('disappear')
        //draw
        handlePillows();
        handleBeverages();
        handleHearts();
        handleStars();
        handleRocks();

        //helper
        handleLoveHelper();
        handleHealthHelper();
        handleThirstHelper();
        handleRestHelper();

        //score
        ctx.fillStyle = gradient;
        // ctx.fillText(feeling, 10, 30)
        // ctx.fillRect(25, 24, ((life - damage) / 100) * 100, 5);
        // ctx.fillText('😴 ', 10, 45)
        // ctx.fillRect(25, 39, (rest / 100) * 100, 5);
        // ctx.fillText('🚰 ', 10, 60)
        // ctx.fillRect(25, 54, (thirst / 100) * 100, 5);
        // ctx.fillRect(25, 69, (love / 100) * 100, 5);
        // ctx.fillText('💌 ', 10, 75)
        levelStarted = false;
    }

    if (level === 3){
        canvas.classList.add('level-3')
        congrats.classList.remove('disappear')
        ctx.fillStyle = gradient;
        // ctx.fillText('🎉', 10, 45)
        tryAgain.classList.remove('disappear')
        scorecard.classList.add('disappear')


    }


    // if (level > 1){
    //     if (!levelStarted){

    //         rest = 25;
    //         thirst = 25;
    //         love = 25;
    //         gamespeed = 2;
    //         feeling = '🙂';
    //         damage = 0;
    //         canvas.classList.add('level-1')
    //         levelStarted = true;
    //     }
    //     //draw
    //     handleHearts();
    //     handleStars();
    //     handlePillows();
    //     handleBeverages(); 
    //     handleRocks();
    //     handleThirstHelper();
    //     handleRestHelper();
    //     handleLoveHelper();
        
    //     //scorecard
    //     ctx.fillStyle = gradient;
    //     ctx.fillText('😴 ', 10, 45)
    //     ctx.fillText('🚰 ', 10, 60)
    //     ctx.fillText('age ', 10, 15)
    //     ctx.fillRect(25, 39, (rest / 100) * 100, 5);
    //     ctx.fillRect(25, 54, (thirst / 100) * 100, 5);
        
    //     ctx.fillStyle = gradient;
    //     handleHealthHelper();
        
    // }

    
    ctx.fillStyle = gradient;

    //scorecard
    // ctx.fillStyle = 'white';
    // ctx.fillText('😴 ', 10, 45)
    // ctx.fillText('🚰 ', 10, 60)
    // ctx.fillText(feeling, 10, 30)
    // ctx.fillText('💌 ', 10, 75)
    // ctx.fillRect(25, 24, (life / 100) * 100, 5);
    // ctx.fillText('evolve', 130, 15)
    // ctx.beginPath();
    // ctx.moveTo(125, 0);
    // ctx.lineTo(125, 80);
    // ctx.strokeStyle = '#DBBC98'
    // ctx.stroke();
    // ctx.fillStyle = gradient;
    
    // ctx.fillRect(25, 69, (love / 100) * 100, 5);

    handleDecline();
    if (handleGameOver()){
        gameOver = true;
        tryAgain.classList.remove('disappear')
        return;
    }
    requestAnimationFrame(animate);
    // angle+=0.1;
    hue++;
    frame++;
    handleFeeling();
    handleEvolution();
    // handleGameOver(); 
    skipLevel();
    addStats();
    handleAge();
}

function handleAge(){
    if (frame % 2050 === 0) {
        year++;
    }
}

function addStats(){
    window.addEventListener('keydown', (e) => {
        if (e.code === "KeyL") {
            love += 1
            life += 1
            rest += 1
            thirst += 1
        }
        
    })
}


// startBtn.addEventListener('click', animate, handleEndBackground)

if (!gameStarted) background();

if (gameOver) tryAgain.classList.remove('disappear')

//space bar players
window.addEventListener('keydown', function(e){
    if ((e.code === "Space" && !gameStarted) ) {
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
        tryAgain.classList.add('disappear')
        gameOverContainer.classList.add('disappear')
        animate()
    } 

    // if (e.code === "Space" && gameOver) {
    //     frame = 0;
    //     rest = 25;
    //     thirst = 25;
    //     love = 25;
    //     gamespeed = 2;
    //     feeling = '🙂';
    //     damage = 0;
    //     // let life = 100;
    //     life = 1;
    //     gameStarted = true;
    //     gameOver = false;
    //     tryAgain.classList.add('disappear')
    //     gameOverContainer.classList.add('disappear')
    //     animate()
    // }
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
        life = 25;
        level = 0;
        gameStarted = true;
        gameOver = false;
        tryAgain.classList.add('disappear')
        gameOverContainer.classList.add('disappear')


        animate()
    }

    if (level === 3){
        window.location.reload()
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

window.addEventListener('touchstart', function () {
    spacePressed = true;
})

window.addEventListener('touchend', function () {
    spacePressed = false;
})

function skipLevel(){
    window.addEventListener('keydown', function (e) {
        if (e.code === "ArrowRight" && !levelStarted) {
            level++;
            levelStarted = true;
        }

        if (e.code === "ArrowLeft" && levelStarted) {
            level--;
            levelStarted = false;
        }
    }) 
}


function handleEvolution(){
    // life > 100 && love > 100 && thirst > 100 && rest > 100
        if (level === 0){   
            if (love >= 100) {
                // ctx.fillStyle =  '#DBBC98';
                // ctx.fillText("Press up or click to evolve!", 160, canvas.height / 2 - 10  );
                evolver.classList.remove('disappear')
            
                evolver.addEventListener('click', function (e) {
                    if (!levelStarted){
                        level++;
                        levelStarted = true;
                        life = 25
                        love = 25
                        thirst = 25
                        rest = 25
                    }

                    // if (e.code === "ArrowUp" && !levelStarted) {
                    // }
                    
                })

                window.addEventListener('keydown', function(e){
                    if (e.code === 'ArrowUp' && !levelStarted){
                        level++;
                        levelStarted = true;
                        evolver.classList.add('disappear')
                        life = 25
                        love = 25
                        thirst = 25
                        rest = 25

                    }
                })
            } else {
                evolver.classList.add('disappear')
            }
        }

        if (level === 1){

            if (love >= 100 && life >= 100) {
                evolver.classList.remove('disappear')

                evolver.addEventListener('click', function (e) {
                    if (!levelStarted) {
                        level++;
                        levelStarted = true;
                    }

                    // if (e.code === "ArrowUp" && !levelStarted) {
                    // }
                })

                window.addEventListener('keydown', function (e) {
                    if (e.code === 'ArrowUp' && !levelStarted) {
                        level++;
                        levelStarted = true;
                        evolver.classList.add('disappear')
                    }
                })
            } else {
                evolver.classList.add('disappear')
            }
        }

        if (level > 1){
            if (love >= 100 && life >= 100 && rest >= 100 && thirst >= 100) {
                evolver.classList.remove('disappear')

                evolver.addEventListener('click', function (e) {
                    if (!levelStarted) {
                        level++;
                        levelStarted = true;
                    }

                    // if (e.code === "ArrowUp" && !levelStarted) {
                    // }
                })

                window.addEventListener('keydown', function (e) {
                    if (e.code === 'ArrowUp' && !levelStarted) {
                        level++;
                        levelStarted = true;
                        evolver.classList.add('disappear')
                    }
                })
            } else {
                evolver.classList.add('disappear')
            }
        }
}


function handleLoveHelper() {
    if (love <= 20) {
        // ctx.fillStyle = '#DBBC98';
        // ctx.fillText("i'm sad!", 160, canvas.height / 2 + 10);
        // helper.classList.remove('disappear')
        loveHelper.classList.remove('disappear')
        return true;
    } else {

        loveHelper.classList.add('disappear')
    }
}

function handleHealthHelper() {
    if (life <= 20 && level > 0) {
        // ctx.fillStyle = '#DBBC98';
        // ctx.fillText("i'm injured!", 160, canvas.height / 2 + 20);
        // helper.classList.remove('disappear')
        healthHelper.classList.remove('disappear')
        return true;
    } else {
        healthHelper.classList.add('disappear')

    }

}

function handleThirstHelper(){
    if (thirst <= 20 && level > 1) {
        // console.log('thirst helper?')
        // ctx.fillStyle = '#DBBC98';
        // ctx.fillText("i'm thirsty!", 160, canvas.height / 2 - 10);
        // helper.classList.remove('disappear')
        thirstHelper.classList.remove('disappear')
        return true;
    }
}

function handleRestHelper(){
    if (rest <= 20 && level > 1) {
        // console.log('rest helper?')
        // ctx.fillStyle = '#DBBC98';
        // ctx.fillText("i'm tired!", 160, canvas.height / 2);
        // helper.classList.remove('disappear')
        restHelper.classList.remove('disappear')
        return true;
    }
}




function handleFeeling(){
    // life = (rest + thirst + love / 5  ) - damage;
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
    //2. level
    if (level <= 2){
        if (frame % 50 === 0) {
            love--;
            loveProgressBar.value = love;
            // console.log('love: ', love)
        }
    } 
    
    if (level > 0 && level <= 2 && frame % 50 === 0) {
        life--;
        healthProgressBar.value = life;
        console.log("life: ", life)
    }

    if (level > 1 && level <= 2 && frame % 50 === 0){
        thirst--;
        thirstProgressBar.value = thirst;
        rest--;
        restProgressBar.value = rest;
        console.log(thirst, rest)


    }

    // if (level === 2 && frame % 50 === 0) {
    //     love--;
    //     life--;
    //     rest--;
    //     thirst--;
    // }

    // if (level > 0 && frame % 50 === 0) {
    // } 
}

// gameOverText.innerHTML = 'Your heart was broken! Try again!';


function handleGameOver(){
    if (level >= 0){
        if (love <= 0) {
            // ctx.fillStyle = '#DBBC98';
            // ctx.fillText('Your heart was broken! Try again!', 160, canvas.height / 2 - 10);
            tryAgain.classList.remove('disappear')
            gameOverContainer.classList.remove('disappear')
            gameOverText.innerHTML = 'my heart is broken! try again!';
            return true;
        }
    }
    
    if (level > 0){
        if (life <= 0){
        // ctx.fillStyle = '#DBBC98';
        // ctx.fillText("You fainted! Try again!", 160, canvas.height / 2 - 10);
            gameOverContainer.classList.remove('disappear')
            gameOverText.innerHTML = 'i fainted! try again!';
            return true;
        }

    }

    if (level > 1){
        if (thirst <= 0) {
            // ctx.fillStyle = '#DBBC98';
            // ctx.fillText("You're too thirsty! Try again!", 160, canvas.height / 2 - 10);
            gameOverContainer.classList.remove('disappear')
            gameOverText.innerHTML = "i'm too thirsty! try again!";
            return true;
        } 
    
        if (rest <= 0) {
            // ctx.fillStyle = '#DBBC98';
            // ctx.fillText('Not enough sleep! Try again!', 160, canvas.height / 2 - 10);
            gameOverContainer.classList.remove('disappear')
            gameOverText.innerHTML = "i'm too tired! try again!";
            return true;
        }
    }


        // if (love <= 0) {
        //     // ctx.fillStyle = '#DBBC98';
        //     // ctx.fillText('Your heart was broken! Try again!', 160, canvas.height / 2 - 10);

        //     return true;
        // }
    
}



