/**
 * Created by citizen4 on 26/10/16.
 */

//run: node example-map-reduce.js
//run: babel-node example-map-reduce.js

// Sorting rules when comparing 2 elements
    // 1. negative return value (-1): a < b
    // 2. positive return value (+1): a > b
    // 3. Zero (0) return value (0): a===b


let default_comparer = (a, b) => {
        return a < b ? -1 : a > b ? 1 : a === b ? 0 : NaN;
    };

let num_comparer = (a, b) => {
    return a - b;
};

let length_comparer = (a, b) => {
    return a.length - b.length;
};

let sorter = (array, comparer) => {
    if(comparer)
        return array.sort(comparer);
    else
        return array.sort();

}

let vArray = [1,5,7,2,0,3,4,12];
let vArray2 = vArray.slice().sort();

console.log('vArray: ', vArray); //
console.log('vArray2: ',vArray2); // []


let vArray3 = vArray.slice().sort(num_comparer);
console.log('vArray3: ',vArray3); // []

let vArray4 = ['Harry', 'Anton', 'Michi', 'Michaela'].sort();
console.log('vArray4: ',vArray4);

let vArray5 = ['Harry', 'Anton', 'Michi', 'Michaela'].sort(length_comparer);
console.log('vArray5: ',vArray5);

// true: is admin, false: is not admin
let checkAdmin = name => name.toLocaleLowerCase().indexOf('Admin'.toLocaleLowerCase()) >= 0;
// or !== -1

let admin_comparer = (a, b) => checkAdmin(a)? -1: checkAdmin(b)? -1: a>b;

let admin_comparer2 = (a, b) => {
    if(checkAdmin(a)) return -1;
    if(checkAdmin(b)) return 1;
    return a < b;
}

let aUser = ['Stephan', 'Sarah (Admin)', 'Oleg (Admin)', 'Pete', 'Anton'];

let aUserSortedAdmin1 = aUser.slice().sort(admin_comparer);
let aUserSortedAdmin2 = aUser.slice().sort(admin_comparer2);
let aUserSortedDefault = aUser.slice().sort(default_comparer);
let aUserSortedJSDefault = aUser.slice().sort();
console.log('aUserSortedAdmin1', aUserSortedAdmin1);
console.log('aUserSortedAdmin2', aUserSortedAdmin2);
console.log('aUserSortedDefault', aUserSortedDefault);
console.log('aUserSortedJSDefault', aUserSortedJSDefault);