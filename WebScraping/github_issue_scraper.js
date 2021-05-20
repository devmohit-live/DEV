const rq=require('request');
const fs=require('fs');
const cheerio=require('cheerio');
const jspdf=require('jspdf');
const { profileEnd } = require('console');
let data ={};


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


    //     // console.log('\n#### Topic:',name,' --> Link:',link, '#####\n');
    //    for(let i=0;i<5;i++){
    //        let project = mt(projects[i]).text().trim();
    //        let prolink ='https://github.com' + mt(projects[i]).attr('href');
    //     //    let tmp={}
    //     //    tmp['name']=project;
    //     //    arr.push(tmp);
    //        getIssues(topicname,project,prolink);
    //     //    console.log('Project: ',project,"Link: ",prolink);
    //    }

        // data[name]=arr;

        //fs.writeFileSync('Github.json',JSON.stringify(data));
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
        
        
        // for (let i = 0; i < links.length; i++) {
        //     let link = 'https://github.com/' +manipulator(links[i]).attr('href');
        //     let topicname = manipulator(links[i]).find('p.f3').text().trim();
        //     // console.log("name",name,"link: ",link);
        //     getprojects(topicname,link);
        // }
    }

}




// "f3.color-text-secondary.text-normal.lh-condensed"