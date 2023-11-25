const newShip = require("../src/ship");

const newShip2 = newShip(2);
const newShip4 = newShip(4);

test("newShip is sunk", () => {
  newShip2.hit();
  newShip2.hit();
  expect(newShip2.isSunk()).toBe(true);
});

test("newShip is not sunk", () => {
  newShip4.hit();
  newShip4.hit();
  expect(newShip4.isSunk()).toBe(false);
});

// newShip factory
// length
// times-hit
// hit() -> increments times-hit
// isSunk() -> returns bool if times-hit === length

// test
// length 4, times-hit 3, hit() -> true
// length 2, times-hit 0, hit() -> false
