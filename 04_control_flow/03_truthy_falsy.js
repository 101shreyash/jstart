// // const userEmail = "Shreyash@megmail.com"

// // if (userEmail) {

// //     console.log("We've Got the Email");
    
// // } else {

// //     console.log("We didn't Got User Email");
    
// // }  // Here the assumption is done that okay maybe We've got the usersEmail
//    // so the output here is  "We've Got the Email"




//    const userEmail = ""

//  if (userEmail) {

//     console.log("We've Got the Email");
    
//  } else {

//     console.log("We didn't Got User Email");
    
//  }  // Here the assumption is done that okay the string is empty so we've not got users Email
//   // so the output is  "We didn't Got User Email" but we we add an empty array in useremail instead 
//   // empty string the output would be "We've Got User Email, So the Rules here is "





// ****************************************Falsy Values*******************************

// false , 0 , -0 ,  0n (BigInt Zero) , null , undefined , NaN



//  In Truthy Value Literally everything else.

 
// "false" - yes false inside string is truthy Value
// "0" - same case goes for Zero ; anything That goes into string is TruthyValues

// "hello"

// 42

// [] (empty array)

// {} (empty object)

// function() {}

// " " (string with a space) , yess !! empty string is considered as an falsy Value but string with 
// space is considered as Truthy Values




// ****************** Nullish Coalescing Operator (??) : null undefined *****************


// let num ; 
// val1 = 5 ?? 10

// console.log(val1); // 5



// ****************************Similarly**************************************** 

// let num ; 
// val1 = null ?? 10

// console.log(val1); // Output would be  10 
// so the thing is its useful for the safety basis like sometimes code 
// // won't be executed when value is null , basically we can say its an fall back mechanism for safety 
// either give me the value if not value then okay ill take undefined or null

// ************************ Same Goes with Undefined *********************
// let num;
// val1 = undefined ?? 10
// console.log(val1);


// +++++++++++++++++++++++++++++++++++ Terniary Operator ++++++++++++++++++++++++++++++++++++++++

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")