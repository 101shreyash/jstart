
const p1 = new Promise((resolve , reject) =>{


 let reqfrom = "https://randomuser.me/api/"

 const xhr = new XMLHttpRequest ()
 xhr.open('GET' , reqfrom)
 xhr.onreadystatechange = (()=>{


     if(xhr.readyState === 4){


        if (xhr.status === 200) {

            resolve(xhr.responseText)
            
        }

        else{

             reject ('Something Went Wrong')

        }

    }

 })

xhr.send()


})

p1

.then((info)=>{

    console.log(info);
    
})

.catch ((error)=>{

console.log(error);


})

.finally(()=>{

    console.log('Either Its Rejected or Resolved');
    
})

/*


Node.js does not support XMLHttpRequest.

XMLHttpRequest is part of the browser environment (Web APIs) — same category as window, document, localStorage, alert.

This code ONLY works inside a browser.

Reason:
XMLHttpRequest is a browser API.
It exists in Chrome, Firefox, Edge etc.
Node.js does NOT have it, so Node throws:
"ReferenceError: XMLHttpRequest is not defined"

In Node you must use:
- fetch (Node 18+)
- or http/https module

So:
Browser  → use XMLHttpRequest
Node     → use fetch
*/



// Browser networking (old):

// XMLHttpRequest

// Browser networking (modern):

// fetch