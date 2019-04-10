var Crawler = require('crawler');

var c = new Crawler({
    maxConnection: 10,
    callback: (error,res,done) =>{
        if(error){
            console.log(error)
        }else{
            var $ = res.$;
            console.log($('title').text());
        }
        done();
    }
});

c.queue({
    uri:"https://www.amazon.com/s?k=laptop",
    parameter1: "laptop",
    parameter2: "manufacturer",
    parameter3: "price",
    callback: (res,error,done)=>{
        if(error){
            console.log(error)
        }else{
            console.log(JSON.stringify(res.body))
        }

        done();
    }
});
