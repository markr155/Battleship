function newShip(length) {
  if (length <= 0) {
    throw new Error("Length must be above 0");
  }
  let timesHit = 0;

  hit = () => {
    timesHit++;
  };

  isSunk = () => {
    return timesHit === length ? true : false;
  };
  return {
    length,
    hit,
    isSunk,
  };
}

// newShip factory
// length
// times-hit
// hit() -> increments times-hit
// isSunk() -> returns bool if times-hit === length

// test
// length 4, times-hit 3, hit() -> true
// length 2, times-hit 0, hit() -> false

module.exports = newShip;
