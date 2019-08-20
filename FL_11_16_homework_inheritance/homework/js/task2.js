'use strict';

const create = function(obj) {
    if (arguments.length !== 1) {
        throw new Error('Object.create implementation only accepts one parameter.');
    }

    function F() {
        /** skip error of eslint - empty function 'F' */
    }
    F.prototype = obj;
    return new F();
};