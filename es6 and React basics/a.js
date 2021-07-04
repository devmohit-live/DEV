// let a=[4,8,9,7,12,13,16];

// let b=[];

// for(let i =0;i<a.length;i++){
//     if(i==3){
//         b.push(3);
//     }
//     b.push(a[i]);
// }

// console.log(b);

// let c =[...a.slice(0,3),3,...a.slice(3)];
// console.log(c);


// Destructuring:

//Arrays

// let a= ["Ram","SHyam","Mohit","abc","def"];
// let [b,c] = a; // b=ram, c=shyam

// let [p,,,q]=a; //p=ram, next 2 values will be ignored , q= abc

// console.log(b,c,p,q);


// // Objects

// let ob ={
//     x:1,y:2,
//     myf: function(x){
//         console.log("func");
//     }
// };

// let {x}=ob; //1 as x is present
// let {y}=ob; // 2 as y is present
// let {z}=ob; //undefined as z key isn't present in ob;
// let {myf} = ob;


// console.log(x);
// console.log(y);
// console.log(z);
// console.log(myf);
// myf();



let ob={
    x:{
        z: "mohit"
    },
    y:2
};

let { x : {z} } = ob;

console.log(z);