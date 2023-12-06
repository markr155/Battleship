export default function gameBoard() {
  // Set board length/width
  const boardSize = 10;
  // Create board
  const board = Array.from({ length: boardSize }, () =>
    Array(boardSize).fill(null),
  );

  // Initialise arrays to track attacks
  // maybe change hits/miss to a tracker object
  const attacksMissed = [];
  const attacksHit = [];
  const shipsPlaced = [];

  const placeShip = (ship, coord, isHorizontal) => {
    // isHorizontal == orientation boolean
    const [x, y] = coord;
    const length = ship.length;
    // sets starting x, y to ensure ship doesnt overflow
    const startX = isHorizontal ? Math.min(x, boardSize - length) : x;
    const startY = isHorizontal ? y : Math.min(y, boardSize - length);

    // checks if ship has already been placed
    for (let i = 0; i < length; i++) {
      if (isHorizontal) {
        if (!!board[startX + i][startY]) return "Ship already placed";
      } else {
        if (!!board[startX][startY + i]) return "Ship already placed";
      }
    }
    // places ship on board
    for (let i = 0; i < length; i++) {
      isHorizontal
        ? (board[startX + i][startY] = ship)
        : (board[startX][startY + i] = ship);
    }
    shipsPlaced.push(ship);
  };

  const receiveAttack = (coord) => {
    // Check attack is on the board
    const [x, y] = coord;
    if (x > boardSize - 1 || y > boardSize - 1 || x < 0 || y < 0)
      return "invalid attack coordinate";
    // Check if square has been attacked before
    // refactor

    let hasBeenAttacked = false;
    attacksHit.forEach((attack) => {
      if (attack[0] === x && attack[1] === y) {
        hasBeenAttacked = true;
      }
    });

    attacksMissed.forEach((attack) => {
      if (attack[0] === x && attack[1] === y) {
        hasBeenAttacked = true;
      }
    });

    if (hasBeenAttacked) return "Square already attacked";

    const tarSquare = board[x][y];
    if (tarSquare) {
      tarSquare.hit();
      attacksHit.push([x, y]);
      return "Hit!";
    } else {
      attacksMissed.push([x, y]);
      return "Miss!";
    }
  };

  const hasAllSunk = () => {
    // if all ships in shipsPlaced have sunk return true
    const shipsSunk = shipsPlaced.filter((ship) => ship.isSunk());
    return shipsSunk.length == shipsPlaced.length ? true : false;
  };

  return {
    placeShip,
    receiveAttack,
    get getBoard() {
      return board;
    },
    get getMisses() {
      return attacksMissed;
    },
    hasAllSunk,
  };
}
// checks if square has been hit before

// module.exports = gameBoard;
