// Singleton object creation
// (creates an object using Object.create)
const singletonUser = Object.create(null); 
singletonUser.name = "SingletonShreyash";


// Symbol for unique key
const mySym = Symbol("key1");


// Object literals
const jsUSer = {
  name: "Shreyash",
  [mySym]: "myKey1",   //  Symbol key must be inside []
  age: 17,
  location: "Biratnagar",
  email: "himeshreyash@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday", "Friday"]
};


// Dot Notation (obj.key)
console.log(jsUSer.name);        // Shreyash


// Bracket Notation (obj["key"])
console.log(jsUSer["name"]);     // Shreyash


// Accessing Symbol key
console.log(jsUSer[mySym]);      // myKey1


// Checking singleton object
console.log(singletonUser.name); // SingletonShreyash



jsUSer.age = 14
console.log(jsUSer); //Update the 'age' property of the jsUSer object from 17 to 144


// Add a new property to the obj 
jsUSer.pullupsPr = 19;

console.log(jsUSer);



// Object.freeze(jsUSer)
jsUSer.name = "Chadshreyashme" //
// Freeze the jsUSer object to make it immutable
// After freezing, you cannot change, add, or delete any property


jsUSer.greeting = function(){
  console.log("Hello Js User");
  
}
 jsUSer.greetingTwo = function(){
  console.log(`Hello js user ${this.name}`);
  
 }


jsUSer.greeting() // Hello JsUSer
jsUSer.greetingTwo() // Hello js user Chadshreyashme

// Added a method 'greetingTwo' to jsUSer object.
// This is an object method because it’s a function stored inside an object property.
// Inside the method, 'this' refers to the object calling the method (jsUSer).
// Using template literals, it prints "Hello js user" followed by the jsUSer’s 'name' property.


  
