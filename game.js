import {snakeSpeed, update as updateSnake, draw as drawSnake, snakeHead, snakeIntersection} from './snake.js'

import {update as updateFood, draw as drawFood} from './food.js'

import { outSideGrid} from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const soundOver = new Audio('soundover.wav')
const gameBoard = document.getElementById('board')

function main(currentTime){

    if(gameOver){
       soundOver.play();
       if(confirm('Oops You Loose! Press Ok To Play Again ')){
           window.location='/'
       }
       return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    if(secondsSinceLastRender < 1 /snakeSpeed){
        return;
    }
    lastRenderTime = currentTime;

    update();
    draw();
    collide();
}

window.requestAnimationFrame(main)

function update(){
    updateSnake();
    updateFood();
    
}

function draw(){
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function collide(){
    
    gameOver = outSideGrid(snakeHead()) || snakeIntersection();
   

}