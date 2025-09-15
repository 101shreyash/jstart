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


// ***************************St****************************************

// const muscleup = function (){
//     let username = "Shreyash"
//     console.log(this.username);
    
// }
// muscleup()

// // This works on an object, not on a standalone function like muscleup()
// //  works on obj, not on function bro


// *************** using arrow function ********


// *************arrowfunction*************

// function sumoftwonumbers (num1,num2){
//     return num1 + num2
// }
// console.log(sumoftwonumbers(7,7));  // 14 throough function declaration  or classic function
// this is also called explicit return , where we were manually writing return keyword 



// through arrow function 


const sumoftwonumbers = (num1,num2)=> (num1+num2)
console.log(sumoftwonumbers(7,7)); // 14 through arrow function it relatively less verbose and used in react 
// and high in readibility 


// *****************Implicit Return***********
//Implicit return = when a function automatically returns something without you typing return.
//to write it just remove the curly braces and remove the keyword return thats it 


const addtwonum= (num1,num2) =>  (num1 + num2)

console.log(addtwonum(3,3)) // output 6




//++++++++++++++++++ Some Important notes on Arrow Func & Function declaration +++++++++++++++++++++

// 1.   Arrow functions are popular in modern JS for clean code, 
// 2.   callbacks, React components, and functional programming.
// 3. In arrow function , you can’t call before const is defined or declarred it donot have hoisting
// 4 . In function declaration or 
// 5.Classic functions: hoisted → you can call them before they are declared.


const obj = {
    username: "Shreyash",
    classicFn: function() {
        console.log(this.username); // ✅ Shreyash
    },
    arrowFn: () => {
        console.log(this.username); // ❌ undefined (takes `this` from surrounding context)
    }
}

obj.classicFn();
obj.arrowFn();


//Classic functions = flexible, “dynamic this” → depends on how the function is called.
// Arrow functions = fixed, “lexical this” → depends on where it was written.


