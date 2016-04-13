/* day 1 puzzle 1 */
var floorCalc = function(input) {
    return (input.split("(").length - 1) * 1 + (input.split(")").length - 1) * -1;
}

/* day 1 puzzle 2 */
var basementCalc = function(input) {
    for(var i=0,len = input.length,currFloor=0;i<len;i++) {
        var dir = input.charAt(i);
        if(dir == '(') {
            currFloor += 1;
        }
        else if(dir == ')') {
            currFloor -= 1;
        }
        if(currFloor < 0) {
            return ++i;
        }
    }
}