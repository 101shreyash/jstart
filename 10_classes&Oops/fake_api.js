// random user api

const poss = [true, false];
const rnd = Math.floor(Math.random() * poss.length);
const error = poss[rnd];

function userinfo(username, userID, userEmail) {
  this.username = username;
  this.userID = userID;
  this.userEmail = userEmail;

  return this;
}

const userone = new userinfo("shreyash", 414141, "getonthebarsbro@gmail.com");
const userTwo = new userinfo("Bronish", 56656, "blackbull@gmail.com");
const userThree = new userinfo("jack", 9707, "jckofo@gmail.com");
const userFour = new userinfo("Prk", 631813, "prki@gmail.com");
const userFive = new userinfo("hikaru", 78762, "viking@gmail.com");

const peoples = [userone, userTwo, userThree, userFour, userFive];

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (error === false) {
      resolve(peoples);
    } else {
      reject("Something Went Wrong");
    }
  }, 1000);
})

  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.log(error);
  });
