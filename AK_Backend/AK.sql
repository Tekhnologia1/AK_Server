CREATE DATABASE  IF NOT EXISTS `akgoldencrust` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `akgoldencrust`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: akgoldencrust
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_areas`
--

DROP TABLE IF EXISTS `tbl_areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_areas` (
  `areas_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cities_id` int NOT NULL,
  `area_details` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`areas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_areas`
--

LOCK TABLES `tbl_areas` WRITE;
/*!40000 ALTER TABLE `tbl_areas` DISABLE KEYS */;
INSERT INTO `tbl_areas` VALUES (1,'areaNwww',6,'areaDetails','2024-10-23 10:05:24',NULL,'2024-11-14 11:01:34',NULL),(10,'sds',7,'hg','2024-10-24 09:26:16',NULL,'2024-10-24 09:26:16',NULL),(11,'jlk',7,'l;k','2024-10-24 12:34:27',NULL,'2024-10-24 12:34:27',NULL),(12,'New Mumbai',4,'hgfgfg','2024-10-24 12:47:04',NULL,'2024-10-29 10:52:27',NULL),(22,'szxsaa',4,'xzc','2024-11-12 11:15:33',NULL,'2024-11-21 06:36:04',NULL);
/*!40000 ALTER TABLE `tbl_areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cafe_deal_details`
--

DROP TABLE IF EXISTS `tbl_cafe_deal_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cafe_deal_details` (
  `cafe_deal_details_id` int NOT NULL AUTO_INCREMENT,
  `cafe_id` int NOT NULL,
  `product_id` int NOT NULL,
  `deal_price` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cafe_deal_details_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cafe_deal_details`
--

