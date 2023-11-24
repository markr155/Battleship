const ship = require("../src/ship");

const ship2 = ship(2);
const ship4 = ship(4);

test("Ship is sunk", () => {
  ship2.hit();
  ship2.hit();
  expect(ship2.isSunk()).toBe(true);
});

test("Ship is not sunk", () => {
  ship4.hit();
  ship4.hit();
  expect(ship4.isSunk()).toBe(false);
});

// ship factory
// length
// times-hit
// hit() -> increments times-hit
// isSunk() -> returns bool if times-hit === length

// test
// length 4, times-hit 3, hit() -> true
// length 2, times-hit 0, hit() -> false
