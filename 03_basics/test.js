 
 const date = new Date()
 date.toString()
 
 
 const UserINfo = {
    Name: "Kushal",
    Action : "LoggedIn",
    Location : "Tokyo, Japan",
    Date : [date]

}


function userLoggedMessage (AcessingJson){
 return `Dear USer You Account has been ${AcessingJson.Action} in Another device From ${AcessingJson.Location} at ${AcessingJson.Date}`

}
console.log(userLoggedMessage(UserINfo));
