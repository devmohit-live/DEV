let fs= require('fs');
let path= require('path'); // to get extname method

let address = process.argv.slice(2)[0];
// console.log(address);

let contents=fs.readdirSync(address);
// console.log(contents);
dirtectoryMapper={
Images: ['.jpg','.gif','.png','jpeg'],
Audios: ['.mp3','.m4a'],
Videos: ['.mkv','.avi','.mp4'],
Compressed: ['.zip','.rar','.7z','.tar'],
Documents: ['.txt','.doc','.pdf'],
SubDirectories_and_Others: [''],
Others: []
};

function findAndMove(folder,mapper,file){
    let belongstoOthers=true;
    // 0. Find the extension : //for directory extname give blank=> empty string
    let ext = path.extname(file);
    console.log(file,ext)

    // 1. find the correct directory
    for(let key in mapper){

        let extensionsOfDirectory = mapper[key];
        //for other category ext will be ext =epmty string => extensionsOfDirectory=[]

        if(extensionsOfDirectory.includes(ext)==true){
            belongstoOthers=false;
            // 2. check existance or directory/made directory
            // console.log("extension is", ext,"directory is "+ key);
            let directory = path.join(folder,key) //-> foler/Images
            let directoryExists= fs.existsSync(directory);
            if(directoryExists==false){
                fs.mkdirSync(directory);
            }


            // 3. move the file
            let oldpath = path.join(folder,file);
            let newpath = path.join(directory,file);
            fs.renameSync(oldpath,newpath); 
            break;
        }
    }

    if(belongstoOthers==true){
            // 2. check existance or directory/made directory
            // console.log("extension is", ext,"directory is "+ key);
            let directory = path.join(folder,key) //-> foler/Images
            let directoryExists= fs.existsSync(directory);
            if(directoryExists==false){
                fs.mkdirSync(directory);
            }


        console.log('File is '+ file);
        let oldpath = path.join(folder,file);
        let newpath = path.join(directory,file);
        console.log("old", oldpath," new: ",newpath);
        fs.renameSync(oldpath,newpath); 
    }
}




for(let i=0;i<contents.length;i++){
    findAndMove(address,dirtectoryMapper,contents[i]);
}
