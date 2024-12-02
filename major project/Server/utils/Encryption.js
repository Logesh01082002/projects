const bcrypt = require("bcryptjs");

const pwd = bcrypt.hashSync("hello", 10);
// console.log(pwd);
const newpwd = "hello";

// console.log(bcrypt.compareSync(newpwd, pwd));
