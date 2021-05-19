console.log(process.argv)
//process.argv => 0th  -> path of node
//process.argv => 1th  -> path of file running

console.log(process.argv[2]) //-> string type
console.log(typeof(process.argv[2]))

//converting to int
let n = parseInt(process.argv[2]) 
console.log(n);