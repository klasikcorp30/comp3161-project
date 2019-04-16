DROP VIEW  CardDetailsView IF EXISTS ;
CREATE VIEW CardDetailsView AS SELECT c_number FROM cards;

DROP VIEW  ReceiptView IF EXISTS;
CREATE VIEW ReceiptView AS SELECT * FROM laptop_details NATURAL JOIN purchase AS FirstJoin NATURAL JOIN transaction_cost;
