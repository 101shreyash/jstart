// FOR IN LOOPS


const userinfo = {
    username : 'Shreyash', 
    favBook : "Zero to One By Peter theil ",
    favMovie : "Rocky IV of Sylvester Stallone and DulphLundergren",
    favSwimmer : "Miacheal Philips",
    favFiction : "AnimalFarm By George Orwell",
}

for (const key in userinfo) {

// console.log(`${key} - ${userinfo[key]}`);
    
    
    
} // as simple as that 



// **************** Now the Question is .. Can We Use For In Loop For Arraays *************

const favBooktillNow = ["ZeroToOne" ,"AtomicHabit", "SameAsEver", "YouSquare"]

for (const key in favBooktillNow) {

console.log(favBooktillNow[key]);

          
} 

// yes we can
// The Catch (Why pros don’t use for...in for arrays)

// for...in is made for objects, not arrays.
// It loops through keys (indexes) — as strings, not numbers.

// And if you or some library adds extra properties to the array (like .custom = "something"),
// for...in will loop through those too, which can mess up your logic.

// so the better alternative would to use forof in arrays