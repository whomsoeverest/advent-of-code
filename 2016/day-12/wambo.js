'use strict';

const file = String(require('fs').readFileSync('input.txt'));

function part1() {
    let lines = file.split('\n'),
        registers = {},
        i, length = lines.length;

    for (i = 0; i < length; i++) {
        let line = lines[i],
            splits = line.split(' '),
            fn = splits[0],
            x = splits[1],
            y = splits[2];

        if (fn === 'cpy') {
            let value;

            if (x.match(/[a-d]/) && registers[x]) {
                value = registers[x];
            } else {
                value = parseInt(x, 10);
            }

            registers[y] = value;
        } else if (fn === 'inc') {
            registers[x]++;
        } else if (fn === 'dec') {
            registers[x]--;
        } else if (fn === 'jnz') {
            let value;

            if (x.match(/[a-d]/)) {
                value = registers[x];
            } else {
                value = parseInt(x, 10);
            }

            if (value) {
                i += parseInt(y, 10) - 1;
            }
        }
    }

    return registers.a;
}

console.log(part1());

function part2() {
    let lines = file.split('\n'),
        registers = { c: 1 },
        i, length = lines.length;

    for (i = 0; i < length; i++) {
        let line = lines[i],
            splits = line.split(' '),
            fn = splits[0],
            x = splits[1],
            y = splits[2];

        if (fn === 'cpy') {
            let value;

            if (x.match(/[a-d]/) && registers[x]) {
                value = registers[x];
            } else {
                value = parseInt(x, 10);
            }

            registers[y] = value;
        } else if (fn === 'inc') {
            registers[x]++;
        } else if (fn === 'dec') {
            registers[x]--;
        } else if (fn === 'jnz') {
            let value;

            if (x.match(/[a-d]/)) {
                value = registers[x];
            } else {
                value = parseInt(x, 10);
            }

            if (value) {
                i += parseInt(y, 10) - 1;
            }
        }
    }

    return registers.a;
}

console.log(part2());