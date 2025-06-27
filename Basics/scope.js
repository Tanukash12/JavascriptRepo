// This code demonstrates the concept of scope in JavaScript.
// Scope determines the visibility and lifetime of variables in JavaScript.
// In this example, we will see how variable declarations using `let`, `const`, and `var` behave in different scopes.
if (true){
    let a = 10;
    const b = 20;
    var c = 30;
    d = 89;
}

// console.log(a);
// console.log(b);
console.log(c);
console.log(d);


// core scope is different from block scope 
//  core scope is the global scope in inspect 
//  scope we define using node is different from the scope we define using browser and it is the block scope

// closure:
           //used in DOM manipulation, event handling, and asynchronous programming
// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.

//  Nested scopes:
function one() {
    const user = 'tanu';
    function two() {
        const web = 'utube';
        console.log(user);
        
    }
    // console.log(web); //error

    two();    
}
one();
// In this example, the function `two` is a closure that retains access to the variable `user` 
//  from its parent scope `one`, even when it is called outside of that scope. 
// However, it cannot access `web` because `web` is not defined in the outer scope of `one`.

