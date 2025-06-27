// singleton object
const tinderUser = new Object();

//  non singleton object
const tinderUser2 = {}
tinderUser2.id = "123abc";
tinderUser2.name = "sam";
tinderUser2.isLoggedIn = false;

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "tanu",
            lastname: "kashyap"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2};  //same as array problem => object inside object
// const obj3 = Object.assign({}, obj1, obj2); // merge objects
const obj3 = {...obj1, ...obj2}; // spread operator to merge objects
// console.log(obj3);

const users = [
    {
        id: "123abc",
        name: "sam",
        isLoggedIn: false
    },
    {
        id: "456def",
        name: "john",
        isLoggedIn: true
    }
]

users[1].id
console.log(tinderUser2);
console.log(Object.keys(tinderUser2)); //datatype is array
console.log(Object.values(tinderUser2)); //datatype is array
console.log(Object.entries(tinderUser2)); //datatype is array of arrays

console.log(tinderUser2.hasOwnProperty("isLoogedIn"));

