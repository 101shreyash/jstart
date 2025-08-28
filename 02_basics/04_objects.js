// Non single ton Object
// Called: Object literal syntax


// // const tinderUser={}




//Single ton object
//Called: Object constructor syntax

const tinderUser = new Object() 

tinderUser.name = "Omshresth"
tinderUser.age = 17
tinderUser.bio = "if she can say a b c she is redy for the d "
tinderUser.height = "5foot9"


// console.log(tinderUser); 

/*{
 name: 'Omshrestha',
age: 17,
bio: 'if she can say a b c she is redy for the d ',
 height: '5foot9'
 } */

 // Both {} and new Object() create object, 
// but {} is cleaner, faster, and preferred in modern JS, 
// while new Object() is old-school and more verbose


// ***************************** Objects Inside Object ************************

const regularUser = {

    email : "user@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Shreyash", 
            lastName : "Gautam"
        } 
    }
}

// console.log(regularUser.lastName); // undefined 
// console.log(regularUser.fullName.lastName); // undefined 
// console.log(regularUser.fullName.userFullName.lastName); // Gautam 




// This is a nested object (object inside another object) 
// Created a regularUser object with nested objects inside it 
// to store email and full name details in a structured way



// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"c", 4:"d"}
// const obj3 = {5:"c", 6:"d"}
// const obj4 = Object.assign({},obj1 , obj2, obj3) 

// console.log( "object1", obj1); // { '1': 'a', '2': 'b' }
// console.log("objects2", obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }
// merge objects together
// Works in older environments (pre-ES6)
//  Verbose compared to spread



// ######################################################################################################

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"c", 4:"d"}
// const obj3 = {5:"c", 6:"d"}
// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4); 


// also merge object together
//  object4 { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'c', '6': 'd' }
//  Spread syntax same as Array method
//    Clean & modern (ES6+)
//   Preferred in production (React/Next/etc.)
//   Shallow copy only (nested objects share reference)

// **********************************************************

// this is an array of objects 
// Each {} is one user’s info, and [] is the list (collection) of them.
const users = [{
    id:545454,
    email: "sg@gmail.com"
    } , 
    {
    id:414141,
    email: "getonthebars@gmail.com"
    } , 
    
]



// console.log(users[0]); // { id: 545454, email: 'sg@gmail.com' }
// console.log(users[1].email); // getonthebars@gmail.com


// console.log(Object.keys(tinderUser));

// [ 'name', 'age', 'bio', 'height' ]
// Object.keys() takes the property names of the object
// and puts them inside an array so we can loop or access them easily

// console.log(Object.values(tinderUser)); 
/* 
['Omshresth',
  17,
  'if she can say a b c she is redy for the d ',
  '5foot9'
]   .values return the value of an object in an array form  */ 
 
// console.log(Object.entries(tinderUser));
/* 
[
  [ 'name', 'Omshresth' ],
  [ 'age', 17 ],
  [ 'bio', 'if she can say a b c she is redy for the d ' ],
  [ 'height', '5foot9' ]
] */  // Object.entries() gives back an array of [key,value] pairs


console.log(tinderUser.hasOwnProperty("height")); //true 
console.log(tinderUser.hasOwnProperty("weight")); //false 

// hasOwnProperty() checks if "height" is really a property of tinderUser
// → returns true if present, false if missing
// ONLY checks for the key (property name), not the value.



