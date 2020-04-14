const pool = require("../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into anggota(kd_anggota, nama_anggota, alamat, telepon) 
                values(?,?,?,?)`,
      [  data.kd_anggota,
        data.nama_anggota,
        data.alamat,
        data.telepon,
      ,

      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null,results);
      }
    );
  },
  getUserByUserEmail: (nama_anggota, callBack) => {
    pool.query(
      `select * from anggota where nama_anggota = ?`,
      [nama_anggota],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
 
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select * from anggota where kd_anggota = ?`,
      [id],
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
      `select * from anggota`,
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
      `update anggota set nama_anggota=?,alamat=?,telepon=? where kd_anggota = ?`,
      [
        data.nama_anggota,
        data.alamat,
        data.telepon,
        data.kd_anggota,
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
      `select  kd_anggota from aknngota where kd_anggota = ?`,
      [data.kd_anggota],
      (error,results,fields)=>{
        
        if(error){
          return callBack(error)
        }
        else{
        pool.query(
          `delete from anggota where kd_anggota = ?`,
          [data.kd_anggota]);
return callBack(null,results[0])
          }
        
      }
    )
  },
 
};