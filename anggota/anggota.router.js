const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const {
  createanggota,  
  getUserByUseraggota,
  getanggota,
  login,
  updateanggota,
  deleteanggota
} = require("./anggota.controller");
router.get("/", checkToken, getanggota);
router.post("/", checkToken, createanggota);
router.get("/:id", checkToken, getUserByUseraggota);
router.post("/login", login);
router.patch("/", checkToken, updateanggota);
router.delete("/", checkToken, deleteanggota);

module.exports = router;