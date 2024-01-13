import newPlayer from "../src/player.js";
import gameBoard from "../src/gameboard.js";
import newShip from "../src/ship.js";

export default function gameController(board1, board2) {
  const board = gameBoard();
  const player1 = newPlayer("Human");
  const player2 = newPlayer("Computer");

  const shipList = [
    {
      ship: newShip(2),
    },
    {
      ship: newShip(3),
    },
    {
      ship: newShip(3),
    },
    {
      ship: newShip(4),
    },
    {
      ship: newShip(5),
    },
  ];

  function placeComShips(ships = shipList) {
    const failedShips = [];
    ships.forEach((ship) => {
      const coord = [Math.floor(Math.random() * board2.boardSize), Math.floor(Math.random() * board.boardSize)]
      const horizontal = Math.random() > 0.5;
      const result = board2.placeShip(ship.ship, coord, horizontal);
      if (result) failedShips.push({ship: newShip(result)});
    });
    if (failedShips[0]) placeComShips(failedShips);
  }
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
    if (!!gameFinish) console.log("game finish");
    switchCurrentPlayer();
    return result;
  };

  return {
    playRound,
    placeComShips,
  };
}
// Each player places ships in config
// human player goes first
// picks coord to attack
// comp board receives attack
// check if all ships are sunk - end game
// switch current player
