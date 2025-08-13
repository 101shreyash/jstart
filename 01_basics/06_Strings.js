const name = "shreyash"
const pullupsCount= 17
const favWorkout = "Pullups"

console.log(name + pullupsCount + favWorkout);
console.log(`my name is ${name} i do ${pullupsCount} ${favWorkout} in a row `);
// Prefer template literals (backticks) with string interpolation over concatenation.


const myName = "shreyash"


console.log(myName[9]);  // in this case its undefined
// Accesses the character at the specified index in the string using brackets.
// Index starts at 0. If out of range, returns undefined.


console.log(myName.length); //.length

console.log(myName.toUpperCase()); //.toUpperCase

console.log(myName.toLowerCase()); //.toLowerCase

console.log(myName.charAt(9)); 
// In this case its an empty string wheather you see quotes on console or not 
// charAt(index) returns the character at the specified position (index) in a string.
// Index starts at 0.If the index is out of range, it returns an empty string.

console.log(myName.indexOf("h"));
// indexOf(search) returns the index of the first occurrence of 'search' in the string.
// If not found, it returns -1.

 const newString = myName.substring(0 , 4) // shre
 console.log(newString);
 // substring(start, end) returns a part of the string from 'start' index up to but NOT including 'end'.

 
 const anotherString = myName.slice(-4)  //yash
 console.log(anotherString);

 //// slice(start, end) returns a part of the string from 'start' index up to but NOT including 'end'.
// Supports negative indices (counts from end). Does NOT change the original string.


const newStringOne = "               shreyash Gautam        "
console.log(newStringOne);
console.log(newStringOne.trim());

// trim() removes all whitespace from the start and end of the string.
// Does NOT remove spaces inside the string and does NOT change the original string.



 const url = "https://sasthm.com//shreyash%20gautam"
  console.log(url.replace("%" , "_"));


// replace(search, replaceWith) replaces the FIRST occurrence of 'search' with 'replaceWith'.

console.log(url.includes("shreyash")); // true
console.log(url.includes("brownmundey")); // false

// includes(search) checks if the string contains 'search' anywhere.
// Returns true if found, false if not. Case-sensitive.

 







