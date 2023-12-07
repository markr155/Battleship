import css from "../styles/style.css";
import ship from "../src/ship.js";
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
const playerBoardDisplay = document.querySelector(".player1-board");
const player2BoardDisplay = document.querySelector(".player2-board");
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
  if (!dialogue.querySelector("h4").classList.contains("hidden"))
    dialogue.querySelector("h4").classList.add("hidden");
});
startButton.addEventListener("click", () => {
  const placedShips = render.getPlayerSetup();
  if (!!placedShips) {
    setUpContainer.style.display = "none";
    playBoardContainer.style.display = "flex";
    render.getPlayerSetup().forEach((shipPlaced) => {
      const newShip = ship(shipPlaced.length);
      playerBoard.placeShip(newShip, shipPlaced.coord, shipPlaced.horizontal);
    });
    render.displayBoard(playerBoardDisplay, playerBoard);
    render.displayBoard(player2BoardDisplay, comBoard, true);
    dialogue.textContent = "Click on the enemy board to issue an attack";
  } else {
    dialogue.querySelector("h4").classList.remove("hidden");
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
