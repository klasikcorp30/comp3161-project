-- CREATE DATABASE COMP3161FINALPROJ;
--  	USE COMP3161FINALPROJ;

/*CREATE TABLE CREDIT_DETAILS (    -- auto increment every id
 	expiry_date date,
 	card_type int(12),
 	cvv int (4) PRIMARY KEY , 
 	country varchar(100), 
 	address varchar(100)
 );*/



CREATE TABLE cards (
  c_number VARCHAR(19) NOT NULL PRIMARY KEY ,
  expdate CHAR(7) NOT NULL,
  cvv CHAR(3) NOT NULL
);

CREATE TABLE REVIEW(
	r_id int(12) PRIMARY KEY , 
	description varchar(100), 
	ratings int(5)
);

CREATE TABLE  WAREHOUSE (
	warehouse_id  int(3) ,
	capacity int, 
    product_id int(100),
    PRIMARY KEY (warehouse_id)
 );


CREATE TABLE RECIEPT(
	price decimal(8,2),
	tracking_num varchar(10),
    purchase_date date 

);



CREATE TABLE MEMBER (
	customerid  INT NOT NULL AUTO_INCREMENT  PRIMARY KEY,     -- auto increment
	fname varchar(50) NOT NULL ,
	lname varchar (50)  NOT NULL ,
	customer_phone  varchar(11),
	customer_email varchar(50)
);


CREATE TABLE GUEST(
	customerid  INT NOT NULL AUTO_INCREMENT,
	FOREIGN KEY (customerid) REFERENCES MEMBER(customerid) ON DELETE CASCADE ON UPDATE CASCADE
);