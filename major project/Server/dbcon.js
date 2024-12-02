const {mongoose } = require("mongoose")


const dbname = "admin";

const DB_URL = `mongodb://127.0.0.1:27017/${dbname}`
module.exports = () =>{
    const connectionparams ={
        useNewUrlParser:true,
        useUnifiedTopology:true
    };
    try {
        mongoose.connect(DB_URL, connectionparams);
        console.log("DB is Connected")
    } catch (error) {
        console.log("DB Connection Error")
    }
}