LOCK TABLES `tbl_cafe_deal_details` WRITE;
/*!40000 ALTER TABLE `tbl_cafe_deal_details` DISABLE KEYS */;
INSERT INTO `tbl_cafe_deal_details` VALUES (9,4,19,102,'2024-10-28 13:07:33',NULL,'2024-11-13 07:25:28',NULL,NULL,NULL),(10,1,19,2002,'2024-10-28 13:10:52',NULL,'2024-10-28 13:10:52',NULL,NULL,NULL),(11,6,19,101,'2024-10-29 04:34:24',NULL,'2024-10-29 04:35:09',NULL,NULL,NULL),(12,4,26,100,'2024-10-29 12:57:38',NULL,'2024-10-29 12:57:38',NULL,NULL,NULL),(15,5,25,100,'2024-11-13 07:25:35',NULL,'2024-11-13 07:25:35',NULL,NULL,NULL),(16,37,27,3000,'2024-11-14 12:24:06',NULL,'2024-11-14 12:24:06',NULL,NULL,NULL),(17,37,26,200,'2024-11-15 05:41:31',NULL,'2024-11-15 05:41:42',NULL,NULL,NULL),(18,6,27,100,'2024-11-15 05:42:04',NULL,'2024-11-15 05:42:04',NULL,NULL,NULL),(21,7,26,2002,'2024-11-18 08:40:59',NULL,'2024-11-18 08:40:59',NULL,NULL,NULL),(23,7,25,2002,'2024-11-18 08:48:26',NULL,'2024-11-18 08:48:26',NULL,NULL,NULL),(25,33,19,1200,'2024-11-19 12:26:21',NULL,'2024-11-19 12:26:36',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tbl_cafe_deal_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cafe_deals`
--

DROP TABLE IF EXISTS `tbl_cafe_deals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cafe_deals` (
  `cafe_deals_id` int NOT NULL AUTO_INCREMENT,
  `cafe_id` int NOT NULL,
  `cafe_users_id` int NOT NULL,
  `employees_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cafe_deals_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cafe_deals`
--

LOCK TABLES `tbl_cafe_deals` WRITE;
/*!40000 ALTER TABLE `tbl_cafe_deals` DISABLE KEYS */;
INSERT INTO `tbl_cafe_deals` VALUES (1,2,2,3,'2024-10-24 07:17:32',NULL,'2024-10-24 09:50:31',NULL,NULL,NULL),(4,2,3,2,'2024-10-24 09:30:00',NULL,'2024-10-24 09:30:00',NULL,NULL,NULL),(5,2,1,3,'2024-10-24 09:30:27',NULL,'2024-10-24 09:30:27',NULL,NULL,NULL),(6,4,7,8,'2024-10-28 12:22:26',NULL,'2024-10-28 12:22:26',NULL,NULL,NULL),(7,4,7,6,'2024-10-28 12:25:31',NULL,'2024-10-28 12:25:31',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tbl_cafe_deals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cafe_invoice_details`
--

DROP TABLE IF EXISTS `tbl_cafe_invoice_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cafe_invoice_details` (
  `cafe_invoice_details_id` int NOT NULL AUTO_INCREMENT,
  `cafe_invoices_id` int NOT NULL,
  `cafe_id` int NOT NULL,
  `product_id` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `quantity` float NOT NULL,
  `rate` int NOT NULL,
  `sub_total_amount` varchar(255) NOT NULL,
  `received_quantity` int DEFAULT NULL,
  `approved_on` datetime DEFAULT NULL,
  `approved_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cafe_invoice_details_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cafe_invoice_details`
--

LOCK TABLES `tbl_cafe_invoice_details` WRITE;
/*!40000 ALTER TABLE `tbl_cafe_invoice_details` DISABLE KEYS */;
INSERT INTO `tbl_cafe_invoice_details` VALUES (1,11,29,33,'eeddddd',20,10,'200',10,NULL,NULL,'2024-11-19 13:22:20',NULL,'2024-11-21 07:49:39',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tbl_cafe_invoice_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cafe_invoices`
--

DROP TABLE IF EXISTS `tbl_cafe_invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cafe_invoices` (
  `cafe_invoices_id` int NOT NULL,
  `cafe_id` int NOT NULL,
  `cafe_order_id` int NOT NULL,
  `invoice_date` datetime NOT NULL,
  `total_amount` varchar(255) NOT NULL,
  `payment_id` int NOT NULL,
  `payment_date` datetime NOT NULL,
  `payment_status` tinyint NOT NULL,
  `note` datetime NOT NULL,
  `payment_term_id` int NOT NULL,
  `invoice_due_date` datetime NOT NULL,
  `approved_on` datetime NOT NULL,
  `approved_by` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cafe_invoices_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cafe_invoices`
--

LOCK TABLES `tbl_cafe_invoices` WRITE;
/*!40000 ALTER TABLE `tbl_cafe_invoices` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_cafe_invoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cafe_order`
--

DROP TABLE IF EXISTS `tbl_cafe_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cafe_order` (
  `cafe_order_id` int NOT NULL AUTO_INCREMENT,
  `cafe_id` int NOT NULL,
  `route_id` int NOT NULL,
  `order_number` varchar(255) NOT NULL,
  `order_date` datetime NOT NULL,
  `total_amount` float NOT NULL,
  `tax` float DEFAULT NULL,
  `delivery_charges` float DEFAULT '0',
  `payment_status` tinyint NOT NULL DEFAULT '0',
  `payment_term_id` int NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cafe_order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cafe_order`
--

LOCK TABLES `tbl_cafe_order` WRITE;
/*!40000 ALTER TABLE `tbl_cafe_order` DISABLE KEYS */;
INSERT INTO `tbl_cafe_order` VALUES (33,30,2,'ORD21','2024-11-13 00:00:00',250,25,15,1,2,NULL,'2024-11-14 07:26:51',NULL,'2024-11-21 06:34:08',NULL),(34,33,2,'ORD22','2024-11-13 00:00:00',20000,100,50,1,2,NULL,'2024-11-14 07:29:06',NULL,'2024-11-21 06:34:08',NULL),(35,30,23,'ORDER4','2024-11-13 00:00:00',10101,0,0,1,1,'rgf','2024-11-14 09:19:03',NULL,'2024-11-15 10:13:24',NULL),(36,33,2,'ORD23','2024-11-13 00:00:00',20000,100,50,1,2,NULL,'2024-11-14 10:39:50',NULL,'2024-11-21 06:34:08',NULL),(37,33,35,'ORDER37','2024-11-15 00:00:00',16000,0,0,0,1,'gddgsd','2024-11-15 06:26:50',NULL,'2024-11-21 06:34:08',NULL),(38,33,25,'ORD3333','2024-11-13 00:00:00',4200,0,0,1,1,NULL,'2024-11-15 10:11:39',NULL,'2024-11-15 10:13:24',NULL),(39,33,23,'ORDER6','2024-11-15 00:00:00',101,0,0,1,2,'NOJL','2024-11-15 12:28:02',NULL,'2024-11-21 06:34:08',NULL),(40,30,2,'ORDER6','2024-11-12 00:00:00',925,0,0,1,2,NULL,'2024-11-15 13:00:53',NULL,'2024-11-21 06:34:08',NULL),(41,30,2,'ORDER6','2024-11-12 00:00:00',1275,0,0,1,2,NULL,'2024-11-15 13:13:36',NULL,'2024-11-21 06:34:08',NULL),(42,33,28,'ORDER7','2024-11-18 00:00:00',4200,0,0,1,1,'note','2024-11-18 04:39:01',NULL,'2024-11-21 06:34:08',NULL),(43,33,28,'ORDER7','2024-11-18 00:00:00',40,0,0,1,2,'note','2024-11-18 04:42:21',NULL,'2024-11-21 06:34:08',NULL),(44,33,23,'ORDER6','2024-11-18 00:00:00',2000,0,0,1,2,'kjhscnknsdjkc','2024-11-18 05:53:41',NULL,'2024-11-21 06:34:08',NULL),(45,33,23,'ORDER6','2024-11-18 00:00:00',2000,0,0,1,2,'kjhscnknsdjkc','2024-11-18 05:54:14',NULL,'2024-11-21 06:34:08',NULL),(46,33,28,'ORDER7','2024-11-17 00:00:00',1,0,0,1,1,'wdssd','2024-11-18 05:55:19',NULL,'2024-11-21 06:34:08',NULL),(47,33,23,'ORDER6','2024-11-18 00:00:00',1,0,0,1,2,'ascmlkasnclk ascmsd','2024-11-18 06:15:42',NULL,'2024-11-21 06:34:08',NULL),(48,30,25,'ORDER30','2024-11-18 00:00:00',4000,0,0,0,2,'sacdhnkjabcksjd','2024-11-18 06:29:10',NULL,'2024-11-18 06:29:10',NULL),(49,33,28,'ORDER7','2024-11-18 00:00:00',6000,0,0,1,2,'skcnkjancjkdsa','2024-11-18 06:44:09',NULL,'2024-11-21 06:34:08',NULL),(50,33,23,'ORDER6','2024-11-18 00:00:00',2000,0,0,0,2,'jbjvjvhg','2024-11-18 07:08:48',NULL,'2024-11-21 06:34:08',NULL),(51,35,23,'ORDER35','2024-11-18 00:00:00',2000,0,0,0,2,'ojslkcnskchk','2024-11-18 07:18:55',NULL,'2024-11-18 07:18:55',NULL),(52,6,23,'ORDER6','2024-11-20 00:00:00',303,0,0,1,2,'NOJL','2024-11-18 10:57:31',NULL,'2024-11-18 10:57:31',NULL),(53,6,23,'ORDER6','2024-11-23 00:00:00',2000,0,0,1,2,'kjhscnknsdjkc','2024-11-18 11:23:24',NULL,'2024-11-18 11:23:24',NULL),(54,35,23,'ORDER35','2024-11-18 00:00:00',2201,0,0,0,2,'ojslkcnskchk','2024-11-18 11:43:51',NULL,'2024-11-18 11:43:51',NULL),(55,35,23,'ORDER35','2024-11-18 00:00:00',2030,0,0,0,2,'ojslkcnskchk','2024-11-18 11:44:27',NULL,'2024-11-18 11:44:27',NULL),(56,33,23,'ORDER6','2024-11-19 00:00:00',2000,0,0,1,1,'noha','2024-11-19 05:26:43',NULL,'2024-11-21 06:34:08',NULL),(57,33,25,'ORDER33','2024-11-19 00:00:00',4210,0,0,1,1,NULL,'2024-11-19 05:41:28',NULL,'2024-11-19 05:41:28',NULL),(58,33,23,'ORDER6','2024-11-19 00:00:00',40925,0,0,1,2,NULL,'2024-11-19 07:14:18',NULL,'2024-11-21 06:34:08',NULL),(59,33,23,'ORDER6','2024-11-19 00:00:00',101,0,0,1,1,'czx','2024-11-19 11:06:43',NULL,'2024-11-21 06:34:08',NULL),(60,33,23,'ORDER6','2024-11-19 00:00:00',925,0,0,1,1,NULL,'2024-11-19 11:15:36',NULL,'2024-11-21 06:34:08',NULL),(61,33,23,'ORDER6','2024-11-19 00:00:00',101,0,0,1,1,'NOJL','2024-11-19 11:21:15',NULL,'2024-11-21 06:34:08',NULL),(62,33,28,'ORDER7','2024-11-19 00:00:00',12001,0,0,1,2,'ioiu','2024-11-19 11:46:17',NULL,'2024-11-21 06:34:08',NULL),(63,30,25,'ORDER30','2024-11-21 00:00:00',3,0,0,1,1,'123456','2024-11-21 04:31:31',NULL,'2024-11-21 04:31:31',NULL);
/*!40000 ALTER TABLE `tbl_cafe_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cafe_order_deliveries`
--

DROP TABLE IF EXISTS `tbl_cafe_order_deliveries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cafe_order_deliveries` (
  `cafe_order_deliveries_id` int NOT NULL AUTO_INCREMENT,
  `cafe_id` int NOT NULL,
  `cafe_order_id` int NOT NULL,
  `cafe_invoice_id` int DEFAULT NULL,
  `delivery_vendor_id` int NOT NULL,
  `delivery_weight` float NOT NULL,
  `delivery_type` enum('Interstate','Outstate') NOT NULL DEFAULT 'Interstate',
  `delivery_charges` float NOT NULL,
  `delivery_packing_type` enum('Thermocol','Packet') NOT NULL DEFAULT 'Thermocol',
  `delivery_box_charges` float NOT NULL,
  `deliver_total_charges` float NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cafe_order_deliveries_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cafe_order_deliveries`
--

LOCK TABLES `tbl_cafe_order_deliveries` WRITE;
/*!40000 ALTER TABLE `tbl_cafe_order_deliveries` DISABLE KEYS */;
INSERT INTO `tbl_cafe_order_deliveries` VALUES (1,1,2,2,1,10.4,'Interstate',2000,'Thermocol',100,50,'vvf'),(2,1,38,2,1,10.4,'Interstate',2000,'Thermocol',100,50,'ffff'),(3,1,38,2,1,10.4,'Interstate',2000,'Thermocol',100,50,'ffff'),(4,1,38,2,1,10.4,'Interstate',4000,'Thermocol',100,50,'eeeee'),(5,1,38,2,1,10.4,'Interstate',1400,'Thermocol',100,50,'wfjwkefje');
/*!40000 ALTER TABLE `tbl_cafe_order_deliveries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cafe_order_details`
--

DROP TABLE IF EXISTS `tbl_cafe_order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cafe_order_details` (
  `cafe_order_details_id` int NOT NULL AUTO_INCREMENT,
  `cafe_order_id` int NOT NULL,
  `cafe_id` int NOT NULL,
  `product_id` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `rate` float DEFAULT NULL,
  `sub_total_amount` float NOT NULL,
  `approved_on` datetime DEFAULT NULL,
  `approved_by` int DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cafe_order_details_id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cafe_order_details`
--

LOCK TABLES `tbl_cafe_order_details` WRITE;
/*!40000 ALTER TABLE `tbl_cafe_order_details` DISABLE KEYS */;
INSERT INTO `tbl_cafe_order_details` VALUES (33,33,1,19,'Coffee - Large',5,50,2500,NULL,NULL,'2024-11-14 12:56:51',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(34,33,1,25,'Croissant - Butter',3,200,600,NULL,NULL,'2024-11-14 12:56:51',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(35,33,1,26,'Smoothie - Mango',1,75,75,NULL,NULL,'2024-11-14 12:56:51',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(36,34,1,27,'Coffee',5,50,2500,NULL,NULL,'2024-11-14 12:59:06',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(37,34,1,25,'Croissant',3,200,600,NULL,NULL,'2024-11-14 12:59:06',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(38,34,1,25,'Smoothie',1,75,75,NULL,NULL,'2024-11-14 12:59:06',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(39,35,4,26,'asdadsddfs',1,101,101,NULL,NULL,'2024-11-14 14:49:03',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(40,35,4,27,'eeeee',1,10000,10000,NULL,NULL,'2024-11-14 14:49:03',NULL,'2024-11-14 14:49:03',NULL,NULL,NULL),(41,36,1,26,'xxx',5,50,2500,NULL,NULL,'2024-11-14 16:09:50',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(42,36,1,27,'yyy',3,200,600,NULL,NULL,'2024-11-14 16:09:50',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(43,36,1,19,'zzz',1,75,75,NULL,NULL,'2024-11-14 16:09:50',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(44,37,37,26,'asdsdfghhg',3,2000,6000,NULL,NULL,'2024-11-15 11:56:50',NULL,'2024-11-15 11:56:50',NULL,NULL,NULL),(45,37,37,27,'eeeee',1,10000,10000,NULL,NULL,'2024-11-15 11:56:50',NULL,'2024-11-15 11:56:50',NULL,NULL,NULL),(46,38,5,26,'asdsdfghhg',2,2000,4000,NULL,NULL,'2024-11-15 15:41:39',NULL,'2024-11-15 15:41:39',NULL,NULL,NULL),(47,38,5,40,'hkhdabs hksjhbasjkb',2,100,200,NULL,NULL,'2024-11-15 15:41:39',NULL,'2024-11-15 15:41:39',NULL,NULL,NULL),(48,39,6,25,'asdadsddfs',1,101,101,NULL,NULL,'2024-11-15 17:58:02',NULL,'2024-11-15 17:58:02',NULL,NULL,NULL),(49,40,6,25,'zzz',1,75,75,NULL,NULL,'2024-11-15 18:30:53',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(50,40,6,25,'yyy',3,200,600,NULL,NULL,'2024-11-15 18:30:53',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(51,40,6,25,'xxx',5,50,2500,NULL,NULL,'2024-11-15 18:30:53',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(52,41,6,25,'zzz',3,75,225,NULL,NULL,'2024-11-15 18:43:36',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(53,41,6,25,'yyy',4,200,800,NULL,NULL,'2024-11-15 18:43:36',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(54,41,6,25,'xxx',5,50,2500,NULL,NULL,'2024-11-15 18:43:36',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(55,42,7,25,'asdsdfghhg',2,2000,4000,NULL,NULL,'2024-11-18 10:09:01',NULL,'2024-11-18 16:18:10',NULL,NULL,NULL),(56,42,7,40,'hkhdabs hksjhbasjkb',2,100,200,NULL,NULL,'2024-11-18 10:09:01',NULL,'2024-11-18 10:09:01',NULL,NULL,NULL),(57,43,7,41,'asdadsddfs',4,10,40,NULL,NULL,'2024-11-18 10:12:21',NULL,'2024-11-18 10:12:21',NULL,NULL,NULL),(58,44,6,26,'asdsdfghhg',1,2000,2000,NULL,NULL,'2024-11-18 11:23:41',NULL,'2024-11-18 11:23:41',NULL,NULL,NULL),(59,45,6,26,'asdsdfghhg',1,2000,2000,NULL,NULL,'2024-11-18 11:24:14',NULL,'2024-11-18 11:24:14',NULL,NULL,NULL),(60,46,7,19,'hdsjshd',1,1,1,NULL,NULL,'2024-11-18 11:25:19',NULL,'2024-11-18 11:25:19',NULL,NULL,NULL),(61,47,6,43,'ddddd',1,1,1,NULL,NULL,'2024-11-18 11:45:42',NULL,'2024-11-18 11:45:42',NULL,NULL,NULL),(62,48,30,26,'asdsdfghhg',2,2000,4000,NULL,NULL,'2024-11-18 11:59:10',NULL,'2024-11-18 11:59:10',NULL,NULL,NULL),(63,49,7,26,'asdsdfghhg',3,2000,6000,NULL,NULL,'2024-11-18 12:14:09',NULL,'2024-11-18 12:14:09',NULL,NULL,NULL),(64,50,6,26,'asdsdfghhg',1,2000,2000,NULL,NULL,'2024-11-18 12:38:48',NULL,'2024-11-18 12:38:48',NULL,NULL,NULL),(65,51,35,26,'asdsdfghhg',1,2000,2000,NULL,NULL,'2024-11-18 12:48:55',NULL,'2024-11-18 12:48:55',NULL,NULL,NULL),(66,52,6,25,'asdadsddfs',3,101,303,NULL,NULL,'2024-11-18 16:27:31',NULL,'2024-11-18 16:27:31',NULL,NULL,NULL),(67,53,6,26,'asdsdfghhg',1,2000,2000,NULL,NULL,'2024-11-18 16:53:24',NULL,'2024-11-18 16:53:24',NULL,NULL,NULL),(68,54,35,26,'asdsdfghhg',1,2000,2000,NULL,NULL,'2024-11-18 17:13:51',NULL,'2024-11-18 17:13:51',NULL,NULL,NULL),(69,54,35,25,'asdadsddfs',1,101,101,NULL,NULL,'2024-11-18 17:13:51',NULL,'2024-11-18 17:13:51',NULL,NULL,NULL),(70,54,35,40,'hkhdabs hksjhbasjkb',1,100,100,NULL,NULL,'2024-11-18 17:13:51',NULL,'2024-11-18 17:13:51',NULL,NULL,NULL),(71,55,35,26,'asdsdfghhg',1,2000,2000,NULL,NULL,'2024-11-18 17:14:27',NULL,'2024-11-18 17:14:27',NULL,NULL,NULL),(72,55,35,41,'asdadsddfs',3,10,30,NULL,NULL,'2024-11-18 17:14:27',NULL,'2024-11-18 17:14:27',NULL,NULL,NULL),(73,56,6,26,'asdsdfghhg',1,2000,2000,NULL,NULL,'2024-11-19 10:56:43',NULL,'2024-11-19 10:56:43',NULL,NULL,NULL),(74,57,33,40,'hkhdabs hksjhbasjkb',2,100,200,NULL,NULL,'2024-11-19 11:11:28',NULL,'2024-11-19 11:11:28',NULL,NULL,NULL),(75,57,33,26,'asdsdfghhg',2,2000,4000,NULL,NULL,'2024-11-19 11:11:28',NULL,'2024-11-19 11:11:28',NULL,NULL,NULL),(76,57,33,41,'asdadsddfs',1,10,10,NULL,NULL,'2024-11-19 11:11:28',NULL,'2024-11-19 11:11:28',NULL,NULL,NULL),(77,58,6,25,'Croissant - Butter',3,200,600,NULL,NULL,'2024-11-19 12:44:18',NULL,'2024-11-19 12:44:18',NULL,NULL,NULL),(78,58,6,26,'Smoothie - Mango',1,75,75,NULL,NULL,'2024-11-19 12:44:18',NULL,'2024-11-19 12:44:18',NULL,NULL,NULL),(79,58,6,19,'Coffee - Large',5,50,2500,NULL,NULL,'2024-11-19 12:44:18',NULL,'2024-11-19 12:44:18',NULL,NULL,NULL),(80,58,6,27,'eeeee',4,10000,40000,NULL,NULL,'2024-11-19 12:44:18',NULL,'2024-11-19 12:44:18',NULL,NULL,NULL),(81,59,6,25,'asdadsddfs',1,101,101,NULL,NULL,'2024-11-19 16:36:43',NULL,'2024-11-19 16:36:43',NULL,NULL,NULL),(82,60,6,25,'zzz',1,75,75,NULL,NULL,'2024-11-19 16:45:36',NULL,'2024-11-19 16:45:36',NULL,NULL,NULL),(83,60,6,25,'yyy',3,200,600,NULL,NULL,'2024-11-19 16:45:36',NULL,'2024-11-19 16:45:36',NULL,NULL,NULL),(84,60,6,25,'xxx',5,50,2500,NULL,NULL,'2024-11-19 16:45:36',NULL,'2024-11-19 16:45:36',NULL,NULL,NULL),(85,61,6,25,'asdadsddfs',1,101,101,NULL,NULL,'2024-11-19 16:51:15',NULL,'2024-11-19 16:51:15',NULL,NULL,NULL),(86,62,7,26,'asdsdfghhg',1,2000,2000,NULL,NULL,'2024-11-19 17:16:17',NULL,'2024-11-19 17:16:17',NULL,NULL,NULL),(87,62,7,27,'eeeee',1,10000,10000,NULL,NULL,'2024-11-19 17:16:17',NULL,'2024-11-19 17:16:17',NULL,NULL,NULL),(88,62,7,43,'ddddd',1,1,1,NULL,NULL,'2024-11-19 17:16:17',NULL,'2024-11-19 17:16:17',NULL,NULL,NULL),(89,63,30,19,'hdsjshd',1,3,3,NULL,NULL,'2024-11-21 10:01:31',NULL,'2024-11-21 10:01:31',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tbl_cafe_order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cafe_payments`
--

DROP TABLE IF EXISTS `tbl_cafe_payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cafe_payments` (
  `cafe_payments_id` int NOT NULL AUTO_INCREMENT,
  `cafe_id` int NOT NULL,
  `cafe_order_id` int NOT NULL,
  `cafe_invoice_id` int NOT NULL,
  `amount` varchar(255) NOT NULL,
  `payment_date` datetime NOT NULL,
  `payment_status` tinyint NOT NULL,
  `note` varchar(255) NOT NULL,
  `discount` float DEFAULT NULL,
  `approved_on` datetime DEFAULT NULL,
  `approved_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cafe_payments_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cafe_payments`
--

LOCK TABLES `tbl_cafe_payments` WRITE;
/*!40000 ALTER TABLE `tbl_cafe_payments` DISABLE KEYS */;
INSERT INTO `tbl_cafe_payments` VALUES (1,12,1,1,'1000','2024-11-11 00:00:00',0,'djfdjfd',2,NULL,NULL,'2024-11-19 09:18:38',NULL,'2024-11-19 09:18:38',NULL,NULL,NULL),(3,2,32223,2222,'2000','2024-11-10 00:00:00',0,'fff',2,NULL,NULL,'2024-11-19 10:51:59',NULL,'2024-11-19 11:35:18',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tbl_cafe_payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cafe_users`
--

DROP TABLE IF EXISTS `tbl_cafe_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cafe_users` (
  `cafe_users_id` int NOT NULL AUTO_INCREMENT,
  `cafe_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type_id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `cell_number` varchar(255) NOT NULL,
  `status` enum('Active','Inactive') DEFAULT 'Active',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cafe_users_id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cafe_users`
--

LOCK TABLES `tbl_cafe_users` WRITE;
/*!40000 ALTER TABLE `tbl_cafe_users` DISABLE KEYS */;
INSERT INTO `tbl_cafe_users` VALUES (7,35,'fg','gh','de',1,'heda@gmail.com','7504330304',NULL,'2024-10-26 06:11:20',NULL,'2024-11-14 12:05:44',NULL),(15,35,'51wd','sd','12354665564',1,'heda@gmail.com','7504330303',NULL,'2024-10-28 13:17:47',NULL,'2024-11-14 12:05:44',NULL),(16,33,'sadasf','bvbbvb','123111df',2,'bjhb@gmail.com','9827276360',NULL,'2024-10-29 04:33:56',NULL,'2024-11-14 12:05:44',NULL),(17,35,'Shivray cafe','Shivray@123','$2b$10$Rvr1oZzTfOYiv//5ZrrNyOBY1kHF610BxsWRRj.hweIauYHXFH4m6',2,'shivray@gmail.com','8899888989',NULL,'2024-11-08 07:20:39',NULL,'2024-11-14 12:05:44',NULL),(18,33,'shivaji na','sadcxvvcx','$2b$10$wcBEswHANpPQP0t19erfDO/Rm5JCF3o3J02jtkfZ7k.HXL5f/DNA2',2,'bjhb@gmail.com','9827276364',NULL,'2024-11-13 08:28:35',NULL,'2024-11-14 12:05:44',NULL),(30,30,'Shruti Kalbhor','Shruti','$2b$10$hgXtOW/.SERdcd3RQ9UhHuNnl1ZfvkxWt5PynSVfYia80Fe3vRW3a',2,'admin@gmail.com','7894561230',NULL,'2024-11-19 12:24:07',NULL,'2024-11-19 12:24:07',NULL);
/*!40000 ALTER TABLE `tbl_cafe_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cafes`
--

DROP TABLE IF EXISTS `tbl_cafes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cafes` (
  `cafe_id` int NOT NULL AUTO_INCREMENT,
  `franchise_id` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `area` int NOT NULL,
  `routes_id` int NOT NULL,
  `cities_id` int NOT NULL,
  `special_deal` tinyint NOT NULL DEFAULT '0',
  `payment_terms_id` int NOT NULL,
  `contact_person` varchar(225) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `tbl_cafescol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`cafe_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cafes`
--

LOCK TABLES `tbl_cafes` WRITE;
/*!40000 ALTER TABLE `tbl_cafes` DISABLE KEYS */;
INSERT INTO `tbl_cafes` VALUES (30,2,'qqqereeeertd','asdadddsdsasdd',10,25,7,1,1,'7845123265','2024-11-14 15:03:05',NULL,'2024-11-21 11:42:20',NULL,NULL),(33,1,'dddddd','punetfgksdfghwerj',10,25,6,0,1,'7845129865','2024-11-14 17:27:01',NULL,'2024-11-21 11:42:20',NULL,NULL),(37,1,'My Cafe','Dont Delete',1,35,1,1,1,'Vishal','2024-11-14 17:42:04',NULL,'2024-11-21 11:42:20',NULL,NULL);
/*!40000 ALTER TABLE `tbl_cafes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_cities`
--

DROP TABLE IF EXISTS `tbl_cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_cities` (
  `cities_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`cities_id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_cities`
--

LOCK TABLES `tbl_cities` WRITE;
/*!40000 ALTER TABLE `tbl_cities` DISABLE KEYS */;
INSERT INTO `tbl_cities` VALUES (7,'Delhi'),(6,'mubai'),(4,'Mumbai'),(1,'Pune');
/*!40000 ALTER TABLE `tbl_cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_delivery_vendors`
--

DROP TABLE IF EXISTS `tbl_delivery_vendors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_delivery_vendors` (
  `delivery_vendors_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `interstate_charges` int NOT NULL,
  `outstate_charges` int NOT NULL,
  `Office_location` varchar(255) NOT NULL,
  `contact_person` varchar(255) NOT NULL,
  `contact_phone` bigint NOT NULL,
  `Owner_name` varchar(255) NOT NULL,
  `Owner_phone` bigint NOT NULL,
  PRIMARY KEY (`delivery_vendors_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_delivery_vendors`
--

LOCK TABLES `tbl_delivery_vendors` WRITE;
/*!40000 ALTER TABLE `tbl_delivery_vendors` DISABLE KEYS */;
INSERT INTO `tbl_delivery_vendors` VALUES (1,'Raj',' pune',100,200,' Pune 42','Rushi Raut',7822787878,'Jadhav',9898989898),(2,'rrrrrrrrr','pune',100,500,'punebbsds','vishal',8494898343,'Vvvvvv',9982989989);
/*!40000 ALTER TABLE `tbl_delivery_vendors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_employee_type`
--

DROP TABLE IF EXISTS `tbl_employee_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_employee_type` (
  `employee_type_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `details` varchar(255) NOT NULL,
  `super_user` tinyint NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`employee_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_employee_type`
--

LOCK TABLES `tbl_employee_type` WRITE;
/*!40000 ALTER TABLE `tbl_employee_type` DISABLE KEYS */;
INSERT INTO `tbl_employee_type` VALUES (1,'Admin','this is main person',1,'2024-10-03 12:55:29','12','2024-10-09 06:05:53','vishal'),(2,'Super Admin','user ',1,'2024-10-04 05:16:52','12','2024-10-09 06:11:09',NULL);
/*!40000 ALTER TABLE `tbl_employee_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_employees`
--

DROP TABLE IF EXISTS `tbl_employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_employees` (
  `employees_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `employee_type_id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `cell_number` bigint NOT NULL,
  `salary` int DEFAULT NULL,
  `enrollment_datetime` datetime DEFAULT NULL,
  `increament_datetime` datetime DEFAULT NULL,
  `increament_amount` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`employees_id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_employees`
--

LOCK TABLES `tbl_employees` WRITE;
/*!40000 ALTER TABLE `tbl_employees` DISABLE KEYS */;
INSERT INTO `tbl_employees` VALUES (39,'Raaj','raaj@123','$2b$08$drNQx8Dxq2BL0l9D8QEUFeCUY0nM9WjoF4Oc/5ZV1MP5.AfVMVAKy',2,'raaj@gmail.com',8493438489,NULL,NULL,NULL,NULL,'2024-11-08 09:50:12',NULL,'2024-11-08 09:50:12',NULL),(41,'New User','User@123','$2b$08$qZS44ozOggc6H.7M2A75BO0DegSeDXVZOhHMvSkqdmUiqmoh4AxLO',1,'user@gmail.com',1234567890,NULL,NULL,NULL,NULL,'2024-11-08 10:20:29',NULL,'2024-11-08 10:20:29',NULL),(62,'vijay','vijay123','$2b$08$Owug9zFZHYdhRlpntLhcu.OO.wkaqnjMh8JD.lhL7MX/DTbiGrdx6',1,'vinod@123gmail.com',7823874837,30000,'2023-01-30 00:00:00','2023-12-30 00:00:00',1000,'2024-11-15 05:02:01',NULL,'2024-11-15 05:02:01',NULL),(63,'New User','User@1','$2b$08$y7Yz9PSkb06C8OCk3747UeOh1xpwNykwA6qX7ZjferzPAm8Ah4RkK',1,'user@gmail.com',1234567890,10000,'2024-11-14 00:00:00','2024-11-19 00:00:00',1000,'2024-11-15 05:28:27',NULL,'2024-11-15 06:21:39','ssa'),(64,'chaitanya','aaaasdfff','$2b$08$BdzwDPmAxmVOb7uYaNROxeEskwrFdDYyXuhlpZ9nCiwzmV.lBAh8m',1,'heda@gmail.com',7504330304,45,'2024-11-15 00:00:00','2024-11-15 00:00:00',100,'2024-11-15 05:40:00','vvv','2024-11-19 07:44:26','ssa'),(65,'Vaishnavi','vaishnavi123','$2b$08$jED8XwtnBF4MLBANcSGNN.LKofszatnu9uGohPqyI2tW2.Ey10eoq',2,'vaishnavi@gmail.com',1234567890,200000,'2024-11-19 00:00:00','2024-11-29 00:00:00',200000,'2024-11-19 12:28:39','vvv','2024-11-19 12:29:16','ssa'),(66,'Vaishnavi SHarma','vaish123','$2b$08$YICry9YcTQHZAoOMCicnGOeWfGNdmT4lhKZFDITJRfU.fQOkBRoSu',2,'vaish@gmail.com',7894561230,2,'2024-11-19 00:00:00','2024-11-19 00:00:00',1,'2024-11-19 12:30:34','vvv','2024-11-19 12:30:34',NULL);
/*!40000 ALTER TABLE `tbl_employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_filling_types`
--

DROP TABLE IF EXISTS `tbl_filling_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_filling_types` (
  `filling_types_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`filling_types_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_filling_types`
--

LOCK TABLES `tbl_filling_types` WRITE;
/*!40000 ALTER TABLE `tbl_filling_types` DISABLE KEYS */;
INSERT INTO `tbl_filling_types` VALUES (1,'chocalate','cjwds'),(2,' Cheese','dddd');
/*!40000 ALTER TABLE `tbl_filling_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_franchises`
--

DROP TABLE IF EXISTS `tbl_franchises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_franchises` (
  `franchise_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `origin_city` varchar(45) DEFAULT NULL,
  `owner_name` varchar(50) DEFAULT NULL,
  `owner_contact` bigint NOT NULL,
  `owner_add` varchar(405) NOT NULL,
  `location` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`franchise_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_franchises`
--

LOCK TABLES `tbl_franchises` WRITE;
/*!40000 ALTER TABLE `tbl_franchises` DISABLE KEYS */;
INSERT INTO `tbl_franchises` VALUES (1,'ROHIT Cafes','pune','dhjsd',7873827322,'hjwejhw','hjewhw','2024-10-24 11:03:59',NULL,'2024-10-24 11:03:59',NULL),(2,'yduw','hwhwq','hjew',7426277277,'bdsjd','hdjsd','2024-10-24 11:42:44',NULL,'2024-10-24 11:42:44',NULL),(3,'hhhh','ddhhh','hdddhdjew',7875477874,'bdsjd','hdjsd','2024-10-24 11:44:26',NULL,'2024-10-24 11:44:26',NULL);
/*!40000 ALTER TABLE `tbl_franchises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_modules`
--

DROP TABLE IF EXISTS `tbl_modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_modules` (
  `module_id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `details` varchar(45) NOT NULL,
  `is_action` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`module_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_modules`
--

LOCK TABLES `tbl_modules` WRITE;
/*!40000 ALTER TABLE `tbl_modules` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_payment_terms`
--

DROP TABLE IF EXISTS `tbl_payment_terms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_payment_terms` (
  `payment_terms_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `days` int NOT NULL,
  PRIMARY KEY (`payment_terms_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_payment_terms`
--

LOCK TABLES `tbl_payment_terms` WRITE;
/*!40000 ALTER TABLE `tbl_payment_terms` DISABLE KEYS */;
INSERT INTO `tbl_payment_terms` VALUES (1,'Daily',1),(2,'Weekly',7),(3,'Monthly',30);
/*!40000 ALTER TABLE `tbl_payment_terms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_product_master`
--

DROP TABLE IF EXISTS `tbl_product_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_product_master` (
  `pro_mast_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `details` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`pro_mast_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_product_master`
--

LOCK TABLES `tbl_product_master` WRITE;
/*!40000 ALTER TABLE `tbl_product_master` DISABLE KEYS */;
INSERT INTO `tbl_product_master` VALUES (1,'cheez','hhhhh','2024-12-21 00:00:00',12,'2024-10-22 15:31:07',NULL);
/*!40000 ALTER TABLE `tbl_product_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_products`
--

DROP TABLE IF EXISTS `tbl_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `pro_mast_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `details` varchar(255) NOT NULL,
  `product_weight` int NOT NULL,
  `product_filling` tinyint NOT NULL DEFAULT '0',
  `filling_types_id` int DEFAULT NULL,
  `base_price` int DEFAULT NULL,
  `making_price` int DEFAULT NULL,
  `price_scale` enum('Per kg','Per Item') DEFAULT 'Per kg',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_products`
--

LOCK TABLES `tbl_products` WRITE;
/*!40000 ALTER TABLE `tbl_products` DISABLE KEYS */;
INSERT INTO `tbl_products` VALUES (19,1,'hhhh','hdsjshd',12,1,1,3,3,'Per kg','2024-10-28 18:25:56',NULL,'2024-11-19 17:21:29',NULL),(25,1,'sadasf','asdadsddfs',100,1,1,100,101,'Per Item','2024-10-29 10:13:40',NULL,'2024-10-29 10:57:51',NULL),(26,1,'new product','asdsdfghhg',100,1,1,200,2000,'Per Item','2024-10-29 10:55:16',NULL,'2024-10-29 16:21:01',NULL),(27,1,'Cake','eeeee',11,1,1,1,10000,'Per kg','2024-10-29 11:10:24',NULL,'2024-10-29 11:10:24',NULL),(28,1,'Chocolate Cake','eeeee',11,1,1,1,10000,'Per kg','2024-10-29 11:10:31',NULL,'2024-10-29 16:21:26',NULL),(40,1,'product testing','hkhdabs hksjhbasjkb',200,1,NULL,100,100,'Per Item','2024-10-29 17:46:13',NULL,'2024-10-29 18:23:09',NULL),(41,1,'RRR','asdadsddfs',10,1,NULL,100,10,'Per Item','2024-11-12 17:28:11',NULL,'2024-11-12 17:28:11',NULL),(43,1,'ffffff','ddddd',13,1,NULL,1,1,'Per kg','2024-11-14 18:11:42',NULL,'2024-11-14 18:11:42',NULL);
/*!40000 ALTER TABLE `tbl_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_routes`
--

DROP TABLE IF EXISTS `tbl_routes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_routes` (
  `routes_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(225) NOT NULL,
  `route_details` varchar(225) NOT NULL,
  `route_start_point` varchar(255) NOT NULL,
  `route_end_point` varchar(255) NOT NULL,
  `cities_id` int NOT NULL,
  `areas_id` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`routes_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_routes`
--

LOCK TABLES `tbl_routes` WRITE;
/*!40000 ALTER TABLE `tbl_routes` DISABLE KEYS */;
INSERT INTO `tbl_routes` VALUES (23,'sadasf','wssaddsadddssds','asdd','1',1,'[1,11]','2024-10-29 13:09:51','2024-10-29 13:09:51',NULL,NULL),(25,'sadasf','wsfghghffgh','ljk','10',6,'[1,11]','2024-10-29 13:12:26','2024-10-29 13:12:26',NULL,NULL),(28,'eeeee','ddd','ssss','eeee',1,'[1,10]','2024-10-29 16:02:39','2024-10-29 17:07:58',NULL,NULL),(29,'sadasf','hdbvhdjgdxbv','xvcvc','11',4,'[10,11]','2024-10-29 16:12:57','2024-10-29 16:12:57',NULL,NULL),(33,'new','dfsdfdfdgvcv fdxx','xczcz','11',6,'[20,1]','2024-10-29 17:12:47','2024-10-29 17:42:27',NULL,NULL),(34,'route 1','zdfsdvsdfd efsdf','dvgdfg','10',6,'[11]','2024-10-29 17:15:03','2024-10-29 17:15:03',NULL,NULL),(37,'dssddssd','punesdadssdsdasd','Pune','1',1,'[1,10]','2024-11-18 12:57:44','2024-11-19 17:31:03',NULL,NULL);
/*!40000 ALTER TABLE `tbl_routes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user_employee_permissions`
--

DROP TABLE IF EXISTS `tbl_user_employee_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user_employee_permissions` (
  `user_employee_permissions_id` int NOT NULL,
  `module_id` int NOT NULL,
  `cafe_user_id` int NOT NULL,
  `employee_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_employee_permissions_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user_employee_permissions`
--

LOCK TABLES `tbl_user_employee_permissions` WRITE;
/*!40000 ALTER TABLE `tbl_user_employee_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_user_employee_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_user_types`
--

DROP TABLE IF EXISTS `tbl_user_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_user_types` (
  `user_type_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `details` varchar(225) NOT NULL,
  `super_user` tinyint DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_user_types`
--

LOCK TABLES `tbl_user_types` WRITE;
/*!40000 ALTER TABLE `tbl_user_types` DISABLE KEYS */;
INSERT INTO `tbl_user_types` VALUES (1,'Super Admin','jjjjjdjdjd',1,'2024-10-25 10:19:10',NULL,'2024-11-08 14:54:29',NULL),(2,'Admin','jjjjjdjdjd',0,'2024-10-25 10:20:14',NULL,'2024-11-08 14:55:16',NULL),(4,'Chef','Cook',0,'2024-11-08 14:56:56',NULL,'2024-11-08 14:56:56',NULL),(5,'Driver','For order Delevery purpose',0,'2024-11-08 14:58:19',NULL,'2024-11-08 14:58:19',NULL);
/*!40000 ALTER TABLE `tbl_user_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'akgoldencrust'
--
/*!50003 DROP PROCEDURE IF EXISTS `cities` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `cities`(
    IN city_name VARCHAR(255)
)
BEGIN
    DECLARE cityExists INT;

    -- Check if the city name already exists
    SELECT COUNT(*)
    INTO cityExists
    FROM tbl_cities
    WHERE name = city_name;

    IF cityExists > 0 THEN
        -- Raise an error if the city already exists
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: City name already exists.';
    ELSE
        -- Insert the new city
        INSERT INTO tbl_cities(name) 
        VALUES(city_name);
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateAreas` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateAreas`(
    IN areas_name VARCHAR(255),
    IN areas_cities_id INT,
    IN areas_area_details VARCHAR(255)
)
BEGIN
    INSERT INTO tbl_areas(name, cities_id, area_details) 
    VALUES(areas_name, areas_cities_id, areas_area_details);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateCafe` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateCafe`(
IN c_franchise_id int,
IN c_name varchar(255),
IN c_address varchar(255),
IN c_area int,
IN c_route_id int,
IN c_cities_id int,
IN c_special_deal boolean,
IN c_payment_term_id int,
IN c_contact_person varchar(255)
)
BEGIN
	insert into tbl_cafes(franchise_id, name, address, area, routes_id, cities_id, special_deal, payment_terms_id, contact_person)
    values(c_franchise_id, c_name, c_address, c_area, c_route_id, c_cities_id, c_special_deal, c_payment_term_id, c_contact_person);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateCafeDeals` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateCafeDeals`(
IN c_cafe_id int,
IN c_cafe_user_id  int,
IN c_employee_id  int
)
BEGIN
	insert into tbl_cafe_deals(cafe_id, cafe_users_id, employees_id)
    values(c_cafe_id, c_cafe_user_id, c_employee_id);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateCafeDealsDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateCafeDealsDetails`(
IN c_d_d_cafe_id int,
IN c_d_d_product_id int,
IN c_d_d_deal_price  int
)
BEGIN
	insert into tbl_cafe_deal_details(cafe_id, product_id, deal_price)
    values(c_d_d_cafe_id, c_d_d_product_id, c_d_d_deal_price);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateCafeOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateCafeOrder`(
IN cafe_id int,
IN route_id int,
IN order_number varchar(255),
IN order_date datetime,
IN total_amount float,
IN tax float,
IN delivery_charges float,
IN payment_status boolean,
IN payment_term_id int,
IN note varchar(255),
 OUT order_id INT
)
BEGIN
 insert into tbl_cafe_order(cafe_id, route_id, order_number, order_date, total_amount, tax, delivery_charges, payment_status, payment_term_id, note)
 values(cafe_id, route_id, order_number, order_date, total_amount, tax, delivery_charges, payment_status, payment_term_id, note);
 
  SET order_id = LAST_INSERT_ID();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateCafeOrderDeliveries` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateCafeOrderDeliveries`(
IN cafe_id int,
IN cafe_order_id int,
IN cafe_invoice_id int,
IN delivery_vendor_id int,
IN delivery_weight float,
IN delivery_type enum('Interstate', 'Outstate'),
IN delivery_charges float,
IN delivery_packing_type enum('Thermocol','Packet'),
IN delivery_box_charges float,
IN deliver_total_charges float,
IN note varchar(255)
)
BEGIN
	insert into tbl_cafe_order_deliveries(cafe_id, cafe_order_id, cafe_invoice_id, delivery_vendor_id, delivery_weight, delivery_type, delivery_charges, delivery_packing_type, delivery_box_charges, deliver_total_charges, note)
    values(cafe_id, cafe_order_id, cafe_invoice_id, delivery_vendor_id, delivery_weight, delivery_type, delivery_charges, delivery_packing_type, delivery_box_charges, deliver_total_charges, note);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateCafeOrderDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateCafeOrderDetails`(
IN cod_cafe_order_id int,
IN cod_cafe_id int,
IN cod_product_id int,
IN cod_description varchar(255),
IN cod_quantity int,
IN cod_rate float,
IN cod_sub_total_amount float

)
BEGIN
	insert into tbl_cafe_order_details(cafe_order_id, cafe_id, product_id, description, quantity, rate, sub_total_amount)
    values(cod_cafe_order_id, cod_cafe_id, cod_product_id,  cod_description, cod_quantity, cod_rate, cod_sub_total_amount);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateCafePayment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateCafePayment`(
IN p_cafe_id int,
IN p_cafe_order_id int,
IN p_cafe_invoice_id int,
IN p_amount float,
IN p_payment_date datetime,
IN p_payment_status boolean,
IN p_note varchar(255),
IN p_discount float
)
BEGIN
	insert into tbl_cafe_payments(cafe_id, cafe_order_id, cafe_invoice_id, amount, payment_date, payment_status, note, discount)
    values(p_cafe_id, p_cafe_order_id, p_cafe_invoice_id, p_amount, p_payment_date, p_payment_status, p_note, p_discount);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateCafeUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateCafeUser`(
IN c_u_cafe_id int,
IN c_u_name varchar(255),
IN c_u_username varchar(255),
IN c_u_password varchar(255),
IN c_u_user_type_id int,
IN c_u_email varchar(255),
IN c_u_cell_number bigint,
IN c_u_status enum('Active','Inactive')
)
BEGIN
	insert into tbl_cafe_users(cafe_id, name, username, password, user_type_id, email, cell_number, status)
    values(c_u_cafe_id, c_u_name, c_u_username, c_u_password, c_u_user_type_id, c_u_email, c_u_cell_number, c_u_status);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateDeliveryVendor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateDeliveryVendor`(
IN name varchar(255),
IN address varchar(255),
IN interstate_charges int,
IN outstate_charges int,
IN Office_location varchar(255),
IN contact_person varchar(255),
IN contact_phone bigint,
IN Owner_name varchar(255),
IN Owner_phone bigint
)
BEGIN
	insert into tbl_delivery_vendors(name, address, interstate_charges, outstate_charges, Office_location, contact_person, contact_phone, Owner_name, Owner_phone)
    values(name, address, interstate_charges, outstate_charges, Office_location, contact_person, contact_phone, Owner_name, Owner_phone);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateEmployee` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateEmployee`(
    IN name VARCHAR(255),
    IN username VARCHAR(255),
    IN password VARCHAR(255),
    IN employee_type_id INT,
    IN email VARCHAR(250),
    IN cell_number BIGINT,
    IN salary INT,
    IN enrollment_datetime date,
    IN increament_datetime date,
    IN increament_amount INT,
    IN created_by VARCHAR(250)
)
BEGIN
    INSERT INTO tbl_employees (name, username, password, employee_type_id, email, cell_number, salary, enrollment_datetime, increament_datetime, increament_amount, created_by)
    VALUES (name, username, password, employee_type_id, email, cell_number, salary, enrollment_datetime, increament_datetime, increament_amount, created_by);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateEmployeeType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateEmployeeType`(
 IN roleName VARCHAR(255),
    IN descreption VARCHAR(255),
    IN created_by VARCHAR(250)
)
BEGIN
 INSERT INTO tbl_employee_type (name, details, super_user, created_at, created_by)
    VALUES (name, details, CURRENT_TIMESTAMP, created_by);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateFillingType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateFillingType`(
IN name varchar(255),
IN description varchar(255)
)
BEGIN
 insert into tbl_filling_types(name, description) values(name, description);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateFranchises` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateFranchises`(
IN name varchar(255),
IN origin_city varchar(255),
IN owner_name varchar(255),
IN owner_contact bigint,
IN owner_add varchar(255),
IN location varchar(255)
)
BEGIN
	insert into tbl_franchises(name, origin_city, owner_name, owner_contact, owner_add, location)
    values(name, origin_city, owner_name, owner_contact, owner_add, location);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateInvoiceDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateInvoiceDetails`(
    IN p_cafe_invoices_id INT,
    IN p_cafe_id INT,
    IN p_product_id INT,
    IN p_description VARCHAR(255),
    IN p_quantity INT,
    IN p_rate INT,
    IN p_sub_total_amount FLOAT,
    IN p_received_quantity int
)
BEGIN
    INSERT INTO tbl_cafe_invoice_details(cafe_invoices_id, cafe_id, product_id, description, quantity, rate, sub_total_amount, received_quantity)
    VALUES(p_cafe_invoices_id, p_cafe_id, p_product_id, p_description, p_quantity, p_rate, p_sub_total_amount, p_received_quantity);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreatePaymentTerms` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreatePaymentTerms`(
IN name varchar(255),
IN days int
)
BEGIN
insert into tbl_payment_terms(name, days)values(name, days);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateProduct`(
IN P_product_master_id  int,
IN P_name varchar(255),
IN P_details varchar(255),
IN P_product_weight int,
IN P_product_filling boolean,
IN P_filling_type_id int,
IN P_base_price int,
IN P_making_price int,
IN P_price_scale enum("Per KG", "Per Item")
)
BEGIN
	insert into tbl_products(pro_mast_id, name, details, product_weight, product_filling, filling_types_id, base_price, making_price, price_scale)
    values(P_product_master_id, P_name, P_details, P_product_weight, P_product_filling, P_filling_type_id, P_base_price, P_making_price, P_price_scale);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateProductMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateProductMaster`(
    IN name VARCHAR(255),
    IN details VARCHAR(255),
    IN created_at DATETIME,
    IN created_by INT
)
BEGIN
    INSERT INTO tbl_product_master(name, details, created_at, created_by)
    VALUES(name, details, created_at, created_by);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateRoutes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateRoutes`(
    IN name VARCHAR(255),
    IN route_details VARCHAR(255),
    IN route_start_point VARCHAR(255),
    IN route_end_point VARCHAR(255),
    IN cities_id INT,
    IN areas_id varchar(255)
)
BEGIN
    INSERT INTO tbl_routes(name, route_details, route_start_point, route_end_point, cities_id, areas_id) 
    VALUES(name, route_details, route_start_point, route_end_point, cities_id, areas_id);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `CreateUserType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CreateUserType`(
IN name varchar(255),
IN details varchar(255),
IN super_user boolean
)
BEGIN
	insert into tbl_user_types(name, details, super_user)
    values(name, details, super_user);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteAreaById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteAreaById`(IN a_id INT)
BEGIN
    DELETE FROM tbl_areas WHERE areas_id = a_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteCafe` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteCafe`(IN c_id int)
BEGIN
	DELETE FROM tbl_cafes WHERE  cafe_id= c_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteCafeDeal` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteCafeDeal`(IN c_deals_id int)
BEGIN
	delete from tbl_cafe_deals where cafe_deals_id = c_deals_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteCafeDealDetail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteCafeDealDetail`(IN c_d_d_id INT)
BEGIN
    DELETE FROM tbl_cafe_deal_details WHERE cafe_deal_details_id = c_d_d_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteCafeOrder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteCafeOrder`(IN order_id int)
BEGIN
	delete from tbl_cafe_order where cafe_order_id = order_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteCafeOrderDetailsById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteCafeOrderDetailsById`(IN c_o_d_id INT)
BEGIN
    DELETE FROM tbl_cafe_order_details WHERE cafe_order_details_id = c_o_d_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteCafePayments` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteCafePayments`(IN id int)
BEGIN
	Delete from tbl_cafe_payments where cafe_payments_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteCafeUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteCafeUser`(IN c_u_id int)
BEGIN
	delete from tbl_cafe_users where cafe_users_id = c_u_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteDeliveryVendor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteDeliveryVendor`(IN dv_id int)
BEGIN
	delete from tbl_delivery_vendors where delivery_vendors_id = dv_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteEmployeeById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteEmployeeById`(IN emp_id INT)
BEGIN
    DELETE FROM tbl_employees WHERE employees_id = emp_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteEmployeeTypeById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteEmployeeTypeById`(IN emp_type_id INT)
BEGIN
    DELETE FROM tbl_employee_type WHERE employee_type_id = emp_type_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteFillingTypeById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteFillingTypeById`(IN F_T_id INT)
BEGIN
    DELETE FROM tbl_filling_types WHERE filling_types_id = F_T_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteFranchise` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteFranchise`(IN f_id INT)
BEGIN
    DELETE FROM tbl_franchises WHERE id = f_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteInvoiceDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteInvoiceDetails`(IN id int)
BEGIN
	delete from tbl_cafe_invoice_details where cafe_invoice_details_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteProductById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteProductById`(IN P_id INT)
BEGIN
    DELETE FROM tbl_products WHERE product_id = P_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteProductMasterById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteProductMasterById`(IN p_m_id INT)
BEGIN
    DELETE FROM tbl_product_master WHERE pro_mast_id = p_m_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteRoutesBYId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteRoutesBYId`(IN route_id int )
BEGIN
	DELETE FROM tbl_routes WHERE routes_id = route_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `DeleteUserType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `DeleteUserType`(IN u_id int)
BEGIN
	delete from tbl_user_types where user_type_id=u_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindAreaById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindAreaById`(IN a_id int)
BEGIN
	select * from tbl_areas where areas_id = a_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindCafeById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindCafeById`(IN c_id int)
BEGIN
	select * from tbl_cafes where cafe_id = c_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindCafeDealsById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindCafeDealsById`(IN c_id int)
BEGIN
	select * from tbl_cafe_deals where cafe_deals_id = c_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindCafeOrderById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindCafeOrderById`( IN order_id int)
BEGIN
	select * from tbl_cafe_order where cafe_order_id = order_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindCafeOrderDetailsById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindCafeOrderDetailsById`(IN c_o_d_id int)
BEGIN
	SELECT * FROM tbl_cafe_order_details where cafe_order_details_id = c_o_d_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindCafeUserById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindCafeUserById`(IN c_u_id int)
BEGIN
	select * from tbl_cafe_users where cafe_users_id = c_u_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindEmployeeById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindEmployeeById`(IN emp_id INT)
BEGIN
    SELECT * FROM tbl_employees WHERE employees_id = emp_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindEmployeeTypeById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindEmployeeTypeById`(IN emp_type_id INT)
BEGIN
    SELECT * FROM tbl_employee_type WHERE employee_type_id = emp_type_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindFillingTypeById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindFillingTypeById`(IN F_T_id INT)
BEGIN
	SELECT * FROM tbl_filling_types WHERE  filling_types_id= F_T_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindFranchisesById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindFranchisesById`(IN F_id int)
BEGIN
	select * from tbl_franchises where id = F_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindProductById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindProductById`(IN P_id int)
BEGIN
	select * from tbl_products where product_id = P_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindProductMasterById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindProductMasterById`(IN p_m_id INT)
BEGIN
	select * from tbl_product_master where pro_mast_id = p_m_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindRoutesById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindRoutesById`(IN route_id INT)
BEGIN
SELECT * FROM tbl_routes WHERE routes_id = route_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindUserTypeById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindUserTypeById`(IN u_id int)
BEGIN
		select * from tbl_user_types where user_type_id = u_id;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllAreas` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllAreas`()
BEGIN
	SELECT 
    tbl_areas.areas_id,
    tbl_areas.name,
    tbl_cities.cities_id,
    tbl_cities.name AS cities_name,
    tbl_areas.area_details
    FROM  tbl_areas 
    inner join tbl_cities ON tbl_areas.cities_id = tbl_cities.cities_id;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCafeDeals` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCafeDeals`()
BEGIN
	select 
    tbl_cafe_deals.cafe_deals_id,
    tbl_cafe_deals.cafe_id,
    tbl_cafe_deals.cafe_users_id,
    tbl_cafe_deals.employees_id
    from tbl_cafe_deals
    inner join tbl_cafes ON tbl_cafe_deals.cafe_id = tbl_cafes.cafe_id
    inner join tbl_cafe_users ON tbl_cafe_deals.cafe_users_id =tbl_cafe_users.cafe_users_id
    inner join tbl_employees ON tbl_cafe_deals.employees_id =tbl_employees.employees_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCafeDealsDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCafeDealsDetails`()
BEGIN
	select 
    tbl_cafe_deal_details.cafe_deal_details_id,
    tbl_cafes.cafe_id,
    tbl_cafes.name AS Cafe_name,
    tbl_products.product_id,
    tbl_products.name AS product_name,
    tbl_cafe_deal_details.deal_price
	from tbl_cafe_deal_details
    inner join tbl_cafes ON tbl_cafe_deal_details.cafe_id = tbl_cafes.cafe_id
    inner join tbl_products ON tbl_cafe_deal_details.product_id = tbl_products.product_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCafeOrderDeliveries` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCafeOrderDeliveries`()
BEGIN
	select * from tbl_cafe_order_deliveries;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCafeOrderDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCafeOrderDetails`(IN id int)
BEGIN
	select 
    tbl_cafe_order_details.cafe_order_details_id,
    tbl_cafe_order_details.cafe_order_id,
    tbl_cafes.cafe_id,
    tbl_cafes.name AS cafeName,
    tbl_products.product_id,
    tbl_products.name AS ProductName,
    tbl_cafe_order_details.description,
    tbl_cafe_order_details.quantity,
    tbl_cafe_order_details.rate, 
    tbl_cafe_order_details.sub_total_amount,
    tbl_cafe_order_details.received_quantity
    FROM tbl_cafe_order_details
    inner join tbl_cafes ON tbl_cafe_order_details.cafe_id = tbl_cafes.cafe_id
    inner join tbl_products ON tbl_cafe_order_details.product_id = tbl_products.product_id where cafe_order_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCafeOrderDetailsByOrderId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCafeOrderDetailsByOrderId`()
BEGIN
	select 
    tbl_cafe_order_details.cafe_order_details_id,	
    tbl_cafe_order.cafe_order_id,
    tbl_cafe_order.order_number,
    tbl_cafe_order.order_date,
    tbl_cafes.cafe_id,
    tbl_cafes.name AS cafeName,
    tbl_products.product_id,
    tbl_products.name AS ProductName,
    tbl_cafe_order_details.description,
    tbl_cafe_order_details.quantity,
    tbl_cafe_order_details.rate, 
    tbl_cafe_order_details.sub_total_amount
    FROM tbl_cafe_order_details
	left join tbl_cafe_order ON tbl_cafe_order_details.cafe_order_id = tbl_cafe_order.cafe_order_id
    inner join tbl_cafes ON tbl_cafe_order_details.cafe_id = tbl_cafes.cafe_id
    inner join tbl_products ON tbl_cafe_order_details.product_id = tbl_products.product_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCafeOrders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCafeOrders`()
BEGIN
    SELECT 
        co.cafe_order_id,
        tbl_cafes.cafe_id,
        tbl_cafes.name AS cafe_name,
        co.route_id,
        co.order_number,
        co.order_date,
        co.total_amount,
        co.tax,
        co.delivery_charges,
        co.payment_status,
        pt.payment_terms_id,
        pt.name AS PaymentTermName,
        co.note,
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'product_id', tbl_products.product_id,
				'name', tbl_products.name,
                'description', cod.description, 
                'quantity', cod.quantity, 
                'rate', cod.rate, 
                'sub_total_amount', cod.sub_total_amount
            )
        ) AS products
    FROM 
        tbl_cafe_order co
    LEFT JOIN 
        tbl_cafe_order_details cod ON co.cafe_order_id = cod.cafe_order_id
	INNER JOIN 
		tbl_cafes ON co.cafe_id = tbl_cafes.cafe_id
	inner join 
      tbl_products On cod.product_id  = tbl_products.product_id
	inner join 
		tbl_payment_terms pt on co.payment_term_id = pt.payment_terms_id
    GROUP BY 
        co.cafe_order_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCafeOrdrs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCafeOrdrs`()
BEGIN
	select * from tbl_cafe_order;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCafePayment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCafePayment`()
BEGIN
	select * from tbl_cafe_payments;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCafes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCafes`()
BEGIN
    SELECT 
        tbl_cafes.cafe_id,
        tbl_franchises.franchise_id,
        tbl_cafes.name AS cafe_name, 
        tbl_cafes.address,
        tbl_cafes.area, 
        tbl_routes.routes_id,
        tbl_routes.name AS route_name,
        tbl_cafes.cities_id,
        tbl_cities.name AS cities_name, 
        tbl_cafes.special_deal,
        tbl_payment_terms.payment_terms_id,
        tbl_payment_terms.name AS payment_terms_name, 
        tbl_cafes.contact_person
    FROM tbl_cafes
    INNER join tbl_franchises ON tbl_cafes.franchise_id = tbl_franchises.franchise_id
    INNER JOIN tbl_routes ON tbl_cafes.routes_id = tbl_routes.routes_id
    INNER JOIN tbl_cities ON tbl_cafes.cities_id = tbl_cities.cities_id
    INNER JOIN tbl_payment_terms ON tbl_cafes.payment_terms_id = tbl_payment_terms.payment_terms_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllCafeUsers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllCafeUsers`()
BEGIN
	select 
    tbl_cafe_users.cafe_users_id,
    tbl_cafes.cafe_id,
     tbl_cafes.name AS cafe_name,
    tbl_cafe_users.name, 
    tbl_cafe_users.username,
    tbl_cafe_users.password,
    tbl_user_types.user_type_id,
     tbl_user_types.name AS user_type_name,
    tbl_cafe_users.email, 
    tbl_cafe_users.cell_number,
    tbl_cafe_users.status
    from tbl_cafe_users
    inner join tbl_cafes ON tbl_cafe_users.cafe_id = tbl_cafes.cafe_id 
    inner join tbl_user_types ON tbl_cafe_users.user_type_id = tbl_user_types.user_type_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllCities` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllCities`()
BEGIN
	select * from tbl_cities;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllDeliveryVendor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllDeliveryVendor`()
BEGIN
	select * from tbl_delivery_vendors;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllEmployees` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllEmployees`()
BEGIN
Select
 tbl_employees.employees_id,
		tbl_employees.name,
        tbl_employees.username,
        tbl_employees.password,
        tbl_employee_type.employee_type_id,
        tbl_employee_type.name AS employee_type_name,
        tbl_employees.email,
        tbl_employees.cell_number,
		tbl_employees.salary,
		tbl_employees.enrollment_datetime,
		tbl_employees.increament_datetime,
		tbl_employees.increament_amount,
		tbl_employees.created_by 
	FROM tbl_employees
    INNER JOIN tbl_employee_type ON tbl_employees.employee_type_id=tbl_employee_type.employee_type_id;
        
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllEmployeeTypes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllEmployeeTypes`()
BEGIN
SELECT * FROM tbl_employee_type;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllFillingTypes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllFillingTypes`()
BEGIN
	select * from tbl_filling_types;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllFranchises` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllFranchises`()
BEGIN
	select * from tbl_franchises;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllInvoiceDetals` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllInvoiceDetals`()
BEGIN
	select * from tbl_cafe_invoice_details;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllPaymentTerms` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllPaymentTerms`()
BEGIN
	select * from tbl_payment_terms;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllProductMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllProductMaster`()
BEGIN
	select * from tbl_product_master;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllProducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllProducts`()
BEGIN
	select 
    tbl_products.product_id,
    tbl_product_master.pro_mast_id,
    tbl_product_master.name AS Product_Master_Name,
	tbl_products.name,
    tbl_products.details,
    tbl_products.product_weight,
	tbl_filling_types.filling_types_id,
    tbl_filling_types.name AS filling_name, 
    tbl_products.product_filling,
    tbl_products.base_price, 
    tbl_products.making_price, 
    tbl_products.price_scale
from tbl_products
	inner join tbl_product_master ON tbl_products.pro_mast_id = tbl_product_master.pro_mast_id
	left join tbl_filling_types ON tbl_products.filling_types_id = tbl_filling_types.filling_types_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllRoutes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllRoutes`()
BEGIN
	select 
    tbl_routes.routes_id,
    tbl_routes.name AS route_name,
    tbl_routes.route_details,
    tbl_routes.route_start_point, 
    tbl_routes.route_end_point,
    tbl_cities.cities_id,
    tbl_cities.name AS cities_name,
    tbl_routes.areas_id
from 
	tbl_routes
 join 
    tbl_cities ON tbl_routes.cities_id = tbl_cities.cities_id;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetAllUserTypes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAllUserTypes`()
BEGIN
	select * from tbl_user_types;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCafeDealsDetailsById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCafeDealsDetailsById`(In c_d_d_id int)
BEGIN
	select * from tbl_cafe_deal_details where cafe_deal_details_id = c_d_d_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCafeOrderById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCafeOrderById`( IN order_id int)
BEGIN
	select * from tbl_cafe_order where cafe_order_id = order_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `LoginCafeUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `LoginCafeUser`(IN user_username VARCHAR(250))
BEGIN
 SELECT * FROM tbl_cafe_users
    WHERE username = user_username;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `loginUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `loginUser`(
  IN user_username VARCHAR(250)
  )
BEGIN
	SELECT * FROM tbl_employees WHERE username = user_username;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `new_procedure` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `new_procedure`(
IN c_name varchar(255),
IN c_address varchar(255),
IN c_area varchar(255),
IN c_route_id int,
IN c_cities_id int,
IN c_special_deal boolean,
IN c_cafe_deal_id int,
IN c_payment_term_id int,
IN c_contact_person varchar(255)
)
BEGIN
	insert into tbl_cafes(name, address, area, route_id, cities_id, special_deal, cafe_deal_id, payment_term_id, contact_person)
    values(c_name, c_address, c_area, c_route_id, c_cities_id, c_special_deal, c_cafe_deal_id, c_payment_term_id, c_contact_person);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateAreaById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateAreaById`(
    IN a_id INT,
    IN area_name VARCHAR(255),
    In city_id int,
    IN area_details VARCHAR(255)
)
BEGIN
    UPDATE tbl_areas 
    SET name = area_name, cities_id = city_id, area_details = area_details 
    WHERE areas_id = a_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCafe` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCafe`(
	IN c_franchise_id int,
    IN c_id INT,
    IN c_name VARCHAR(255),
    IN c_address VARCHAR(255),
    IN c_area INT,
    IN c_route_id INT,
    IN c_cities_id INT,
    IN c_special_deal BOOLEAN,
    IN c_payment_term_id INT,
    IN c_contact_person VARCHAR(255)
)
BEGIN
    UPDATE tbl_cafes 
    SET franchise_id = c_franchise_id,
		name = c_name,
        address = c_address,
        area = c_area,
        routes_id = c_route_id,
        cities_id = c_cities_id,
        special_deal = c_special_deal,
        payment_terms_id = c_payment_term_id,
        contact_person = c_contact_person
    WHERE cafe_id = c_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCafeDealDetail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCafeDealDetail`(
    IN c_d_d_id INT,
    IN c_d_d_cafe_id INT,
    IN c_d_d_product_id INT,
    IN c_d_d_deal_price INT
)
BEGIN
    UPDATE tbl_cafe_deal_details
    SET cafe_id = c_d_d_cafe_id,
        product_id = c_d_d_product_id,
        deal_price = c_d_d_deal_price
    WHERE cafe_deal_details_id = c_d_d_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCafeDeals` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCafeDeals`(
    IN c_deals_id INT,
    IN c_cafe_id INT,
    IN c_cafe_user_id INT,
    IN c_employee_id INT
)
BEGIN
    UPDATE tbl_cafe_deals
    SET cafe_id = c_cafe_id,
        cafe_user_id = c_cafe_user_id,
        employee_id = c_employee_id
    WHERE cafe_deals_id = c_deals_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCafeOrderById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCafeOrderById`(
    IN id INT,
    IN c_o_cafe_id INT,
    IN c_o_route_id INT,
    IN c_o_order_number VARCHAR(255),
    IN c_o_order_date DATETIME,
    IN c_o_total_amount FLOAT,
    IN c_o_tax FLOAT,
    IN c_o_delivery_charges FLOAT,
    IN c_o_payment_status BOOLEAN,
    IN c_o_delivery_status BOOLEAN,
    IN c_o_cafe_invoice_id INT,
    IN c_o_cafe_order_delivery_id INT,
    IN c_o_payment_term_id INT
)
BEGIN
    UPDATE tbl_cafe_order
    SET
        cafe_id = c_o_cafe_id,
        route_id = c_o_route_id,
        order_number = c_o_order_number,
        order_date = c_o_order_date,
        total_amount = c_o_total_amount,
        tax = c_o_tax,
        delivery_charges = c_o_delivery_charges,
        payment_status = c_o_payment_status,
        delivery_status = c_o_delivery_status,
        cafe_invoice_id = c_o_cafe_invoice_id,
        cafe_order_delivery_id = c_o_cafe_order_delivery_id,
        payment_term_id = c_o_payment_term_id
    WHERE cafe_order_id = id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCafeOrderDetailsById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCafeOrderDetailsById`(
    IN c_o_d_id INT,
    IN cod_product_id INT,
    IN cod_description VARCHAR(255),
    IN cod_quantity INT,
    IN cod_rate FLOAT,
    IN cod_sub_total_amount FLOAT,
    IN cod_received_quantity INT
)
BEGIN
    UPDATE tbl_cafe_order_details
    SET 
        product_id = cod_product_id,
        description = cod_description,
        quantity = cod_quantity,
        rate = cod_rate,
        sub_total_amount = cod_sub_total_amount,
        received_quantity = cod_received_quantity
    WHERE cafe_order_details_id = c_o_d_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCafePayment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCafePayment`(
IN p_id int,
IN p_cafe_id int,
IN p_cafe_order_id int,
IN p_cafe_invoice_id int,
IN p_amount float,
IN p_payment_date datetime,
IN p_payment_status boolean,
IN p_note varchar(255),
IN p_discount float
)
BEGIN
	update tbl_cafe_payments
    Set	cafe_id = p_cafe_id,
		cafe_order_id = p_cafe_order_id,
        cafe_invoice_id = p_cafe_invoice_id,
        amount = p_amount,
        payment_date = p_payment_date,
        payment_status = p_payment_status,
		note = p_note, 
        discount = p_discount
    where cafe_payments_id = p_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateCafeUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateCafeUser`(
    IN c_u_id INT,
    IN c_u_name VARCHAR(255),
    IN c_u_username VARCHAR(255),
    IN c_u_password VARCHAR(255),
    IN c_u_user_type_id INT,
    IN c_u_email VARCHAR(255),
    IN c_u_cell_number BIGINT,
    IN c_u_status ENUM('Active', 'Inactive')
)
BEGIN
    UPDATE tbl_cafe_users
    SET name = c_u_name,
        username = c_u_username,
        password = c_u_password,
        user_type_id = c_u_user_type_id,
        email = c_u_email,
        cell_number = c_u_cell_number,
        status = c_u_status
    WHERE cafe_users_id = c_u_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateDelivaryVendor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateDelivaryVendor`(
IN dv_id int,
IN name varchar(255),
IN address varchar(255),
IN interstate_charges int,
IN outstate_charges int,
IN Office_location varchar(255),
IN contact_person varchar(255),
IN contact_phone bigint,
IN Owner_name varchar(255),
IN Owner_phone bigint
)
BEGIN
	update tbl_delivery_vendors 
    set  name = name,
address = address,
interstate_charges = interstate_charges,
outstate_charges = outstate_charges,
Office_location = Office_location,
contact_person = contact_person,
contact_phone = contact_phone,
Owner_name = Owner_name,
Owner_phone = Owner_phone 
where 
delivery_vendors_id = dv_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateEmployeeById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateEmployeeById`(
    IN emp_id INT,
    IN emp_name VARCHAR(255),
    IN emp_username VARCHAR(255),
    IN emp_password VARCHAR(255),
    IN emp_type_id INT,
    IN emp_email VARCHAR(250),
    IN emp_cell_number BIGINT,
    IN emp_salary INT,
    IN emp_enrollment_datetime DATETIME,
    IN emp_increament_datetime DATETIME,
    IN emp_increament_amount INT,
    IN updated_by VARCHAR(250)
)
BEGIN
    UPDATE tbl_employees
    SET name = emp_name,
        username = emp_username,
        password = emp_password,
        employee_type_id = emp_type_id,
        email = emp_email,
        cell_number = emp_cell_number,
        salary = emp_salary,
        enrollment_datetime = emp_enrollment_datetime,
        increament_datetime = emp_increament_datetime,
        increament_amount = emp_increament_amount,
        updated_by = updated_by,
        updated_at = CURRENT_TIMESTAMP 
    WHERE employees_id = emp_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateEmployeeTypeById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateEmployeeTypeById`(
    IN emp_type_id INT,
    IN emp_name VARCHAR(255),
    IN emp_details VARCHAR(255),
    IN emp_super_user BOOLEAN,
    IN updated_by VARCHAR(50)
)
BEGIN
    UPDATE tbl_employee_type 
    SET name = emp_name, 
        details = emp_details, 
        super_user = emp_super_user, 
        updated_at = CURRENT_TIMESTAMP,
        updated_by = updated_by
    WHERE employee_type_id = emp_type_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateFranchiseById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateFranchiseById`(
    IN f_id INT,
    IN name VARCHAR(255),
    IN origin_city VARCHAR(255),
    IN owner_name VARCHAR(255),
    IN owner_contact BIGINT,
    IN owner_add VARCHAR(255),
    IN location VARCHAR(255)
)
BEGIN
    UPDATE tbl_franchises
    SET name = name,
        origin_city = origin_city,
        owner_name = owner_name,
        owner_contact = owner_contact,
        owner_add = owner_add,
        location = location
    WHERE id = f_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateInvoiceDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateInvoiceDetails`(
IN cid_cafe_invoice_details_id int,
IN cid_cafe_id int,
IN cid_product_id int,
IN cid_description varchar(255),
IN cid_quantity int,
IN cid_rate float,
IN cid_sub_total_amount float,
IN cid_received_quantity int
)
BEGIN
	update tbl_cafe_invoice_details 
    set 
    cafe_id = cid_cafe_id,
    product_id = cid_product_id,
    description = cid_description,
    quantity = cid_quantity,
    rate = cid_rate,
    sub_total_amount = cid_sub_total_amount,
    received_quantity = cid_received_quantity
	where cafe_invoice_details_id = cid_cafe_invoice_details_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateProduct`(
    IN P_product_id INT,
    IN P_product_master_id INT,
    IN P_name VARCHAR(255),
    IN P_details VARCHAR(255),
    IN P_product_weight INT,
    IN P_product_filling BOOLEAN,
    IN P_filling_type_id INT,
    IN P_base_price INT,
    IN P_making_price INT,
    IN P_price_scale ENUM('Per KG', 'Per Item')
)
BEGIN
    UPDATE tbl_products
    SET 
        pro_mast_id = P_product_master_id,
        name = P_name,
        details = P_details,
        product_weight = P_product_weight,
        product_filling = P_product_filling,
        filling_types_id = P_filling_type_id,
        base_price = P_base_price,
        making_price = P_making_price,
        price_scale = P_price_scale
    WHERE product_id = P_product_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateProductMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateProductMaster`(
    IN p_m_id INT,
    IN name VARCHAR(255),
    IN details VARCHAR(255),
    IN created_at DATETIME,
    IN created_by INT
)
BEGIN
    UPDATE tbl_product_master
    SET name = name,
        details = details,
        created_at = created_at,
        created_by = created_by
    WHERE pro_mast_id = p_m_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateRoutes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateRoutes`(
    IN route_id INT,
    IN name VARCHAR(255),
    IN route_details VARCHAR(255),
    IN route_start_point VARCHAR(255),
    IN route_end_point VARCHAR(255),
    IN cities_id INT,
    IN areas_id varchar(255)
)
BEGIN
    UPDATE tbl_routes
    SET
        name = name,
        route_details = route_details,
        route_start_point = route_start_point,
        route_end_point = route_end_point,
        cities_id = cities_id,
        areas_id = areas_id
    WHERE routes_id = route_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UpdateUserTypeById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UpdateUserTypeById`(
    IN u_id INT,
    IN name VARCHAR(255),
    IN details VARCHAR(255),
    IN super_user BOOLEAN
)
BEGIN
    UPDATE tbl_user_types 
    SET name = name, details = details, super_user = super_user
    WHERE user_type_id = u_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UserLogin` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `UserLogin`(
    IN p_email VARCHAR(255),
    IN p_password VARCHAR(100)
)
BEGIN
    DECLARE v_id INT;
    DECLARE v_hashed_password VARCHAR(100);
    DECLARE v_employee_type_id INT;

    -- Get the user by email
    SELECT id, password, employee_type_id
    INTO v_id, v_hashed_password, v_employee_type_id
    FROM employees
    WHERE email = p_email;

    -- Check if user exists and verify password
    IF v_id IS NOT NULL AND v_hashed_password = p_password THEN
        SELECT v_id AS id, v_employee_type_id AS employee_type_id;
    ELSE
        SELECT NULL AS id, NULL AS employee_type_id;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-21 13:21:04
