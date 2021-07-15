const req = require('request');
const cheerio = require('cheerio');

req('https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-delhi-capitals-29th-match-1254086/ball-by-ball-commentary',callback);

function callback(error,response,html){
    if(!error){
        manipulator = cheerio.load(html);
        let data = manipulator('.col-14.col-md-15.col-lg-14 .match-comment-long-text p');
        let comment= manipulator(data[0]).text();


        console.log(comment);
    }
}