function getHouses(input) {
    let i = 0,
        len = input.length,
        x = 0,
        y = 0,
        total = 1,
        key = '',
        houses = {
            '0, 0': 'x'
        };
    
    for (; i < len; i++) {
        if (input[i] === 'v') {
            y -= 1;
        } else if (input[i] === '^') {
            y += 1;
        } else if (input[i] === '<') {
            x -= 1;
        } else if (input[i] === '>') {
            x += 1;
        }
        
        key = x + ', ' + y;
        
        if (!houses[key]) {
            houses[key] = 'x';
            total += 1;
        }
    }
    
    return total;
}

function getYDelta(char) {
    let delta = 0;
    
    if (char === 'v') {
        delta = -1;
    } else if (char === '^') {
        delta = 1;
    }
    
    return delta;
}

function getXDelta(char) {
    let delta = 0;
    
    if (char === '<') {
        delta = -1;
    } else if (char === '>') {
        delta = 1;
    }
    
    return delta;
}

function getHousesWithRoboSanta(input) {
    let i = 0,
        len = input.length,
        santaX = 0,
        santaY = 0,
        roboX = 0,
        roboY = 0,
        total = 1,
        key = '',
        houses = {
            '0, 0': 'x'
        };
    
    for (; i < len; i++) {
        // Robo Santa
        if (i % 2 === 0) {
            roboX += getXDelta(input[i]);
            roboY += getYDelta(input[i]);
            
            key = roboX + ', ' + roboY;
        } else {
            santaX += getXDelta(input[i]);
            santaY += getYDelta(input[i]);
            
            key = santaX + ', ' + santaY;
        }
        
        if (!houses[key]) {
            houses[key] = 'x';
            total += 1;
        }
    }
    
    return total;
}