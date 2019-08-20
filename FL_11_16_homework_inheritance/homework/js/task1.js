'use strict';

const assign = (sourceObj, ...params) => {
    return params.reduce((source, current) => {        
        for (let key in current) {
            if (current.hasOwnProperty(key)) {
                source[key] = current[key];
            }
        }
        return source;
    }, sourceObj)
};