const fs= require('fs');

//input and sepeation og args and files
let inp = process.argv.slice(2);
let args=[],files=[];
for (let i = 0; i < inp.length; i++) {
    if(inp[i]=='-b' || inp[i]=='-s' || inp[i]=='-n'){
        args.push(inp[i]);
    }else files.push(inp[i]);
}

// console.log(args,files);

//checking for files, providing appropriate result
let totaldata="";
for (let i  = 0; i < files.length; i++) {
    if(fs.existsSync(files[i])){
        let data= fs.readFileSync(files[i]);
        totaldata+=data+"\n";
    }else{
        console.log("------ ERRROR : FILE NOT FOUND -----------");
        console.log(files[i],"does not exists!");
        return ;
    }
}

// console.log(totaldata);
// Switches
enabledS= args.includes('-s');
enabledB= args.includes('-b');
enabledN= args.includes('-n');
let data = totaldata.split('\n');

// console.log("s, b, n", enabledS,enabledB,enabledN);
// FOR -b -n whichever comes first will run 




// -s 
if(enabledS){
    let manipulated="";
    // console.log(data);
    for(let i=0;i<data.length;i++){
        if(data[i]!='' && data[i]!='\r'){
            if(i!=data.length-1)
                manipulated+=data[i]+'\n';
            else  manipulated+=data[i];
        }

    }
    // updating after modification
    totaldata=manipulated;
}

// -n
if((enabledN==true && enabledB==false) || args.indexOf('-n')<args.indexOf('-b')){
    let manipulated="";
    // console.log(data);
    let c=1;
    for (let i = 0; i < data.length; i++) {
        if(data[i]!=''){
            let tmp= (c++) + '. ' + data[i]+'\n';
            manipulated+=tmp;
        }
    }
    totaldata=manipulated;
}


// -b
if((enabledB==true && enabledN==false ) || (enabledB && enabledN && args.indexOf('-b')<args.indexOf('-n'))){
    let manipulated="";
    // console.log(data);
    let c=1;
    for (let i = 0; i < data.length; i++) {
        if(data[i]!='\r' && data[i]!=''){
            let tmp= c++ + '. ' + data[i]+'\n';
            manipulated+=tmp;
        }
    }
    totaldata=manipulated;
}

//Printing the contenet after all modifications specified
console.log(totaldata);