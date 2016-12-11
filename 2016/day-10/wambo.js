'use strict';

const fs = require('fs');
const buffer = fs.readFileSync('input.txt');
const file = String(buffer);

// Part 1
function assignValue(o, index, value) {
    value = parseInt(value, 10);
    if (o[index]) o[index].push(value);
    else o[index] = [ value ];

    return o;
}

function markLine(lines, index) {
    lines[index] = true;
    return lines;
}

function getObject(bots, output, word) {
    let o;

    if (word === 'bot') {
        o = bots;
    } else {
        o = output;
    }

    return o;
}

function part1() {
    let lines = file.split('\n'),
        totalLines = lines.length,
        executedLines = {},
        repeat = true,
        bots = {},
        output = {},
        targetBot = '';

    while (repeat) {
        lines.forEach((line, iteration) => {
            if (!executedLines[iteration]) {
                let split = line.split(' ');

                if (split[2] === 'goes') {
                    let bot = split[5],
                        value = split[1];

                    bots = assignValue(bots, bot, value);
                    executedLines = markLine(executedLines, iteration);
                } else {
                    let bot = split[1],
                        low = split[6],
                        high = split[11],
                        lowObject = getObject(bots, output, split[5]),
                        highObject = getObject(bots, output, split[10]),
                        lowValue, highValue;

                    if (bots[bot] && bots[bot].length === 2) {
                        if ((bots[bot][0] === 61 || bots[bot][0] === 17) && (bots[bot][1] === 61 || bots[bot][1] === 17)) {
                            targetBot = bot;
                            console.log('Target', bot, bots[bot][0], bots[bot][1]);
                        }

                        if (bots[bot][0] > bots[bot][1]) {
                            lowValue = bots[bot][1];
                            highValue = bots[bot][0]
                        } else {
                            lowValue = bots[bot][0];
                            highValue = bots[bot][1]
                        }
                        highObject = assignValue(highObject, high, highValue);
                        lowObject = assignValue(lowObject, low, lowValue);
                        bots[bot] = [];
                        executedLines = markLine(executedLines, iteration);
                    }
                }
            }
        });
        if (Object.keys(executedLines).length === totalLines) {
            repeat = false;
        }
    }

    return targetBot;
}

console.log(part1());

// Part 2
function part2() {
    let lines = file.split('\n'),
        totalLines = lines.length,
        executedLines = {},
        repeat = true,
        bots = {},
        output = {};

    while (repeat) {
        lines.forEach((line, iteration) => {
            if (!executedLines[iteration]) {
                let split = line.split(' ');

                if (split[2] === 'goes') {
                    let bot = split[5],
                        value = split[1];

                    bots = assignValue(bots, bot, value);
                    executedLines = markLine(executedLines, iteration);
                } else {
                    let bot = split[1],
                        low = split[6],
                        high = split[11],
                        lowObject = getObject(bots, output, split[5]),
                        highObject = getObject(bots, output, split[10]),
                        lowValue, highValue;

                    if (bots[bot] && bots[bot].length === 2) {
                        if (bots[bot][0] > bots[bot][1]) {
                            lowValue = bots[bot][1];
                            highValue = bots[bot][0]
                        } else {
                            lowValue = bots[bot][0];
                            highValue = bots[bot][1]
                        }
                        highObject = assignValue(highObject, high, highValue);
                        lowObject = assignValue(lowObject, low, lowValue);
                        bots[bot] = [];
                        executedLines = markLine(executedLines, iteration);
                    }
                }
            }
        });
        if (Object.keys(executedLines).length === totalLines) {
            repeat = false;
        }
    }

    return output[0] * output[1] * output[2];
}

console.log(part2());
