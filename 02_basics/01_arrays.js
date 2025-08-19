
// Array = special type of object in JavaScript used to store multiple values in a single variable.
// Each value has an index (starting from 0).
// Example: const nums = [10, 20, 30];  // nums[0] = 10
// Arrays can hold any type: numbers, strings, objects, even other arrays.
// They come with built-in methods like push(), pop(), map(), filter(), reduce() for working with data.


const myArray = [0 , 1, 2, "shreyash", true]

const myArray2 = new Array(1 , 2, 3 , "imbusynotfree", "hahaha")

// You can create arrays using the Array constructor too.
// BUT: if only one number is given, it creates an empty array of that length.
// Example: new Array(5) → [ <5 empty items> ]
// That’s why [] (array literal) is usually preferred for clarity.

// console.log( typeof myArray); // obj 

const Heros = ["batman" , "superman", "Flash", "Shreyash"]
console.log(Heros[0]); // batman
console.log(Heros[3]); //Shreyash
console.log(Heros[4]); // undefined


//  *************************** Arrays Methods ***************************************


const NewArray = [0 , 1, 2, 3, "shreyash", "Palalto", "naval"]
NewArray.push("Ravikant")
//Array Mutation
// Here, "Ravikant" is added at the end.
// push() → adds one or more elements to the **end of the array**.


 NewArray.pop() 
 // Watch out, watch out, it's RomanReings coming in!
// He jumps, swings his elbow, BOOMMM!! 
// That’s pop() in action — it **smashes the last element out of the array in this case its ravikant**

NewArray.unshift(9) // 
// unshift() → adds one or more elements **to the start of the array** here 9 in the beginning 

NewArray.shift()
// shift() → removes the **first element** of the array  
// here it removes 9 so [0,1,2,3,"shreyash","Palalto","Naval"]


console.log(NewArray.includes("naval")); // true 
console.log(NewArray.includes("Elon")); // False 


console.log(NewArray.indexOf("shreyash")); // 4 - "shreyash lies in 4th index of this array youve created"
console.log(NewArray.indexOf("Gautam")); //-1  - Theres no such thing as Gautam Here on this array so its -1

console.log(NewArray); 



const AnotherArray = NewArray.join()
console.log(AnotherArray);  
// .join() takes all elements of the array and glues them into one string.
// Output: "0,1,2,3,shreyash,Palalto,naval"
//Original array (NewArray) is not changed .join() returns a new string.
console.log( typeof AnotherArray);  // string not an array anymore 




// ***********slice & splice********

const mrArray = [2 , 3, 4, 5, "ilovecaffeine"]
console.log(mrArray.slice(1 , 3)); //3 , 4 
console.log(myArray);  // [ 0, 1, 2, 'shreyash', true ]
// slice returns a new array of selected elements without changing the original array,



console.log(mrArray.splice(1,3)); // 3 , 4, 5, 
console.log(mrArray); // [ 2, 'ilovecaffeine' ]
// splice removes (and optionally adds) elements from the original array and returns the removed elements.








