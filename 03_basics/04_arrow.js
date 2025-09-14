const user = {
    username : "Shreyash",
    id : 414141, 
    userLoggedMsg : function (){
        console.log(`${this.username} Welcome to Our Platform`);
        console.log(this);
        
        
    }
   
}
user.userLoggedMsg()
user.username = "Sammusk"
user.userLoggedMsg();


console.log(this); 
//  here in node environment this keyword refers to an empty obj cause theres no context in global 
// Output would be {} an epty obj


// function one (){
//     console.log(this);
    
// }
// one()
 
// output would be : ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter]
// }
// chromeossucks@penguin:~/01_basics$ 
// chromeossucks@penguin:~/01_basics$ node test.js
// chromeossucks@penguin:~/01_basics$ node test.js
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter]
// }


// ********************* ArrowFunction ************ 

// const muscleup = function (){
//     let username = "Shreyash"
//     console.log(this.username);
    
// }
// muscleup()

// // This works on an object, not on a standalone function like muscleup()
// //  works on obj, not on function bro


// *************** using arrow function ********

//  const muscleup =  () => {   // just remove the keyword function and add arrow in the middle of parenthesis
//     // and curly braces 
//     let username = "Shreyash"
//      console.log(this.username);
    
// }
// muscleup()




// const addtwonum= (num1,num2) => {
//     return num1 + num2
// }
// console.log(addtwonum(3,3)) //output 6


// *****************Implicit Return***********
//Implicit return = when a function automatically returns something without you typing return.
//to write it just remove the curly braces and remove the keyword return thats it 


// const addtwonum= (num1,num2) =>  num1 + num2

//or simply

const addtwonum= (num1,num2) =>  (num1 + num2)



console.log(addtwonum(3,3)) // output 6



// ******************************************************************************************


// const sumofTwoNums =  (num1,num2) => (num1 + num2)
// console.log(sumofTwoNums(5,5));   is equivalent to writing this one : 


// const sumofTwoNums = function(num1,num2){
//     num1+num2
// }
// console.log(sumofTwoNums(5,5)); // this is also called explicit return

// but we wont be writing these long ass code to do so ; also its really useful for react


