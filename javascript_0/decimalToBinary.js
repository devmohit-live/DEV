function d2b(n){
    let b=0,pv=1; // always intialize else you would get undefined as ans or Nan as an error

    while(n>0){
        let r= n%2;
        b= b + r*pv;
        pv= pv * 10;
        n=Math.floor(n/2); // to avoid decimal values -> Infinity
    }
    return b;
}

let ans =d2b(26);
console.log(ans);