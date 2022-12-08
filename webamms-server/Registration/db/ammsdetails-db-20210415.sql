-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: ammsdetails
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `aircraft_flying_hrs`
--

DROP TABLE IF EXISTS `aircraft_flying_hrs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aircraft_flying_hrs` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `aarc` varchar(255) DEFAULT NULL,
  `after_flight_log` varchar(255) DEFAULT NULL,
  `aircraft` varchar(255) DEFAULT NULL,
  `aircraft_status` varchar(255) DEFAULT NULL,
  `apu_cycle` varchar(255) DEFAULT NULL,
  `apu_hrs` varchar(255) DEFAULT NULL,
  `apuc_cycle` varchar(255) DEFAULT NULL,
  `apuc_hrs` varchar(255) DEFAULT NULL,
  `date_flown` bigint DEFAULT NULL,
  `down_time_hrs` varchar(255) DEFAULT NULL,
  `dst_no` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `flight_cycle` int DEFAULT NULL,
  `port_hrs` varchar(255) DEFAULT NULL,
  `repair_log` varchar(255) DEFAULT NULL,
  `sortie_no` varchar(255) DEFAULT NULL,
  `src_from` varchar(255) DEFAULT NULL,
  `stbd_hrs` varchar(255) DEFAULT NULL,
  `up_time_hrs` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aircraft_flying_hrs`
--

LOCK TABLES `aircraft_flying_hrs` WRITE;
/*!40000 ALTER TABLE `aircraft_flying_hrs` DISABLE KEYS */;
INSERT INTO `aircraft_flying_hrs` VALUES (1,'21:18','test','KW-3554','Avaliable','21:18','21:18','21:18','21:18',1613606400,'21:17','chennai','yourFileName.pdf',11,'21:18','2','240','bangalore','21:18','21:17'),(2,'22:08','k','KW-3554','Avaliable','22:08','22:08','22:08','22:08',1613692800,'22:08','chennai','image.pdf',12,'22:08','j','240','bangalore','22:08','22:07'),(3,'22:14','4','KW-3554','Avaliable','22:15','22:14','22:14','22:14',1613606400,'22:13','chennai','image (1).pdf',13,'22:14','s','240','bangalore','22:15','22:13'),(4,'22:19','lk','KW-3554','Avaliable','22:19','22:19','22:19','22:20',1613606400,'22:19','chennai','table (1).pdf',14,'22:19','2','240','bangalore','22:19','22:19'),(5,'22:22','j','KW-3554','Avaliable','22:22','22:22','22:23','22:23',1613606400,'22:22','chennai','table.pdf',15,'22:22','s','240','bangalore','22:22','22:22'),(6,'19:34','lk','KW-3556','Avaliable','19:34','19:34','19:34','19:34',1613692800,'20:33','chennai','table.pdf',2,'19:34','k','240','bangalore','19:34','19:33'),(7,'19:26','k','KW-3554','Avaliable','19:26','19:26','19:26','19:27',1613952000,'19:27','chennai','table (1).pdf',16,'19:26','j','240','bangalore','19:26','19:27'),(8,'16:06','4','KW-3554','Avaliable','15:05','15:05','15:05','15:05',1614211200,'17:04','chennai','yourFileName (2).pdf',17,'15:05','2','240','bangalore','15:05','15:05');
/*!40000 ALTER TABLE `aircraft_flying_hrs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aircraftinfo`
--

DROP TABLE IF EXISTS `aircraftinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aircraftinfo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `aarc` varchar(255) DEFAULT NULL,
  `aircraft` varchar(255) DEFAULT NULL,
  `aircraft_status` varchar(255) DEFAULT NULL,
  `airflame_hours` varchar(255) DEFAULT NULL,
  `apu_c_cycle` varchar(255) DEFAULT NULL,
  `apu_c_hrs` varchar(255) DEFAULT NULL,
  `apu_cycle` varchar(255) DEFAULT NULL,
  `apu_hrs` varchar(255) DEFAULT NULL,
  `engine_stbd_hrs` varchar(255) DEFAULT NULL,
  `engine_part_hrs` varchar(255) DEFAULT NULL,
  `first_flight_date` bigint DEFAULT NULL,
  `flight_cycle` int DEFAULT NULL,
  `last_flown_date` bigint DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `sortie_no` int DEFAULT NULL,
  `tail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aircraftinfo`
