import userinfo from "./utils.js"; // here we have used ESmodule but some codebase still uses commonjs

const username = userinfo.username;
const userID = userinfo.userID;

console.log(`Dear ${username} Welcome to Nodejs ,${userID} is your login ID`);
