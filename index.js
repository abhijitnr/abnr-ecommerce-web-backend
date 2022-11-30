const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.js");

dotenv.config();

const app = express();

/* MONGODB CONNECT */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Database coonected successfully`))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

/* ROUTES */
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
