newShip = require("./ship");

function gameBoard() {
  // board to be 10x10
  // 0, 0 bottom left, -> 9, 9 top right
  const board = [];
  for (let x = 0; x < 9; x++) {
    board[x] = [];
    for (let y = 0; y < 9; y++) {
      board[x][y] = { x, y };
    }
  }

  placeShip = (length, coord, horizontal) => {
    // call ship factory to place ship at coordinates
    const x = coord[0];
    const y = coord[1];
    const ship = newShip(length);

    for (let i = 0; i < length; i++) {
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
// checks if coords are valid
// checks if ship occupies square -> ship.hit()
// checks if square has been hit before

// store hits and misses

module.exports = gameBoard;
