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


console.log(tinderUser); 
/*{
 name: 'Omshrestha',
age: 17,
bio: 'if she can say a b c she is redy for the d ',
 height: '5foot9'
 } */

 // Both {} and new Object() create object, 
// but {} is cleaner, faster, and preferred in modern JS, 
// while new Object() is old-school and more verbose.
