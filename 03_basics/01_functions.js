// // A function is just a block of code with a name.
// // You wrap some steps inside it, give it a name, and later you can run all those steps
// //  just by calling that name.
// // instead of writing the same steps again and again, you pack them inside a function.

// function sayMyName (){
// console.log("S");
// console.log("H");
// console.log("R");
// console.log("E");
// console.log("Y");
// console.log("A");
// console.log("S");
// console.log("H");

// }
// // call (execute) the function
// sayMyName()

function addTwoNumbers (Number1, Number2){ //parameters
    console.log(Number1+Number2);  
}
addTwoNumbers( ) // NaN // arguements
addTwoNumbers(7, 7 ) // 14 
addTwoNumbers(7, "7" ) // 77 (autoconversion thought the first 7 as a string )
addTwoNumbers(7, "a" ) // 7a
addTwoNumbers(7, null ) // 7
