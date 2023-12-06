// Render board from getBoard function
// use divs with class for attack coords

export default function renderDOM() {
  function displayBoard(boardContainer, board, isClickable = false) {
    const currentBoardState = board.getBoard;
    boardContainer.textContent = "";
    currentBoardState.forEach((row, x) => {
      row.forEach((col, y) => {
        boardContainer.appendChild(createBoardSquare(x, y, isClickable));
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
      // console.log(e.dataTransfer.mozSourceNode);
      console.log(e.target);
      e.target.classList.add('ship');
    });
    board.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  }

  return {
    displayBoard,
    makeBoardDroppable,
  };
}
