// getElementsByClassName:
var res = document.getElementsByClassName("main");
console.log(res);
// getElementsByTagName
var res = document.getElementsByTagName("p");
console.log(res);
// querySelector:
var res = document.querySelector("p");
console.log(res);
// querySelectorAll:
var res = document.querySelectorAll("p");
console.log(res);
// addEventListener:
var button = document.createElement("button");
button.setAttribute("type","button");
button.innerHTML = "Click Here";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
    console.log("Hello World")
}

// append vs append
var div = document.createElement("div");
var p = document.createElement("p");
var span = document.createElement("span");
div.append(p,span);
document.body.append(div);
var div = document.createElement("div");
var h1 = document.createElement("h1");
div.appendChild(h1);
document.body.append(div);

// Alert
var button1 = document.createElement("button");
button1.setAttribute("type","button");
button1.innerHTML = "Click Here";
button1.addEventListener("click",foo1);
document.body.append(button1);

 function foo1(){
    alert ("Hello World")
 }

 // prompt
var button2 = document.createElement("button");
button2.setAttribute("type","button");
button2.innerHTML = "Click Here";
button2.addEventListener("click",foo2);
document.body.append(button2);

 function foo2(){
    var res = parseInt(prompt("Enter the age of the student:"));
    console.log(res);
 }
 // confirm
var button3 = document.createElement("button");
button3.setAttribute("type","button");
button3.innerHTML = "Click Here";
button3.addEventListener("click",foo3);
document.body.append(button3);

function foo3(){
    var res = confirm("Do you want to close it!!")
    console.log(res);
 }

 // How to dispaly data entered by user inside the body of HTML document?

var button4 = document.createElement("button");
button4.setAttribute("type","button");
button4.innerHTML = "Click Here";
button4.addEventListener("click",foo4);
document.body.append(button4);


 function foo4(){
    var res = parseInt(prompt("Enter the age of the student:"));
    var span = document.createElement("span");
    span.innerHTML = `The age of the student is ${res}`;
    document.body.append(span);

 }