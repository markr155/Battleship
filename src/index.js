import css from "../styles/style.css";
import gameBoard from '../src/gameboard.js'
import gameController from "../src/gamecontroller.js";
import renderDOM from '../src/render.js'
console.clear();

const render = renderDOM();
const playerBoard = gameBoard();
const comBoard = gameBoard();
const game = gameController(playerBoard, comBoard);

const playerSetUpBoard = document.querySelector('.game-setup-board');
const setUpShips = document.querySelectorAll('.setup-ship-square-container')
const resetButton = document.querySelector('.reset-button');
const startButton = document.querySelector('.start-button');

const player1Board = document.querySelector('.player1-board');
const player2Board = document.querySelector('.player2-board');

render.setUpBoard(playerSetUpBoard, playerBoard);
render.makeBoardDroppable(playerSetUpBoard);
// render.playBoard(player1Board, playerBoard);
// render.playBoard(player2Board, comBoard);

// Set up Reset and Start buttons
resetButton.addEventListener('click', () => render.setUpBoard(playerSetUpBoard, playerBoard));

// Changes drag image to align with cursor 
setUpShips.forEach((shipContainer) => {
  shipContainer.addEventListener('dragstart', (e) => {
    e.dataTransfer.setDragImage(e.target, 0, 0)
  })
})

// Allows ship orientation to be changed
setUpShips.forEach((shipContainer) => {
  shipContainer.addEventListener('click', () => {
    if (shipContainer.classList.contains('horizontal')) {
      shipContainer.classList.remove('horizontal');
      shipContainer.classList.add('vertical');
    } else {
      shipContainer.classList.remove('vertical');
      shipContainer.classList.add('horizontal');
    }
  })
})

