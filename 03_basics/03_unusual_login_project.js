
const userinfo = {
    deviceName:"SamsungGalaxyJ2",
    location : "Nepal,Biratnagar",
    timeAndDate : new Date().toUTCString()
}
function UnusualLogin (acessinginfo){
return `Unusual Login has Been detected from ${acessinginfo.deviceName}, ${acessinginfo.location}, at ${acessinginfo.timeAndDate}`
}
console.log(UnusualLogin(userinfo));
