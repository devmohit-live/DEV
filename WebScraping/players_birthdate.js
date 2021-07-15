const cheerio=require('cheerio');
const request=require('request');
const fs=require('fs');

let url ="https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-delhi-capitals-29th-match-1254086/full-scorecard";
let obj={};

//requested the url
request(url,callback);

// console.log("Name","\t","Born");

function getDOB(error,response,html){
    if(!error){
        let mt = cheerio.load(html);
        let details=mt('.player-card-description.gray-900');
        let name = mt(details[0]).text();
        let dob = mt(details[1]).text();
        // console.log(name,"\t",dob);
        obj[name]=dob;
        //overwriting is done here, but it is requires here as it is async taks
        fs.writeFileSync('data.json',JSON.stringify(obj)); // it is done here repeadtly not after loop end bcz it is a async work(request to response) and javacript ignores these tasks and data object will remain empty

    }
}


//callback function
function callback(error,response,html){
    if(!error){

        let manipulator = cheerio.load(html);

        //getting the all tables 
        let allPlayersAnchor = manipulator(".Collapsible__contentInner tbody a.small")


        //iterating in bot tables
        for(i=0;i<allPlayersAnchor.length;i++){
            let player = manipulator(allPlayersAnchor[i]);
            // let name = player.text();
            let link= player.attr('href');
            // // console.log(name,link);
            // // console.log("-------");
            let purl = 'https://www.espncricinfo.com/'+link;
            request(purl,getDOB);
            }
        }

        console.log(obj);
       
    }