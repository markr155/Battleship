newShip = require("./ship");

function gameBoard() {
  // Set board length/width
  const boardSize = 10;
  // Create board
  const board = Array.from({ length: boardSize }, () =>
    Array(boardSize).fill(null),
  );

  // Initialise arrays to track attacks
  const attacksMissed = [];
  const attacksHit = [];

  placeShip = (ship, coord, horizontal) => {
    // horizontal == orientation boolean
    const [x, y] = coord;
    const length = ship.length;
    // sets starting x, y to ensure ship doesnt overflow
    const startX = horizontal ? Math.min(x, boardSize - length) : x;
    const startY = horizontal ? y : Math.min(y, boardSize - length);

    // checks if ship has already been placed
    for (let i = 0; i < length; i++) {
      if (horizontal) {
        if (board[startX + i][startY]) return "Ship already placed";
      } else {
        if (board[startX][startY + i]) return "Ship already placed";
      }
    }
    // places ship on board
    for (let i = 0; i < length; i++) {
      horizontal
        ? (board[startX + i][startY] = ship)
        : (board[startX][startY + i] = ship);
    }
  };

  receiveAttack = (coord) => {
    // Check attack is on the board
    const [x, y] = coord;
    if (x > boardSize - 1 || y > boardSize - 1 || x < 0 || y < 0)
      return "invalid attack coordinate";
    // Check if square has been attacked before

    tarSquare = board[x][y];
    if (tarSquare) {
      tarSquare.hit();
      attacksHit.push([x, y]);
      return "Hit!";
    } else {
      attacksMissed.push([x, y]);
      return "Miss!";
    }
  };

  return {
    placeShip,
    receiveAttack,
    get getBoard() {
      return board;
    },
    get getMisses() {
      return attacksMissed;
    },
  };
}
// checks if square has been hit before

module.exports = gameBoard;
