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