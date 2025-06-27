const score = 4000;
console.log("Score:", score);
const bonus = new Number(100);
console.log("Bonus:", bonus);
console.log(typeof score); // number
console.log(typeof bonus); // object

console.log(bonus.toString()); // "100"
console.log(bonus.toFixed(2)); // "100.00"

const num = 123.278;
console.log(num.toPrecision(5)); 
console.log(num.toExponential(2)); 
console.log(num.toPrecision(2));
console.log(num.toPrecision(3)); //precised value it gives

const hundreds = 100000;
console.log(hundreds.toLocaleString()); // "100,000"
console.log(hundreds.toLocaleString("en-IN")); 

// ************** Maths ****************
console.log(Math); 
console.log(Math.abs(4));
console.log(Math.round(4.4));
console.log(Math.ceil(4.5)); //top value chooses
console.log(Math.floor(4.5)); //bottom value chooses
console.log(Math.max(4, 5, 6, 7, 8));
console.log(Math.min(4, 5, 6, 7, 8));
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10 -> min value : 0
console.log(Math.random() * 10 + 1); // random number between 1 and 10 -> min value : 1

// GENERIC FORMULA FOR RANDOM NUMBER BETWEEN MIN AND MAX
const min = 10;
const max = 20;
console.log(Math.random()* (max - min + 1));
// min value -> 10 therfor add min as well
console.log(Math.floor(Math.random()* (max - min + 1))  + min); // random number between 10 and 20, rounded down to nearest integer

console.log(Math.random() * 10 + 1 | 0); // random number between 1 and 10, rounded down to nearest integer
console.log(Math.floor(Math.random() * 10 + 1)); // random number between 1 and 10, rounded down to nearest integer
console.log(Math.sqrt(16)); // square root
console.log(Math.pow(2, 3)); // 2 raised to the power of 3
console.log(Math.PI); // value of pi
console.log(Math.E); // value of e (Euler's number)
console.log(Math.sin(0)); // sine of 0 radians
console.log(Math.cos(0)); // cosine of 0 radians