DROP DATABASE IF EXISTS branch_1 ;
CREATE DATABASE branch_1;
USE branch_1;
DROP TABLE IF EXISTS customer;
CREATE TABLE customer (
	id int(100) NOT NULL AUTO_INCREMENT,
	firstname varchar(255) NOT NULL,
	lastname varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	phone varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
CREATE TABLE accounts(
	id INT(100) NOT NULL,
	username VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,

	PRIMARY KEY (id, username, password),
	FOREIGN KEY (id) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE  IF EXISTS Credit_Details;
CREATE TABLE Credit_Details(
  expiry VARCHAR(100) NOT NULL,
	c_type VARCHAR(50) NOT NULL,
	c_number INT(16) NOT NULL,
	cvv INT(3) NOT NULL,
  Address VARCHAR (100) NOT NULL,
  country VARCHAR (100) NOT NULL,
  PRIMARY KEY (c_number, cvv)
);


DROP TABLE  IF EXISTS laptop_details;
CREATE TABLE laptop_details(
  prod_id INT(100) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	prod_brand VARCHAR(255) NOT NULL,
	prod_model VARCHAR(255) NOT NULL,
	prod_processor VARCHAR(100) NOT NULL,
	RAM CHAR(50) NOT NULL,
	storage VARCHAR(100) NOT NULL,
	OS CHAR(20) NOT NULL,
	price DECIMAL(8,2) NOT NULL
);

DROP TABLE IF EXISTS REVIEW;
CREATE TABLE REVIEW(
	review_id INT(100) PRIMARY KEY ,
	review LONGTEXT NOT NULL,
	ratings INT(5)
);

DROP TABLE IF EXISTS  WAREHOUSE;
CREATE TABLE  WAREHOUSE (
	w_id  int(3) NOT NULL AUTO_INCREMENT,
	capacity FLOAT NOT NULL,
    prod_id INT(100) NOT NULL,
    PRIMARY KEY (w_id),
    FOREIGN KEY (prod_id) REFERENCES laptop_details(prod_id) ON DELETE CASCADE ON UPDATE CASCADE
 );

DROP TABLE IF EXISTS MEMBER;
CREATE TABLE MEMBER (
	id  INT(100) NOT NULL AUTO_INCREMENT  PRIMARY KEY,
	membership_type VARCHAR(100) NOT NULL,
	FOREIGN KEY (id) REFERENCES customer(id) ON DELETE CASCADE  ON UPDATE CASCADE

);

DROP TABLE  IF EXISTS GUEST;
CREATE TABLE GUEST(
	id  INT(100) NOT NULL,
	time_limit TIMESTAMP NOT NULL,
	FOREIGN KEY (id) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS transaction_cost;
CREATE TABLE transaction_cost (
  id INT(100) NOT NULL,
	trans_num INT(11) NOT NULL  AUTO_INCREMENT,
	trans_date DATE NOT NULL,
	trans_time TIMESTAMP NOT NULL,
	total_cost DECIMAL(8,2) NOT NULL,

	PRIMARY KEY(trans_num,id),
	FOREIGN KEY (id) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS sales;
CREATE TABLE sales(
  prod_id INT(100) NOT NULL,
  prod_model VARCHAR(100) NOT NULL,
  branch_id INT(11) NOT NULL,
  amount_sold INT(11) NOT NULL,
  date DATE NOT NULL,
  PRIMARY KEY (prod_id,branch_id),
	FOREIGN KEY (prod_id) REFERENCES laptop_details(prod_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE manufacturer(
  m_id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  m_name VARCHAR(100) NOT NULL,
  m_address VARCHAR(100) NOT NULL,
  m_website VARCHAR(100) NOT NULL
)