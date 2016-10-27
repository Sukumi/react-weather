/**
 * Quicksort Algorithm
 *
 * https://en.wikipedia.org/wiki/Quicksort
 */


let getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

let swap = (array, i, j) => {
    let tmp = array[j];
    array[j] = array[i];
    array[i] = tmp;
}

let partition = (array, lo, hi) => {
    let pivot = array[hi];
    let i = lo;                         // place for swapping
    for(let j = lo; j < hi; j++){
        if(array[j] <= pivot){
            swap(array, i, j);
            i += 1;
        }
    }
    swap(array, i, hi);
    return i;
}

let quicksort = (array, lo, hi) => {
    if(lo < hi){
        let p = partition(array, lo, hi);
        quicksort(array, lo, p - 1 );
        quicksort(array, p + 1, hi);
    }
    return array;
}

let arNum = [9, 12, 3, 29078, 888888, 1, 3];

console.time('quicksort');
let arNumSorted = quicksort(arNum.slice(), 0, arNum.length - 1);
console.timeEnd('quicksort');




console.log(arNumSorted);

