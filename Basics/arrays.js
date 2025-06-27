const arr = [0,1,2,3,3];
const arr2 = ["a", "b", "c"]
const arr3 = new Array(1,2,3,4);
const arr4 = new Array(5); 
console.log(arr3);


// Array methods
arr.push(5); // add element to the end of the array and return the new length of the array
arr.unshift(-1); // add element to the beginning of the array and retturn the new length of the array
(arr.pop()); // remove element from the end of the array and return the length of the array
arr.shift(); // remove element from the beginning of the array and return it
arr.splice(2, 1); // remove element at index 2 and return it -> includes range  and manipulates original array 
arr.splice(2, 0, 10); // add element at index 2 and return an empty array
arr.splice(2, 1, 20); // replace element at index 2 with 20 and return the removed element
console.log(arr); 
console.log(arr.includes(3));;


const newArr = arr.join()
console.log(typeof arr); 
console.log(typeof newArr);
