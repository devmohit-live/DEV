const rq=require('request');
const fs=require('fs');
const cheerio=require('cheerio');
const jspdf=require('jspdf');
let data ={};

//WE have to process the file/object creartion thing at last and calling function under funtion due to the async behaviour 
// as async behaviour makes the calling of async function at last causing inconsistent writing of data



rq('https://github.com/topics',callback);


function getIssues(topicname,proname,prolink){
    let url = prolink+'/issues';
    // console.log(url);
    // let topicarray = data[topicname];
    let obj={
        name: proname,
        issues:[]
    };

    rq(url,function(error,response,html){
        mt= cheerio.load(html);
        let issues = mt('.Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title');
        // console.log(issues.length);

        let arr=[]

        //CHECK:
       for (let i = 0; i < 5; i++) {
            let issuename = mt(issues[i]).text();
            let tmp ={}
            let issuelink= 'https://github.com'+mt(issues[i]).attr('href');
            tmp[issuename]=issuelink;
            arr.push(tmp);
       }
       // getting issues array assigned to project.issues
            obj['issues']=arr;
        // pushing the project object to appropriate topic 
            data[topicname].push(obj)

         fs.writeFileSync('GithubCheck.json',JSON.stringify(data));
    });
}


//getting 5 projects for each topic
function getprojects(topicname,topiclink){
    rq(topiclink,function(error,response,html){
        // console.log("inside getprojects");
        mt = cheerio.load(html);
       
        let projects = mt("a.text-bold");
        //Chcek:
        
        for(let i=0;i<5;i++){
            let project = mt(projects[i]).text().trim();
            let prolink ='https://github.com' + mt(projects[i]).attr('href');
            getIssues(topicname,project,prolink);
        //    console.log('Project: ',project,"Link: ",prolink);
        }

    });
}


function callback(error,response,html){
    if(!error){
        let manipulator= cheerio.load(html);
        let links = manipulator('.no-underline.d-flex.flex-column.flex-justify-center');
        //checking:


        for (let i = 0; i < links.length; i++) {
            let topiclink = 'https://github.com/' +manipulator(links[i]).attr('href');
            let topicname = manipulator(links[i]).find('p.f3').text().trim();
            // console.log("name",name,"link: ",link);
            data[topicname]=[];
            getprojects(topicname,topiclink);
        }
        
        
    }

}




// "f3.color-text-secondary.text-normal.lh-condensed" -> back class selector for project selection


let doc = new jspdf.jsPDF();
console.log(doc);