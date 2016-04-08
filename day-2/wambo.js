function howMuchPaper(input) {
    let lwh = input.split('x'),
        l = lwh[0],
        w = lwh[1],
        h = lwh[2],
        areaL = l * w,
        areaW = w * h,
        areaH = h * l,
        smallest = Math.min(areaL, areaW, areaH);
        
    return 2 * areaL + 2 * areaW + 2 * areaH + smallest;
}

function getTotal(list) {
    let total = 0;
    
    list.forEach(function(item) {
        total += howMuchPaper(item);
    });
    
    return total;
}