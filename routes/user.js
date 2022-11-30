const userRoute = require("express").Router();

userRoute.get("/usertest", (req, res) => {
  res.send("User tested");
});

module.exports = userRoute;
