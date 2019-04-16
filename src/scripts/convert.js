let csvjson = require('csvjson');
let fs = require('fs');

// var options = {
//     delimiter : ',' , 
//     quote     : '"' 
// };

let file_data = fs.readFileSync('./ccDetails.csv', { encoding : 'utf8'});

let data = csvjson.toObject(file_data);

fs.writeFile('./cc.json',JSON.stringify(data), err => {return err});

// console.log(data);