CREATE DATABASE dbclientes;

USE dbclientes;

CREATE TABLE user (
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(60) NOT NULL,
    address varchar(60) NOT NULL,
    phone varchar(15) NOT NULL
);

SHOW TABLES;

DESCRIBE dbclientes;