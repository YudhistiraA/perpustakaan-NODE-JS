const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const {
  createbuku,

  getUserByUserId,
  getbuku,
  updatebuku,
  deletebuku
} = require("./buku.controller");
router.get("/", checkToken, getbuku);
router.post("/", checkToken, createbuku);
router.get("/:id", checkToken, getUserByUserId);
router.patch("/", checkToken, updatebuku);
router.delete("/", checkToken, deletebuku);

module.exports = router;