
    const  usersinfo = {
        name : 'Shreyash',
        surname : 'gautam'

    }

    function userloggedmsg (acessingvalues){
        return `Welcome  mr ${acessingvalues.name} In Our Platform`
    }
    console.log(userloggedmsg(usersinfo));


    // *********************************************************************************


    const  userinfo = {
        name : 'Shreyash',
        surname : 'gautam'

    }

    const userlogginmsg =  (acessingvalues) => (`Welcome ${acessingvalues.name} In our Platform`)
        console.log(userlogginmsg(userinfo)); 