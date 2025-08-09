const accountId = 414141
let accountEmail = "getonthebarsbro"
var accountPassword = "12345"
accountCity="Biratnagar"



// accountId = 515151 // not allowed

/*
Avoid var because it can cause scope problems. Use let instead.

 */
accountEmail = "getonthefloorsbro"
accountPassword = "112345"
accountCity = "jhapa" // DON'T do this: accountCity = "jhapa"
// Because without 'let' or 'const', you create a global variable by accident.
// This pollutes the global scope and can cause sneaky bugs later.
// Plus, in strict mode, this will throw an error and break your code.
// Always declare variables properly to keep your code clean and safe.

console.table([accountId , accountEmail , accountPassword , accountCity])




