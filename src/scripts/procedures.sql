DELIMITER //
CREATE PROCEDURE GetLaptopBrand(IN laptopBrand varchar(100))
BEGIN
 SELECT * FROM laptop_details WHERE prod_brand = laptopBrand LIMIT 100;
END;
//

DELIMITER ; 

--Check if user credit card number exist
DELIMITER //
CREATE PROCEDURE checkCreditCard(IN c_number varchar(100))
BEGIN
 SELECT * FROM credit_card WHERE c_number = c_number;
END;
//

DELIMITER ; 





