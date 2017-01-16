CREATE USER 'ekg'@'localhost' IDENTIFIED BY '83U}?nq}Nf;8!nk.';
CREATE DATABASE login;

DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text CHARACTER SET utf8 NOT NULL,
  `password` text CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

LOCK TABLES `login` WRITE;
INSERT INTO `login` VALUES (1,'ekg3000','ekg3000');
UNLOCK TABLES;

GRANT ALL PRIVILEGES ON login.* TO 'login'@'localhost';
