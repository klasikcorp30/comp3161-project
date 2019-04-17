let fs = require('fs');
let cc = require('./cc.json');

fs.writeFile('credit_card_details.sql',null,(err) => {return err});

fs.appendFile('credit_card_details.sql',
    `CREATE TABLE credit_card(
      id INT(100) NOT NULL PRIMARY KEY AUTO_INCREMENT,
      Expiry_Date VARCHAR(100) NOT NULL,
      Card_Type VARCHAR(50) NOT NULL,
      Credit_Card_Num INT(20) NOT NULL,
      CVV INT(3) NOT NULL,
      Address VARCHAR (100) NOT NULL,
      Country VARCHAR (100) NOT NULL 
     );
      ${cc.map((card) => {
          return `INSERT INTO credit_card(Expiry_Date, Card_Type, Credit_Card_Num, CVV, Address, Country)
          VALUES (card.Expiry_Date, card.Date, card.Card_Type, card.Credit_Card_Num, card.CVV, card.Address, card.Country);`
      
      })}
        `,
    (err) =>
    {
        return err
    }

    );
