const express = require("express");
const app = express();

app.use(express.json());

//importing routes

const authRoute = require("./routers/index")

//route middlewares
app.use("/api", authRoute);

const port = 3000;
app.listen(port, function () {
  console.log("server is running on localhost" + port);
});
