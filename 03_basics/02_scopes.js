// // {} ---- Just {} on its own is a Block Scope in JS
// // sometimes it comes with Objects but its for an object declaration not an BlockScope

// // if(true){
// //    let a = 10 
// //    const b = 20 
// //   var c = 30

// // }

// // // console.log(a); // a is not defined thats the output after log
// // console.log(b); // b is not defined thats the output after log
// // console.log(c); 
// // now here in the var the output is 30 why so 
// // var ignores block scope.
// // function/global-scoped, escapes the if block
// // thats the reason avoid using var 



// let a = 300 // This is **global block scope** 

// if(true){
//    let a = 10 
//    const b = 20 

//    console.log("InnerValue", a);  // displays 10 as An InnerVAlue (This is **inner block scope**)
   
// }

// console.log(a); // returns 300 as an output , comes from **global scope**
// // var ignores block scope – it doesn’t care about { } blocks like let or const.



function one (){ // a function declared in the global scope ; aka global varible
   const username = "Shreyash"

   function two (){ // a function declared inside another function which is called local variable
      const website = "Youtube"
      console.log(username); 
   }

}
one()


// So the rules here:

// Inner functions can access outer function variables. ✅
// Outer functions cannot access inner function variables. ❌
// Global variables are like candy in a public jar everyone can see. 🍬


// tldr; when nested function is made parent couldnt acess childs property but a child could acess parents



