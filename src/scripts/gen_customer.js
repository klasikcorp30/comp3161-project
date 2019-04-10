var fs = require("fs");
var faker = require('faker');


for(var i=0; i<500000; i++){
    let fname = faker.name.firstName();
    let lname = faker.name.lastName();
    let email = faker.internet.email();
    let phone = faker.phone.phoneNumberFormat();
    fs.appendFile('person11.sql',`INSERT INTO customer(firstname,lastname,email,phone) VALUES("${fname}", "${lname}", "${email}", "${phone}");\n`);
}



