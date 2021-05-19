let arr =[1,2,3,4,5];
// slice(start,[end])
let a=arr.slice(2); //returns a new array() not a in place operation
let b=arr.slice(2,4); //returns a new array() not a in place operation
console.log(a);
console.log(b);

let inp =process.argv.slice(2);
 function getInt(inp){
    for (let i = 0; i < inp.length; i++) {
        console.log(parseInt(inp[i])); 
    }
 }
 getInt(inp);

// slice(-1) => gives last Element