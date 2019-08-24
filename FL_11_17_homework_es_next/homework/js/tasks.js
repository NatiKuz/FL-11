/* Task 1 */
function maxElement(arr) {
    return Math.max(...arr);
    // return Math.max(...arr);
}

const array0 = [1,2,3,4,56,7,8,76,5,241,5,356,567,2];
console.log(maxElement(array0));

/* Task 2 */
function copyArray(arr) {
    const copArray = [...arr];
    return copArray;
}

const array = [1,2,3];
const copiedArray = copyArray(array);
console.log(array, copiedArray);
console.log(array === copiedArray);

/* Task 3 */
function addUniqueId(obj){
    return {id: Symbol(), ...obj};
}
console.log(addUniqueId({name: 123}));

/* Task 4 !!!!!!!!!!!!!!!!!!!!!!!*/
const oldObj = {name: 'Someone', detalis: {id: 1, age: 11, university: 'UNI'}};
const newObj = {university: 'UNI', user: {age: 11, firstName: 'Someone', id: 1}};
// console.log(oldObj);
// console.log(newObj);

function regroupObject() {
    return newObj;
}

console.log(regroupObject());

/* Task 5 */
function findUniqueElement(arr) {
    const unigSet = new Set(arr);
    return Array.from(unigSet);
}

const digitsArray = [1,1,23,3,4,5,6,5,4,23,2,1,1,1,1,1];
console.log(digitsArray);
console.log(findUniqueElement(digitsArray));

/* Task 6 */
function hideNumber(str) {
    return str.slice(-4).padStart(10, '*');
}

const phoneNumber = '0123456789';
console.log(hideNumber(phoneNumber));

/* Task 7 */
const isRequired = () => {throw new Error('Missing property');};

function add(num1 = isRequired(), num2 = isRequired()) {
    if (num1 && num2) {
        return num1 + num2;
    }
}

console.log(add(1, 3));

/* Task 8 */

/* Task 9 */