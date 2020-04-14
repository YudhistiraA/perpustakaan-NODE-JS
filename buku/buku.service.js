
const pool = require("../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into buku(kd_buku,nama_buku,pengarang,penerbit,tarif,durasi) 
                values(?,?,?,?,?,?)`,
      [
        data.kd_buku,
        data.nama_buku,
        data.pengarang,
        data.penerbit,
        data.tarif,
        data.durasi,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null,results);
      }
    );
  },
  
  getUserByUserId: (kd_petugas, callBack) => {
    pool.query(
      `select * from buku where kd_buku = ?`,
      [kd_petugas],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select * from buku`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update buku set  nama_buku=?, pengarang=?, penerbit=?, tarif=?,durasi=? where kd_buku = ?`,
      [
       
       
        data.nama_buku,
        data.pengarang,
        data.penerbit,
        data.tarif,
        data.durasi,
        data.kd_buku
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `select  kd_buku from buku where kd_buku = ?`,
      [data.kd_petugas],
      (error,results,fields)=>{
        
        if(error){
          return callBack(error)
        }
        else{
        pool.query(
          `delete from buku where kd_buku = ?`,
          [data.kd_petugas]);
return callBack(null,results[0])
          }
        
      }
    )
  },
 
};