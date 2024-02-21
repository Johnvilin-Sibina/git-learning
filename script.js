var label1 = document.createElement("label");
label1.setAttribute("for","firstname"); 
label1.innerHTML="First Name:";
var break1 = document.createElement("br");
var firstname = document.createElement("input");
firstname.setAttribute("type","text");
firstname.setAttribute("id","firstname");
var break2 = document.createElement("br"); 

var label2 = document.createElement("label");
label2.setAttribute("for","middlename");var break3 = document.createElement("br"); 
label2.innerHTML="Middle Name:";
var middlename = document.createElement("input");
middlename.setAttribute("type","text");
middlename.setAttribute("id","middlename");
var break4 = document.createElement("br"); 

var label3 = document.createElement("label");
label3.setAttribute("for","lastname");
var break5 = document.createElement("br"); 
label3.innerHTML="Last Name:";
var lastname = document.createElement("input");
lastname.setAttribute("type","text");
lastname.setAttribute("id","lastname");
var break6 = document.createElement("br"); 

var label4 = document.createElement("label");
label4.setAttribute("for","email");
var break7 = document.createElement("br"); 
label4.innerHTML="Email";
var email = document.createElement("input");
email.setAttribute("type","email");
email.setAttribute("id","email");
var break8 = document.createElement("br"); 


var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("onclick","foo()");
button.innerHTML = "Submit"

document.body.append(label1,break1,firstname,break2,label2,break3,middlename,break4,label3,break5,lastname,break6,label4,break7,email,break8,button);

function foo(){
    var first = document.getElementById("firstname").value;
    console.log(`First Name: ${first}`);
    var middle = document.getElementById("middlename").value;
    console.log(`Middle Name: ${middle}`);
    var last = document.getElementById("lastname").value;
    console.log(`Last Name: ${last}`);
    var mail = document.getElementById("email").value;
    console.log(`Email: ${mail}`);
}







