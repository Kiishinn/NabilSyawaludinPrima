const Nabil = require('../model/nabil');

const createdNabil = (req,res)=>{
    const nabil = new Nabil({
        nama : req.body.nama,
        npm : req.body.npm,
        jurusan : req.body.jurusan,

    });
    nabil.save()
    .then((createdNabil) => {
        res.status(201).json({
            message : "Data Berhasil Disimpan",
            bookId : createdNabil._id

        })
    })
    .catch((err)=> {
        res.status (500).json({
            message : "Internal Server Error!"
        });
    });

};
module.exports = {createdNabil};