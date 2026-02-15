const promiseOne = new Promise((resolve , reject)=>{

setTimeout(() => {

    // Finish Async Tasks
    // DbCalls , CryptoGraphy , networkCalls

    resolve()
    // console.log('Finished Async Tasks');
      
}, 1000);

})

promiseOne.then(()=>{

    // console.log("Promise Consumed");   

})


// ************************* PROMISE 2 *******************************


new Promise((resolve , reject)=>{


    setTimeout(()=>{


        // console.log("AsyncTask2Done");
        resolve()
        
    },1000)

}).then(()=>{
    // console.log("AynscTask2Resolved");
    
})



// ******************************* Actual Consumption of Data Promise 3    *****************


const PromiseThree = new Promise ((resolve , reject) => {

setTimeout(() => {

    resolve({username : "101shreyash" , recentRead : "PyscoCyberNetique" , maxPullups : 17})
    
}, 1000);

})

PromiseThree.then((userinfo)=>{

    console.log(userinfo);
    
})

   
// *********  Chained Promise Consumption (Promise Chaining ) -  Promise Four  ******************* 

// then is used to perform some task after the promise is resolved
// catch is used to handle the error if the promise is rejected
// finally is used to perform some task after the promise is either resolved or rejected
// this is clean promise workflow and is used to avoid callback hell

 
const PromiseFour =  new Promise((resolve , reject) => {


    setTimeout(() => {

        const rnd = [true , false]
       let rndIndex = Math.floor(Math.random()*rnd.length);

        const error = rnd[rndIndex]

        if (!error) {

            resolve({username : "101shreyash" , userID : 41414141})
            
        } else{

            reject('Something Went Wrong')
        }
           
    }, 1000);
    
})

 PromiseFour

 .then((userinfo)=>{

    console.log(userinfo);
    return userinfo.username
    
})
.then((userinfo)=>{

    console.log(userinfo);
    

})

.catch((err)=>{
    
    console.log(err);
    
})

.finally(()=>{

    console.log('The Promise is Either Resolved or Rejected');
    
})




// ************************* PROMISE 5  *******************************


// async await is preferred over .then and .catch because it is more readable and easier to understand and it also allows you to write synchronous code in an asynchronous way

// .then and .catch are used to handle the resolved and rejected state of a promise respectively while async await is used to handle both resolved and rejected state of a promise in a more elegant way

// you can also use try catch block to handle errors in async await and finally block to perform some task after the promise is either resolved or rejected

const promiseFive = new Promise((resolve, reject) => {
  
    const poss = [true, false];
    let rndPoss = Math.floor(Math.random() * 2);

  const error = poss[rndPoss]

  if (error != true) {
    resolve({ username: "shreyash101", userID: "414141" , recentRead : "PyscoCyberNetique" });
  } else {
    reject("Something Went Wrong Error 404");
  }
});

async function consumePromiseFive() {
  try {
    const aftermath = await promiseFive;
    console.log(aftermath);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()
