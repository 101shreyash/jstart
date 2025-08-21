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



Object.freeze(jsUSer)
jsUSer.name = "Chadshreyashme" //
// Freeze the jsUSer object to make it immutable
// After freezing, you cannot change, add, or delete any property



