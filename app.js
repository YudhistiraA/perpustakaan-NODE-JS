require("dotenv").config();
const express = require("express");
const app = express();
const petugasrRouter = require("./petugas/petugas.router");
const anggotaRouter = require("./anggota/anggota.router");
const peminjamRouter = require("./peminjam/peminjam.router");
const bukuRouter = require("./buku/buku.router");
app.use(express.json());
app.use("/petugas",petugasrRouter);
app.use("/anggota",anggotaRouter);
app.use("/buku",bukuRouter);
app.use("/peminjam",peminjamRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});