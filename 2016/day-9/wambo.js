'use strict';

const fs = require('fs');
const buffer = fs.readFileSync('input.txt');
const file = String(buffer);

// Part 1
function cut(str, total = 0) {
    let { 0: match, 1: next, 2: times, index } = /\((\d+)x(\d+)\)/g.exec(str) || [];
    next = parseInt(next, 10);
    times = parseInt(times, 10);

    if (match) {
        let end = index + match.length + next,
            length = times * next;

        return cut(str.slice(end), total + index + length);
    } else {
        return total + str.length;
    }
}

function part1() {
    return cut(file);
}

// Part 2
function recursiveCut(str, total = 0) {
    let { 0: match, 1: next, 2: times, index } = /\((\d+)x(\d+)\)/g.exec(str) || [];
    next = parseInt(next, 10);
    times = parseInt(times, 10);

    if (match) {
        let end = index + match.length + next,
            length = times * recursiveCut(str.slice(end - next, end));

        return recursiveCut(str.slice(end), total + index + length);
    } else {
        return total + str.length;
    }
}

function part2() {
    return recursiveCut(file);
}

console.log(part1());
console.log(part2());