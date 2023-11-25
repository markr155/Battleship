const gameBoard = require("../src/gameboard");

beforeEach(() => {
  const board = gameBoard();
  board.placeShip(4, [0, 0], true); // places ship at 0,0 horizontally
});

test("receiveAttack coord validation check", () => {
  const board = gameBoard();
  expect(board.receiveAttack([10, 0])).toBe("invalid attack coordinate");
});

// board to be 10x10
// 0, 0 bottom left, -> 9, 9 top right

// placeShip() - call ship factory to place ship at coordinates
// x + length if horizontal - if x + length > 9, 9 - length
// y + length if vertical - if y + length > 9, 9 - length

// receiveAttack(coord)
// checks if coords are valid
// checks if ship occupies square -> ship.hit()
// checks if square has been hit before

// store hits and misses
