/* day 3 part 1 */
var luckyHouses = function(input) {
    
    var curX = 0
        ,curY = 0
        ,totalHouses = 1
        ,luckyHouses = [0,1]
        ,currChar;
        
    luckyHouses[1] = 1;
    
    var houseMap = [curX];
    houseMap[curX] = [curY];
    houseMap[curX][curY] = 1;
    
    var goToHouse = function(x,y) {
        if(houseMap[x] === undefined) {
            houseMap[x] = [];
        }
        if(houseMap[x][y] === undefined) {
            totalHouses++;
            houseMap[x][y] = 0;
        }
        currentPresents = ++houseMap[x][y];
        
        if(luckyHouses[currentPresents] === undefined) {
            luckyHouses[currentPresents] = 0;
        }
        luckyHouses[currentPresents]++;
        
        if(currentPresents - 1 > 0) {
            luckyHouses[currentPresents - 1]--;
        }
    }
    
    for(i = 0, len = input.length; i < len; i++) {
        currChar = input.charAt(i);
        
        if(currChar == '^') {
            curX++;
        }
        else if(currChar == 'v') {
            curX--;
        }
        else if(currChar == '>') {
            curY++;
        }
        else if(currChar == '<') {
            curY--;
        }
        
        goToHouse(curX,curY);
    }
    
    return {
        presToHouse: luckyHouses
        ,housesVisited: totalHouses
    };
}