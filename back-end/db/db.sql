CREATE DATABASE `ciapetro`;

USE DATABASE `ciapetro`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` VARCHAR(60) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `register_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `unq_idx_by_uid` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(60) DEFAULT NULL,
  `source_coin` varchar(3) DEFAULT NULL,
  `destiny_coin` varchar(3) DEFAULT NULL,
  `value_to_convert` double DEFAULT NULL,
  `conversion_value` double DEFAULT NULL,
  `create_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_by_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;