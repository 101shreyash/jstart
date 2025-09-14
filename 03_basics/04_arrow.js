
//arrow function 


const users = {
    username : "Shreyash",
    id : 414141,
    Userloggedmsg : function (){
        console.log(`Welcome to the platform ${this.username} have a great day`);
        
        
    }

}

users.Userloggedmsg() // Welcome to the platform Shreyash have a great day

users.username = "ChadShreyash"  // Welcome to the platform ChadShreyash have a great day
users.Userloggedmsg()
