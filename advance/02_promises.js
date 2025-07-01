// Promise -> Object that represents the eventual completion (or failure) 
//            of an asynchronous operation and its resulting value.
// Promise is a constructor function that takes a function as an argument
//      the function takes 2 arguments => resolve and reject
//      resolve is called when the asynchronous operation is successful
//      reject is called when the asynchronous operation fails
//      the function passed to the Promise constructor is called immediately
//      and the resolve and reject functions are used to change the state of the promise

//  consist of 3 states
// 1. pending => initial state, neither fulfilled nor rejected
//    - the promise is still being processed
// 2. fulfilled => meaning that the operation was completed successfully
//    - the promise has been resolved
//    - the promise is now in a state where it can be used to get the result
// 3. rejected => meaning that the operation failed
//    - the promise has been rejected

// TRADITIONALLY, there were 2 library => Q and Bluebird
//      but now native promises are available in JavaScript
//      NODE.js provides everything directly so no need to use these libraries as such now!

// creating a promise
const promiseOne = new Promise(function(resolve, reject) { //2things ->  1. creation 
    // Do an async task
    // DB calls, crytography, network calls, etc.
    setTimeout(function(){
        console.log('Async task completed'); 
        resolve();
    }, 1000);
}) 
// 2. Consumption
promiseOne.then(function(){
    console.log('promise consumed'); //then is directly connected to resolve
    
}) 
//  Note: 
// 1. now the function is executed but the promise is not consumed yet
// 2. the promise is still in pending state
// 3. the promise will be consumed after 1 second when the async task is completed
// 4. we need to connect the resolve function with promise we have created by calling resolve().