import gameController from './gamecontroller.js';
const game = gameController();
export default function renderDOM() {
	let boardSize = 10;
	let playerShipsPlaced = [];
	let comShipsPlaced = [];
	const dialogue = document.querySelector('.dialogue');
	const modal = document.getElementById('end-game-modal');
	let roundReady = true;

	function displayBoard(boardContainer, board, isClickable = false) {
		let displayBoardSize = board.getBoard.length - 1;
		boardContainer.textContent = '';
		board.getBoard.forEach((row, y) => {
			row.forEach((col, x) => {
				const square = createBoardSquare(x, displayBoardSize - y, isClickable);
				if (!!board.getBoard[x][boardSize - 1 - y])
					square.classList.add('ship');
				boardContainer.appendChild(square);
			});
		});
	}

	function createBoardSquare(x, y, isClickable) {
		const square = document.createElement('div');
		square.classList.add('game-square');
		if (!!isClickable) {
			square.classList.add('clickable');
		}
		square.dataset.x = x;
		square.dataset.y = y;
		return square;
	}

	function makeBoardDroppable(board) {
		board.addEventListener('drop', setUpBoardDrop);
		board.addEventListener('dragover', (e) => {
			e.preventDefault();
		});
	}

	function shipLengths(name) {
		switch (name) {
			case 'carrier':
				return { length: 5 };
			case 'battleship':
				return { length: 4 };
			case 'destroyer':
				return { length: 3 };
			case 'submarine':
				return { length: 3 };
			case 'patrol-boat':
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
			'horizontal'
		)
			? true
			: false;
		// error handling
		if (!ship) {
			console.log('no ship selected');
			return;
		}

		const [startX, startY] = startXY(x, y, isHorizontal, ship);

		// checks if ship has already been placed
		const validPlace = isValidPlace(ship, startX, startY, isHorizontal);
		if (!validPlace) {
			return `${shipName} placement failed`;
		}
		// places ship on board
		for (let i = 0; i < ship.length; i++) {
			isHorizontal
				? document
						.querySelector(`[data-x='${startX + i}'][data-y='${startY}']`)
						.classList.add('ship')
				: document
						.querySelector(`[data-x='${startX}'][data-y='${startY - i}']`)
						.classList.add('ship');
		}
		// Toggles Ship displaying after being placed
		if (shipToDrop instanceof HTMLElement) {
			shipToDrop.classList.toggle('placed');
		}
		playerShipsPlaced.push({
			length: ship.length,
			coord: [x, y],
			horizontal: isHorizontal,
		});
		return 'success';
	}

	// sets starting x, y to ensure ship doesnt overflow
	// if horizontal, y position changes, if vertical, x position changes
	function startXY(x, y, isHorizontal, ship) {
		const newX = parseInt(
			isHorizontal ? Math.min(x, boardSize - ship.length) : x
		);
		const newY = parseInt(isHorizontal ? y : Math.max(y, ship.length - 1));
		return [newX, newY];
	}

	function resetSetupBoard(setupShipElements) {
		setupShipElements.forEach((ship) => {
			if (ship.classList.contains('placed')) ship.classList.remove('placed');
			if (ship.classList.contains('vertical')) {
				ship.classList.remove('vertical');
				ship.classList.add('horizontal');
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
		playerBoardDisplay,
		enemyBoardDisplay,
		gameController,
		enemyBoard,
		playerBoard
	) {
		enemyBoardDisplay.childNodes.forEach((square) => {
			square.addEventListener('click', (e) => {
				if (roundReady === false) return;
				roundReady = false;
				dialogue.textContent = '';
				const playerCoords = [e.target.dataset.x, e.target.dataset.y];
				dialogue.appendChild(attackingText(playerCoords));
				const playerResult = gameController.playRound(playerCoords, enemyBoard);
				const comResult = gameController.playRound(playerCoords, playerBoard);
				if (!playerResult || !comResult) return;
				const comSquare = playerBoardDisplay.querySelector(
					`[data-x="${comResult[1][0]}"][data-y="${comResult[1][1]}"]`
				);
				setTimeout(() => {
					if (playerResult === 'hit') {
						updateDialogue('It was a hit!');
						square.classList.add('hit');
						square.classList.remove('clickable');
					} else if (playerResult === 'miss') {
						updateDialogue('You missed!');
						square.classList.remove('clickable');
						square.classList.add('miss');
					} else {
						showEndGameModal(playerResult);
						return;
					}
					setTimeout(() => {
						updateDialogue('Computer attacking...');
						setTimeout(() => {
							if (comResult[0] === 'hit') {
								updateDialogue('You were hit!');
								comSquare.classList.add('hit');
							} else if (comResult[0] === 'miss') {
								updateDialogue('The computer missed!');
								comSquare.classList.add('miss');
							} else {
								showEndGameModal(comResult);
								return;
							}
							setTimeout(() => {
								updateDialogue('Your turn, click to attack');
								roundReady = true;
							}, 0); //1000
						}, 0); //800
					}, 0); //800
				}, 0); //800
			});
		});
	}

	function showEndGameModal(result) {
		const endMsg = document.createElement('p');
		endMsg.textContent = result;
		const restartButton = document.createElement('button');
		restartButton.classList.add('restart-button');
		restartButton.textContent = 'Restart Game';
		restartButton.addEventListener('click', () => window.location.reload());
		modal.appendChild(endMsg);
		modal.appendChild(restartButton);
		modal.showModal();
	}

	function updateDialogue(text) {
		dialogue.textContent = '';
		const element = document.createElement('h3');
		element.textContent = text;
		dialogue.appendChild(element);
	}

	function attackingText(coord) {
		const element = document.createElement('h3');
		element.textContent = `Attacking position [${coord[0]}, ${coord[1]}]`;
		return element;
	}

	function isValidPlace(ship, startX, startY, isHorizontal) {
		let validPlace = true;
		for (let i = 0; i < ship.length; i++) {
			if (isHorizontal) {
				if (
					document
						.querySelector(`[data-x='${startX + i}'][data-y='${startY}']`)
						.classList.contains('ship')
				)
					validPlace = false;
			} else {
				if (
					document
						.querySelector(`[data-x='${startX}'][data-y='${startY - i}']`)
						.classList.contains('ship')
				)
					validPlace = false;
			}
		}
		return validPlace;
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
		const result = setUpBoardDrop(dummyEvent);
		return result;
	}
	function randomiseSetup(setupShipElements) {
		let someFailed = false;
		setupShipElements.forEach((ship, index) => {
			if (ship.classList.contains('placed')) return;
			const shipName = ship.id;
			const [x, y] = getNewCoords();
			const randHorizontal = Math.random() < 0.5;
			const result = dummyShipDrop(shipName, x, y, randHorizontal);
			if (!(result === 'success')) {
				someFailed = true;
				return;
			}
			ship.classList.add('placed');
		});
		if (someFailed) randomiseSetup(setupShipElements);
	}

	function getNewCoords() {
		return [
			Math.floor(Math.random() * boardSize),
			Math.floor(Math.random() * boardSize),
		];
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
