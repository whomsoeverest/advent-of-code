// Part 1
'use strict';
const fs = require('fs');

function part1() {
    const file = fs.readFileSync('input.txt');

    let list = String(file).split('\n  '),
        triangleCount = 0;

    list.forEach(function(sides) {
        let a = parseInt(sides.substr(0,5), 10),
            b = parseInt(sides.substr(5, 5), 10),
            c = parseInt(sides.substr(10,5), 10);

        if (a + b > c && a + c > b && b + c > a) {
            triangleCount++;
        }
    });

    return triangleCount;
}

console.log(part1());

// Part 2
function getInt(str, start) {
    return parseInt(str.substr(start, 5), 10);
}

function part2() {
    const file = fs.readFileSync('input.txt');

    let str = String(file),
        list = str.split('\n  '),
        triangleCount = 0,
        i = 0,
        length = list.length;

    for(; i < length; i += 3) {
        let triangles = [
            [ getInt(list[i], 0), getInt(list[i + 1], 0), getInt(list[i + 2], 0) ],
            [ getInt(list[i], 5), getInt(list[i + 1], 5), getInt(list[i + 2], 5) ],
            [ getInt(list[i], 10), getInt(list[i + 1], 10), getInt(list[i + 2], 10) ]
        ];

        triangles.forEach(function(triangle) {
            let a = triangle[0],
                b = triangle[1],
                c = triangle[2];

            if (a + b > c && a + c > b && b + c > a) triangleCount++;
        });
    }

    return triangleCount;
}

console.log(part2());