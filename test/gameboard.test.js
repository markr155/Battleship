const gameBoard = require("../src/gameboard");
const board = gameBoard();

beforeAll(() => {
  board.placeShip(4, [0, 0], true);
  board.placeShip(3, [9, 9], true);
  board.placeShip(3, [9, 9], false);
});

test("receiveAttack coord validation check", () => {
  expect(board.receiveAttack([10, 0])).toBe("invalid attack coordinate");
});

// receiveAttack(coord)
// checks if ship occupies square -> ship.hit()
// checks if square has been hit before

// store hits and misses