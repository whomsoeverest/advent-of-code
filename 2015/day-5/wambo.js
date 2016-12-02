// Part 1
function isNice(str) {
    let vowelRE = /(a|e|i|o|u)/gi,
        dupeRE = /([a-zA-Z])\1+/g,
        forbiddenRE = /(ab|cd|pq|xy)/gi,
        vowelMatches = str.match(vowelRE);

    return !!(!str.match(forbiddenRE) && (vowelMatches && vowelMatches.length >= 3) && str.match(dupeRE));
}

function getNiceAmount(input) {
    var total = 0;

    input.forEach(function(str) {
        if (isNice(str)) {
            total += 1;
        }
    });

    return total;
}

// Part 2
function isReallyNice(str) {
    let dupeRE = /([a-zA-Z]{2,3}).*\1/,
        repeatRE = /([a-zA-Z])((?!\1).)\1/;

    return !!(str.match(dupeRE) && str.match(repeatRE));
}

function getReallyNiceAmount(input) {
    var total = 0;

    input.forEach(function(str) {
        if (isReallyNice(str)) {
            total += 1;
        }
    });

    return total;
}