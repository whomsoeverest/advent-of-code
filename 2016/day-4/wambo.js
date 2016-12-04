'use strict';
const fs = require('fs');
const buffer = fs.readFileSync('input.txt');
const file = String(buffer);

// Part 1
function part1() {
    let list = file.split('\n'),
        /*list = [
            'aaaaa-bbb-z-y-x-123[abxyz]',
            'a-b-c-d-e-f-g-h-987[abcde]',
            'not-a-real-room-404[oarel]',
            'totally-real-room-200[decoy]'
        ],*/
        sectorIDs = [];

    list.forEach(line => {
        let sectorID = line.match(/[0-9]+/)[0],
            split = line.split(/[0-9]+/),
            name = split[0].replace(/-/g, ''),
            checksum = split[1].replace(/(\[|\])/g, ''),
            letters = {},
            letterList = [],
            ordered = '',
            i;

        for (i = 0; i < name.length; i++) {
            if (letters[name[i]] !== undefined) {
                letterList[letters[name[i]]].count++;
            } else {
                letterList.push({
                    key: name[i],
                    count: 1
                });
                letters[name[i]] = letterList.length - 1;
            }
        }

        letterList = letterList.sort((a, b) => {
            if (b.count > a.count) return 1;
            if (a.count > b.count) return -1;
            if (a.count === b.count) {
                if (a.key > b.key) return 1;
                if (b.key > a.key) return -1;
            }
            return 0;
        });

        for (i = 0; i < 5; i++) {
            ordered += letterList[i].key;
        }

        if (checksum === ordered) sectorIDs.push(sectorID);
    });

    return sectorIDs.reduce((memo, value) => {
        return memo += parseInt(value, 10);
    }, 0);
}

console.log(part1());

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

// Part 2
function getAlphaNumber(letter) {
    let number = 0,
        i;

    for (i = 0; i < 26; i++) {
        if (letter === alphabet[i]) {
            number = i;
            i = 26;
        }
    }

    return number;
}

function decrypt(name, shift) {
    let decrypted = '',
        i;

    for (i = 0; i < name.length; i++) {
        if (name[i] === '-') {
            decrypted += ' ';
        } else {
            decrypted += alphabet[((getAlphaNumber(name[i]) + shift) % 26)];
        }
    }

    return decrypted;
}

function part2() {
    let list = file.split('\n'),
        storageSector;

    list.forEach(line => {
        let sectorID = parseInt(line.match(/[0-9]+/)[0], 10),
            split = line.split(/[0-9]+/),
            name = split[0],
            checksum = split[1].replace(/(\[|\])/g, ''),
            letters = {},
            letterList = [],
            ordered = '',
            i;

        for (i = 0; i < name.length; i++) {
            if (name[i] !== '-') {
                if (letters[name[i]] !== undefined) {
                    letterList[letters[name[i]]].count++;
                } else {
                    letterList.push({
                        key: name[i],
                        count: 1
                    });
                    letters[name[i]] = letterList.length - 1;
                }
            }
        }

        letterList = letterList.sort((a, b) => {
            if (b.count > a.count) return 1;
            if (a.count > b.count) return -1;
            if (a.count === b.count) {
                if (a.key > b.key) return 1;
                if (b.key > a.key) return -1;
            }
            return 0;
        });

        for (i = 0; i < 5; i++) ordered += letterList[i].key;

        if (checksum === ordered && decrypt(name, sectorID).indexOf('northpole object storage') >= 0) storageSector = sectorID;
    });

    return storageSector;
}

console.log(part2());
