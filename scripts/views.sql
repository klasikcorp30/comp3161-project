DROP VIEW  IF EXISTS CardDetailsView ;
CREATE VIEW CardDetailsView AS SELECT c_number FROM  Credit_Details;

DROP VIEW  IF EXISTS ReceiptView;
CREATE VIEW ReceiptView AS SELECT * FROM laptop_details NATURAL JOIN purchase AS FirstJoin NATURAL JOIN transaction_cost;
