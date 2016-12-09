'use strict';

const fs = require('fs');
const buffer = fs.readFileSync('input.txt');
const file = String(buffer);

// Part 1 & 2
const SCREEN_WIDTH = 50;
const SCREEN_HEIGHT = 6;
function prefillScreen() {
    let screen = [];

    for (let i = 0; i < SCREEN_HEIGHT; i++) {
        screen[i] = [];
        for (let j = 0; j < SCREEN_WIDTH; j++) {
            screen[i].push('-');
        }
    }

    return screen;
}

function fillRect(screen, line) {
    let dimensions = line.split('x'),
        width = parseInt(dimensions[0].replace('rect ', ''), 10),
        height = parseInt(dimensions[1], 10);

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            screen[i][j] = '#';
        }
    }

    return screen;
}

function slideRow(screen, line) {
    let info = line.split(' '),
        row = parseInt(info[2].replace('y=', ''), 10),
        amount = parseInt(info[4], 10);

    while (amount--) {
        const FINAL = screen[row][SCREEN_WIDTH - 1];
        for (let i = SCREEN_WIDTH - 1; i >= 0; i--) {
            screen[row][i] = i > 0 ? screen[row][i - 1] : FINAL;
        }
    }

    return screen;
}

function slideColumn(screen, line) {
    let info = line.split(' '),
        column = parseInt(info[2].replace('x=', ''), 10),
        amount = parseInt(info[4], 10);

    while (amount--) {
        const FINAL = screen[SCREEN_HEIGHT - 1][column];
        for (let i = SCREEN_HEIGHT - 1; i >= 0; i--) {
            screen[i][column] = i > 0 ? screen[i - 1][column] : FINAL;
        }
    }

    return screen;
}

function printScreen(screen) {
    let text = '';

    screen.forEach(columns => {
        text += columns.join('') + '\n';
    });

    console.log(text);
}

function part1() {
    let lines = file.split('\n'),
        screen = prefillScreen(),
        total = 0;

    lines.forEach(line => {
        if (line.indexOf('rect') > -1) {
            screen = fillRect(screen, line);
        } else if (line.indexOf('row') > -1) {
            screen = slideRow(screen, line);
        } else {
            screen = slideColumn(screen, line);
        }
    });

    screen.forEach(columns => {
        columns.forEach(v => {
            if (v === '#') total++;
        });
    });

    // This ends up being part 2..
    printScreen(screen);

    return total;
}

console.log(part1());
