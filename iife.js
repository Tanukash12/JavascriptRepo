//  Immediately Invoked Function Expression (IIFE) 
// -> Global scope pollution is avoided
// -> It is executed immediately after it is defined
// -> It is a function that is defined and executed at the same time

(function chai() { // NAMED IIFE
    console.log(`Db Connected`);
})();
//  first () => declaration
//  second () => execution

//  NOTE: semicolon is important as sometimes js do not know where to end this immediately invoked fn.

(  ( ) => { // ANONYMOUS IIFE
    console.log(`Db Connected 2`);
}) ( );

( (name) => {
    console.log(`Hello ${name}`);
})("Tanushka");

// named iife, unnamed iife, two iife together-> ;