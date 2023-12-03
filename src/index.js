import css from "../styles/style.css";
import gameBoard from '../src/gameboard.js'
import gameController from "../src/gamecontroller.js";
import renderDOM from '../src/render.js'
console.clear();

const render = renderDOM();
const playerBoard = gameBoard();
const comBoard = gameBoard();
const game = gameController(playerBoard, comBoard);

console.log(playerBoard.getBoard)

const player1Board = document.querySelector('.player1-board');
const player2Board = document.querySelector('.player2-board');

render.renderBoard(player1Board, playerBoard);
render.renderBoard(player2Board, comBoard);
