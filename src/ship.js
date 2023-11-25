function newShip(length) {
  // let length = len;
  let timesHit = 0;

  hit = () => {
    timesHit++;
  };

  isSunk = () => {
    return timesHit === length ? true : false;
  };
  return {
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
