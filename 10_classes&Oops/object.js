// javascript default behaviour is Prototypal Behavior  or also known as prototypal Inheritance


// Prototypal inheritance in JavaScript is a mechanism
//  where objects inherit properties and methods directly from other objects.

// In JavaScript, every object has an internal link to another object called its prototype. 
// When you try to access a property on an object, the engine:
// Checks the object itself.
// If not found, looks at its prototype.
// Continues up the prototype chain until it finds the property or reaches null.

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const coffee = new createUser("coffee", 25)
const tea = createUser("tea", 250)

coffee.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/