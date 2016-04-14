/* day 2 puzzle 1 */
var totalPaper = function(input) {
    var total = 0;
    for(i = 0,size = input.length;i<size;i++) {
        total += wrappingPaper(input[i].split('x'));
    }
    
    return total;
}

var wrappingPaper = function(dimensions) {
    var l = dimensions[0]
        ,w = dimensions[1]
        ,h = dimensions[2];
    
    return 2*l*w + 2*w*h + 2*h*l + Math.min(l*w,Math.min(l*h,Math.min(w*h)));
}

/* day 2 puzzle 2 */
var ribbon = function(dimensions) {
    var l = parseInt(dimensions[0],10)
        ,w = parseInt(dimensions[1],10)
        ,h = parseInt(dimensions[2],10);
    
    return (l*w*h) + Math.min(2*(l+w),Math.min(2*(l+h),Math.min(2*(w+h))));
}

var totalRibbon = function(input) {
    var total = 0;
    for(i = 0,size = input.length;i<size;i++) {
        total += ribbon(input[i].split('x'));
    }
    
    return total;
}