/**
 * Created by citizen4 on 26/10/16.
 */

let baseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/**
 * Array.prototype.forEach():
 *
 * The forEach() method executes a provided function once per array element.
 *
 * So, its a convenient replacement for: while and for loops, Nothing more!
 *
 * Parameters
 *
 *      callback
 *          Function to execute for each element, taking three arguments:
 *          currentValue
 *              The current element being processed in the array.
 *          index
 *              The index of the current element being processed in the array.
 *          array
 *              The array that forEach() is being applied to.
 *
 *      thisArg Optional
 *          Value to use as this when executing callback.
 *
 *     Return value
 *          undefined.
 *
 * Note: forEach() does not make a copy of the array before iterating.
 *
 */

let forEach = (array, fn) => {
    i = array.length -1;
    while(i--) fn(array[i]);
}

console.log('########### Array.forEach');
//console.time('Array.forEach');
console.log ('baseArray:', baseArray);

let res = baseArray.forEach( item => console.log(`${item}:${Math.pow(item, 2)}`));
//let res = forEach(baseArray, item => console.log(`${item}:${Math.pow(item, 2)}`));

console.log('### Printing the contents of an array: ');
//console.timeEnd('Array.forEach');

let logElement = (element, index, array) => {
    console.log('Array[' + index + '] = ' + element);
}
[2, 5, , 9].forEach(logElement);

/*
Using thisArg

The following (contrived) example updates an object's properties from each entry in the array:
*/
console.log('### Using thisArg: ');

function Counter() {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = function(array) {
    array.forEach(function(entry) {
        this.sum += entry;
        ++this.count;
    }, this);
    // ^---- Note
};

let obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count);     // 3
console.log(obj.sum);       // 16

/*
     An object copy function
     The following code creates a copy of a given object.
     There are different ways to create a copy of an object,
     the following is just one way and is presented to explain
     how Array.prototype.forEach() works by using ECMAScript 5 Object.* meta property functions.
 */
console.log('### An object copy function: ');
function copy(obj) {
    var copy = Object.create(Object.getPrototypeOf(obj));
    var propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function(name) {
        var desc = Object.getOwnPropertyDescriptor(obj, name);
        Object.defineProperty(copy, name, desc);
    });

    return copy;
}

var obj1 = { a: 1, b: 2, c: { a: 1, b: 2 } };
var obj2 = copy(obj1); // obj2 looks like obj1 now
console.log(obj1);
console.log(obj2);

/**
 If the array is modified during iteration, other elements might be skipped.

 The following example logs "one", "two", "four". When the entry containing the value "two" is reached,
 the first entry of the whole array is shifted off, which results in all remaining entries moving up one position.
 Because element "four" is now at an earlier position in the array, "three" will be skipped.

 forEach() does not make a copy of the array before iterating.
 */
console.log('### Shifting content of an array: ');
var words = ["one", "two", "three", "four"];
words.forEach(function(word) {
    console.log(word);
    if (word === "two") {
        words.shift();
    }
});

console.log('########### END: Array.forEach');


/**
 * Array.prototype.filter()
 *
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 *
 * Parameters
 *
 *      callback
 *          Function to execute for each element, taking three arguments:
 *
 *          currentValue
 *              The current element being processed in the array.
 *          index
 *              The index of the current element being processed in the array.
 *          array
 *              The array that filter() is being applied to.
 *
 *      thisArg Optional
 *          Value to use as this when executing callback.
 *
 *     Return value
 *          A new array with the elements that pass the test.
 *
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */



/**
 * Array.prototype.some()
 *
 * The some() method tests whether some element in the array passes the test implemented by the provided function.
 *
 * Parameters
 *
 *      callback
 *          Function to execute for each element, taking three arguments:
 *
 *          currentValue
 *              The current element being processed in the array.
 *          index
 *              The index of the current element being processed in the array.
 *          array
 *              The array that some() is being applied to.
 *
 *      thisArg Optional
 *          Value to use as this when executing callback.
 *
 *     Return value
 *          true if the callback function returns a truthy value for any array element; otherwise, false.
 *
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 */




/**
 * Array.prototype.every()
 *
 * The every() method tests whether all elements in the array pass the test implemented by the provided function.
 *
 * Parameters
 *
 *      callback
 *          Function to execute for each element, taking three arguments:
 *
 *          currentValue
 *              The current element being processed in the array.
 *          index
 *              The index of the current element being processed in the array.
 *          array
 *              The array that every() is being applied to.
 *
 *      thisArg Optional
 *          Value to use as this when executing callback.
 *
 *     Return value
 *          true if the callback function returns a truthy value for every array element; otherwise, false.
 *
 *
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 */



/**
 * Array.prototype.map()
 *
 * The map() method creates a new array with the results of calling a provided function on every element in this array.
 *
 * Parameters
 *
 *      callback
 *          Function to execute for each element, taking three arguments:
 *
 *          currentValue
 *              The current element being processed in the array.
 *          index
 *              The index of the current element being processed in the array.
 *          array
 *              The array that map() is being applied to.
 *
 *      thisArg Optional
 *          Value to use as this when executing callback.
 *
 *     Return value
 *          A new array with each element being the result of the callback function.
 *
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */


/**
 * Array.prototype.reduce()
 *
 * The reduce() method applies a function against an accumulator and each value of the array (from left-to-right)
 * to reduce it to a single value.
 *
 * Parameters
 *
 *      callback
 *          Function to execute for each element, taking three arguments:
 *
 *          currentValue
 *              The current element being processed in the array.
 *          index
 *              The index of the current element being processed in the array.
 *          array
 *              The array that reduce() is being applied to.
 *
 *      thisArg Optional
 *          Value to use as this when executing callback.
 *
 *     Return value
 *          The value that results from the reduction.
 *
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

