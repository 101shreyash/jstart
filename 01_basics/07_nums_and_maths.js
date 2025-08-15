const score = 455
console.log(score);

const grade =  new Number(455)
console.log(grade);
console.log(grade.toString().length);
console.log(grade.toFixed(5)); // 455.00000 ,  Rounds number to fixed decimals and returns it as a string


const otherNumber = 123.50
console.log(otherNumber.toPrecision(3));
const thousands = 10000000000; // 10,000,000,000
console.log(thousands.toLocaleString());

// Converts number into a locale-formatted string (adds commas, decimals, etc. based on region



// ++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); //4
// Returns the absolute value (positive) of a number

console.log(Math.round(4.6)); // 5
// Rounds a number to the nearest integer

console.log(Math.ceil(4.2)); // 5
// Round up

console.log(Math.floor(4.9)); // 4
// Round down

console.log(Math.min(4, 3, 6, 8)); //3
// Smallest number

console.log(Math.max(4, 3, 6, 8)); //8
// Largest Number

console.log(Math.pow(2, 3)); // 8 
console.log(Math.pow(2, 6)); //64
//raises base to the power of exponent

console.log(Math.sqrt(16)) // 4
// Math.sqrt(): returns the square root of a number

console.log(Math.random());
// Returns a random decimal number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random()); 
console.log((Math.random()*10) + 1); // Generates a random number between 1 (inclusive) and 10 (exclusive) 

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)