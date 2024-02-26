// Sync:
/*console.log("App is starting!!!");
console.log("App is under construcyion!!!");
console.log("App is deployed...!!!");*/

// Asynchronous:
/*console.log("App is starting!!!");
setTimeout(()=>console.log("Hello world!!"),3000);
console.log("App is deployed...");
setTimeout(()=>console.log("App is under testing!!!"),2000)*/

// Call Back:

/*var sayhello = () =>{
   sayHi()
   console.log("Say Hello!!");
}

var sayHi = () =>{
   console.log("Say Bye!!");
}
sayhello()*/
// Callback Function:

/*var arr = [12,13,14,15]
var res = arr.map((ele)=>ele*2)
console.log(res);*/

function f1(){
   function f2(){
      function f3(){
         function f4(){
            console.log("Hello World")
         }
      }
   }
}