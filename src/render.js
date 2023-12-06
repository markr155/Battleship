// Render board from getBoard function
// use divs with class for attack coords
import boardModule from './gameboard.js';

const gameBoard = boardModule();

export default function renderDOM() {
  function displayBoard(boardContainer, board, isClickable = false) {
    let length = board.getBoard.length - 1;
    const currentBoardState = board.getBoard;
    boardContainer.textContent = "";
    currentBoardState.forEach((row, x) => {
      row.forEach((col, y) => {
        boardContainer.appendChild(createBoardSquare(length - x, y, isClickable));
      });
    });
  }

  function createBoardSquare(x, y, isClickable) {
    const square = document.createElement("div");
    square.classList.add("game-square");
    if (!!isClickable) square.classList.add("clickable");
    square.dataset.x = x;
    square.dataset.y = y;
    // square.textContent = `[${x}, ${y}]`
    return square;
  }

  function makeBoardDroppable(board) {
    board.addEventListener("drop", (e) => {
      e.preventDefault();
      const shipName = e.dataTransfer.mozSourceNode.id;
      const ship = shipLengths(shipName);
      let coord = [e.target.dataset.x, e.target.dataset.y];
      const isHorizontal = (!!e.dataTransfer.mozSourceNode.classList.contains('horizontal')) ? true : false;
      console.log(coord);
      console.log(gameBoard.placeShip(ship, coord, isHorizontal, true))
    });
    board.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  }

  function shipLengths(name) {
    switch (name) {
      case 'carrier':
        return { length: 5 };
      case 'battleship':
        return { length: 4 };
      case 'destroyer':
        return { length: 3 };
      case 'submarine':
        return { length: 3 };
      case 'patrol-boat':
        return { length: 2 };
    }
  }

  return {
    displayBoard,
    makeBoardDroppable,
  };
}
