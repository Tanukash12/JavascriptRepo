console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// equalitycheck == and comparion > < >= <= work differntly.
// Comparisons convert null to a number, treating it as 0.
// That is why null >= 0 is true and null > 0 is false.

// undefined gives false in all cases.
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// === => strictly check with datatypes
console.log("2" === 2);
