-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 30, 2020 at 01:20 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `covid-19`
--

-- --------------------------------------------------------

--
-- Table structure for table `anggota`
--

CREATE TABLE `anggota` (
  `kd_anggota` char(222) NOT NULL,
  `nama_anggota` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `telepon` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `anggota`
--

INSERT INTO `anggota` (`kd_anggota`, `nama_anggota`, `alamat`, `telepon`) VALUES
('a1234', 'dhansi', 'malang', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `kd_buku` char(222) NOT NULL,
  `nama_buku` varchar(255) NOT NULL,
  `pengarang` varchar(255) NOT NULL,
  `penerbit` varchar(255) NOT NULL,
  `tarif` int(255) NOT NULL,
  `durasi` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`kd_buku`, `nama_buku`, `pengarang`, `penerbit`, `tarif`, `durasi`) VALUES
('1qw22', 'pikaacu', 'yudhistira', 'yudhis', 2000, 7);

-- --------------------------------------------------------

--
-- Table structure for table `di_pinjam`
--

CREATE TABLE `di_pinjam` (
  `no_pinjam` char(222) NOT NULL,
  `kd_buku` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `di_pinjam`
--

INSERT INTO `di_pinjam` (`no_pinjam`, `kd_buku`) VALUES
('1', '1qw22'),
('1', '1qw22'),
('1', '1qw22'),
('1', '1qw22'),
('1', '1qw22'),
('1', '1qw22'),
('1', '1qw22'),
('1', '1qw22'),
('1', '1qw22'),
('1', '1qw22'),
('1', '1qw22'),
('1', '1qw22'),
('1', '1qw22');

-- --------------------------------------------------------

--
-- Table structure for table `peminjam`
--

CREATE TABLE `peminjam` (
  `no_pinjam` char(222) NOT NULL,
  `kd_anggota` char(255) NOT NULL,
  `kd_petugas` char(255) NOT NULL,
  `tgl_pinjam` date NOT NULL,
  `tgl_kembali` date NOT NULL,
  `kd_buku` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `petugas`
--

CREATE TABLE `petugas` (
  `kd_petugas` char(222) NOT NULL,
  `nama_petugas` varchar(255) NOT NULL,
  `jabatan` varchar(255) NOT NULL,
  `telepon` varchar(255) NOT NULL,
  `password` varchar(222) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `petugas`
--

INSERT INTO `petugas` (`kd_petugas`, `nama_petugas`, `jabatan`, `telepon`, `password`) VALUES
('a123', 'yuudhis', 'jl.kluwe', '098765435', '$2b$10$C5lG6D.zXC.4VtviDlJmXuArkbCLvzYpqXB/uqBhz6EuEdCOq29Q2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
