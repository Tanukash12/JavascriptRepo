// console.log(addOne(5));

function addOne(num) {
    return num + 1;
}

// expression function

// console.log(addTwo(5)); // Error
// const addTwo = function(num) {
//     return num+2;
// }

// addTwo(5);

// Arrow function -> 2015
// current context 
// arrow function does not have its own this? reason -> 
const user = {
    name: 'John',
    age: 30,
    greet: function()  { //here if we use arrow function, this will refer to the global context
        // Arrow function does not have its own 'this', it uses the context of the enclosing scope
        // hence arrow function will not work here as expected as it will not refer to the user object
        // regular function will refer to the user object
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(this);
        
    }
}
user.greet();
user.name = 'Jane';
user.greet(); 

function chai(){
    let username = 'tanu';
    console.log(this.username); //it works as an onject in browser, in node it will be undefined
    
}
chai(); // here this will refer to the global context, in browser it will refer to window object
// in strict mode, this will be undefined

// ARROW FUNCTION => 
    // const addTwo = (num1, num2) => { 
    //     return num1 + num2;
    // }

const addTwo = (num1, num2) =>  (num1 + num2); //implicit return
// NOTE: curly braces -> return keyword is required
//       no curly braces -> return keyword is not required
console.log(addTwo(5, 10)); 

const name = (firstName, lastName) => ({username: firstName, lastName: lastName});
console.log(name("Tanushka", "Kashyap"));

