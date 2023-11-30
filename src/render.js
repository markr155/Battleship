// Render board from getBoard function
  // use divs with class for attack coords

export default function renderDOM () {
  function initialiseBoard(boardContainer, board) {
    const currentBoardState = board.getBoard;
    boardContainer.textContent = '';
    currentBoardState.forEach((row, x) => {
      row.forEach((col, y) => {
        boardContainer.appendChild(createBoardSquare(x, y));
      })
    }) 
  }

  function createBoardSquare(x, y) {
    const square = document.createElement('div');
    square.dataset.x = x;
    square.dataset.y = y;
    square.textContent = `[${x}, ${y}]`
    return square;
  }

  return {
    initialiseBoard,
    // displayBoard,
  }
}