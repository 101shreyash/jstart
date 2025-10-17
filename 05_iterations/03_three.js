// FOR OF LOOP


// ["", "", ""]
// [{},{},{}]


const Hobbies = ["Chess", "Programming", "Calasthenics", "DistanceRunning", "ReadingGreatBooks", "Reading"]

for (const index of Hobbies) {

    // console.log(index);
    
    
} // thats it simple asf less complex than any other loops
//  Here we are using a "for...of" loop to iterate through an array.



// not just in an array we can use for of loop even in strings 

// const greetings = "Hello World!"

// for (const greet of greetings) {
    

//     console.log(greet);

// }



// ****************** Maps In JS *************


// A Map is a special object in JS used to store key value pairs 
//  kinda like an object, but with superpowers.
// what diffrentiates it from object is  it Maintains order of insertions
// is easy for iteration than obj 
//  We can’t have duplicate keys each key must be unique.


// const map = new Map ()
// map.set ("Key" , "value")
// map.set ("BiratnagarZipCode" , 56613)
// map.set ("kathManduZipCode", 44600
// )
// console.log(map);


// ******************************************


 /* output :  Map(3) {
  'Key' => 'value',
  'BiratnagarZipCode' => 56613,
  'kathManduZipCode' => 44600
}
  */



// *********************** Iterations on Map ***********************


const map = new Map ()
map.set ("Key" , "value")
map.set ("BiratnagarZipCode" , 56613)
map.set ("kathManduZipCode", 44600
)
// console.log(map);


for (const [key, value] of map) {

    // console.log(`${key} - ${value}`);
    
} 
// as simple as that the "key value" here is an identifier we can set it acc to out prefrenace like i even write element 1 and element 2 in bracket obviously [element1, element2] of map



// ************************* Can We Use For Of Loop In Obj ?? *******************


const userinfo = {

    username : 'Shreyaash', 
    surname : 'gautam',
    location : "biratnagar"

}

for (const [key, value] of userinfo) {

console.log(key,value);
 
    
} 
// No we cant the output is "userinfo is not iterable"
// Because plain objects in JS are not iterable by default.
// for...of only works on iterable data structures like: Arrays , Strings , Maps , Sets


