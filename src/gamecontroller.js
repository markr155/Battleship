import newPlayer from "../src/player.js";
import gameBoard from "../src/gameboard.js";
import newShip from "../src/ship.js";
// Set up game loop

export default function gameController(board1, board2) {
  const player1 = newPlayer("Human");
  const player2 = newPlayer("Computer");

  const testShips = [
    {
      ship: newShip(2),
      coord: [0, 0],
      horizontal: true,
    },
    {
      ship: newShip(3),
      coord: [0, 1],
      horizontal: true,
    },
    {
      ship: newShip(3),
      coord: [0, 4],
      horizontal: true,
    },
    {
      ship: newShip(4),
      coord: [5, 9],
      horizontal: false,
    },
    {
      ship: newShip(5),
      coord: [9, 9],
      horizontal: false,
    },
  ];

  // testShips.forEach((ship) => {
  //   board1.placeShip(ship.ship, ship.coord, ship.horizontal);
  // });
  // testShips.forEach((ship) => {
  //   board2.placeShip(ship.ship, ship.coord, ship.horizontal);
  // });

  let currentPlayer = player1;
  let enemyBoard = board2;
  let gameFinish = false;

  function switchCurrentPlayer() {
    currentPlayer === player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);

    enemyBoard === board2 ? (enemyBoard = board1) : (enemyBoard = board2);
  }

  const playRound = (coord, enemyBoard) => {
    const result = currentPlayer.issueAttack(enemyBoard, coord);
    if (enemyBoard.hasAllSunk()) gameFinish = true;
    switchCurrentPlayer();
    return result;
  };

  if (gameFinish) console.log("game finish");

  return {
    playRound,
  };
}
// Each player places ships in config
// human player goes first
// picks coord to attack
// comp board receives attack
// check if all ships are sunk - end game
// switch current player
