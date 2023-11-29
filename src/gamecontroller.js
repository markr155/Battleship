import newPlayer from "../src/player.js";
import gameBoard from "../src/gameboard.js";
import newShip from "../src/ship.js";
// Set up game loop

export default function gameController() {
  const player1 = newPlayer("Human");
  const player1Board = gameBoard();
  const player2 = newPlayer("Computer");
  const player2Board = gameBoard();

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

  testShips.forEach((ship) => {
    player1Board.placeShip(ship.ship, ship.coord, ship.horizontal);
  });
  testShips.forEach((ship) => {
    player2Board.placeShip(ship.ship, ship.coord, ship.horizontal);
  });

  let currentPlayer = player1;
  let enemyBoard = player2Board;
  let gameFinish = false;

  function switchCurrentPlayer() {
    currentPlayer === player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);

    enemyBoard === player2Board
      ? (enemyBoard = player1Board)
      : (enemyBoard = player2Board);
  }

  const playRound = (coord) => {
    currentPlayer.issueAttack(enemyBoard, coord);
    if (enemyBoard.hasAllSunk()) gameFinish = true;
    switchCurrentPlayer();
  }

  if (gameFinish) console.log("game finish");

  return {
    playRound,
  }
}
// Each player places ships in config
// human player goes first
// picks coord to attack
// comp board receives attack
// check if all ships are sunk - end game
// switch current player
