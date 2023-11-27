function newPlayer(initialName) {
  const name = initialName;
  const compAttacks = [];
  function computerAttackCoord() {
    let validattack = true;
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    compAttacks.forEach((coord) => {
      if (coord[0] === x && coord[1] === y) validattack = false;
    });
    if (validattack == false) {
      [x, y] = computerAttackCoord();
    }

    compAttacks.push([x, y]);
    return [x, y];
  }

  return {
    issueAttack(board, coord) {
      if (name === "Computer") {
        coord = computerAttackCoord(compAttacks);
      }
      board.receiveAttack(coord);
    },
    computerAttackCoord,
  };
}

module.exports = newPlayer;
