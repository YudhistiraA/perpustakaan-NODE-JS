const {
    create,
    getUserByUserId,
    getpeminjam,
    updateUser,
    deleteUser
  } = require("./peminjam.service");
 
  const { verify }=require('jsonwebtoken')
  module.exports = {
    createpeminjam: (req, res) => {
        const body = req.body;
        let token = req.get("authorization");
        if(token){
            let wow = token.slice(7)
            verify(wow,"secretkey",(err,decoded)=>{
        if(err){
          console.log(err);
            res.json({
                success:0,
                message:"login first" + err
            })
        }else{
          

            var user = decoded.result
            var now =new Date();
            var jsonDate = now.toJSON();
            var then = new Date(jsonDate);
            var kembali = new Date(now.getFullYear(),now.getMonth(),now.getDate()+body.durasi);


            const data ={
                no_pinjam :body.no_pinjam,
                kd_anggota:body.kd_anggota,
                kd_petugas:user.nama_petugas,
                tgl_pinjam:then,
                tgl_kembali:kembali,
                kd_buku:body.kd_buku
            }
         create(data, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror" +err
            });
          }
          return res.status(200).json({
            success: 1,
            account:decoded,
            data: results
          });
        });
      }})
  }
      },
      getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record not Found"
            });
          }
          results.password = undefined;
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getpeminjam: (req,res) => {
        getpeminjam((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      updatepeminjam: (req, res) => {
        const body = req.body;
        let token = req.get("authorization");
        if(token){
            let wow = token.slice(7)
            verify(wow,"secretkey",(err,decoded)=>{
        if(err){
          console.log(err);
            res.json({
                success:0,
                message:"login first" + err
            })
        }else{
          

            var user = decoded.result
            var now =new Date();
            var jsonDate = now.toJSON();
            var then = new Date(jsonDate);
            var kembali = new Date(now.getFullYear(),now.getMonth(),now.getDate()+body.durasi);


            const data ={
                no_pinjam :body.no_pinjam,
                kd_anggota:body.kd_anggota,
                kd_petugas:user.nama_petugas,
                tgl_pinjam:then,
                tgl_kembali:kembali,
                kd_buku:body.kd_buku
            }
            updateUser(data, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror" +err
            });
          }
          return res.status(200).json({
            success: 1,
            account:decoded,
            data: results
          });
        });
      }})
  }
      },
       
    
      deletepeminjam: (req, res) => {
        const data = req.body;
        deleteUser(data, (err,results) => {
         
          if (err) {
           
              console.log(err)
            
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "not found"
            });
          }else{
            return res.json({
              success: 1,
              message: "deleted sucses"
            })
          }
       
        });
      }
    
    
    }