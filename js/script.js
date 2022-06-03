// Game Constants & Variables
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio("food.mp3");
const gameOverSound = new Audio("gameover.mp3");
const moveSound = new Audio("move.mp3");
const musicSound = new Audio("music.mp3");
let speed = 2;
let score = 0;
let lastPaintTime = 0;

let snakeArr = [
  {
    x: 13,
    y: 15,
  },
];
food = { x: 6, y: 7 };

// game Functions
function main(ctime) {
  window.requestAnimationFrame(main);
  //   console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}


function isCollide(sarr){
  return false;

}


function gameEngine() {
  // Part 1: Updating the snake array & food
  if (isCollide(snakeArr)) {
    musicSound.pause();
    gameOverSound.play();
    inputDir = { x: 0, y: 0 };
    alert("game Over. Press any key to play again!");
    snakeArr = [{ x: 13, y: 15}];
    musicSound.play();
    score = 0;

    

  }
  // part 2: Display the snake & food
  // Display the snake
  board.innerHtml = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });
  // Display the Food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// main logic starts here
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 0 }; //start the game
  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    case "ArrowLeft":
      console.log("Arrowleft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;

    default:
      break;
  }
});
