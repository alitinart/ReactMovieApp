const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, PATCH");
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ house: "house" });
});

const port = 8000;

app.listen(port, () => {
  console.log("App listening at port " + port);
});
