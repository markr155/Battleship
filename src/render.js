import gameController from "./gamecontroller.js";
const game = gameController();
export default function renderDOM() {
  let boardSize;
  let playerShipsPlaced = [];
  function displayBoard(boardContainer, board, isClickable = false) {
    boardSize = 10;
    let displayBoardSize = board.getBoard.length - 1;
    boardContainer.textContent = "";
    board.getBoard.forEach((row, y) => {
      row.forEach((col, x) => {
        const square = createBoardSquare(x, displayBoardSize - y, isClickable);
        if (!!board.getBoard[x][boardSize - 1 - y])
          square.classList.add("ship");
        boardContainer.appendChild(square);
      });
    });
  }

  function createBoardSquare(x, y, isClickable) {
    const square = document.createElement("div");
    square.classList.add("game-square");
    if (!!isClickable) {
      square.classList.add("clickable");
    }
    square.dataset.x = x;
    square.dataset.y = y;
    // square.textContent = `[${x}, ${y}]`
    return square;
  }

  function makeBoardDroppable(board) {
    board.addEventListener("drop", setUpBoardDrop);
    board.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  }

  function shipLengths(name) {
    switch (name) {
      case "carrier":
        return { length: 5 };
      case "battleship":
        return { length: 4 };
      case "destroyer":
        return { length: 3 };
      case "submarine":
        return { length: 3 };
      case "patrol-boat":
        return { length: 2 };
    }
  }

  function setUpBoardDrop(event) {
    event.preventDefault();
    const shipToDrop = event.dataTransfer.mozSourceNode;
    const shipName = shipToDrop.id;
    const ship = shipLengths(shipName);
    const x = event.target.dataset.x;
    const y = event.target.dataset.y;
    const isHorizontal = !!event.dataTransfer.mozSourceNode.classList.contains(
      "horizontal",
    )
      ? true
      : false;
    // error handling
    if (!ship) {
      console.log("no ship selected");
      return;
    }
    // sets starting x, y to ensure ship doesnt overflow
    // if horizontal, y position changes, if vertical, x position changes
    const startX = parseInt(
      isHorizontal ? Math.min(x, boardSize - ship.length) : x,
    );
    const startY = parseInt(isHorizontal ? y : Math.max(y, ship.length - 1));

    // checks if ship has already been placed
    for (let i = 0; i < ship.length; i++) {
      let square = document;
      if (isHorizontal) {
        if (
          document
            .querySelector(`[data-x='${startX + i}'][data-y='${startY}']`)
            .classList.contains("ship")
        )
          return "Ship already placed";
      } else {
        if (
          document
            .querySelector(`[data-x='${startX}'][data-y='${startY - i}']`)
            .classList.contains("ship")
        )
          return "Ship already placed";
      }
    }
    // places ship on board
    for (let i = 0; i < ship.length; i++) {
      isHorizontal
        ? document
            .querySelector(`[data-x='${startX + i}'][data-y='${startY}']`)
            .classList.add("ship")
        : document
            .querySelector(`[data-x='${startX}'][data-y='${startY - i}']`)
            .classList.add("ship");
    }
    // Toggles Ship displaying after being placed
    if (shipToDrop instanceof HTMLElement) {
      shipToDrop.classList.toggle("placed");
    }
    playerShipsPlaced.push({
      length: ship.length,
      coord: [x, y],
      horizontal: isHorizontal,
    });
  }

  function resetSetupBoard(setupShipElements) {
    setupShipElements.forEach((ship) => {
      if (ship.classList.contains("placed")) ship.classList.remove("placed");
      if (ship.classList.contains("vertical")) {
        ship.classList.remove("vertical");
        ship.classList.add("horizontal");
      }
    });
    playerShipsPlaced = [];
  }

  function getPlayerSetup() {
    if (playerShipsPlaced.length < 5) {
      return;
    }
    return playerShipsPlaced;
  }

  function attackEnemyOnClick(
    enemyBoardDisplay,
    gameController,
    enemyBoard,
    playerBoard,
  ) {
    enemyBoardDisplay.childNodes.forEach((square) => {
      square.addEventListener("click", (e) => {
        const x = e.target.dataset.x;
        const y = e.target.dataset.y;
        const result = gameController.playRound([x, y], enemyBoard);
        console.log(result);
        if (result === "hit") {
          square.classList.add("hit");
          square.classList.remove('clickable');
        } else if (result === "miss") {
          square.classList.remove('clickable');
          square.classList.add("miss");
        }
        gameController.playRound([x, y], playerBoard);
      });
    });
  }

  function dummyShipDrop(shipName, x, y, isHorizontal) {
    const ship = shipLengths(shipName);
    const dummyEvent = {
      preventDefault: () => {},
      dataTransfer: {
        mozSourceNode: {
          id: shipName,
          classList: {
            contains: (className) => (className = isHorizontal),
          },
        },
      },
      target: {
        dataset: { x, y },
      },
    };
    setUpBoardDrop(dummyEvent);
  }
  function randomiseSetup(setupShips) {
    dummyShipDrop("carrier", 0, 1, true);
    dummyShipDrop("battleship", 6, 1, false);
    dummyShipDrop("destroyer", 2, 9, true);
    dummyShipDrop("submarine", 2, 5, true);
    dummyShipDrop("patrol-boat", 9, 7, false);
    setupShips.forEach((ship) => ship.classList.add("placed"));
  }

  function randCoord() {
    const x = Math.floor(Math.random() * 10);
    return x;
  }

  return {
    displayBoard,
    makeBoardDroppable,
    resetSetupBoard,
    getPlayerSetup,
    attackEnemyOnClick,
    randomiseSetup,
  };
}
