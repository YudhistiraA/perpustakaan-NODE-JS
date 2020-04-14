const pool = require("../config/database");
module.exports={
   
    create:(data,callBack)=>{
        pool.query(
            `select * from buku where kd_buku=?`,
            [data.kd_buku],(err,results)=>{
                if(err){
                   
                        callBack(error);
                      
                }
                else{
                   
                    
                    pool.query(
                        `insert into di_pinjam(no_pinjam,kd_buku)values(?,?)`,
                        [
                            data.no_pinjam,
                            data.kd_buku
                        ]
                    );
                    pool.query(
                        `insert into peminjam(no_pinjam,kd_anggota,kd_petugas,tgl_pinjam,tgl_kembali,kd_buku)
                            values(?,?,?,?,?,?)`,
                            [
                                data.no_pinjam,
                                data.kd_anggota,
                                data.kd_petugas,
                                data.tgl_pinjam,
                                data.tgl_kembali,
                                data.kd_buku
                            ], 
                    )
                    return callBack(null,results[0])
                }
            }
        )
    },
    getUserByUserId: (no_pinjam, callBack) => {
        pool.query(
          `select * from peminjam where no_pinjam = ?`,
          [no_pinjam],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getpeminjam: callBack => {
        pool.query(
          `select * from peminjam`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(err);
            }
            return callBack(null, results);
          }
        );
      },
      updateUser: (data, callBack) => {
        pool.query(
          `update peminjam set  kd_buku=?, kd_anggota=?, kd_petugas=?, tgl_pinjam=?,tgl_kembali=? where no_pinjam = ?`,
          [
           
            data.kd_buku,
           
            data.kd_anggota,
            data.kd_petugas,
            data.tgl_pinjam,
            data.tgl_kembali,
            data.no_pinjam
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
             `delete from peminjam where no_pinjam = ?`,
            [
                data.no_pinjam,
              
            ]
        );
        pool.query(
          `select  no_pinjam from peminjam where no_pinjam = ?`,
          [data.no_pinjam],
          (error,results,fields)=>{
            
            if(error){
              return callBack(error)
            }
            else{
            pool.query(
              `delete from peminjam where no_pinjam = ?`,
              [data.no_pinjam]);
    return callBack(null,results[0])
              }
            
          }
        )
      },
     
    
}