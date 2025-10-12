// // if statement


const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }


/* Comparision Operator and  Relational Operator # 

*****************They are used to compare values and return true or false. ************

 == → loose equality



 === → strict equality



 != → loose inequality



 !== → strict inequality


 <, >, <=, >= → relational operators


 */

 const score = 300
if (score > 100){
    const power = "Fly"
    console.log(`User Power is to ${power}`);
    
}
    console.log(`User Power is to ${power}`);


// Here power is declared using const, which means its scope is limited to the block { ... }
//  where it is defined.
// The first console.log works fine, because it’s inside the same block

// Here Outside the if block
// Here, we’re trying to access power outside its block.
// Since power was declared with const inside the if block, it does not exist outside.
// This will throw an error



// const and let are block scoped → only exist within { ... } where they are defined.
// var is function scoped → exists throughout the function (or globally if not in a function).


// example with Var
// if (score > 100) {
//     var power = "Fly";
// }

// console.log(`User Power is to ${power}`); // Works fine, outputs "Fly"



// ********************** If , IfElse , Else Statements **************************


const accountBalance = 1000

if (accountBalance < 500){
    console.log(" account balance is less than 500");
}
else if (accountBalance < 700){

 console.log(" account balance is less than 700");
    
}
else if (accountBalance < 900){
     console.log(" account balance is less than 900");

}
else {
 console.log(" account balance is less than 1200");

}
// *************************************************************************************
// && is called the logical AND operator or simply AND operator in JavaScript.
// It returns true only if both conditions are true; otherwise, it returns false
// we would use double ampersand for this . and if any of the statement is false 
// the code won't be executed

// const userLoggedIn = true 
// const hasPaidForCourses = true

// if (userLoggedIn && hasPaidForCourses){
//  console.log("Allow to Get Courses");
 
// }
// else {
//     console.log("first Login and Pay For the Courses");
    
// }


const userLoggedInFromGoogle = true 
const userLoggedInFromEmail = false

if (userLoggedInFromEmail || userLoggedInFromGoogle){
    console.log("User is Logged In");
    

}

// || is called the logical OR operator.
// It’s used to combine two or more conditions,  
// and it returns true if at least one of the conditions is true.
// here the code says "user should atleast be logged in from either Google or  with Email"
// if not both the code wont be executed 
// we could combined more than two conditions like 
// if (userLoggedInFromEmail || userLoggedInFromGoogle || userLoggedInFromGithub){
//     console.log("User is Logged In");
    

// }




