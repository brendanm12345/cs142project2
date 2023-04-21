"use strict";

function cs142MakeMultiFilter(originalArray) {
    // make a copy of the original array
    const currentArray = originalArray.slice();

    function arrayFilterer(filterCriteria, callback) {
        if (typeof(filterCriteria) !== 'function') {
            return currentArray;
        }
        for (let i = 0; i < currentArray.length; i++) {
            if(!filterCriteria(currentArray[i])) {
                currentArray.splice(i, 1);
                i--;
            }
        }
        if (typeof(callback) === 'function') {
            callback.call(originalArray, currentArray);
        }
        return arrayFilterer;  
    }
    return arrayFilterer;
}