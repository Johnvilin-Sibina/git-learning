function label_create(tagname,attrname,attrvalue,content){
    var ele1 = document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.innerHTML = content;
    return ele1;
}

function break_create(){
    var ele2 = document.createElement("br");
    return ele2;
}

function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var element = document.createElement(tagname);
    element.setAttribute(attr1name,attr1value);
    element.setAttribute(attr2name,attr2value);
    return element;
}
function button_create(tagname,attr3name,attr3value,attr4name,attr4value,content1){
    var ele3 = document.createElement(tagname);
    ele3.setAttribute(attr3name,attr3value);
    ele3.setAttribute(attr4name,attr4value);
    ele3.innerHTML = content1;
    return ele3;
}

function foo(){
    var break1 = document.createElement("br");
    var first = document.getElementById("firstname").value;
    var span1 = document.createElement("span");
    span1.innerHTML = `First Name: ${first}`;
    var break2 = document.createElement("br");

    var middle = document.getElementById("middlename").value;
    var span2 = document.createElement("span");
    span2.innerHTML = `Middle Name: ${middle}`;
    var break3 = document.createElement("br");

    var last = document.getElementById("lastname").value;
    var span3 = document.createElement("span");
    span3.innerHTML = `Last Name: ${last}`;
    var break4 = document.createElement("br");

    var mail = document.getElementById("email").value;
    var span4 = document.createElement("span");
    span4.innerHTML = `Email: ${mail}`;
    var break5 = document.createElement("br");

    var pass = document.getElementById("password").value;
    var span5 = document.createElement("span");
    span5.innerHTML = `Password: ${pass}`;
    
    document.body.append(break1,span1,break2,span2,break3,span3,break4,span4,break5,span5);
}

var firstname = label_create("label","for","firstname","First Name:");
var firstname_break = break_create();
var firstname_input = input_create("input","type","text","id","firstname");
var break1 = break_create();

var middlename = label_create("label","for","middlename","Middle Name:");
var middlename_break = break_create();
var middlename_input = input_create("input","type","text","id","middlename");
var break2 = break_create();

var lastname = label_create("label","for","lastname","Last Name:");
var lastname_break = break_create();
var lastname_input = input_create("input","type","text","id","lastname");
var break3 = break_create();

var email = label_create("label","for","email","Email");
var email_break = break_create();
var email_input = input_create("input","type","email","id","email");
var break4 = break_create();

var password = label_create("label","for","password","Password:");
var password_break = break_create();
var password_input = input_create("input","type","password","id","password");
var break5 = break_create();

var button = button_create("button","type","button","onclick","foo()","Submit");


document.body.append(firstname,firstname_break,firstname_input,break1,middlename,middlename_break,middlename_input,break2,lastname,lastname_break,lastname_input,break3,email,email_break,email_input,break4,password,password_break,password_input,break5,button)
