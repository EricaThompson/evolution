# Evolution README

Evolution is an original game concept inspired by Tamagotchi and Flappy Bird using only Vanilla JS, HTML Canvas and CSS.

A live link to the site is hosted on Github pages: [evolution](https://ericathompson.github.io/evolution/).

## Technologies
This game was created entirely with Vanilla JS without out the use of any frameworks. All graphics are made and rendered by JS and CSS.

## Instructions
Clone the repo and run the HTML file in your browser. 

## Feature Highlight No. 1
There are multiple levels of play and difficulty.

## Feature Highlight No. 2
You can decide between two modes of play, either campaign which is more like Tamagotchi or unlimited which is more like Flappy bird.

## Code Snippets

```js
function handleEvolution(){
        if (level === 0){   
            if (love >= 100) {
                evolver.classList.remove('disappear')           
                evolver.addEventListener('click', function () {
                    if (!levelStarted){
                        level++;
                        levelStarted = true;
                        life = 25
                        love = 25
                        thirst = 25
                        rest = 25
                    }               
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
                evolver.addEventListener('click', function () {
                    if (!levelStarted) {
                        level++;
                        levelStarted = true;
                    }
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
```

## Future Directions
I would like to make more levels, powerups and have a global high score.
