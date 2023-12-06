// Render board from getBoard function
// use divs with class for attack coords
import boardModule from "./gameboard.js";

export default function renderDOM() {
  let boardSize;
  function displayBoard(boardContainer, board, isClickable = false) {
    boardSize = board.getBoard.length - 1;
    const currentBoardState = board.getBoard;
    boardContainer.textContent = "";
    currentBoardState.forEach((row, x) => {
      row.forEach((col, y) => {
        boardContainer.appendChild(
          createBoardSquare(boardSize - x, y, isClickable),
        );
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
    board.addEventListener("drop", setUpBoardDrop);
    board.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  }

  function shipLengths(name) {
    switch (name) {
      case "carrier":
        return { length: 5 };
      case "battleship":
        return { length: 4 };
      case "destroyer":
        return { length: 3 };
      case "submarine":
        return { length: 3 };
      case "patrol-boat":
        return { length: 2 };
    }
  }

  function setUpBoardDrop(event) {
    event.preventDefault();
    const shipName = event.dataTransfer.mozSourceNode.id;
    const ship = shipLengths(shipName);
    const x = event.target.dataset.x;
    const y = event.target.dataset.y;
    const isHorizontal = !!event.dataTransfer.mozSourceNode.classList.contains(
      "horizontal",
    )
      ? true
      : false;
    console.log(shipName, ship, [x, y], isHorizontal);
    // sets starting x, y to ensure ship doesnt overflow
    const startX = isHorizontal ? Math.min(x, boardSize - ship.length) : x;
    const startY = isHorizontal ? y : Math.min(y, boardSize - ship.length);
    console.log(startX, startY);
    // checks if ship has already been placed
    for (let i = 0; i < ship.length; i++) {
      if (isHorizontal) {
        if (!!board[startX + i][startY]) return "Ship already placed";
      } else {
        if (!!board[startX][startY + i]) return "Ship already placed";
      }
    }
  }

  return {
    displayBoard,
    makeBoardDroppable,
  };
}
