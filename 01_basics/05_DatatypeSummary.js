// Primitive

// 7 types 
// String
//  Boolean
//  null
//  Symbol
//  undefined
//  BigInt
//  Number


// JavaScript is dynamically typed, not statically typed.
// In dynamically typed languages, type checking happens at runtime, not before running the code.
// You don’t have to declare what type a variable will be JS figures it out while running.
// You can even change a variable’s type on the fly without errors. for eg:
let x = 10;     // number
x = "hello";    // now a string no complaint from JS


// In a statically typed language like C, Java, or TypeScript:
// int x = 10;  
// x = "hello"; //  Compile-time error


// #Reference (Non primitive) 3 types
// Array 
// Object 
// Function


const Superheros = ["Batman" , "Ironman", "BlackPanther"]

let myObj = {
    name:"shreyash",
    age:17,
}

const myFunction = function(){
    console.log("Hello world");
    
}

// Data types of Nonprimitive datatypes are always obj except for the function whose datatype is fucntionobject

// ++++++++++++++++++++++++++++++ Memory , Memories and How it Works  ++++++++++++++++++++++++++++++++++++4


// Stack (Primitive)
 
let defautTheme = "dark"
themeImUsing = defautTheme
themeImUsing = "Light"

console.log(defautTheme);
console.log(themeImUsing);

//Heap (Nonprimitive)

 let userOne = {
    email :"omshrestha@gmail.com",
    phno : 9800000000
}

let userTwo = userOne

userTwo.email = "bronishupreti@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);



