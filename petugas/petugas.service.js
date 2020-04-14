
const pool = require("../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into petugas(kd_petugas,nama_petugas,jabatan,telepon,password) 
                values(?,?,?,?,?)`,
      [
        data.kd_petugas,
        data.nama_petugas,
        data.jabatan,
        data.telepon,
        data.password,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null,results);
      }
    );
  },
  getUserByUserEmail: (jabatan, callBack) => {
    pool.query(
      `select * from petugas where jabatan = ?`,
      [jabatan],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (kd_petugas, callBack) => {
    pool.query(
      `select * from registration where kd_petugas = ?`,
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
      `select * from petugas`,
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
      `update petugas set  nama_petugas=?, jabatan=?, telepon=?, password=? where kd_petugas = ?`,
      [
       
        data.nama_petugas,
        data.jabatan,
        data.telepon,
        data.password,
        data.kd_petugas,
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
      `select  id from petugas where kd_petugas = ?`,
      [data.kd_petugas],
      (error,results,fields)=>{
        
        if(error){
          return callBack(error)
        }
        else{
        pool.query(
          `delete from petugas where kd_petugas = ?`,
          [data.kd_petugas]);
return callBack(null,results[0])
          }
        
      }
    )
  },
 
};