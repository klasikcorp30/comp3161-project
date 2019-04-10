var csvjson = require('csvjson');
var fs = require('fs')

// var options = {
//     delimiter : ',' , 
//     quote     : '"' 
// };

var file_data = fs.readFileSync('./data.csv', { encoding : 'utf8'})

var data = csvjson.toObject(file_data);

fs.writeFile('./data.json',JSON.stringify(data), err => {return err});

// console.log(data);