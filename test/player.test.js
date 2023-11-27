const newPlayer = require("../src/player");

const player = newPlayer();
const mockBoard = {
  receiveAttack: jest.fn(),
};
const comPlayer = newPlayer("Computer");

// Player takes turn to attack enemy gameboard
// issueAttack(board, coord)
test("Player issued attack hits and misses", () => {
  player.issueAttack(mockBoard, [0, 0]);
  expect(mockBoard.receiveAttack).toBeCalled();
});

// Figure out this test
test("Computer issues attack", () => {
  comPlayer.issueAttack(mockBoard, [0, 0]);
  expect(mockBoard.receiveAttack).toHaveBeenCalled();
});
// Computer makes random plays
// Keeps track of moves and doesn't attack same square twice
