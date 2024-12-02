const express = require("express");
const UserDB = require("../model/user.model");
const sendEmail = require("../utils/email");
const requestIp = require("request-ip");
const address = require("address");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const WriteFile = require("../utils/writeUserData");
const UploadDropbox = require("../utils/dropbox");

const generate_honey_words = require("../honey_words");
const router = express.Router();

router.get("/", async (req, res) => {
  const email = req.params.email;
  const users = await UserDB.find();
  try {
    console.log(users);
    res.json(users);
  } catch (error) {
    console.log("err");
    res.json({});
  }
});

//Login User
router.post("/login", async (req, res) => {
  const data = req.body.data;
  console.log(data.emailID, data.Password);
  const [users] = await UserDB.find({ emailID: data.emailID });
  // console.log(bcrypt.compareSync(data.Password, users.Password));
  try {
    if (bcrypt.compareSync(data.Password, users.Password)) {
      console.log({
        emailID: users.emailID,
        Password: users.Password,
        role: users.role,
      });

      res.json([
        { emailID: users.emailID, Password: users.Password, role: users.role },
        { message: "Login Success" },
      ]);
    } else {
      res.status(400).json([{}, { message: "Email ID or Password is Wrong" }]);
    }
  } catch (error) {
    // console.log("err");
    res.status(400).json([{}, { message: "Email ID or Password is Wrong" }]);
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//Register User
router.post("/", async (req, res) => {
  const data = req.body.data;

  const encryptedPWD = bcrypt.hashSync(data.Password, 10);

  // console.log({ ...data, Password: encryptedPWD });
  const user = new UserDB({ ...data, Password: encryptedPWD });

  try {
    const result = await user.save();
    // const fullName = `${users.firstName} ${users.lastName}`

    // if (data.emailID) sendEmail("welcome", data.emailID, data.lastName);
    let honeyWords = generate_honey_words(result, 10);
    let encryptedHoneyWords = honeyWords.map((w) => bcrypt.hashSync(w, 10));
    console.log(`${result._id.toString()}.json`, encryptedHoneyWords);
    WriteFile(`${result._id.toString()}.json`, { data: encryptedHoneyWords });

    res.status(200).json([
      { message: "User add successfully" },
      {
        fileName: `${result._id.toString()}.json`,
        data: encryptedHoneyWords,
      },
    ]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "failed" });
  }
});

router.get("/ip", (req, res) => {
  // console.log(req.socket.remoteAddress);
  // console.log(req.ip);

  // var clientIp = requestIp.getClientIp(req);
  // console.log(clientIp);
  // res.send("your IP is: " + clientIp);

  // default interface 'eth' on linux, 'en' on osx.
  console.log(address.ip()); // '192.168.0.2'
  res.send("Your IP is: " + address.ip());
  // console.log(address.ipv6()) // 'fe80::7aca:39ff:feb0:e67d'
  // address.mac(function (err, addr) {
  // console.log(addr); // '78:ca:39:b0:e6:7d'
  // });
});

router.post("/dropbox", async (req, res) => {
  const data = req.body;
  console.log(data.fileName);
  await sleep(5000);
  UploadDropbox(data.fileName);
  res.send("ok");
});

router.post("/email", (req, res) => {
  const IP = address.ip();
  const data = req.body.data;
  sendEmail("alert", data.emailID, data.name, IP);
});

module.exports = router;
