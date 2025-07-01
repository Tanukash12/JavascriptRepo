// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}


//  do-while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// for...of
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}

//  NOTE: for...of is used for iterating over iterable objects like arrays, strings, etc.
// for...in is used for iterating over object properties.

// for...in
const myobj = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby"
};  
for(const key in myobj) {
  console.log(key);
  console.log(myobj[key]);
}
for (const key in myobj) {
  console.log(`${key}: ${myobj[key]}`);
}

// FOR EACH => forEach() – Iterate over each element
// Purpose: Executes a function on each item.
    // Does NOT return a new array.
const fruits = ["apple", "banana", "mango"];
fruits.forEach(fruit => console.log(fruit.toUpperCase()));
// APPLE
// BANANA
// MANGO

//  NOTE:- takes the callback function as an argument and applies it to each element of the array.
// It does not return a new array, but rather performs an action for each element.
//  reference is passed when we pass the function as an argument.
function primitive(val) {
    console.log(`Primitive value: ${val}`);
}
fruits.forEach(primitive); // Primitive value: apple, Primitive value: banana, Primitive value: mango
                            // primitive() ->    throw an error because it is not a function reference. 

const myCoding = [
  {
    name: "JavaScript",
    type: "Programming Language",
    level: "Intermediate",
  },
  {
    name: "Python",
    type: "Programming Language",
    level: "Beginner",
  },
  {
    name: "Ruby",
    type: "Programming Language",
    level: "Advanced",
  },
  {
    name: "Java",
    type: "Programming Language",
    level: "Intermediate",
  }
]
myCoding.forEach((item) => {
  console.log(`Name: ${item.name}, Type: ${item.type}, Level: ${item.level}`);
})
myCoding.forEach((item) => {
  // console.log(item);
})

// NOTE:- forEach() des not return anything, it simply executes the provided function for each element in the array.
// It is often used for side effects, like logging or modifying external variables.