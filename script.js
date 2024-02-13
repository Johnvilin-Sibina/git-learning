//Find the missing number in an array.
//Solution:
/*let arr=[1,2,3,5];
for(let i=0;i<arr.length-1;i++){
    let diff=arr[i+1]-arr[i]
    if(diff==1){
        continue;
    }
    else{
        console.log(arr[i]+1);
    }
}*/
let arr=[1,2,3,5];
for(let i=0;i<arr.length;i++){
    if(arr[i]+1!=arr[i+1]){
    console.log(arr[i]+1);
    break;
    }
}
