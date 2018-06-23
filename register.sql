-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2017 at 08:17 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zeru`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `fname` varchar(20) NOT NULL,
  `lanme` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `country` varchar(20) NOT NULL,
  `addr` varchar(100) NOT NULL,
  `city` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  `pin` varchar(10) NOT NULL,
  `usr` varchar(20) NOT NULL,
  `psd` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`fname`, `lanme`, `email`, `phone`, `country`, `addr`, `city`, `state`, `pin`, `usr`, `psd`) VALUES
('Zerubbabel', 'E', 'zeruba250@gmail.com', '9884037717', 'USA', 'Alpha Omega Illam', 'Chennai', 'TamilNadu', '600024', '', ''),
('Zerubbabel', 'ZZ', 'ZZ', 'ZZ', 'Ind', 'ZZ', 'ZZ', 'ZZ', 'ZZ', '', ''),
('Zerubbabel', 'ZZ', 'ZZ', 'ZZ', 'Ind', 'ZZ', 'ZZ', 'ZZ', 'ZZ', '', ''),
('Zerubbabel', 'ZZ', 'ZZ', 'ZZ', 'Ind', 'ZZ', 'ZZ', 'ZZ', 'ZZ', '', ''),
('Zerubbabel', 'ZZ', 'ZZ', 'ZZ', 'Ind', 'ZZ', 'ZZ', 'ZZ', 'ZZ', '', ''),
('Zerubbabel', 'E', 'zeru@mail.com', '9884037717', 'Ind', 'Alpha Omega Illam', 'Chennai', 'TamilNadu', '600024', 'Zerux250', 'qwerty'),
('Zerubbabel', 'E', 'zeru@mail.com', '9884037717', 'Ind', 'Alpha Omega Illam', 'Chennai', 'TamilNadu', '600024', 'Zerux250', 'qwerty'),
('Zerubbabel', 'E', 'zeru@mail.com', '9884037717', 'Ind', 'Alpha Omega Illam', 'Chennai', 'TamilNadu', '600024', 'Zerux250', 'qwerty'),
('Zerubbabel', 'E', 'zeru@mail.com', '9884037717', 'Ind', 'Alpha Omega Illam', 'Chennai', 'TamilNadu', '600024', 'Zerux250', 'qwerty'),
('Zerubbabel', 'E', 'zeru@mail.com', '9884037717', 'Ind', 'Alpha Omega Illam', 'Chennai', 'TamilNadu', '600024', 'Zerux250', 'qwerty'),
('Zerubbabel', 'E', 'zeru@mail.com', '9884037717', 'Ind', 'Alpha Omega Illam', 'Chennai', 'TamilNadu', '600024', 'Zerux250', 'qwerty'),
('Zerubbabel', 'E', 'zeru@mail.com', '9884037717', 'Ind', 'Alpha Omega Illam', 'Chennai', 'TamilNadu', '600024', 'Zerux250', 'qwerty'),
('Dave', '167', 'zeru@mail.com', '9884037717', 'Ind', 'Alpha Omega Illam', 'Chennai', 'TamilNadu', '600024', 'X', 'X'),
('Zerubbabel', 'E', 'zeru@mail.com', '9884037717', 'Ind', 'Alpha Omega Illam', 'Chennai', 'TamilNadu', '600024', 'zeru', '123'),
('Dustin', 'McRyan', 'wherabout@mail.com', '798569851245', 'USA', 'Garden Road', 'New York', 'California', '123456', 'Dusty', 'danger'),
('Dave', '167', 'zeru@mail.com', '9884037717', 'Ind', 'Alpha Omega Illam', 'Chennai', 'TamilNadu', '600024', 'finalnd', 'food'),
('Dave', '167', 'zeru@mail.com', '9884037717', 'Ind', 'Alpha Omega Illam', 'Chennai', 'TamilNadu', '600024', 'caleb', 'food');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
