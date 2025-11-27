const express = require('express');
const app = express();
const PORT = 3000;

const usersinfo = {
  username: "vanHallen",
  userid: "414141",
  location: "Dharan,Brt12",
  lastloggedAt: ["Sunday", "Wednesday", "Thursday"],
  recentLoggedinDate: new Date().toLocaleDateString()
};

const unusualLoggin = (user) => {
  return `Dear User ${user.username}, Your account has detected an unusual login at ${user.recentLoggedinDate}`;
};

app.get('/check-login', (req, res) => {
  const message = unusualLoggin(usersinfo);
  res.send({ message });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
