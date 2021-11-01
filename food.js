import {onSnake, expandSnake } from './snake.js'
import { randomGridPosition} from './grid.js'

let food = {x:15, y:13};
const snakeIncrease =1;
const foodSound = new Audio('foodsound.wav')

export function update(){
   if(onSnake(food)){
       foodSound.play();
       expandSnake(snakeIncrease)
       food = getRandomFood();
   }
}

export function draw(gameBoard){
  
       const foodElement = document.createElement('div')
       foodElement.style.gridRowStart = food.y;
       foodElement.style.gridColumnStart = food.x;
       foodElement.classList.add('food')
       gameBoard.appendChild(foodElement)
  
}

function getRandomFood(){
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}