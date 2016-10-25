/**
 * Created by Petzch on 21.10.2016.
 */

/*
    Classical callback pattern

    Drawbacks:
    (1) To differentiate the error and success cases we have to write
        manually code for error and success cases
        within the callback function.
    (2) Error and success case can be called both or each twice
        see: the code in getTempCallback

    ==> Use Promises to the rescue

    Hint to run the code:
        $ node example-promise.js

function getTempCallback(location, callback){
    callback(undefined, 24);
    callback('City not found');
}

getTempCallback('London', function(err, tmp){
    if(err){
        console.log('error', err);
    }else{
        console.log('success', tmp);
    }
});
 */

/*
 Promise pattern

 https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise

 https://www.npmjs.com/package/promise
 https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html


 Hint to run the code:
 $ node example-promise.js

 */
function getTempPromise(location){
    return new Promise(function (resolve, reject){
         setTimeout(function () {
            resolve(79);
            reject('City not found');
         }, 1000);
    });
}

function addPromise(a, b){
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve((a+b));
            }else{
                reject('Invalid datatype.');
            }

        }, 1000);
    });
}




function doSomething() {
    console.log('doSomething(): start');
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('doSomething(): end');
            resolve();
        }, 1000);
    });
}

function doSomethingElse() {
    console.log('doSomethingElse(): start');
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('doSomethingElse(): end');
            resolve();
        }, 1000);
    });
}

function finalHandler() {
    console.log('finalHandler(): start');
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('finalHandler(): end');
            resolve();
        }, 1000);
    });
}


function example0(){
    getTempPromise('London').then(
        function(temp){
            console.log('getTempPromise:success', temp);
        },
        function (err){
            console.log('getTempPromise:error', err);
        }
    );
}

function example1(){
    addPromise(4, 6).then(
        function(temp){
            console.log('addPromise:success', temp);
        },
        function (err){
            console.log('addPromise:error', err);
        }
    );

    addPromise(4, 'A').then(
        function(temp){
            console.log('addPromise:success', temp);
        },
        function (err){
            console.log('addPromise:error', err);
        }
    );
}

function example2() {
    doSomething().then(function () {
        return doSomethingElse();
    }).then(finalHandler);
}

function example3() {
    doSomething().then(function () {
        doSomethingElse();
    }).then(finalHandler);
}

function example4() {
    doSomething().then(doSomethingElse())
        .then(finalHandler);
}

function example5() {
    doSomething().then(doSomethingElse)
        .then(finalHandler);
}

example0();
example1();