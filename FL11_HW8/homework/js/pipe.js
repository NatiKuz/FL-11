function addOne(x) {
    return x + 1;
}
  
function pipe() {
    let result = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        let func = arguments[i];
        result = func(result);
    }
    return result;
}

pipe(1, addOne);