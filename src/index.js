import css from "../styles/style.css";
import gameBoard from "../src/gameboard.js";
import gameController from "../src/gamecontroller.js";
import renderDOM from "../src/render.js";
console.clear();

// Element Declaration
const playerSetUpBoard = document.querySelector(".game-setup-board");
const setUpShips = document.querySelectorAll(".setup-ship-square-container");
const setUpContainer = document.querySelector(".game-setup-container");
const playBoardContainer = document.querySelector(".playing-board-container");
const resetButton = document.querySelector(".reset-button");
const startButton = document.querySelector(".start-button");
const player1Board = document.querySelector(".player1-board");
const player2Board = document.querySelector(".player2-board");
const dialogue = document.querySelector(".dialogue");

const render = renderDOM();
const playerBoard = gameBoard();
const comBoard = gameBoard();
const game = gameController(playerBoard, comBoard);

render.displayBoard(playerSetUpBoard, playerBoard);
render.makeBoardDroppable(playerSetUpBoard);

// Set up Reset and Start buttons
resetButton.addEventListener("click", () => {
  render.displayBoard(playerSetUpBoard, playerBoard);
  render.resetSetupBoard(setUpShips);
  if (!dialogue.lastChild.classList.contains("hidden"))
    dialogue.lastChild.classList.add("hidden");
});
startButton.addEventListener("click", () => {
  const placedShips = render.getPlayerSetup();
  if (!!placedShips) {
    setUpContainer.style.display = "none";
    playBoardContainer.style.display = "flex";
    render.displayBoard(player1Board, playerBoard);
    render.displayBoard(player2Board, comBoard, true);
    dialogue.textContent = "Click on the enemy board to issue an attack";
  } else {
    dialogue.lastChild.classList.remove("hidden");
  }
});

// Changes drag image to align with cursor
setUpShips.forEach((shipContainer) => {
  shipContainer.addEventListener("dragstart", (e) => {
    e.dataTransfer.setDragImage(e.target, 0, 0);
  });
});

// Allows ship orientation to be changed
setUpShips.forEach((shipContainer) => {
  shipContainer.addEventListener("click", () => {
    if (shipContainer.classList.contains("horizontal")) {
      shipContainer.classList.remove("horizontal");
      shipContainer.classList.add("vertical");
    } else {
      shipContainer.classList.remove("vertical");
      shipContainer.classList.add("horizontal");
    }
  });
});