--

LOCK TABLES `aircraftinfo` WRITE;
/*!40000 ALTER TABLE `aircraftinfo` DISABLE KEYS */;
INSERT INTO `aircraftinfo` VALUES (1,'167:13','KW-3554','Avaliable','21:21','166:14','166:16','166:14','166:13','166:13','21:19',1613606400,17,1614211200,'EMB-1451',240,'KW-3554'),(2,'19:05','KW-3555','Avaliable','19:05','19:05','19:05','19:05','19:06','19:05','19:05',1613692800,10,1613692800,'EMB-1451',240,'KW-3555'),(3,'38:57','KW-3556','Avaliable','19:23','38:57','38:57','38:57','38:57','38:57','19:23',1613692800,2,1613692800,'EMB-1451',240,'KW-3556');
/*!40000 ALTER TABLE `aircraftinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alert`
--

DROP TABLE IF EXISTS `alert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alert` (
  `id` int NOT NULL AUTO_INCREMENT,
  `aircraft` varchar(255) DEFAULT NULL,
  `servicedue` datetime DEFAULT NULL,
  `servicetype` varchar(255) DEFAULT NULL,
  `sno` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alert`
--

LOCK TABLES `alert` WRITE;
/*!40000 ALTER TABLE `alert` DISABLE KEYS */;
/*!40000 ALTER TABLE `alert` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `concession`
--

DROP TABLE IF EXISTS `concession`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `concession` (
  `idconcession` int NOT NULL AUTO_INCREMENT,
  `aircraft` varchar(255) DEFAULT NULL,
  `approval_date` bigint DEFAULT NULL,
  `concession_no` varchar(255) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `extended_till` bigint DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `removed_on` bigint DEFAULT NULL,
  `s_no` varchar(255) DEFAULT NULL,
  `valid_upto` bigint DEFAULT NULL,
  PRIMARY KEY (`idconcession`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concession`
--

LOCK TABLES `concession` WRITE;
/*!40000 ALTER TABLE `concession` DISABLE KEYS */;
INSERT INTO `concession` VALUES (1,'KW-3554',1614038400,'2344','d',1613606400,'table (1).pdf','d',1612915200,'3',1612224000),(2,'KW-3554',1614124800,'2','d',1614211200,'yourFileName (4).pdf','e',1614297600,'3',1614211200),(3,'KW-3555',1613606400,'2344','d',1613520000,NULL,'h',1612915200,'2',1613520000),(4,'KW-3554',1614297600,'2344','d',1614297600,NULL,'h',1614211200,'2',1614297600),(5,'KW-3554',1615939200,'2344','d',1616716800,NULL,'8j',1616630400,'2',1616457600),(6,'KW-3554',1616630400,'1','var',1617062400,NULL,'8j',1617148800,'1',1616803200);
/*!40000 ALTER TABLE `concession` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumable`
--
DROP TABLE IF EXISTS `consumable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consumable` (
  `idconsumable` int NOT NULL AUTO_INCREMENT,
  `sno` varchar(45) DEFAULT NULL,
  `consumableno` varchar(45) DEFAULT NULL,
  `partno` varchar(45) DEFAULT NULL,
  `oem` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
								  
   `date_created` bigint DEFAULT NULL,  
  `imgname` varchar(255) DEFAULT NULL,
  	PRIMARY KEY (`idconsumable`)
	)ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumable`
--

LOCK TABLES `consumable` WRITE;
/*!40000 ALTER TABLE `consumable` DISABLE KEYS */;
INSERT INTO `consumable` VALUES (1,'1','1','1','oil','amms engine',1601881058862,NULL),(2,'2','2','2',NULL,'non powered equipment',1611917183230,NULL),(3,'3','3','3',NULL,'amms engine',1611917199980,NULL),(4,'4','4','4',NULL,'amms engine',1611917218715,NULL),(5,'5','5','5',NULL,'my spanner',1611917237679,NULL);
							   /*!40000 ALTER TABLE `consumable` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `days14`
--

DROP TABLE IF EXISTS `days14`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `days14` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `days14`
--

LOCK TABLES `days14` WRITE;
/*!40000 ALTER TABLE `days14` DISABLE KEYS */;
INSERT INTO `days14` VALUES (8,'2','cat5',1612775205162,'my spanner','good','24','1','14days','1','4','trade1','dcv',NULL,'4'),(9,NULL,'cat5',1617871987577,NULL,'schitha','21','3','14days','2','00','vig','6','00','00');
/*!40000 ALTER TABLE `days14` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gse`
--

DROP TABLE IF EXISTS `gse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gse` (
  `idgse` int NOT NULL AUTO_INCREMENT,
  `sno` varchar(45) DEFAULT NULL,
  `gseno` varchar(45) DEFAULT NULL,
  `portno` varchar(45) DEFAULT NULL,
  `gdm` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imgname` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  PRIMARY KEY (`idgse`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gse`
--

LOCK TABLES `gse` WRITE;
/*!40000 ALTER TABLE `gse` DISABLE KEYS */;
INSERT INTO `gse` VALUES (20,'20','020','20','engine','amms engine','Gse_20_gse4.jpg',1601375278630),(21,'21','021','90900','steps','passenger boarding stairs','Gse_21_gse6.jpg,Gse_21_gse8.jpg',1601382826483),(22,'22','022','8080','Aircraft jack','non powered equipment','Gse_22_gse3.jpg,Gse_22_gse4.jpg,Gse_22_gse6.jpg',1601384780052),(23,'25','025','9093','dollies','non powered equipment','Gse_23_gse1.jpg',1601438311492),(24,'025','025','9091','step','amms engine',NULL,1601442838234),(25,'1','GSE 005','EMB-00016-009','Plumb, aircraft leveling','Plumb, aircraft leveling',NULL,1606028520272);
/*!40000 ALTER TABLE `gse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo1`
--

DROP TABLE IF EXISTS `mo1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo1` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo1`
--

LOCK TABLES `mo1` WRITE;
/*!40000 ALTER TABLE `mo1` DISABLE KEYS */;
INSERT INTO `mo1` VALUES (6,'amm5','cat5',1612783479996,'non powered equipment','schitha','24,21','2','1Mo','smrd5','4','trade','dcv','4','8');
/*!40000 ALTER TABLE `mo1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo12`
--

DROP TABLE IF EXISTS `mo12`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo12` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo12`
--

LOCK TABLES `mo12` WRITE;
/*!40000 ALTER TABLE `mo12` DISABLE KEYS */;
INSERT INTO `mo12` VALUES (1,'2','cat',1612331655542,'amms engine','schi','24,20','1','12Mo','1','5,1','bjku','14',NULL,NULL),(2,'2','cat5',1612452486068,'amms engine','schitha','21','2','12Mo','2','4','vig','dcv','2','4');
/*!40000 ALTER TABLE `mo12` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo120`
--

DROP TABLE IF EXISTS `mo120`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo120` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo120`
--

LOCK TABLES `mo120` WRITE;
/*!40000 ALTER TABLE `mo120` DISABLE KEYS */;
INSERT INTO `mo120` VALUES (1,'1','cat',1612802971389,'amms engine','schitha','24','1','120Mo','1','4','bjku','dcv','4','8');
/*!40000 ALTER TABLE `mo120` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo15`
--

DROP TABLE IF EXISTS `mo15`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo15` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo15`
--

LOCK TABLES `mo15` WRITE;
/*!40000 ALTER TABLE `mo15` DISABLE KEYS */;
INSERT INTO `mo15` VALUES (1,'2','cat5',1612511488939,'amms engine','schitha','24','2','15Mo','2','5','bjku','dcv',NULL,NULL),(2,'amm5','cat5',1612788783560,'non powered equipment','schitha','21','seq5','15Mo','smrd5','4','trade','7','4','8');
/*!40000 ALTER TABLE `mo15` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo18`
--

DROP TABLE IF EXISTS `mo18`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo18` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo18`
--

LOCK TABLES `mo18` WRITE;
/*!40000 ALTER TABLE `mo18` DISABLE KEYS */;
INSERT INTO `mo18` VALUES (2,'7','7',1612786275914,'7','schitha','24','7','18Mos','7','4','trade','7','1','8');
/*!40000 ALTER TABLE `mo18` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo24`
--

DROP TABLE IF EXISTS `mo24`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo24` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo24`
--

LOCK TABLES `mo24` WRITE;
/*!40000 ALTER TABLE `mo24` DISABLE KEYS */;
INSERT INTO `mo24` VALUES (3,'3','cat5',1612786728842,'non powered equipment','schitha','00','2','24Mo','smrd5','00','vig','7','4','6');
/*!40000 ALTER TABLE `mo24` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo3`
--

DROP TABLE IF EXISTS `mo3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo3` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo3`
--

LOCK TABLES `mo3` WRITE;
/*!40000 ALTER TABLE `mo3` DISABLE KEYS */;
INSERT INTO `mo3` VALUES (4,'amm6','cat5',1612782855995,'non powered equipment','good','24','2','3Mo','smrd5','4','vig','dcv',NULL,'4');
/*!40000 ALTER TABLE `mo3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo30`
--

DROP TABLE IF EXISTS `mo30`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo30` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo30`
--

LOCK TABLES `mo30` WRITE;
/*!40000 ALTER TABLE `mo30` DISABLE KEYS */;
INSERT INTO `mo30` VALUES (1,'2','cat5',1612756643735,'passenger boarding stairs','schi','24','seq5','30Mo','1','4','trade','dcv','4','8');
/*!40000 ALTER TABLE `mo30` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo36`
--

DROP TABLE IF EXISTS `mo36`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo36` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo36`
--

LOCK TABLES `mo36` WRITE;
/*!40000 ALTER TABLE `mo36` DISABLE KEYS */;
INSERT INTO `mo36` VALUES (1,'2','cat',1612340696899,'amms engine','schi','24','1','36MO','2','00','bjku','14',NULL,NULL),(2,'2','cat5',1612454399103,'amms engine','schitha','21','2','36MO','2','4','trade1','dcv','4','4');
/*!40000 ALTER TABLE `mo36` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo48`
--

DROP TABLE IF EXISTS `mo48`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo48` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo48`
--

LOCK TABLES `mo48` WRITE;
/*!40000 ALTER TABLE `mo48` DISABLE KEYS */;
INSERT INTO `mo48` VALUES (1,'1','cat5',1612852484247,'my spanner','schitha','24','1','48Mo','1','4','1','dcv','4','8');
/*!40000 ALTER TABLE `mo48` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo6`
--

DROP TABLE IF EXISTS `mo6`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo6` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo6`
--

LOCK TABLES `mo6` WRITE;
/*!40000 ALTER TABLE `mo6` DISABLE KEYS */;
INSERT INTO `mo6` VALUES (1,'1','cat',1612328400463,'amms engine','schi','24,20','2','6Mo','2','4,1','bjku','14',NULL,NULL),(2,'1','cat',1612452099258,'passenger boarding stairs','schi','24','1','6Mo','1','4','vig','dcv',NULL,'4'),(3,'amm5','cat5',1612785566779,'non powered equipment','schi','24','seq5','6Mo','6','4','jhfdkjf','6','1','8');
/*!40000 ALTER TABLE `mo6` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo60`
--

DROP TABLE IF EXISTS `mo60`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo60` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo60`
--

LOCK TABLES `mo60` WRITE;
/*!40000 ALTER TABLE `mo60` DISABLE KEYS */;
INSERT INTO `mo60` VALUES (1,'amm5','c',1612756711103,'my spanner','schitha','21,24','1','60Mo','smrd5','4','trade','dcv','00','20');
/*!40000 ALTER TABLE `mo60` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo72`
--

DROP TABLE IF EXISTS `mo72`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo72` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo72`
--

LOCK TABLES `mo72` WRITE;
/*!40000 ALTER TABLE `mo72` DISABLE KEYS */;
INSERT INTO `mo72` VALUES (1,'1','cat',1612340623866,'amms engine','schi','24','1','72Mo','1','3','bjku','14',NULL,NULL),(2,'amm5','cater',1612455264133,'passenger boarding stairs','schitha','24','3','72Mo','2','4','trade','dcv','4','4');
/*!40000 ALTER TABLE `mo72` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mo90`
--

DROP TABLE IF EXISTS `mo90`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mo90` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mo90`
--

LOCK TABLES `mo90` WRITE;
/*!40000 ALTER TABLE `mo90` DISABLE KEYS */;
INSERT INTO `mo90` VALUES (1,'amm5','cat5',1612802364414,'non powered equipment','schitha','24','3','90Mo','6','5','trade1','dcv','4','8');
/*!40000 ALTER TABLE `mo90` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule` (
  `idschedule` int NOT NULL AUTO_INCREMENT,
  `aircraft` varchar(255) DEFAULT NULL,
  `alert` int NOT NULL,
  `concessionnates` varchar(255) DEFAULT NULL,
  `date_created` bigint NOT NULL,
  `enddate` bigint DEFAULT NULL,
  `lastservice` bigint DEFAULT NULL,
  `nextservice` bigint DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `servicecompleted` int NOT NULL,
  `servicedue` bigint DEFAULT NULL,
  `sno` int NOT NULL,
  `startdate` bigint DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idschedule`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (4,'KW-3555',2,'1',1618407523078,1618358400,1616198400,1618617600,'14 day',1,1617408000,1,1617840000,'NotStarted'),(3,'KW-3554',2,'1',1618403747539,1618531200,1617321600,1619568000,'14 day',2,1619568000,1,1618531200,'Not Started'),(5,'KW-3556',2,'1',1618407727163,1618531200,1617235200,1619568000,'14 day',1,1617321600,1,1618185600,'NotStarted'),(14,'KW-3554',2,'1',1618463441180,1620345600,1533168000,1629763200,'18 mo',1,1581724800,18,1617753600,'NotStarted'),(8,'KW-3555',2,'1',1618462318908,1618876800,1614556800,1622246400,'1 mo',1,1616976000,1,1618185600,'NotStarted'),(9,'KW-3554',2,'1',1618462572193,1618185600,1602720000,1618444800,'3 mo',1,1610668800,1,1618185600,'NotStarted'),(10,'KW-3554',2,'1',1618462685518,1622505600,1604188800,1623888000,'6 mo',1,1609459200,1,1618185600,'NotStarted'),(11,'KW-3554',2,'1',1618462824655,1618185600,1555286400,1649980800,'12 mo',1,1586908800,4,1618358400,'NotStarted'),(13,'KW-3554',2,'1',1618463254709,1618185600,1544832000,1657324800,'15 mo',1,1581724800,13,1582675200,'NotStarted'),(15,'KW-3554',2,'1',1618463664601,NULL,1563148800,1622419200,'24 mo',2,1622419200,24,NULL,'Not Started'),(17,'KW-3554',2,'1',1618466033464,NULL,1616025600,1621296000,'1 mo',2,1621296000,12,NULL,'Not Started'),(18,'KW-3554',2,'1',1618466703956,1632182400,1442880000,1632268800,'36 mo',1,1537574400,36,1617148800,'NotStarted'),(19,'KW-3554',2,'1',1618466970342,1644883200,1392422400,1644883200,'48 mo',1,1518652800,48,1618272000,'NotStarted'),(20,'KW-3554',2,'1',1618467110887,1686787200,1371254400,1686787200,'60 mo',1,1529020800,60,1618185600,'NotStarted'),(21,'KW-3554',2,'1',1618467652794,1681516800,1302825600,1681516800,'72 mo',1,1487116800,1,1618272000,'NotStarted'),(22,'KW-3554',2,'1',1618468090875,1649980800,1239753600,1713139200,'90 mo',1,1455494400,90,1618444800,'NotStarted'),(23,'KW-3554',2,'1',1618468233143,1713139200,1050364800,1713312000,'120 mo',1,1397520000,120,1618444800,'NotStarted');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicehistory`
--

DROP TABLE IF EXISTS `servicehistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicehistory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `aircraft` varchar(255) DEFAULT NULL,
  `alert` int NOT NULL,
  `concessionnates` varchar(255) DEFAULT NULL,
  `enddate` bigint DEFAULT NULL,
  `lastservice` bigint DEFAULT NULL,
  `nextservice` bigint DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `servicecompleted` int NOT NULL,
  `servicedue` bigint DEFAULT NULL,
  `sno` int NOT NULL,
  `startdate` bigint DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicehistory`
--

LOCK TABLES `servicehistory` WRITE;
/*!40000 ALTER TABLE `servicehistory` DISABLE KEYS */;
INSERT INTO `servicehistory` VALUES (1,'KW-3554',2,'1',1618531200,1617321600,1619568000,'14 day',1,1619568000,1,1618185600,'Completed'),(3,'KW-3554',2,'1',1621036800,1563148800,1622419200,'24 mo',1,1622419200,24,1618272000,'Completed'),(4,'KW-3554',2,'1',1618704000,1616025600,1621296000,'1 mo',1,1621296000,12,1618185600,'Completed');
/*!40000 ALTER TABLE `servicehistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicetab`
--

DROP TABLE IF EXISTS `servicetab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicetab` (
  `idservice` int NOT NULL AUTO_INCREMENT,
  `ammtcno` varchar(255) DEFAULT NULL,
  `cat` varchar(255) DEFAULT NULL,
  `date_created` bigint NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `effectivity` varchar(255) DEFAULT NULL,
  `gsenos` varchar(255) DEFAULT NULL,
  `seqno` varchar(255) DEFAULT NULL,
  `smrdno` varchar(255) DEFAULT NULL,
  `sparenos` varchar(255) DEFAULT NULL,
  `trade` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `toolsnos` varchar(255) DEFAULT NULL,
  `consumablenos` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idservice`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicetab`
--

LOCK TABLES `servicetab` WRITE;
/*!40000 ALTER TABLE `servicetab` DISABLE KEYS */;
INSERT INTO `servicetab` VALUES (7,'1','cat',1615125540893,'passenger boarding stairs','schi','25,24,23,22,21,20','1','2','5,4,3','bjku','dcv','8,7,6','5,4,3'),(6,'amm5','cat5',1612613907855,'non powered equipment','schitha','24','seq5','smrd5','4','trade','dcv','8','4');
/*!40000 ALTER TABLE `servicetab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spare`
--

DROP TABLE IF EXISTS `spare`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spare` (
  `idspare` int NOT NULL AUTO_INCREMENT,
  `imgname` varchar(255) DEFAULT NULL,
  `seqno` varchar(45) DEFAULT NULL,
  `partno` varchar(45) DEFAULT NULL,
  `oem` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  PRIMARY KEY (`idspare`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spare`
--

LOCK TABLES `spare` WRITE;
/*!40000 ALTER TABLE `spare` DISABLE KEYS */;
INSERT INTO `spare` VALUES (1,NULL,'1','1','Dump','non powered equipment',1611119826605),(2,NULL,'2','2','Dump','passenger boarding stairs',1611917262678),(3,NULL,'3','3','Dump','amms engine',1611917280679),(4,NULL,'4','4','Dump','passenger boarding stairs',1611917299614),(5,NULL,'5','5','Dump','my spanner',1611917328892);
/*!40000 ALTER TABLE `spare` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tools`
--

DROP TABLE IF EXISTS `tools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tools` (
  `idtools` int NOT NULL AUTO_INCREMENT,
  `sno` varchar(45) DEFAULT NULL,
  `partno` varchar(45) DEFAULT NULL,
  `toolsno` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `imgname` varchar(45) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `gdm` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idtools`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tools`
--

LOCK TABLES `tools` WRITE;
/*!40000 ALTER TABLE `tools` DISABLE KEYS */;
INSERT INTO `tools` VALUES (6,'1','part1','tool1','amms engine',NULL,1612605181520,'test'),(7,'2','2','2','passenger boarding stairs',NULL,1612605228667,'engine'),(8,'3','3','3','amms engine',NULL,1612610342506,'engine'),(9,'4','4','4','5',NULL,1612610362827,'5'),(10,'4','pa4','tool4','non powered equipment',NULL,1615034322827,'oem'),(11,'7','7','7','amms engine',NULL,1615034615289,'oem');
/*!40000 ALTER TABLE `tools` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user7`
--

DROP TABLE IF EXISTS `user7`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user7` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email_id` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(45) DEFAULT NULL,
  `imgname` varchar(255) DEFAULT NULL,
  `date_created` bigint DEFAULT NULL,
  `time_updated` bigint DEFAULT NULL,
  `reset_token` varchar(100) DEFAULT NULL,
  `token_creation_date` timestamp(6) NULL DEFAULT NULL,
  `roll` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user7`
--

LOCK TABLES `user7` WRITE;
/*!40000 ALTER TABLE `user7` DISABLE KEYS */;
INSERT INTO `user7` VALUES (7,'lalitha@gmail.com','lalitha123','lalitha',NULL,1600861282150,1600861282150,NULL,NULL,'viewer'),(8,'karan@gmail.com','karan123','karan',NULL,1600861304730,1600861304730,NULL,NULL,'admin'),(9,'kesar@sgmail.com','kesar123','kesar','User_9_jesus.jpg',1600861341850,1600861341850,NULL,NULL,'admin'),(11,'srinivasan@gmail.com','srini123','sriivas',NULL,1600861406399,1600861406399,NULL,NULL,'regular'),(12,'vanaja@gmail.com','vanaja123','vanaja',NULL,1600918865362,1600918865362,NULL,NULL,'admin'),(13,'meena@gmail.com','meena123','meena',NULL,1600919260960,1600919260960,NULL,NULL,'viewer'),(14,'manikandan@gmail.com','mani123','mani','User_14_bird.jpg',1600919317076,1600919317076,NULL,NULL,'regular'),(19,'vinoth@gmail.com','vino123','vinotha',NULL,1601361909384,1601361909384,NULL,NULL,'admin'),(20,'vip@gmail.com','vip123','vip',NULL,1601362514110,1601362514110,NULL,NULL,'viewer'),(21,'rohit@gmail.com','rohit123','rohit','User_21_building.jpg',1601364679711,1601364679711,NULL,NULL,'admin'),(22,'javapriya2020@gmail.com','java@123','java',NULL,1601379793085,1601379793085,NULL,NULL,'admin'),(23,'vishnu@gmail.com','vishnu123','vishnusree','User_23_vinoth.jpg',1601437849926,1601437849926,NULL,NULL,'admin'),(24,'arun@gmail.com','arun123','arun',NULL,1601438402141,1601438402141,NULL,NULL,'regular'),(26,'vh5@gmail.com','vh5123','vh5',NULL,1601438809652,1601438809652,NULL,NULL,'admin'),(27,'gaby@gmail.com','gaby123','gabysachin','User_27_mark.jpg',1601441134134,1601441134134,NULL,NULL,'admin'),(28,'vigneshvh5@gmail.com','vicky123','vigneshvh5',NULL,1601441301369,1601441301369,NULL,NULL,'admin'),(29,'ganesh@gmail.com','ganesh123','ganesh','User_29_vinoth.jpg',1601441692971,1601441692971,NULL,NULL,'regular'),(30,'sri@gmail.com','sri123','sri',NULL,1601442156223,1601442156223,NULL,NULL,'viewer'),(31,'mishitha1809@gmail.com','mishitha@18','mishitha',NULL,1601880594383,1601880594383,NULL,NULL,'admin'),(32,'shabanu08@gmail.com','Anisha123','Anisha',NULL,1612005449123,1612005449123,NULL,NULL,'admin'),(34,'parveenanisha481@gmail.com','Anisha124','ani',NULL,1618381372811,1618381372811,NULL,NULL,'admin');
/*!40000 ALTER TABLE `user7` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-15 12:31:33
