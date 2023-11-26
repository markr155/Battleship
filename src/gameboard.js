newShip = require("./ship");

function gameBoard() {
  // Set board length/width
  const boardSize = 10;
  // Create board
  const board = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));

  placeShip = (ship, coord, horizontal) => {
    // call ship factory to place ship at coordinates
    const [x, y] = coord
    const length = ship.length;

    for (let i = 0; i < length; i++) {
      // places the ship left to right unless exceeds board size
      if (horizontal === true) {
        // x + length if horizontal - if x + length > 9, 9 - length
        if (x + length < 9) {
          // place ship left to right on the board
          board[x + i][y] = ship;
        } else if (x + length > 9) {
          // place ship right to left on the board
          board[9 - i][y] = ship;
        }
      } else if (horizontal === false) {
        // y + length if vertical - if y + length > 9, 9 - length
        if (y + length < 9) {
          // place ship bottom to top on the board
          board[x][y + i] = ship;
        } else if (y + length > 9) {
          // place ship top to bottom on the board
          board[x][9 - i] = ship;
        }
      }
    }
  };

  receiveAttack = (coord) => {
    if (coord[0] > 9 || coord[1] > 9) return "invalid attack coordinate";
  };

  return {
    placeShip,
    receiveAttack,
  };
}

// receiveAttack(coord)
// checks if coords are
// checks if ship occupies square -> ship.hit()
// checks if square has been hit before

// store hits and misses

module.exports = gameBoard;
