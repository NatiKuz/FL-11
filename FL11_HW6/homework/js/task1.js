let a1 = parseInt(prompt('Please, enter x coordinate for point A', '0'));
let a2 = parseInt(prompt('Please, enter y coordinate for point A', '0'));
let b1 = parseInt(prompt('Please, enter x coordinate for point B', '0'));
let b2 = parseInt(prompt('Please, enter y coordinate for point B', '0'));
let c1 = parseInt(prompt('Please, enter x coordinate for point C', '0'));
let c2 = parseInt(prompt('Please, enter y coordinate for point C', '0'));
let message;
const numTwo = 2;

if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)) {
    message = 'Invalid input data';
} else {
    let middlePointX = (a1 + b1) / numTwo;
    let middlePointY = (a2 + b2) / numTwo;

    if (middlePointX === c1 && middlePointY === c2) {
        message = 'true';
    } else {
        message = 'false';
    }
}

console.log(message);