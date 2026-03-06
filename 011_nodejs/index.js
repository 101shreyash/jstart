import userinfo from "./utils.js"; 

// here we have used ESmodule but some codebase still uses commonjs
// if youre using common js to import and export stuff make sure to add common js at type in your package.json File (which is also the deafult type youll get)

const username = userinfo.username;
const userID = userinfo.userID;

console.log(`Dear ${username} Welcome to Nodejs ,${userID} is your login ID`);
