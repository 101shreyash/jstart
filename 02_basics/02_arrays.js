const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["Superman", "Batman", "flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
// Pushes the entire dc_heros array as a single element into marvel_heros
// Result: ["thor", "ironman", "spiderman", ["Superman", "Batman", "flash"]]


 const everyheros = [...marvel_heros, ...dc_heros]
 console.log(everyheros);
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


