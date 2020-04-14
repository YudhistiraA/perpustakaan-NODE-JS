// const router = require("express").Router();
// const { checkToken } = require("../auth/token_validation");
// const {
//   createpeminjam,  
//   getUserByUserId,
//   getpeminjam,

// } = require("./peminjam.controller");
// router.get("/", checkToken, getpeminjam);
// router.post("/", checkToken, createpeminjam);
// router.get("/:id", checkToken, getUserByUserId);
// module.exports = router;
const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const {
  createpeminjam,

  getUserByUserId,
  getpeminjam,
  updatepeminjam,
  deletepeminjam
} = require("./peminjam.controller");
router.get("/", checkToken, getpeminjam);
router.post("/", checkToken, createpeminjam);
router.get("/:id", checkToken, getUserByUserId);
router.patch("/", checkToken, updatepeminjam);
router.delete("/", checkToken, deletepeminjam);

module.exports = router;