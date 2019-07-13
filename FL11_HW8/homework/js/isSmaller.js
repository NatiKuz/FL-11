function isBigger(a, b) {
    return a > b;
}

function isSmaller(a, b) {
    return a !==b && !isBigger(a, b);
}

isSmaller(5, -1);