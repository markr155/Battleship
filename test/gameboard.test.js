const gameBoard = require('../src/gameboard');

test('Setup', () => {
    expect(gameBoard()).toBe(true)
});

// board to be 10x10
    // 0, 0 bottom left, -> 9, 9 top right

// placeShip() - call ship factory to place ship at coordinates
    // x + length if horizontal
    // y + length if vertical

// receiveAttack(coord)
    // checks if ship occupies square -> ship.hit()
    // checks if square has been hit before
    // store hits and misses
    