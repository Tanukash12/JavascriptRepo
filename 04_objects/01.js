// singleton
// object.create


// symbol declare
const mySum = Symbol("key1");

//  object literal
const jsUser = {
    name: 'John',
    "full name": 'John Doe',
    // to use symbol as key it is important to write it in square brackets
    [mySum]: 100,
    age: 30,
    location: 'New York',
    email: "john@google.com",
    isLoggedIn: true,
    lastLoginDays: ["monday", "tuesday", "wednesday"],
}

console.log(jsUser.email);
console.log(jsUser["full name"]); // not possible to access using dot operator as it has a space in the key
console.log(jsUser["email"]); // this is mandatory to write in quotes with sqaure brackets as it has a space in the key

// acccessing symbol key
console.log(jsUser[mySum]); // this is how we access symbol key

// change value of a key
jsUser.age = 31;

// freezing object
// Object.freeze(jsUser); // this will make the object immutable, you cannot change any key or value of the object
// jsUser.age = 32; // this will not work as the object is frozen
console.log(jsUser); 

// adding greeting method to the object
jsUser.greeting = function() {
    console.log(`Hello, my name is ${this.name}`);
}

 console.log(jsUser.greeting); // do not work with freeze as it is a function and not a key-value pair


