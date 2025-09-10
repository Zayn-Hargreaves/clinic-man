
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;
SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '259012ec-8494-11f0-bdb3-862ccfb0261a:1-123,
676522d4-6766-11f0-8b4c-862ccfb04898:1-27,
79fe9fcc-6934-11f0-ba9d-862ccfb061c8:1-37';
DROP TABLE IF EXISTS `DoctorService`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DoctorService` (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctor_id` int NOT NULL,
  `service_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_doctor_service` (`doctor_id`,`service_id`),
  KEY `FK_f2cfac6e4b82e9b051375c67fd9` (`service_id`),
  CONSTRAINT `FK_7c6d14a5df99a4bcc678e357ec9` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`),
  CONSTRAINT `FK_f2cfac6e4b82e9b051375c67fd9` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `admissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `admit_date` timestamp NULL DEFAULT NULL,
  `discharge_date` timestamp NULL DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `initial_diagnosis` varchar(255) DEFAULT NULL,
  `discharge_summary` text,
  `status` enum('active','discharged','transferred') NOT NULL,
  `patient_id` int NOT NULL,
  `department_id` int DEFAULT NULL,
  `room_id` int DEFAULT NULL,
  `bed_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_admission_bed` (`bed_id`),
  KEY `idx_admissions_room` (`room_id`),
  KEY `idx_admissions_department` (`department_id`),
  KEY `idx_admissions_patient` (`patient_id`),
  CONSTRAINT `FK_7a9f8ed2b8a36c62264d96b1c6d` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_b9424c402dbd99d8e4003fd3500` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_c5d5923f5b70c04fbe783b4ee8a` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_cc1827a32123f510c80266a53e4` FOREIGN KEY (`bed_id`) REFERENCES `beds` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `appointment_time` timestamp NULL DEFAULT NULL,
  `type` enum('online','walkin') NOT NULL,
  `status` enum('pending','confirmed','completed','cancelled') NOT NULL,
  `reason` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `patient_id` int DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  `staff_id` int DEFAULT NULL,
  `room_ids` int DEFAULT NULL,
  `room_id` int DEFAULT NULL,
  `serivce_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_appointments_patient` (`patient_id`),
  KEY `idx_appointments_service` (`serivce_id`),
  KEY `idx_appointments_slot` (`room_id`),
  KEY `idx_appointments_room` (`room_ids`),
  KEY `idx_appointments_staff` (`staff_id`),
  KEY `idx_appointments_doctor` (`doctor_id`),
  CONSTRAINT `FK_3330f054416745deaa2cc130700` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_3cf8c30e138f692e575c5dc420e` FOREIGN KEY (`room_id`) REFERENCES `slots` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_4cf26c3f972d014df5c68d503d2` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_69b37793ab89be0248f2d79c3c3` FOREIGN KEY (`serivce_id`) REFERENCES `services` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_b8f1939c98241fc658c961f12ef` FOREIGN KEY (`room_ids`) REFERENCES `rooms` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_d211f77ba4a4f32903f0fb73a75` FOREIGN KEY (`staff_id`) REFERENCES `staffs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `attachments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attachments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) NOT NULL,
  `file_type` varchar(50) NOT NULL,
  `file_size` int NOT NULL,
  `url` varchar(500) NOT NULL,
  `uploaded_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `uploaded_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_e25812e3fd9b3f3edf11b2c5d58` (`uploaded_by`),
  CONSTRAINT `FK_e25812e3fd9b3f3edf11b2c5d58` FOREIGN KEY (`uploaded_by`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `audit_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audit_logs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action` varchar(100) DEFAULT NULL,
  `target_table` varchar(100) DEFAULT NULL,
  `target_id` int DEFAULT NULL,
  `before_data` text,
  `after_data` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_auditLog_targetId` (`target_id`),
  KEY `idx_auditLog_targetTable` (`target_table`),
  KEY `idx_auditLog_user` (`user_id`),
  CONSTRAINT `FK_bd2726fd31b35443f2245b93ba0` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `beds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `beds` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bed_number` varchar(20) NOT NULL,
  `status` enum('available','occupied','cleaning') NOT NULL,
  `room_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_bed_room` (`room_id`),
  CONSTRAINT `FK_fd7413faee42749f1b2e8270394` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `department_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department_services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `department_id` int NOT NULL,
  `service_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_department_service` (`department_id`,`service_id`),
  KEY `FK_2f6a28ef14726bc5d5cf535a78f` (`service_id`),
  CONSTRAINT `FK_2f6a28ef14726bc5d5cf535a78f` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_67f2d51ff46930c94e1c842a083` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `doctor_schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_schedules` (
  `id` int NOT NULL AUTO_INCREMENT,
  `day_of_week` tinyint DEFAULT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `doctor_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_doctorSchedule_doctor` (`doctor_id`),
  KEY `idx_doctorSchedule_doctor_dayOfWeek_startTime` (`doctor_id`,`day_of_week`,`start_time`),
  CONSTRAINT `FK_a9562c0e3b99e62425d3356c88b` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `specialization` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `user_id` int NOT NULL,
  `department_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_doctors_deparment` (`department_id`),
  KEY `idx_doctors_user` (`user_id`),
  CONSTRAINT `FK_3672b55bcb332e54bc8d8cda1c1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  CONSTRAINT `FK_653c27d1b10652eb0c7bbbc4427` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `e_invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `e_invoices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tax_code` varchar(20) DEFAULT NULL,
  `template_code` varchar(20) DEFAULT NULL,
  `serial` varchar(20) DEFAULT NULL,
  `invoice_no` varchar(30) DEFAULT NULL,
  `issue_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` enum('created','issued','cancelled') NOT NULL,
  `xml_url` varchar(255) DEFAULT NULL,
  `pdf_url` varchar(255) DEFAULT NULL,
  `invoice_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_337e1f7d5cb562fec58d692799c` (`invoice_id`),
  CONSTRAINT `FK_337e1f7d5cb562fec58d692799c` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `exam_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exam_table` (
  `id` int NOT NULL AUTO_INCREMENT,
  `table_number` varchar(20) DEFAULT NULL,
  `status` enum('available','occupied') NOT NULL,
  `room_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_examTable_room` (`room_id`),
  CONSTRAINT `FK_9f557e842da873c3707f349b5ae` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `feedbacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedbacks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rating` int NOT NULL DEFAULT '5',
  `comment` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `patient_id` int DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  `appointment_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_feedbacks_appointment` (`appointment_id`),
  KEY `idx_feedbacks_doctor` (`doctor_id`),
  KEY `idx_feedbacks_patient` (`patient_id`),
  CONSTRAINT `FK_729ed648f9b89722ab206e5eb05` FOREIGN KEY (`appointment_id`) REFERENCES `appointments` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_c0323456aa6759a4c7296fadf22` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_d9ad223bcc88d816aaaccf61da0` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `inventory_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory_transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item_type` enum('medication','medical supply') NOT NULL,
  `item_id` int DEFAULT NULL,
  `transaction_type` enum('import','export','adjustment') NOT NULL,
  `quantity` int DEFAULT NULL,
  `transaction_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `note` text,
  `supplier_id` int DEFAULT NULL,
  `stock_batch_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_inventory_tx_item` (`item_type`,`item_id`),
  KEY `FK_dde701f3b756ac6ad4040ecb551` (`supplier_id`),
  KEY `FK_20c1c5d96a324e6992a1a84c7dd` (`stock_batch_id`),
  CONSTRAINT `FK_20c1c5d96a324e6992a1a84c7dd` FOREIGN KEY (`stock_batch_id`) REFERENCES `stock_batch` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_dde701f3b756ac6ad4040ecb551` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `invoice_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item_type` enum('service','medication','lab_test','medical_supply') NOT NULL,
  `item_id` int DEFAULT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `unit_price` decimal(12,1) NOT NULL DEFAULT '0.0',
  `invoice_id` int DEFAULT NULL,
  `inventory_transaction_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_invoiceItem_inventoryTranaction` (`inventory_transaction_id`),
  KEY `idx_invoiceItem_invoice` (`invoice_id`),
  CONSTRAINT `FK_4796e8ae94cad135f8437b840a0` FOREIGN KEY (`inventory_transaction_id`) REFERENCES `inventory_transactions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_dc991d555664682cfe892eea2c1` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total_amount` decimal(12,2) NOT NULL DEFAULT '0.00',
  `status` enum('unpaid','paid','cancelled') NOT NULL DEFAULT 'unpaid',
  `patient_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_invoice_patient` (`patient_id`),
  CONSTRAINT `FK_e3be0c11f4ce66b9b352477cb06` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `lab_order_supplies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lab_order_supplies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity_used` int NOT NULL,
  `note` text,
  `lab_order_id` int NOT NULL,
  `supply_id` int NOT NULL,
  `inventory_transaction_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_623630d7367cf13ecc94b938bdb` (`lab_order_id`),
  KEY `FK_d3772b58f75122b20d636c90243` (`supply_id`),
  KEY `FK_89e184b53d2fd3e38090c54fbb7` (`inventory_transaction_id`),
  CONSTRAINT `FK_623630d7367cf13ecc94b938bdb` FOREIGN KEY (`lab_order_id`) REFERENCES `lab_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_89e184b53d2fd3e38090c54fbb7` FOREIGN KEY (`inventory_transaction_id`) REFERENCES `inventory_transactions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_d3772b58f75122b20d636c90243` FOREIGN KEY (`supply_id`) REFERENCES `medical_supplies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `lab_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lab_orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_date` datetime NOT NULL,
  `status` enum('ordered','processing','completed','cancelled') NOT NULL,
  `result` text NOT NULL,
  `medical_record_id` int NOT NULL,
  `lab_test_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_96ad2b94ed32a6a166e52d0feec` (`medical_record_id`),
  KEY `FK_8b709abf2d31c6675d4501cd43c` (`lab_test_id`),
  CONSTRAINT `FK_8b709abf2d31c6675d4501cd43c` FOREIGN KEY (`lab_test_id`) REFERENCES `lab_tests` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_96ad2b94ed32a6a166e52d0feec` FOREIGN KEY (`medical_record_id`) REFERENCES `medical_records` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `lab_tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lab_tests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` decimal(12,2) NOT NULL DEFAULT '0.00',
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `medical_record_supplies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medical_record_supplies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity_used` int NOT NULL,
  `medical_record_id` int DEFAULT NULL,
  `supply_id` int DEFAULT NULL,
  `inventoryTransactionId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_medicalRecordSupplier_supply` (`supply_id`),
  KEY `idx_medicalRecordSupplier_medicalRecord` (`medical_record_id`),
  KEY `FK_e2a126c7ea57e81775ed57ef729` (`inventoryTransactionId`),
  CONSTRAINT `FK_a2ee8dd8df8ea94fab73db1e2a8` FOREIGN KEY (`medical_record_id`) REFERENCES `medical_records` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_bdd7a42bec5b526d13a9ab5164d` FOREIGN KEY (`supply_id`) REFERENCES `medical_supplies` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_e2a126c7ea57e81775ed57ef729` FOREIGN KEY (`inventoryTransactionId`) REFERENCES `inventory_transactions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `medical_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medical_records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `visit_date` datetime NOT NULL,
  `chief_complain` varchar(255) NOT NULL,
  `dialogsis` varchar(255) NOT NULL,
  `clinical_notes` text NOT NULL,
  `instructions` text NOT NULL,
  `status` enum('success','pending','false') NOT NULL,
  `appointment_id` int DEFAULT NULL,
  `admission_id` int DEFAULT NULL,
  `patient_id` int NOT NULL,
  `doctor_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_medicalRecords_doctor` (`doctor_id`),
  KEY `idx_medicalRecords_patient` (`patient_id`),
  KEY `idx_medicalRecords_admission` (`admission_id`),
  KEY `idx_medicalRecords_appointment` (`appointment_id`),
  CONSTRAINT `FK_4185307f688fcdf88d700b23631` FOREIGN KEY (`appointment_id`) REFERENCES `appointments` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_43e2800e756c913a6c7a07cc271` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_57a1aae159d10a5626456ee73d5` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_97bdff52e3f76ec841c8a2c73c0` FOREIGN KEY (`admission_id`) REFERENCES `admissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `medical_supplies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medical_supplies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `unit` varchar(50) DEFAULT NULL,
  `price` decimal(12,2) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `medications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `unit` varchar(50) DEFAULT NULL,
  `price` decimal(12,2) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `message` text,
  `is_read` tinyint NOT NULL DEFAULT '0',
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_notification_user` (`user_id`),
  CONSTRAINT `FK_9a8a82462cab47c73d25f49261f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dob` date DEFAULT NULL,
  `gender` enum('male','female','other') NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `insurance_number` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_patient_user` (`user_id`),
  CONSTRAINT `FK_7fe1518dc780fd777669b5cb7a0` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_method` enum('cash','credit card','bank tranfer','stripe') NOT NULL DEFAULT 'cash',
  `amount` decimal(12,2) NOT NULL DEFAULT '0.00',
  `payment_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` enum('success','pending','false') NOT NULL DEFAULT 'pending',
  `invoice_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_563a5e248518c623eebd987d43e` (`invoice_id`),
  CONSTRAINT `FK_563a5e248518c623eebd987d43e` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `pharmacy_sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pharmacy_sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `sale_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `amount` decimal(12,2) NOT NULL,
  `patient_id` int DEFAULT NULL,
  `medication_id` int DEFAULT NULL,
  `inventory_transaction_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_pharmacy_inventory_tx` (`inventory_transaction_id`),
  KEY `idx_pharmacy_medication` (`medication_id`),
  KEY `idx_pharmacy_patient` (`patient_id`),
  CONSTRAINT `FK_1f3392f890200b54c6063aedb78` FOREIGN KEY (`inventory_transaction_id`) REFERENCES `inventory_transactions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_6112f5e4e1430579916d555d0c1` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_ff19aaf7ae640daae41d38b6d25` FOREIGN KEY (`medication_id`) REFERENCES `medications` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `prescriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescriptions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prescribed_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `notes` text NOT NULL,
  `medical_record_id` int NOT NULL,
  `prescribed_by` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_prescription_doctor_id` (`prescribed_by`),
  KEY `idx_prescription_medical_record_id` (`medical_record_id`),
  CONSTRAINT `FK_b969ae3bfc706a89ea10ffa27c7` FOREIGN KEY (`prescribed_by`) REFERENCES `doctors` (`id`),
  CONSTRAINT `FK_c08f4e7ba1be3af7cf50e4d2eae` FOREIGN KEY (`medical_record_id`) REFERENCES `medical_records` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `role_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_role_permission_unique` (`role_id`,`permission_id`),
  KEY `FK_17022daf3f885f7d35423e9971e` (`permission_id`),
  CONSTRAINT `FK_17022daf3f885f7d35423e9971e` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_178199805b901ccd220ab7740ec` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rooms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_number` varchar(20) DEFAULT NULL,
  `room_type` enum('exam','inpatient','procedure','consult') NOT NULL,
  `capacity` int NOT NULL DEFAULT '1',
  `deparment_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_room_department_roomNumber` (`deparment_id`,`room_number`),
  CONSTRAINT `FK_5d8e94c3828076ec953a49613fc` FOREIGN KEY (`deparment_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('exam','test','procedure','consult','package') NOT NULL DEFAULT 'exam',
  `price` decimal(12,2) NOT NULL DEFAULT '0.00',
  `description` text,
  `active` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `slots`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slots` (
  `id` int NOT NULL AUTO_INCREMENT,
  `start_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `end_time` datetime NOT NULL,
  `status` enum('available','booked','completed') NOT NULL DEFAULT 'available',
  `room_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_slots_room` (`room_id`),
  KEY `idx_slots_room_start` (`room_id`,`start_time`),
  CONSTRAINT `FK_62e045c2a51bd286cf9d263a2b9` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `staff_attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff_attendance` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `shift` enum('morning','afternoon','night') NOT NULL,
  `present` tinyint NOT NULL,
  `note` text NOT NULL,
  `staff_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_staffAttendance_staff` (`staff_id`),
  KEY `idx_staffAttendance_staff_date_shift` (`staff_id`,`date`,`shift`),
  CONSTRAINT `FK_b802b1f63bc02ddc89a701666c0` FOREIGN KEY (`staff_id`) REFERENCES `staffs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `staff_payrolls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff_payrolls` (
  `id` int NOT NULL AUTO_INCREMENT,
  `month` year DEFAULT NULL,
  `total_shift` int DEFAULT NULL,
  `bonus` decimal(12,2) NOT NULL,
  `deduction` decimal(12,2) NOT NULL,
  `net_salery` decimal(12,2) NOT NULL,
  `staff_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_staffPayrolls_staff` (`staff_id`),
  KEY `idx_staffPayrolls_staff_month` (`staff_id`,`month`),
  CONSTRAINT `FK_e387652de5edf6a04443aba1e60` FOREIGN KEY (`staff_id`) REFERENCES `staffs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `staff_schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff_schedules` (
  `id` int NOT NULL AUTO_INCREMENT,
  `day_of_week` tinyint DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `staff_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_staffSchedule_staff` (`staff_id`),
  KEY `idx_staffSchedule_staff_dayOfWeek_startTime` (`staff_id`,`day_of_week`,`start_time`),
  CONSTRAINT `FK_7e5a137a3496008f8b164e7c477` FOREIGN KEY (`staff_id`) REFERENCES `staffs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `staffs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staffs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `staff_type` enum('nurse','technician','receptionist','parmarcist','admin') NOT NULL,
  `active` tinyint NOT NULL DEFAULT '1',
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_staff_user` (`user_id`),
  CONSTRAINT `FK_7953eac210a0e34a3e82a3c5332` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `stock_batch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock_batch` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item_type` enum('medication','medical supply') NOT NULL,
  `item_id` int DEFAULT NULL,
  `batch_no` varchar(64) DEFAULT NULL,
  `on_hand` int DEFAULT NULL,
  `unit_cost` decimal(12,2) DEFAULT NULL,
  `supplier_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_stockBathc_itemType_itemId` (`item_type`,`item_id`),
  KEY `idx_stockBatch_supplier` (`supplier_id`),
  KEY `idx_stockBatch_itemType_itemId_batchNo` (`item_type`,`item_id`,`batch_no`),
  CONSTRAINT `FK_be1a0f15669ea6bab7cee2abe04` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `contact_info` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `supplier_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item_type` enum('medication','medical_supply') NOT NULL,
  `item_id` int DEFAULT NULL,
  `supply_price` decimal(12,2) NOT NULL,
  `supplier_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_supplierItem_itemType_itemId` (`item_type`,`item_id`),
  KEY `idx_supplierItem_supplier` (`supplier_id`),
  KEY `idx_supplierItem_supplier_itemType_itemId` (`supplier_id`,`item_type`,`item_id`),
  CONSTRAINT `FK_375c2a8790b09a481638a33a0f3` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_user_role_unique` (`user_id`,`role_id`),
  KEY `FK_b23c65e50a758245a33ee35fda1` (`role_id`),
  CONSTRAINT `FK_87b8888186ca9769c960e926870` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_b23c65e50a758245a33ee35fda1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `role` enum('patient','doctor','nurse','staff','admin') NOT NULL DEFAULT 'patient',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

