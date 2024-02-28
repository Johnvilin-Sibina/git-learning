// Promise:

// var p1 = new Promise((resolve,reject)=>resolve("This is resolved"));
// console.log(p1);

// var p1 = new Promise((resolve,reject)=>reject("This is rejected"));
// console.log(p1);

// var p1 = new Promise((resolve,reject)=>setTimeout(()=>resolve([2,13,14,15]),1000));
// console.log(p1);

// function foo(){
//    return new Promise((resolve,reject)=>setTimeout(()=>resolve([12,13,14,15]),1000));
// }

// var p1 = foo();
// console.log(p1);

// function foo(){
//    return new Promise((resolve,reject)=>setTimeout(()=>resolve([12,13,14,15]),1000));
// }

// var p1 = foo();
// p1.then((data)=>console.log(data))

// function foo(){
//    return new Promise((resolve,reject)=>setTimeout(()=>resolve([12,13,14,15]),1000));
// }
// function bar(){
//    return new Promise((resolve,reject)=>setTimeout(()=>reject("This is rejected"),1000));
// }

// var p1 = bar();
// p1.catch((error)=>console.log(error));

// var p1 =new Promise((resolve,reject)=>{
//    resolve(setTimeout(()=>console.log("Hello! It is  Resolved"),2000))
//    reject(setTimeout(()=>console.log("Hello! It is rejected"),2000))
// })
// p1.then((data)=>console.log(data)).catch((error)=>console.log(error))

// var p1 =new Promise((resolve,reject)=>{
//    resolve("Hello! It is Resolved")
//    reject("Hello! It is rejected")
   
// })
// p1.then((data)=>console.log(data)).catch((error)=>console.log(error))

// var p1 =new Promise((resolve,reject)=>{
//    var age = parseInt(prompt("Enter your age"));
//    if(age>=18){
//       return resolve("You are eligible to vote")
//    }
//    else{
//       return reject("You are not eligible to vote")
//    }
// })
// age.then((data)=>console.log(data)).catch((error)=>console.log(error))

// Chaining:

// function mul(num){
//    return new Promise((resolve,reject)=>setTimeout(()=>resolve(num*2,1000)))
// }
// mul(5).then((data)=>{
//    console.log(data);
//    return mul(data)
// }).then((data1)=>{
//    console.log(data1)
//    return mul(data1)
// }).then((data2)=>console.log(data2))

// function mul(num){
//    return new Promise((resolve,reject)=>setTimeout(()=>resolve(num*2,1000)))
// }
// function bar(num){
//    return new Promise((resolve,reject)=>setTimeout(()=>reject(`This is rejected state ${num*2}`),1000))
// }
// mul(5).then((data)=>{
//    console.log(data);
//    return mul(data)
// }).then((data1)=>{
//    console.log(data1)
//    return bar(data1)
// }).then((data2)=>console.log(data2)).catch((error)=>console.log(error))

// How to handle multiple promises?

var p1 =new Promise((resolve,reject)=>{
   if(true){
      setTimeout(()=>resolve("P1 is resolved!!"),3000)
   }
   else{
      setTimeout(()=>reject("P1 is rejected!!"),2000)
   }
})
var p2 =new Promise((resolve,reject)=>{
   if(true){
      setTimeout(()=>resolve("P2 is resolved!!"),2000)
   }
   else{
      setTimeout(()=>reject("P2 is rejected!!"),2000)
   }
})

var p3 =new Promise((resolve,reject)=>{
   if(true){
      setTimeout(()=>resolve("P3 is resolved!!"),2000)
   }
   else{
      setTimeout(()=>reject("P3 is rejected!!"),2000)
   }
})

// p1.then((data)=>console.log(data)).catch((error)=>console.log(error))
// p1.then((data1)=>console.log(data1)).catch((error)=>console.log(error))
// p1.then((data2)=>console.log(data2)).catch((error)=>console.log(error))
// Promise.all([p1,p2,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error))
Promise.allSettled([p1,p2,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error))

