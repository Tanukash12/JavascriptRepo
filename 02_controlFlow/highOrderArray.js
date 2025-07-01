// MAP => map() – Transform each element
// Purpose: Returns a new array with transformed values.
    // Does NOT modify original array.
const nums = [1, 2, 3, 4];
const squared = nums.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]


// FILTER => filter() – Filter elements based on condition
// Purpose: Returns a new array of items that pass a test.
const ages = [12, 25, 17, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [25, 30]


// CHAINING 
//  two or more methods can be chained together
const result = [1, 2, 3, 4, 5]
  .filter(n => n % 2 === 0)        // [2, 4]
  .map(n => n * 10)                // [20, 40]
  .reduce((acc, val) => acc + val, 0); // 60

console.log(result);
//  Chaining makes code cleaner and more readable, especially with functional patterns.

// REDUCE => reduce() – Aggregate values into a single result
// Purpose: Reduces array to a single value by applying a function.
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// REDUCE RIGHT => reduceRight() – Aggregate values from right to left
// Purpose: Similar to reduce, but processes elements from right to left.
// it takes an accumulator and a current value, and returns a single value.
//  The initial value is provided as the second argument.
const myTotal = myCoding.reduceRight(function(acc, curval) {
    console.log(`Accumulator: ${acc}, Current Value: ${curval}`);
    return acc + curval;
},0); 

// arrow
const myTotalArrow = myCoding.reduce((acc, currval) => acc + currval, 0);


//  NOTE: reduceRight() is useful when the order of operations matters, like in nested structures.

// FIND => find() – Find the first element that matches a condition

