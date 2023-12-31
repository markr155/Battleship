export default function newShip(length) {
  if (length <= 0) {
    throw new Error("Length must be above 0");
  }
  let timesHit = 0;

  const hit = () => {
    timesHit++;
  };

  const isSunk = () => {
    return timesHit === length ? true : false;
  };
  return {
    length,
    hit,
    isSunk,
  };
}

// module.exports = newShip;
