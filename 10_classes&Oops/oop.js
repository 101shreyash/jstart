// Object Litreal And this

const userinfo = {

    username : '101Shreyash', 
    isSignedIn : true,
    userID : 414141,

    acessUser : function () {

         console.log(`Username is ${this.username}`); // this represnets current context
         console.log(this); // assume in this analogy 'the keyword this says who is calling me rn'
         // in this contect acessuser is called by userinfo so it gives us the whole userinfo
             
        
    }
}

 userinfo.acessUser()

 console.log(this);
 
 // here the value of this is empty obj {} cause here an obj is empty
 // At the top level (console.log(this) outside any function), Node sets this to an empty object {}, not the global object.


// *********************** Gpt convo *****************

//  okay in summary this simply means cuurent context and when you do console.log (this) in node its empty cause there nothing in the cuurent context , but if you do console.log(this) in browser it gives us a window object cause rn the cuurent context of window is aloooottt of stuffs

// Exactly.



// ++++++++++++++++++++++ Constructor Function +++++++++++++++++++++++++++++++


// in JavaScript new is used with a constructor function to create a new object.

const date = new Date ()
const promise = new Promise()

// so the question is why we use new keyword ?? lets figure out why


  function userinfo (username , userAdress , isLoggedIn) {

 this.username = username
 this.userAdress = userAdress
 this.isLoggedIn = isLoggedIn

 return this // even if you dont write return this here 
// In JavaScript, constructor functions automatically return this if you don’t explicitly return anything. 

}

 const userOne =  new userinfo('Shreyash', 'Biratnagar' , true )
 const userTwo =  new userinfo('TrunnisGoggins', 'NewYork' , false )  
 const userThree =  new userinfo('BicepHunter', 'Africa' , true )  
 const userFour =  new userinfo('Kaijen', 'KaiCity' , false )  

 // here if we will not use the keyword "new" then the value will be overwrite
 // and even if we do console.log(userOne) then we will get value of userTWO

//  Using "new" creates a new object each time, so userOne, userTwo, etc., are all separate objects. Their values do not overwrite each other because each new userinfo(...) call produces a fresh object with its own this.

 console.log(userOne);
 console.log(userTwo);
 console.log(userThree);
 console.log(userFour);
 





// When you use new with a function or class:

// JavaScript creates a new empty object.

// Sets this inside the constructor to that object.

// Links the object’s prototype to the constructor’s prototype.

// Executes the constructor function with this bound to the new object.

// Returns this automatically (unless the constructor explicitly returns another object).

// That new object is called an instance of that constructor or class.