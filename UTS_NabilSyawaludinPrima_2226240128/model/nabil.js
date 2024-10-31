const mongoose = require("mongoose");

const nabilSchema = new mongoose.Schema({
    nama : {type : String, required : true},
    npm : {type : String, required : true},
    jurusan : {type : String, required : true}
});

module.exports = mongoose.model("Nabil",nabilSchema);