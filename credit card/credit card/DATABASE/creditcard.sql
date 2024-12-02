-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.0.67-community-nt - MySQL Community Edition (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for credit card fraud
CREATE DATABASE IF NOT EXISTS `credit card fraud` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `credit card fraud`;

-- Dumping structure for table credit card fraud.cartlist
CREATE TABLE IF NOT EXISTS `cartlist` (
  `id` int(11) NOT NULL auto_increment,
  `email` varchar(500) NOT NULL default '0',
  `pname` varchar(500) NOT NULL default '0',
  `price` varchar(500) NOT NULL default '0',
  `qty` varchar(500) NOT NULL default '0',
  `profile` varchar(500) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table credit card fraud.cartlist: ~0 rows (approximately)

-- Dumping structure for table credit card fraud.fraud
CREATE TABLE IF NOT EXISTS `fraud` (
  `id` int(11) NOT NULL auto_increment,
  `email` varchar(500) NOT NULL default '0',
  `pname` varchar(500) NOT NULL default '0',
  `price` varchar(500) NOT NULL default '0',
  `qty` varchar(500) NOT NULL default '0',
  `profile` varchar(500) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table credit card fraud.fraud: ~2 rows (approximately)
INSERT INTO `fraud` (`id`, `email`, `pname`, `price`, `qty`, `profile`) VALUES
	(9, 'wspace911@gmail.com', 'Bluetooth Headset', '500', '1', 'images.jpg'),
	(10, 'sharon@gmail.com', 'couple watch', '1000', '1', 'w1.jpg');

-- Dumping structure for table credit card fraud.product
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL auto_increment,
  `pname` varchar(500) NOT NULL default '0',
  `price` varchar(10000) NOT NULL default '0',
  `qty` varchar(500) NOT NULL default '0',
  `profile` varchar(2000) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

-- Dumping data for table credit card fraud.product: ~26 rows (approximately)
INSERT INTO `product` (`id`, `pname`, `price`, `qty`, `profile`) VALUES
	(8, 'Watch', '500', '50', 'sg.jpg'),
	(9, 'Android mobile', '12000', '89', 'phone1.jpg'),
	(10, 'couple watch', '1000', '20', 'w1.jpg'),
	(11, 'Tab', '15000', '20', 't1.jpg'),
	(12, 'LED TV', '20000', '12', 't11.jpg'),
	(13, 'Bluetooth Headset', '500', '22', 'images.jpg'),
	(14, 'Laptop', '18000', '20', 'll1.jpg'),
	(15, 'iRobot Robot Vacuum', '12000', '39', 'clean.jpg'),
	(16, 'Apple Beats Studio Buds', '2000', '32', 'air.jpg'),
	(17, 'Vivo v20 mobile 5g', '18000', '25', 'v2.jpg'),
	(18, 'HP gaming laptop', '20000', '33', 'game.jpg'),
	(19, 'Digital Alarm Clock', '1000', '5', 'dac.jpg'),
	(20, 'Panasonic Nanoe Hair Dryer', '3000', '2', 'download.jpg'),
	(21, 'Echo Dot Alexa', '4500', '10', 'echo.jpg'),
	(22, 'Smart Band Watch', '1000', '10', 'smb.jpg'),
	(23, 'Multi-function Color Printer', '8000', '21', 'pr.jpeg'),
	(24, 'Mini Tripod Mobile Holder', '1000', '12', 'tri.jpg'),
	(25, 'CASE mobile Cover for Mi Redmi 9', '200', '12', 'ca.jpeg'),
	(26, 'UV Protection Sunglasses', '500', '12', 'ey.jpeg'),
	(27, 'Keyboard and Mouse', '600', '14', 'km.jpg'),
	(28, ' Charger Bottle', '1200', '2', 'cb.JPG'),
	(29, ' Sony Boom Headset', '2500', '22', 'boom.jpg'),
	(30, 'Speaker', '900', '21', '1111.jpg'),
	(31, 'Thermosteel and Water Bottle', '1000', '21', 'mil.jpeg'),
	(32, 'Laptop', '15000', '12', 'game.jpg'),
	(33, 'Watch', '1000', '20', 'sg.jpg');

-- Dumping structure for table credit card fraud.purchase
CREATE TABLE IF NOT EXISTS `purchase` (
  `id` int(11) NOT NULL auto_increment,
  `email` varchar(500) NOT NULL default '0',
  `pname` varchar(500) NOT NULL default '0',
  `price` varchar(500) NOT NULL default '0',
  `qty` varchar(500) NOT NULL default '0',
  `profile` varchar(500) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table credit card fraud.purchase: ~2 rows (approximately)
INSERT INTO `purchase` (`id`, `email`, `pname`, `price`, `qty`, `profile`) VALUES
	(16, 'wspace911@gmail.com', 'Android mobile', '12000', '1', 'phone1.jpg'),
	(17, 'sharon@gmail.com', 'Bluetooth Headset', '500', '2', 'images.jpg');

-- Dumping structure for table credit card fraud.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL auto_increment,
  `fname` varchar(500) NOT NULL default '0',
  `lname` varchar(500) NOT NULL default '0',
  `email` varchar(500) NOT NULL default '0',
  `mno` varchar(500) NOT NULL default '0',
  `psw` varchar(500) NOT NULL default '0',
  `atm1` varchar(500) NOT NULL default '0',
  `atm2` varchar(500) NOT NULL default '0',
  `atm3` varchar(500) NOT NULL default '0',
  `atm4` varchar(500) NOT NULL default '0',
  `cvv` varchar(500) NOT NULL default '0',
  `stg1` varchar(500) NOT NULL default '0',
  `stg2` varchar(500) NOT NULL default '0',
  `stg3` varchar(500) NOT NULL default '0',
  `stg4` varchar(500) NOT NULL default '0',
  `otp` varchar(500) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Dumping data for table credit card fraud.user: ~2 rows (approximately)
INSERT INTO `user` (`id`, `fname`, `lname`, `email`, `mno`, `psw`, `atm1`, `atm2`, `atm3`, `atm4`, `cvv`, `stg1`, `stg2`, `stg3`, `stg4`, `otp`) VALUES
	(10, 'priyanka', 'S', 'wspace911@gmail.com', '7845784578', '1212', '1212', '1212', '1212', '1212', '123', '2', '8', '3', '9', '169313'),
	(11, 'sharon', 's', 'sharon@gmail.com', '8767565678', '1212', '1212', '1212', '1212', '1212', '123', '2', '8', '3', '9', '174143');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
user