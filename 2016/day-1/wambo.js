// Part 1
function determineDistance(input) {
    let directions = input.split(', '),
        face = 0,
        x = 0,
        y = 0;

    directions.forEach(function(direction) {
        let turn = direction.substr(0,1),
            blocks = parseInt(direction.substr(1), 10);

        if (turn === 'R') {
            face++;
            if (face > 3) face = 0;
        } else {
            face--;
            if (face < 0) face = 3;
        }

        if (face === 0) y += blocks; // North
        if (face === 1) x += blocks; // East
        if (face === 2) y -= blocks; // South
        if (face === 3) x -= blocks; // West
    });

    return Math.abs(x) + Math.abs(y);
}

// Part 2
function getBunnyHQ(input) {
    let directions = input.split(', '),
        length = directions.length,
        hqFound = false,
        i = 0,
        face = 0,
        x = 0,
        y = 0,
        hqX = 0,
        hqY = 0,
        visited = { '0,0': true };

    for (;i < length && !hqFound; i++) {
        let direction = directions[i],
            turn = direction.substr(0,1),
            blocks = parseInt(direction.substr(1), 10);

        if (turn === 'R') {
            face++;
            if (face > 3) face = 0;
        } else {
            face--;
            if (face < 0) face = 3;
        }

        for (let n = 0; n < blocks && !hqFound; n++) {
            if (face === 0) y++; // North
            if (face === 1) x++; // East
            if (face === 2) y--; // South
            if (face === 3) x--; // West

            if (visited[x + ',' + y]) {
                hqX = x;
                hqY = y;
                hqFound = true;
                console.log('Found ', x, y);
            } else {
                visited[x + ',' + y] = true;
            }
        }
    }

    return Math.abs(hqX) + Math.abs(hqY);
}