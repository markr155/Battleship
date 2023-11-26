const gameBoard = require("../src/gameboard");
const newShip = require("../src/ship");
const board = gameBoard();

beforeAll(() => {
  ship4 = newShip(4);
  ship3 = newShip(3);
  board.placeShip(ship4, [0, 0], true);
  board.placeShip(ship3, [9, 9], true);
});

test("ship placed correctly", () => {
  expect(board.getBoard[0][0]).toBeTruthy();
  expect(board.getBoard[9][9]).toBeTruthy();
  expect(board.getBoard[5][5]).toBeFalsy();
});

test("Check if another ship is occupying placement", () => {
  expect(board.placeShip(ship4, [0, 0], true)).toBe("Ship already placed");
  expect(board.placeShip(ship3, [9, 9], true)).toBe("Ship already placed");
});

test("Checks if coord is on the board", () => {
  expect(board.receiveAttack([10, 0])).toBe("invalid attack coordinate");
  expect(board.receiveAttack([10, 10])).toBe("invalid attack coordinate");
  expect(board.receiveAttack([-1, -1])).toBe("invalid attack coordinate");
});

test("Attack missed", () => {
  expect(board.receiveAttack([5, 5])).toBe("Miss!");
  expect(board.getMisses).toContainEqual([5, 5]);
});

test("Attack Hits", () => {
  expect(board.receiveAttack([0, 0])).toBe("Hit!");
});

test("Square already attacked", () => {
  expect(board.receiveAttack([0, 0])).toBe("Hit!");
  expect(board.receiveAttack([0, 0])).toBe("Square already attacked");
});

// receiveAttack(coord)
// checks if ship occupies square -> ship.hit()
// checks if square has been hit before

// store hits and misses
