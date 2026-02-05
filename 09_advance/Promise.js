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


// ********************************************************


new Promise((resolve , reject)=>{


    setTimeout(()=>{


        // console.log("AsyncTask2Done");
        resolve()
        
    },1000)

}).then(()=>{
    // console.log("AynscTask2Resolved");
    
})



// ******************************* Actual Consumption of Data ***************************************


const PromiseThree = new Promise ((resolve , reject) => {

setTimeout(() => {

    resolve({username : "101shreyash" , recentRead : "PyscoCyberNetique" , maxPullups : 17})
    
}, 1000);

})

PromiseThree.then((userinfo)=>{

    console.log(userinfo);
    
})

   
// *********  Chained Promise Consumption (Promise Chaining ******************* 

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
