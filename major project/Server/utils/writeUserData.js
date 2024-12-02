const fs = require("fs");
const UploadDropbox = require("../utils/dropbox");

let WriteFile = (fileName, data) => {
  fs.writeFileSync(`./data/${fileName}`, JSON.stringify(data), function (err) {
    console.log(data);
    if (err) {
      return console.log(err);
    }
    // console.log(data);
    console.log(`${fileName} is saved!`);
  });
};

// WriteFile("test.json", { data: ["test"] });

module.exports = WriteFile;
