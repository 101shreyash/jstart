
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
    // console.log(userMsg(userinfo));
      process.stdout.write(`\r${userMsg(userinfo)}`)


    },1000)




    // - Added a user info object storing name, surname, and address
// - Created userMsg function to generate login message with dynamic timestamp
// - Implemented setInterval with process.stdout.write and carriage return (\r)
//   to update the message on a single line without spamming the console



// ***************** Before console.log() *****************

// Dear User Shreyash You are logged in on our platform as of 12:30:01 based in Biratnagar
// Dear User Shreyash You are logged in on our platform as of 12:30:02 based in Biratnagar
// Dear User Shreyash You are logged in on our platform as of 12:30:03 based in Biratnagar
// ... (keeps spamming)


// ***************** After process.stdout.write() *****************

// Dear User Shreyash You are logged in on our platform as of 12:30:01 based in Biratnagar (updates in place)
// (no spamming, message updates every second)

// ***************************  Process.stdout.write()  ***************************

// console.log() ---- would spam a new line each second
// process.stdout.write() → lets us overwrite the same line using \r (carriage return)