let score = "33"

console.log(typeof score);

let valueInNumber= Number(score)
console.log( typeof valueInNumber);
console.log(valueInNumber);



// "33" => 33
// "33abc" => NaN (not a number)
// true => 1 
// false => 0


let isloggedIn = 0

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

//1 => true 
// 0 => false
// "shreyash" => true
// "" => False


let someNumber = 56

let stringNumber = String(someNumber)
console.log( typeof stringNumber);




// ****************** Operations ********************

let value = 3
let negValue = -value
console.log(negValue); //-3


// console.log(2+2);
// console.log (2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%3);

let str1 = "hello"
let str2 = " shreyash"

let sumof2str = str1+str2
console.log(sumof2str); // "hello shreyash"

console.log("1" + 2);  // => 12
console.log(1 + "2");  //=> 12
console.log("1" + 2 + 2); //=> 122
console.log(1 + 2 + "2"); //=> 32


let num1,  num2,  num3 
num1 = num2 = num3 = 2+2
console.log(num1 , num2 , num3); // not a production level code ,
//  readability should be high ,  but the output would be 4 4 4 

 let gameCounter = 100
 gameCounter++
 console.log(gameCounter); //101 even when done ++gameCounter 
 


 

// Learn prefix (++i) and postfix (i++) operators from MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment



