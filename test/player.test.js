import {jest} from '@jest/globals';
import newPlayer from "../src/player";

const player = newPlayer();
const mockBoard = {
  receiveAttack: jest.fn(),
};
const comPlayer = newPlayer("Computer");

test("Player issued attack hits and misses", () => {
  player.issueAttack(mockBoard, [0, 0]);
  expect(mockBoard.receiveAttack).toBeCalled();
});

// Figure out this test
test("Computer issues attack", () => {
  comPlayer.issueAttack(mockBoard, [0, 0]);
  expect(mockBoard.receiveAttack).toHaveBeenCalled();
});
