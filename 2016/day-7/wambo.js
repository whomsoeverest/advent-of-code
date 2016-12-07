'use strict';

const fs = require('fs');
const buffer = fs.readFileSync('input.txt');
const file = String(buffer);

// Part 1
function hasTLSSupport(str) {
    let i = 0,
        len = str.length,
        hasSupport = false;

    for(; i < len - 3; i++) {
        let a = str[i],
            b = str[i + 1],
            c = str[i + 2],
            d = str[i + 3];

        if (a === d && b === c && a !== b) {
            hasSupport = true;
            i = len;
        }
    }

    return hasSupport;
}

function part1() {
    let lines = file.split('\n'),
        numberTLS = 0;

    lines.forEach(line => {
        let strings = line.split(/\[[a-zA-Z]+\]/g),
            hypernet = line.match(/\[[a-z]+\]/g),
            stringHasTLS = false,
            hypernetHasTLS = false;

        hypernet.forEach((v, i) => {
            let replaced = v.replace(/(\[|\])/g, '');
            if (hasTLSSupport(replaced)) {
                hypernetHasTLS = true;
            }
        });

        if (!hypernetHasTLS) {
            strings.forEach(v => {
                if (hasTLSSupport(v)) {
                    stringHasTLS = true;
                }
            });
        }

        if (stringHasTLS) {
            numberTLS++;
        }
    });

    return numberTLS;
}

console.log(part1());

function sslCharacters(str, swap) {
    let i = 0,
        len = str.length,
        characters = [];

    for(; i < len - 2; i++) {
        let a = str[i],
            b = str[i + 1],
            c = str[i + 2];

        if (a === c && a !== b) {
            if (swap) characters.push(b + a + b);
            else characters.push(a + b + c);
        }
    }

    return characters;
}

function part2() {
    let lines = file.split('\n'),
        numberSSL = 0;

    lines.forEach(line => {
        let strings = line.split(/\[[a-zA-Z]+\]/g),
            hypernets = line.match(/\[[a-z]+\]/g),
            sslStrings = [],
            hypernetHasMatch = false;

        strings.forEach(v => {
            sslStrings = sslStrings.concat(sslCharacters(v, true));
        });

        if (sslStrings.length > 0) {
            hypernets.forEach((v, i) => {
                let replaced = v.replace(/(\[|\])/g, '');
                sslCharacters(replaced).forEach(r => {
                    if (sslStrings.indexOf(r) > -1) {
                        hypernetHasMatch = true;
                    }
                });
            });

            if (hypernetHasMatch) numberSSL++;
        }
    });

    return numberSSL;
}

console.log(part2());