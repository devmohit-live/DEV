let s="I am Iron Man";
a= s.split(' ');
console.log(a); //array

let biggestidx=0;
for(let i=1;i<a.length;i++){
    if(a[i].length>a[biggestidx].length) biggestidx=i;
}

console.log('String with biggest length is '+ a[biggestidx],'with length of ', a[biggestidx].length);


//program to check eneding of a string ios the target string:
function confirmEnding1(str, target) {
  
  //Using index approach 
    let startpoint=str.length - target.length;

  if(startpoint<0) return false;
  else{
    if(str.substr(startpoint) == target ) return true;
  }
  return false;
}


function confirmEnding2(str,target){
     //Using negative index of slicing
  let possible_target = str.slice(-target.length);
  return possible_target==target;
}

let ans = confirmEnding1("Bastian is a good boy", "y");
console.log(ans);
ans = confirmEnding2("Bastian is a good boy", "y");
console.log(ans);

//2nd way using endsWith();
console.log("hello".endsWith("o"));
console.log("hello hi there ".endsWith("there"));
