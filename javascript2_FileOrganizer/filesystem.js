
// Import ing Filesystem
let fs = require('fs');


// ## Using Synchronous Functions 

// ### Read and Write

let con = fs.readFileSync('abc.txt');
console.log(con); //-> displays only the buffer
let readable = con.toString();
console.log(readable);


let file = 'op.txt';
let data = "this is the output data.\r\n"
fs.writeFileSync(file,data); // if file doesn't exists it creates the file, overwrites the previous data if already exists

fs.appendFileSync(file,"this is appended data using appendFileSynce method");


// ##### Deleting a File
fs.unlinkSync('todelete.txt');


// #### Creating a folder 
fs.mkdirSync("New Directory");

// ### Checking if a file,directory exits on not

let status = fs.existsSync('abc.txt');
let st = fs.existsSync('New Directory');
console.log("Directory exists "+st);
console.log("file exits "+status);



// ### Copying data from 1 to another

//1
let rdata= fs.readFileSync('op.txt');
fs.writeFileSync('ch.txt',rdata);

//2 Better Way 
fs.copyFileSync('op.txt','opop.txt');