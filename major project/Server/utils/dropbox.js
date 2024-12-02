const fs = require("fs");
const https = require("https");
const axios = require("axios");
// const data = "{\"limit\": 1000}";

const TOKEN =
  "sl.BKAPCKqljx5MRNT4jdzgGZVdjnG_Aez5JJ8H5aMJwijmAc2anXZGBaG2Xjh-_rWqQLchYXmnpQ8hsJEXxsLFXjQ3iGPJ7iLKZnJIHoQKCHC8bqK4MMDfoBhzSUyuoa_1APKdbS6Upec5";

// let WriteFile = (fileName, data) => {
//   fs.writeFileSync(
//     `./data/${fileName}`,
//     JSON.stringify(data),
//     "utf8",
//     function (err) {
//       console.log(data);
//       if (err) {
//         return console.log(err);
//       }
//       // console.log(data);
//       console.log(`${fileName} is saved!`);
//     }
//   );
// };

UploadDropbox = (fileName) => {
  // WriteFile(fileName, dropboxdata);
  // console.log("uploading...........", fileName);
  fs.readFile(`./data/${fileName}`, function (err, data) {
    const req = https.request(
      "https://content.dropboxapi.com/2/files/upload",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Dropbox-API-Arg": JSON.stringify({
            path: `/Upload/${fileName}`,
            mode: "overwrite",
            autorename: true,
            mute: false,
            strict_conflict: false,
          }),
          "Content-Type": "application/octet-stream",
        },
      },
      (res) => {
        console.log("statusCode: ", res.statusCode);
        // console.log("headers: ", res.headers);

        // if (res.statusCode !== 200){
        //     console.log("Can't Upload in Dropbox! Refresh the token",res);
        //     return
        // }

        res.on("data", function (d) {
          process.stdout.write(d);
        });
      }
    );

    req.write(data);
    req.end();
  });
};

const uploadFile = async (fileName) => {
  try {
    const response = await axios({
      method: `POST`,
      url: `https://content.dropboxapi.com/2/files/upload`,
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/octet-stream",
        "Dropbox-API-Arg": JSON.stringify({ path: `/Upload/${fileName}` }), //file path of dropbox
      },
      data: fs.createReadStream(`./data/${fileName}`), //local path to uploading file
    });
    console.log(response.data);
  } catch (err) {
    return console.log(`X ${err.message}`);
  }
};

module.exports = UploadDropbox;
