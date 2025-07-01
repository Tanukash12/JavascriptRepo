// while adding an item in E-commerce website, we have no idea how many items is being added so we use array

function calculateCartPrice(num1) {
    return num1;
}

console.log(calculateCartPrice(100, 200, 300)); //return only 100 as it is the first parameter
// This function is not using the rest operator, so it only takes the first argument

function calculateCartPriceRest(...num1) {
    return num1.reduce((acc, curr) => acc + curr, 0);
}
console.log(calculateCartPriceRest(100, 200, 300));
// this operator is also called spraed operator according to the context

const user = {
    name: 'John',
    age: 30,
}

function handleOnject(anyObject){
    console.log(`User name is ${anyObject.name} and age is ${anyObject.age}`);
}

// handleOnject(user);
handleOnject({
    name: 'Tanu',
    age: 25,
    class: 'BCA',
    skills: ['HTML', 'CSS', 'JavaScript'],
})

const myarr = [200,400,100,600];
function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myarr)); // returns 400
console.log(returnSecondValue([200, 400, 100, 600])); // returns 400