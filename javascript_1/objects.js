//k-v pairs

// let obj={}; 
// console.log(obj);

function check(){
    console.log("This is check");
    return "return from check"
}


let tony={
    name: "Tony",
    lastname : "Starr",
    age: 56,
    friends: ["Steve","Bruce","Spiderman"],
    address:{
        city: "xyz",
        flatno: 123,
        zip: "fdfdf"
    },
    sayhi: function hi(){
        console.log("hiiii");
        return "tony says hi!";
    },

    //can use outside functions too but not a good practice
    usefun: check(),
    isAvenger: true,
    other: null,
    svc: undefined,
    
}

// console.log(tony);


// // tony.sayhi();


// // Two ways to access data 
 
// //1st
console.log(tony.name);
console.log(tony.isAvenger);
console.log(tony.friends);
console.log(tony.friends[1]);
console.log(tony.address.city);
console.log(tony.sayhi());
console.log(tony.not_a_validKey); // -> undefined

// console.log("\n")

// //2nd
// is used when we have some keys stored somewhere like in othet ds(arrays,object,etc)

console.log(tony['name']);
console.log(tony['isAvenger']);
console.log(tony['friends']);
console.log(tony['friends'][1]);
console.log(tony['address']['city']);
console.log(tony['sayhi']() ); //-> ['keytofunction']()
console.log(tony['notvalid']);



//getting keys of object:
// 1 => not useful for accessing 
for(let k in tony){
    console.log('key is ', k) //-> string type
    
    // console.log(tony.k); // -> can't acces
    // obj.keyword is correct but obj.string is not for string use obj[string]
    console.log(tony[k]);
}

let karr = Object.keys(tony);
console.log(karr);




karr.forEach(k => {
    console.log(tony[k])
});


