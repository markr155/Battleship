// Render board from getBoard function
// use divs with class for attack coords
import boardModule from "./gameboard.js";
let boardSize;
export default function renderDOM() {
  function displayBoard(boardContainer, board, isClickable = false) {
    boardSize = 10;
    let displayBoardSize = board.getBoard.length - 1;
    const currentBoardState = board.getBoard;
    boardContainer.textContent = "";
    currentBoardState.forEach((row, y) => {
      row.forEach((col, x) => {
        boardContainer.appendChild(
          createBoardSquare(x, displayBoardSize - y, isClickable),
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
    // if horizontal, y position changes, if vertical, x position changes
    const startX = parseInt(
      isHorizontal ? Math.min(x, boardSize - ship.length) : x,
    );
    const startY = parseInt(isHorizontal ? y : Math.max(y, ship.length - 1));

    // checks if ship has already been placed
    for (let i = 0; i < ship.length; i++) {
      let square = document
        .querySelector(`[data-x='${startX}'][data-y='${startY}']`)
        .classList.contains("ship");

      if (isHorizontal) {
        if (
          document
            .querySelector(`[data-x='${startX}'][data-y='${startY + i}']`)
            .classList.contains("ship")
        )
          return "Ship already placed";
      } else {
        if (
          document
            .querySelector(`[data-x='${startX + i}'][data-y='${startY}']`)
            .classList.contains("ship")
        )
          return "Ship already placed";
      }
    }
    // places ship on board
    for (let i = 0; i < ship.length; i++) {
      // isHorizontal ? console.log(startX + i) : console.log(startY - i)

      isHorizontal
        ? document
            .querySelector(`[data-x='${startX + i}'][data-y='${startY}']`)
            .classList.add("ship")
        : document
            .querySelector(`[data-x='${startX}'][data-y='${startY - i}']`)
            .classList.add("ship");
    }
  }
  return {
    displayBoard,
    makeBoardDroppable,
  };
}
