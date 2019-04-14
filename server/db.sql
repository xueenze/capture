CREATE DATABASE `capture`;

CREATE TABLE `capture`.`comment` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NULL,
  `capturesrc` LONGTEXT NULL,
  `status` TINYINT(1) NULL,
  PRIMARY KEY (`ID`));