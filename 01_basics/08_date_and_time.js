
// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970


const myDate = new Date()
//creates a Date object holding the current date and time isn’t very humanreadable.
console.log(myDate); 

console.log(myDate.toString());
// Converts the Date object into a human-readable string and prints it

console.log(myDate.toDateString());
// Converts the Date object to a readable date string (day, month, year) without time Sat Aug 16 2025

console.log(myDate.toLocaleDateString()); 
//Prints the date in a human-readable format based on the local settings 8/16/2025

console.log(myDate.toLocaleTimeString());
// Prints the time in a human-readable format based on local settings 9:01:53am

console.log(myDate.toUTCString());
// Converts the Date object to a readable string in UTC (universal time)
// Sat , 16 ,  Aug ,  2025 , 09:03:50 GMT


const myCreatedDAte = new Date(2025 , 0 , 11 )
console.log(myCreatedDAte.toDateString()); 
// Creates a custom date (Jan 11, 2025) and prints it as a readable date string
// In JS Date: 0 = January, 1 = February, ... , 11 = December



const dateAndTime = new Date(2025 , 0 , 11  , 5 , 3, 2, 1 )
console.log(dateAndTime.toLocaleString());


let anotherDate = new Date("2025-09-3") // YYYY-MM-DD
console.log(anotherDate);


let myTimeStamps = Date.now()

console.log(myTimeStamps); 
//prints the timestamp (ms since Jan 1, 1970) for myTimeStamps

console.log(anotherDate.getTime()); 
// prints the timestamp (ms since Jan 1, 1970) for anotherDate

console.log(Math.floor(Date.now()/1000));
// Print current Unix timestamp in seconds (time since Jan 1, 1970 UTC)

console.log(Math.floor(Date.now() / (1000 * 60 * 60 * 24)));
// Print total number of days passed since Jan 1, 1970 UTC (Unix epoch)


const recentDate = new Date()
console.log(recentDate.getDay()); 
// Returns the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

console.log(recentDate.getFullYear()); 

// Returns the full year (4-digit number, e.g., 2025)

console.log(recentDate.getMonth()); 
// Returns the month number (0 = January, 1 = February, ..., 11 = December)

























