// function label_create(tagname,attrname,attrvalue,content){
//     var ele1 = document.createElement(tagname);
//     ele1.setAttribute(attrname,attrvalue);
//     ele1.innerHTML = content;
//     return ele1;
// }

// function break_create(){
//     var ele2 = document.createElement("br");
//     return ele2;
// }

// function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
//     var element = document.createElement(tagname);
//     element.setAttribute(attr1name,attr1value);
//     element.setAttribute(attr2name,attr2value);
//     return element;
// }
// function button_create(tagname,attr3name,attr3value,attr4name,attr4value,content1){
//     var ele3 = document.createElement(tagname);
//     ele3.setAttribute(attr3name,attr3value);
//     ele3.setAttribute(attr4name,attr4value);
//     ele3.innerHTML = content1;
//     return ele3;
// }

// function foo(){
//     var first = document.getElementById("firstname").value;
//     console.log(`First Name: ${first}`);
//     var middle = document.getElementById("middlename").value;
//     console.log(`Middle Name: ${middle}`);
//     var last = document.getElementById("lastname").value;
//     console.log(`Last Name: ${last}`);
//     var mail = document.getElementById("email").value;
//     console.log(`Email: ${mail}`);
//     var pass = document.getElementById("password").value;
//     console.log(`Password: ${pass}`);
// }

// var firstname = label_create("label","for","firstname","First Name:");
// var firstname_break = break_create();
// var firstname_input = input_create("input","type","text","id","firstname");
// var break1 = break_create();

// var middlename = label_create("label","for","middlename","Middle Name:");
// var middlename_break = break_create();
// var middlename_input = input_create("input","type","text","id","middlename");
// var break2 = break_create();

// var lastname = label_create("label","for","lastname","Last Name:");
// var lastname_break = break_create();
// var lastname_input = input_create("input","type","text","id","lastname");
// var break3 = break_create();

// var email = label_create("label","for","email","Email");
// var email_break = break_create();
// var email_input = input_create("input","type","email","id","email");
// var break4 = break_create();

// var password = label_create("label","for","password","Password:");
// var password_break = break_create();
// var password_input = input_create("input","type","password","id","password");
// var break5 = break_create();

// var button = button_create("button","type","button","onclick","foo()","Submit");


// document.body.append(firstname,firstname_break,firstname_input,break1,middlename,middlename_break,middlename_input,break2,lastname,lastname_break,lastname_input,break3,email,email_break,email_input,break4,password,password_break,password_input,break5,button)
function create_tr(){
    var tr =document.createElement("tr");
    return tr;
}

function create_th(tagname,attrname,attrvalue,content){
var ele =document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}

function create_td(tagname,content){
var ele =document.createElement(tagname);
ele.innerHTML = content;
return ele;
}

var table =document.createElement("table");
table.className = "table";

var thead =document.createElement("thead");
thead.className = "thead-dark";

var thead_tr = create_tr();
var th1 =  create_th("th","scope","col","#");
var th2 =  create_th("th","scope","col","First");
var th3 = create_th("th","scope","col","Last");
var th4 = create_th("th","scope","col","Handle");

thead_tr.append(th1,th2,th3,th4);
thead.append(thead_tr);

var tbody = document.createElement("tbody");
var body_tr1 = create_tr();
var body_th1 = create_th("th","scope","row","1");
var td1 = create_td("td","Mark");
var td2 = create_td("td","Otto");
var td3 = create_td("td","@mdo");

var body_tr2 = create_tr();
var body_th2 = create_th("th","scope","row","2");
var td4 = create_td("td","Jacob");
var td5 = create_td("td","Thornton");
var td6 = create_td("td","@mdo");

var body_tr3 = create_tr();
var body_th3 = create_th("th","scope","row","3");
var td7 = create_td("td","Larry");
var td8 = create_td("td","the Bird");
var td9 = create_td("td","@twitter");

body_tr1.append(body_th1,td1,td2,td3);
tbody.append(body_tr1);

body_tr2.append(body_th2,td4,td5,td6);
tbody.append(body_tr2);

body_tr3.append(body_th3,td7,td8,td9);
tbody.append(body_tr3);

table.append(thead,tbody);
document.body.append(table);






