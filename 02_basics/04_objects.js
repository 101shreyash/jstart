// Non single ton Object
// Called: Object literal syntax


// // const tinderUser={}




//Single ton object
//Called: Object constructor syntax

const tinderUser = new Object() 

tinderUser.name = "Omshrestha"
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

// console.log(regularUser.fullName.userFullName.lastName); // Gautam 
// console.log(regularUser.lastName); // undefined 
// console.log(regularUser.fullName.lastName); // undefined 




// This is a nested object (object inside another object) 
// Created a regularUser object with nested objects inside it 
// to store email and full name details in a structured way



const Obj1 = {1:"a", 2:"b"}
const Obj2 = {3:"c", 4:"d"}

// const Obj3 = {Obj1, Obj2}
// console.log(Obj3); // { Obj1: { '1': 'a', '2': 'b' }, Obj2: { '3': 'c', '4': 'd' } }
// Obj3 is not a merged object, it creates a new object 
// with keys Obj1 and Obj2 that hold those objects as values


 const obj3 = Object.assign({} ,Obj1 , Obj2)
 console.log(obj3);
 // Object.assign with {} as the first argument creates a new empty object, 
// then copies Obj1 and Obj2 into it. 
// Result: obj3 has merged values but Obj1 and Obj2 stay unchanged.


 