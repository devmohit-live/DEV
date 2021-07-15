const cheerio=require('cheerio');
const request=require('request');

let url ="https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-delhi-capitals-29th-match-1254086/full-scorecard";


//requested the url
request(url,callback);


//callback function
function callback(error,response,html){
    if(!error){

        let manipulator = cheerio.load(html);

        //getting the bowlers tables list
        let tables = manipulator(".table.bowler")


        //initalize
        let max=-1;
        let player="";
        //iterating in bot tables
        for(tableidx=0;tableidx<tables.length;tableidx++)
        {
            //getting tr's list for each table
            let trs = manipulator(tables[tableidx]).find('tbody tr');

            //iterating to each row
            for(let i=0;i<trs.length;i++){
                //getting all td's from a row
                let td = manipulator(trs[i]).find('td');

                //  getting attributes
                let name = manipulator(td[0]).text();
                let wicket = manipulator(td[4]).text();

                wicket = parseInt(wicket);

                // console.log('Name :',name,", Wicket: ",wicket);
                if(max<wicket){
                    player=name;
                    max=wicket;
                }   
            }
        }
        console.log('Max wicket is ',max," take by player", player);
    }
}