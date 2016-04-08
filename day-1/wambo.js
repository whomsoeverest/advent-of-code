function findFloor(input) {
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