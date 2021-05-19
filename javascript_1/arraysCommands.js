// arr=[1,2,3,4,5]
// // push pop
// arr.push(6,7,8)
// console.log(arr);

// // pop
// let popped = arr.pop();
// console.log(popped);
// console.log(arr);


// // shift and unshift

// // shift -> pop  from Front
// let shifted  = arr.shift();
// console.log(shifted);
// console.log('after using shift (pop from start): ',arr);

// // unshift push at start
// arr.unshift(0);
// console.log('after using unshift (push at start) : ',arr);
// arr.unshift(-1,-2,-3);
// console.log(arr)



//splice(start,count,replace) => modifies the actual array -> INPLACE

//splice -> 1 used for deletion of some no. of elemets from a starting index 
a=[1,2,3,4,5,6,7,8]

//splice returns the elemets that are removed/replaced


let chk = a.splice(2,3) //-> from 2nd index remove 3 elemts ie remove 2,3,4th indices elements
console.log(a);
console.log('chk is ',chk);


a=[1,2,3,4,5,6,7,8]
a.splice(2,3,10,11,12) //from second index remove 3 elements and in that places add 10,11,12

a=[1,2,3,4,5,6,7,8]
a.splice(1,3,99,98,97,96,95) //we can add more that counted elemets too -> ONLY 3 ELEMTS got replaced rest are added in between
console.log(a);

a=[1,2,3,4,5,6,7,8]
a.splice(1,3,99,98) //we can add LESS that counted elemets too
console.log(a);
