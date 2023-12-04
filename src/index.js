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
const carrier = document.getElementById('carrier');

const player1Board = document.querySelector('.player1-board');
const player2Board = document.querySelector('.player2-board');

render.renderBoard(playerSetUpBoard, playerBoard);
render.renderBoard(player1Board, playerBoard);
render.renderBoard(player2Board, comBoard);

carrier.addEventListener('dragstart', (e) => {
  e.dataTransfer.setDragImage(e.target, -5, 5)
})