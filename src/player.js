export default function newPlayer(initialName) {
  const name = initialName;
  const comAttacks = [];

  function computerAttackCoord() {
    let x;
    let y;
    let isValidAttack = false;
    // Get x & y between 0 - 9 (not variable to board size), checks if square has been attacked
    while (isValidAttack === false) {
      isValidAttack = true;
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      comAttacks.forEach((coord) => {
        if (coord[0] === x && coord[1] === y) isValidAttack = false;
      });
    }
    comAttacks.push([x, y]);
    return [x, y];
  }

  return {
    name,
    comAttacks,
    issueAttack(board, coord) {
      let result;
      if (name === "Computer") {
        const comCoord = computerAttackCoord();
        result = [board.receiveAttack(comCoord), comCoord];
      } else result = board.receiveAttack(coord);
      return result;
    },
    computerAttackCoord,
  };
}
