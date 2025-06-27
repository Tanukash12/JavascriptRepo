// Arrow functions inherit this from their surrounding (lexical) scope, 
// unlike regular functions which define their own this based on how they're called.

// regular function 
const obj = {
  name: "Tanushka",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

obj.greet(); // "Hello, Tanushka"

//  Arror Function
const obj1 = {
  name: "Tanushka",
  greet: () => {
    console.log("Hello, " + this.name);
  }
};

obj.greet(); // "Hello, undefined"
