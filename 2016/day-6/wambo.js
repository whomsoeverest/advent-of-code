'use strict';

const fs = require('fs');
const buffer = fs.readFileSync('input.txt');
const file = String(buffer);

// Part 1
function part1() {
    let messages = file.split('\n'),
        positions = [],
        decoded = '',
        i;

    for(i = 0; i < 8; i++) {
        positions.push({});
    }

    messages.forEach(line => {
        for (i = 0; i < 8; i++) {
            if (positions[i][line[i]]) {
                positions[i][line[i]] += 1;
            } else {
                positions[i][line[i]] = 1;
            }
        }
    });

    positions.forEach((position, index) => {
        let number = 0,
            letter = '';
        for (let l in position) {
            if (position.hasOwnProperty(l)) {
                if (position[l] > number) {
                    number = position[l];
                    letter = l;
                }
            }
        }
        decoded += letter;
    });

    return decoded;
}

console.log(part1());

// Part 2
function part2() {
    let messages = file.split('\n'),
        positions = [],
        decoded = '',
        i;

    for(i = 0; i < 8; i++) {
        positions.push({});
    }

    messages.forEach(line => {
        for (i = 0; i < 8; i++) {
            if (positions[i][line[i]]) {
                positions[i][line[i]] += 1;
            } else {
                positions[i][line[i]] = 1;
            }
        }
    });

    positions.forEach((position, index) => {
        let number = 10000,
            letter = '';
        for (let l in position) {
            if (position.hasOwnProperty(l)) {
                if (position[l] < number) {
                    number = position[l];
                    letter = l;
                }
            }
        }
        decoded += letter;
    });

    return decoded;
}

console.log(part2());
