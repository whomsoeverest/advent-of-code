/* day 1 puzzle 1 */
var floorCalc = function(input) {
    return (input.split("(").length - 1) * 1 + (input.split(")").length - 1) * -1;
}

/* day 1 puzzle 2 */