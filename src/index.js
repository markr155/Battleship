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

const player1Board = document.querySelector('.player1-board');
const player2Board = document.querySelector('.player2-board');

render.renderBoard(playerSetUpBoard, playerBoard);
render.renderBoard(player1Board, playerBoard);
render.renderBoard(player2Board, comBoard);

playerSetUpBoard.addEventListener('drop', (e) => {
  e.preventDefault();
  // console.log(e.dataTransfer.mozSourceNode)
  if (!e.dataTransfer.mozSourceNode.firstChild) console.log(e.dataTransfer.mozSourceNode)
})
playerSetUpBoard.addEventListener('dragover', (e) => {
  e.preventDefault();
})

// Changes drag image to align with cursor 
setUpShips.forEach((shipSquare) => {
  shipSquare.addEventListener('dragstart', (e) => {
    e.dataTransfer.setDragImage(e.target, 0, 0)
  })
})
