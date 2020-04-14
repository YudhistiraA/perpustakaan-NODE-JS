const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const {
  createpetugas,
  login,
  getUserByUserId,
  getpetugas,
  updatepetugas,
  deletepetugas
} = require("./petugas.controller");
router.get("/", checkToken, getpetugas);
router.post("/", checkToken, createpetugas);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updatepetugas);
router.delete("/", checkToken, deletepetugas);

module.exports = router;