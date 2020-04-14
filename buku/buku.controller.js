const {
    create,
    getUserByUserEmail,
    getUserByUserId,
    getUsers,
    updateUser,
    deleteUser
  } = require("./buku.service");
 
  
  module.exports = {
    createbuku: (req, res) => {
      const body = req.body;
      
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
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
      getbuku: (req, res) => {
        getUsers((err, results) => {
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
      updatebuku: (req, res) => {
        const body = req.body;
        
        updateUser(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            message: "updated successfully"
          });
        });
      },
      deletebuku: (req, res) => {
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
      },
    
    };