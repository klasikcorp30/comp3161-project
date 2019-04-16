let fs = require("fs");
let faker = require('faker-man');
let passwordHash = require("password-hash")

fs.writeFile('accounts_info.sql',null,(err)=>{return err});

fs.appendFile('accounts_info.sql',`
    CREATE TABLE accounts(
        id INT(100) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        PRIMARY KEY (id, username, password),
        FOREIGN KEY (id) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE
    );
`, (err)=>{return err});

let accounts = `INSERT INTO accounts(id, username,password) VALUES(0,'${faker.internet.userName()}', '${passwordHash.generate(faker.internet.password())}');\n`;
for(let i=1; i<100001; i++){
    let hash = passwordHash.generate(faker.internet.password());
    accounts += `INSERT INTO accounts(id,username,password) VALUES(${i},'${faker.internet.userName()}', '${hash}');\n`
}


fs.appendFile('accounts_info.sql',accounts,(err) => {return err});




