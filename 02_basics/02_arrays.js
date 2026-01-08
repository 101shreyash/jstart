const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["Superman", "Batman", "flash"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// Pushes the entire dc_heros array as a single element into marvel_heros
// Result: ["thor", "ironman", "spiderman", ["Superman", "Batman", "flash"]]


 const everyheros = [...marvel_heros, ...dc_heros]

 console.log(everyheros); //["thor", "ironman", "spiderman", "Superman", "Batman", "flash"]
 console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman' ]
 console.log(dc_heros); // [ 'Superman', 'Batman', 'flash' ]
 console.log(everyheros[3]); //Superman

 
 //combines both arrays into a new array, without touching the originals.
// Spread syntax (...) adds each DC hero individually to marvel_heros
// Result: ["thor", "ironman", "spiderman", "Superman", "Batman", "flash"]




const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
console.log(allHeros[3]); // Superman
console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman' ]



// marvel_heros.concat(dc_heros) does NOT change marvel_heros.
// It creates a new array with all elements of marvel_heros first, then all elements of dc_heros after.
// That new array is stored in allHeros. 
// [ 'thor', 'ironman', 'spiderman', 'Superman', 'Batman', 'flash' ]


const listOfArrays = [2, 3, 4, 5, [6, 7, 8 , [4 , 9 , 11 , "Shreyash",  [true , "Gautam", ]]]]
const realListOfArrays = listOfArrays.flat(Infinity)
console.log(realListOfArrays); //[ 2, 3, 4, 5, 6, 7, 8, 4, 9, 11, 'Shreyash', true, 'Gautam' ]

// That’s basically a nested array (an array inside an array inside an array).
// flat(depth) is a method that removes nested arrays and brings everything into a single array.



console.log(Array.isArray("Shreyash")); //false
// Array.isArray() checks if the given value is actually an array or not
// "Shreyash" is just a string, not an array → so it returns false
// Example: Array.isArray([1,2,3]) would return true



console.log(Array.from("Shreyash"));

// Array.from() takes anything that's iterable (can be looped over like a string, set, map, etc.)
// Here the string "Shreyash" is iterable character by character
// So Array.from("Shreyash") breaks it down into an array of each letter individually
// Final output: ['S','h','r','e','y','a','s','h']


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]


// ********************* Just In Case ****************



const name = "shreyash"
const surname = "Gautam"
const location = "BiratNagar"
const maxPullups = "24 with 10kg Added"

 const profile = [name , surname , location , maxPullups]

console.log(profile);



// Output: [ 'shreyash', 'Gautam', 'BiratNagar', '24 with 10kg Added' ]