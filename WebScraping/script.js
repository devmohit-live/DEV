const request = require('request');
const fs= require('fs');
//sending requets
request('http://www.google.com',callback);

function callback(error,response,body){
    // console.log("body", body);
    if(!error) fs.writeFileSync('index.html',body);
}






//npmjs