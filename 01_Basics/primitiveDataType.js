// we have many primitve datatypes defined in javascript 
// It is data that is not an *object* and has no methods or properties.
//  they are immutable (can’t be changed directly) and stored by value.
//  There are 7 primitive data types:

// String
let Name = "Tanushka";

// Number
let age = 20;

// Boolean
let isStudent = true;

// Null
let degree = null;

// Undefined
let score;

// BigInt
let largeNumber = 123456789012345678901234567890n;

// Symbol
let id = Symbol("uniqueId");

// undefined 
let undefined; 

// null
let a = null;

// null is a standalone value and it's type is object.

console.table([typeof Name, typeof age, typeof degree, typeof score, typeof largeNumber, typeof id , typeof(undefined) , typeof a]);

