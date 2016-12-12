// THIS IS NOT COMPLETE. Will go back to it

'use strict';

const fs = require('fs');
const file = String(fs.readFileSync('input.txt'));

// Part 1
function part1() {
    let lines = file.split('\n'),
        generators = {},
        microchips = {},
        elevator = [],
        floors = [];

    lines.forEach((line, floor) => {
        let rtgs = line.match(/[a-z]+(?= generator)/g),
            mcs = line.match(/[a-z]+(?=-compatible)/g);

        floors[floor] = [];

        if (rtgs) {
            rtgs.forEach(value => {
                let xg = value.slice(0,1) + 'g';
                generators[xg] = floor;
                floors[floor].push(xg);
            });
        }

        if (mcs) {
            mcs.forEach(value => {
                let xm = value.slice(0,1) + 'm';
                microchips[xm] = floor;
                floors[floor].push(xm);
            })
        }
    });

    return [ generators, microchips, floors ];
}

console.log(part1());