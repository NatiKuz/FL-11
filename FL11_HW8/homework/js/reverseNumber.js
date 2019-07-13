function reverseNumber(num) {
    let isNumberNegative = num < 0;
    num = Math.abs(num);
    let strReverseNum = '';
    
    do {
        let lastDigit = num % 10;
        num = (num - lastDigit) / 10;
        strReverseNum = strReverseNum + lastDigit;
    } while (num > 0);

    num = parseInt(strReverseNum);

    return (isNumberNegative) ? -num : num;
}

reverseNumber(123);