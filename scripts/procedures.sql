DELIMITER //
DROP PROCEDURE IF EXISTS GetLaptopBrand;
CREATE PROCEDURE GetLaptopBrand(IN laptopBrand varchar(100))
BEGIN
 SELECT * FROM laptop_details WHERE prod_brand LIKE CONCAT('%', laptopBrand,'%') LIMIT 100;

END;
//

DELIMITER ; 

--Check if user credit card number exist
DELIMITER //
DROP PROCEDURE IF EXISTS checkCreditCard;
CREATE PROCEDURE checkCreditCard(IN c_number varchar(100))
BEGIN
 SELECT * FROM credit_card WHERE c_number = c_number;
END;
//

DELIMITER ;

-- DELIMITER //
-- CREATE PROCEDURE getTotalCost(IN trans_num INT(11), IN customerid INT(11))


DELIMITER //
DROP PROCEDURE IF EXISTS GetLaptopModel;
CREATE PROCEDURE GetLaptopModel(IN laptopModel varchar(100))
BEGIN
SELECT * FROM laptop_details WHERE prod_model LIKE CONCAT('%',laptopModel,'%') LIMIT 100;
END;
//

DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS GetLaptopStorage;
CREATE PROCEDURE GetLaptopStorage(IN laptopStorage varchar(100))
BEGIN
SELECT * FROM laptop_details WHERE storage LIKE CONCAT('%',laptopStorage,'%') LIMIT 100;
END;
//

DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS GetLaptopRAM;
CREATE PROCEDURE GetLaptopRAM(IN laptopRAM varchar(100))
BEGIN
SELECT * FROM laptop_details WHERE RAM LIKE CONCAT('%',laptopRAM,'%') LIMIT 100;
END;
//

DELIMITER ;

DELIMITER //
CREATE PROCEDURE IF NOT EXISTS GetLaptopPrice(IN laptopPrice varchar(100))
BEGIN
SELECT * FROM laptop_details WHERE price LIKE CONCAT('%',laptopPrice,'%') LIMIT 100;
END;
//

DELIMITER ;

