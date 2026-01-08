
    const userinfo = {


        userName : 'Shreyash',
        surname : "Gautam",
        address : "Biratnagar"

    }

    setInterval(() => {

    const date = new Date().toLocaleTimeString()

    function userMsg(userinfo) {


        return `Dear User ${userinfo.userName} You are logged in on our platform as of ${date} based in ${userinfo.address}`
        
    }
    console.log(userMsg(userinfo));

    },1000)

    // just used api of Date object to get current time 
    // and used setInterval to print message every second