'use strict';
const md5 = require('./md5');

// Part 1
function part1() {
    let input = 'ffykfhsq',
        password = '',
        i = 0,
        hash;

    while (password.length < 8) {
        hash = md5(input + i);
        if (hash.substr(0, 5) === '00000') {
            password += hash.substr(5, 1);
            console.log('pwd', password, hash);
        }
        i++;
    }

    return password;
}

console.log(part1());

// Part 2
function part2() {
    let input = 'ffykfhsq',
        password = [],
        pos = {},
        text = '',
        i = 0,
        hash;

    while (text.length < 8) {
        hash = md5(input + i);
        if (hash.substr(0, 5) === '00000') {
            let position = parseInt(hash.substr(5, 1), 10);
            if (position >= 0 && position <= 7) {
                if (!pos[position]) {
                    text += hash.substr(6, 1);
                    pos[position] = hash.substr(6, 1);
                    password[position] = hash.substr(6, 1);
                }
            }
        }
        i++;
    }

    return password.join('');
}

console.log(part2());
