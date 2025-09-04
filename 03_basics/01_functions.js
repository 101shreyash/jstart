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

// function addTwoNumbers (Number1, Number2){ //parameters
//     console.log(Number1+Number2);  
// }
// addTwoNumbers( ) // NaN // arguements
// addTwoNumbers(7, 7 ) // 14 




// function  sumOfTwoNumbers (Number1  , Number2){
//     // let Output = Number1 + Number2    // wiritng this stuff has two ways one of this is this one
//     // return Output

//     return Number1 + Number2 // &Heres the easy way to do so without even allocating the variableSpace

//     console.log("Shreyash"); // Any code after return (like  console.log("Shreyash")) won’t execute.
//     //Once return runs, the function stops immediately.

// }
//  const Output = sumOfTwoNumbers(4, 5) 
//  console.log( " Results:", Output);  //  Results: 9
 

//  function userLoggedMessage (username){
//   return `${username} Welcome to the facebook Thanks for Joining us`
//  }
//  console.log(userLoggedMessage("Shreyash")); // Shreyash Welcome to the facebook Thanks for Joining us
 

 function userLoggedMessage (username){

    if(username === undefined){ // if username  is equal to undefined then print a message saying 
        // please enter your username
        console.log("Please enter your Username");
        return // further code wont be executed ; here the part of string interpolation
        
    }

    return `${username} Thanks for joing facbeook , you just logged in ` 

}
console.log(userLoggedMessage()); // returns undefined if arguement is empty if it was ("Shreyash")
// It would be Shreyash Thanks for Joing Facebook.


// also we could write if stuff in this way too if (!username){
    //   console.log("Please enter your Username");
    // }
    // if username is not username then print "Please enter your username this 
    // code is equivalent to writing 
    // if(username===undefined){console.log("Please enter your username ")}


    
// ************************************************AddingItemsIntheShoppingCart********************************


function cartsItemsCalculate (...nums){ // rest operator
//  It says: “yo, grab all the extra arguments passed into this function and pack
//  them into a single array called nums
    return nums
}
// console.log(cartsItemsCalculate(400 , 500 , 600 , 700 , 900)) // just adds the first one which is 400
console.log(cartsItemsCalculate(400, 500, 600, 700, 900));
// returns [ 400, 500, 600, 700, 900 ] Since nums is an array, now  we can loop over it:




function cartsItemsCalculate (val1, val2, ...nums){
    return nums
}
console.log(cartsItemsCalculate(400, 500, 600, 700, 900));
// output would be  [ 600, 700, 900 ] cause 400 is stored in val1 , 500 in val2 & restofall stuff in nums