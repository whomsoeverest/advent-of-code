// Part 1
function getFloor(input) {
    let floor = 0,
        i = 0, 
        len = input.length || 0,
        map = {
            '(': 1,
            ')': -1
        };
    
    for (; i < len; i++) {
        floor += map[input[i]];
    }
    
    return floor;
}

// Part 2
function getBasementEntryPoint(input) {
    let floor = 0,
        iteration = 0,
        i = 0,
        len = input.length || 0,
        map = {
            '(': 1,
            ')': -1
        };
    
    for (; i < len; i++) {
        floor += map[input[i]];
        if (floor === -1) {
            iteration = i + 1;
            break;
        }
    }
    
    return iteration;
}