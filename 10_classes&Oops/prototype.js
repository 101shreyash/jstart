const name = "Shreyash       "

// console.log(name.trim().length);  // obviously weknow we could trim in this way and get the actual length
// but what if we could have our own method directly called as actuallength which shows the truelength 
// lets create it 


String.prototype.actualLength = function(){

return `actual length of the string is ${this.trim().length}`

}


console.log(name.actualLength());


const herosofmine = ["DavidGoggins" , "JohnyKim" , "ArvindShrinivas"]


let why = {

    davidGoggins : "reminds me the purpose is me",
    johnyKim : "you can just do things",
    arvindShrinivas : "Great guy to learn from",



    sowhyGoggins : function(){

        console.log(`the reason is because he ${this.davidGoggins}`);
        
    }
}

Object.prototype.shreyash = function(){

    console.log("Shreyash prototype is present in all objects");
    
}



Array.prototype.heyshreyash = function(){

    console.log("shreyash says hello");
    
}


console.log(why.heyshreyash()); // here why donot have the acess to heyshreyash , cause the prototype is set to an array


console.log(why.shreyash());
console.log(herosofmine.shreyash()); // same here 




// ************************* Prototypal  Inheritance ****************************


const User = {
    name: "shreyash",
    email: "shreyash@mit.edu"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User




//  -------------------------- modern syntax ----------------------

Object.setPrototypeOf(TeachingSupport, Teacher)
