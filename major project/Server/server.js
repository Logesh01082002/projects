const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const connection = require("./dbcon");
const user = require("./routes/user.route");
const encrypt = require("./utils/Encryption");

const app = express();
connection();
var PORT = process.env.port || 5000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors());

//routes
app.use("/api/user", user);

var server = app.listen(PORT, (error) => {
  console.log("Server is listening on", PORT);
});
