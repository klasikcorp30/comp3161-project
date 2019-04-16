var fs = require('fs')
var argv = process.argv

var laptops = require('./data.json');

fs.appendFile(
    'laptops.sql',
    `USE ${argv[2]};
     
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
    ${laptops.map((item) => {
            let price;
            let randPrice =[5000,6000,45999,23002,3349,5560,6500];
            let randOS = ['Windows', 'Linux'];
            let os;
            item.OpSys === ''? os = randOS[Math.floor(Math.random()*2)]: os = item.OpSys;
            isNaN(parseInt(item.Price))? price = randPrice[Math.floor(Math.random()*6) + 1]: price = parseInt(item.Price)
            return `INSERT INTO laptop_details(prod_brand,prod_model,prod_processor,RAM,storage,OS,price) VALUES('${item.Brand}', '${item.Model}', '${item.Processor}', '${item.Ram}', '${item.Storage}', '${os}', ${price});\n`
        })}`,err => console.log(err));

   