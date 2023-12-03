export default function newPlayer(initialName) {
  const name = initialName;
  const compAttacks = [];
  function computerAttackCoord() {
    let x;
    let y;
    let isValidAttack = false;
    // Get x & y between 0 - 9 (not variable to board size), checks if square has been attacked
    while (isValidAttack === false) {
      isValidAttack = true;
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      compAttacks.forEach((coord) => {
        if (coord[0] === x && coord[1] === y) isValidAttack = false;
      });
    }
    compAttacks.push([x, y]);
    return [x, y];
  }

  return {
    issueAttack(board, coord) {
      if (name === "Computer") {
        coord = computerAttackCoord();
      }
      board.receiveAttack(coord);
    },
    computerAttackCoord,
  };
}

// module.exports = newPlayer;
