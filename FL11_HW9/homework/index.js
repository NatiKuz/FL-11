// task #0
function getNumbers(str) {
    let arr = str.split('');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            result.push(parseInt(arr[i]));
        }
    }
    return result;
}

// task #1
function findTypes() {
    let result = {};

    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];

        if (result[type]) {
            result[type]++;
        } else {
            result[type] = 1;
        }
    }
    return result;
}

// task #2
function executeforEach(arr, func) {

    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

// task #3
function mapArray(arr, func) {
    let newArr = [];

    executeforEach(arr, function(el) {
        newArr.push(func(el));
    });
    return newArr;
}

// task #4
function filterArray(arr, func) {
    let newArr = [];

    executeforEach(arr, function(el) {
        if (func(el)) {
            newArr.push(el);
        }
    });
    return newArr;
}

// task #5
function showFormattedDate(date) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `Date: ${monthNames[month]} ${day} ${year}`;
}

// task #6
function canConvertToDate(strDate) {
    return !isNaN((new Date(strDate)).getDate());
}

// task #7
function daysBetween(date1, date2) {
    // 1000 * 60 * 60 * 24;
    const milisecondsPerDay = 86400000;
    const differenceTime = Math.abs(date2.getTime() - date1.getTime());
    const differenceDays = Math.ceil(differenceTime / milisecondsPerDay);
    return differenceDays;
}

// task #8
function getAmountOfAdultPeople(data) {
    const yearsOld = 18;
    let date = new Date();
    date.setFullYear(date.getFullYear() - yearsOld);

    let filterArr = filterArray(data, function(el) {
        return date > new Date(el.birthday);
    });
    return filterArr.length;
}

// task #9
function keys(obj) {
    let arrKeys = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrKeys.push(key);
        } 
    }
    return arrKeys;
}

// task #10
function values(obj) {
    let arrValues = [];
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrValues.push(obj[key]);
        } 
    }
    return arrValues;
}