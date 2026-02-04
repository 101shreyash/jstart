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


// ******************************* Promise Four**************************************

