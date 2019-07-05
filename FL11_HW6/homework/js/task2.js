let a = parseFloat(prompt('Please, enter the first length of the triangle side', '0'));
let b = parseFloat(prompt('Please, enter the second length of the triangle side', '0'));
let c = parseFloat(prompt('Please, enter the third length of the triangle side', '0'));
let message;

if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0 || isNaN(c) || c <= 0) {
    message = 'Invalid input data';
} else {

    if (a >= b + c || b >= a + c || c >= a + b) {
        message = 'Triangle doesn\'t exist';
    } else {
        
        if (a === b && a === c && b === c) {
            message = 'Equivalent triangle';
        } else if (a === b || b === c || a === c) {
            message = 'Isosceles triangle';
        } else {
            message = 'Normal triangle';
        }
    }
}

console.log(message);