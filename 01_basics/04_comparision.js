// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
  

// console.log("2" > 1);
// console.log("02" > 1 );


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// the reason is that an equality check == and comparision > < >=
// <= work diffrently .
//Comparisons covert null to a number , treating as 0 .
//  Thats why (3) null>=0 is true and (1) null > 0 is flase 



console.log(undefined == 0); //false
console.log(undefined > 0 ); //fasle
console.log(undefined < 0 ); //false

// ===

console.log("2" === 2); // false
// === → Strict equality
// Compares value AND type.
// "2" is a string, 2 is a number → types don’t match → returns false.


console.log("2" == 2); 
// == → Loose equality
// If types differ, JS will coerce one to match the other before comparing.
// "2" (string) gets converted to 2 (number) → now it’s 2 == 2 → returns true.






