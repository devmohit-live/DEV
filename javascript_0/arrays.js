let a=[]
a[0]=1;
a[1]=2;
a[2]=3;
a[3]=5;
console.log(a);
b=[2,5,9,1,11,1,23,56]
console.log('before '+b);


function prop(param){
    let min=9999;
    let max=-999;
    console.log(param);
    b[0]=99;
    console.log(b.length);

    for (let index = 0; index < b.length; index++) {
        let element = b[index];
        if(min>element) min=element;
        if(max<element) max=element;
        
    }
    console.log("max element is "+max+" minimum is "+min);

    // nOT WORKING
    // console.log('Largest element is : '+ Math.max(b));
    // console.log('Smallest element is : '+ Math.min(b));
} prop(b);

console.log('After '+b);

//first ans last index of target

let x=[1,2,3,1,2,5,6,4,3], target=25;
let first=-1,last=-1,flag=false;


for (let i = 0; i < x.length; i++) {
  
    if(x[i]==target){
        if(flag==false){
            first=last=i;
            flag=true;
        }else{
            last=i;
        }
    }

}

console.log(first, last);