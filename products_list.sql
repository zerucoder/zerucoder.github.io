-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2017 at 04:16 AM
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
-- Table structure for table `products_list`
--

CREATE TABLE `products_list` (
  `id` int(11) NOT NULL,
  `product_name` varchar(60) NOT NULL,
  `product_desc` text NOT NULL,
  `product_code` varchar(60) NOT NULL,
  `product_image` varchar(60) NOT NULL,
  `product_price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products_list`
--

INSERT INTO `products_list` (`id`, `product_name`, `product_desc`, `product_code`, `product_image`, `product_price`) VALUES
(1, 'Chicken hawaii', 'pizza', 'P1', 'Chicken hawaii.jpg', '425.00'),
(2, 'Grand Italiano', 'pizza', 'P2', 'Grand Italiano.jpg', '390.00'),
(3, 'Hawaii Veg Pizza', 'pizza', 'P3', 'Hawaii Veg Pizza.jpg', '375.00'),
(4, 'Italiano Original', 'pizza', 'P4', 'Italiano Original.jpg', '399.00'),
(5, 'Pepperoni Calzone', 'pizza', 'P5', 'Pepperoni Calzone.jpg', '425.00'),
(6, 'Pepperoni Pizza', 'pizza', 'P6', 'Pepperoni Pizza.jpg', '375.00'),
(7, 'Primo Meat', 'pizza', 'P7', 'Primo Meat.jpg', '425.00'),
(8, 'Summer Pizza', 'pizza', 'P8', 'Summer Pizza.jpg', '395.00'),
(9, 'Supreme Pizza', 'pizza', 'P9', 'Supreme Pizza.jpg', '370.00'),
(10, 'Trio Cheese', 'pizza', 'P10', 'Trio Cheese.jpg', '360.00'),
(11, 'Vegge lover', 'pizza', 'P11', 'Vegge lover.jpg', '330.00'),
(12, 'Apricot-Chicken', 'pizza', 'P12', 'Apricot-Chicken.jpg', '455.00'),
(13, 'Bacon Burger', 'burger', 'B1', 'Bacon Burger.png', '125.00'),
(14, 'Cheese Butter', 'burger', 'B2', 'Cheese Butter.png', '99.00'),
(15, 'Chicken Burger', 'burger', 'B3', 'Chicken Burger.png', '140.00'),
(16, 'Country Burger', 'burger', 'B4', 'Country Burger.png', '130.00'),
(17, 'Double Beef Burger', 'burger', 'B5', 'Double Beef Burger.png', '125.00'),
(18, 'Double Cheese', 'burger', 'B6', 'Double Cheese.png', '120.00'),
(19, 'Mushroom Burger', 'burger', 'B7', 'Mushroom Burger.png', '125.00'),
(20, 'Original Burger', 'burger', 'B8', 'Original Burger.png', '125.00'),
(21, 'BBQ chicken breast', 'fries', 'F1', 'BBQ chicken breast.jpg', '140.00'),
(22, 'Bolognese Pasta', 'fries', 'F2', 'Bolognese Pasta.jpg', '100.00'),
(23, 'Molto Tagliatelle', 'fries', 'F3', 'Molto Tagliatelle.jpg', '125.00'),
(24, 'Pene Salmone', 'fries', 'F4', 'Pene Salmone.jpg', '120.00'),
(25, 'Penne Funghi Chicken', 'fries', 'F5', 'Penne Funghi Chicken.jpg', '160.00'),
(26, 'Spaghetti Bolognese', 'fries', 'F6', 'Spaghetti Bolognese.jpg', '140.00'),
(27, 'Tagliatelle Molto', 'fries', 'F7', 'Tagliatelle Molto.jpg', '110.00'),
(28, 'Blueberry Shake', 'drinks', 'D1', 'Blueberry Shake.jpg', '49.00'),
(29, 'Chocolate cake', 'drinks', 'D2', 'Chocolate cake.jpg', '180.00'),
(30, 'Chocolate Muffin', 'drinks', 'D3', 'Chocolate Muffin.jpg', '79.00'),
(31, 'Cola Bottle', 'drinks', 'D4', 'Cola Bottle.jpg', '39.00'),
(32, 'Fresh Lime', 'drinks', 'D5', 'Fresh Lime.jpg', '29.00'),
(33, 'Ice Lime Cola', 'drinks', 'D6', 'Ice Lime Cola.jpg', '49.00'),
(34, 'Iced Tea Bottle', 'drinks', 'D7', 'Iced Tea Bottle.jpg', '35.00'),
(35, 'Iced Tea', 'drinks', 'D8', 'Iced Tea.jpg', '29.00'),
(36, 'Kiwi Smoothie', 'drinks', 'D9', 'Kiwi Smoothie.jpg', '49.00'),
(37, 'Red Velvet Cake', 'drinks', 'D10', 'Red Velvet Cake.jpg', '210.00'),
(38, 'Stawberry Ice', 'drinks', 'D11', 'Stawberry Ice.jpg', '69.00'),
(39, 'Strawberry Tea', 'drinks', 'D12', 'Strawberry Tea.jpg', '69.00'),
(40, 'Trio Cafe', 'drinks', 'D13', 'Trio Cafe.jpg', '59.00'),
(41, 'Water Bottle', 'drinks', 'D14', 'Water Bottle.jpg', '20.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products_list`
--
ALTER TABLE `products_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products_list`
--
ALTER TABLE `products_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
