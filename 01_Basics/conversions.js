let Name = "tanu";
let score = null

console.log(typeof Name);
let naam = Number(Name);
console.log(naam); //NaN
console.log(typeof naam);

let a = "33abc"
console.log(typeof a);
console.log(typeof score);
let A = Number(a);
console.log(A); //NaN
console.log(score);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0; +true => 1
// true+ => error; +"" => 0

let b = 1;
console.log(typeof b);
let bool = Boolean(b);
console.log(bool);

// ***********************OPERATIONS*************************************
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); => exponent
// console.log(2/2);
// console.log(2%2);

// ***************  WHY STRING to NUMBER Conversion is CONFUSING??????  ************************

console.log("2" +2);
console.log(2+ "2");
console.log("2" + 2 + 2); //string first => converted to string
console.log(2 + 2 + "3"); //string last => first according to the operation and the string get concatenated

// Altough it is not a good practic to write down your code like this so better not to use it else use 
// paranthesis "()" for different operations to perform !!