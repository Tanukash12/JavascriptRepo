// mdn 
// declare in milliseconds
// 1 January 1970 -> starting point for date and time in JavaScript

// Temporal -> global object for date and time but right only a proposal not applied yet

let myDate = new Date();
// console.log(myDate); // current date and time -> not that much readable
// console.log(myDate.toString()); // string representation of the date 
// console.log(myDate.toDateString()); // date in a more readable format
// console.log(myDate.toTimeString()); // time in a more readable format
// console.log(myDate.toISOString()); // ISO string representation of the date
// console.log(myDate.toLocaleString()); // locale specific string representation of the date
// console.log(myDate.toLocaleDateString()); // locale specific date representation
// console.log(myDate.toLocaleTimeString()); // locale specific time representation

// custonm  date
let custom = new Date(2023, 6 , 26);
let custom2 = new Date(2023, 6 , 26, 12, 30, 0); // year, month (0-11), day, hours, minutes, seconds
let custom3 = new Date("2023-00-26"); // invalid date, month starts from 1
// mm-dd-yyyy is used in india 
// console.log(custom2.toLocaleString());
// console.log(custom.toLocaleDateString());
// console.log(custom3.toDateString());

let timestamp = Date.now(); // current timestamp in milliseconds
// console.log(timestamp); 
// console.log(custom.getTime()); // timestamp of the custom date
// console.log(Date.now()/1000); //decimal hence use .floor() to get the integer value
// console.log(Math.floor(Date.now()/1000)); // current timestamp in seconds

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
})
)
