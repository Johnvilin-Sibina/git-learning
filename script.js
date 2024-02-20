//How to create a html element dynamically
/*var ele = document.createElement("div");
ele.innerHTML = "this is a dynamically created div"
document.body.append(ele);*/

/*var ele = document.createElement("div");
ele.innerHTML = "this is a dynamically created div"
p.innerHTML = "This is a dynamically created p"
document.body.append(ele,p);*/

/*for(var i=0;i<10;i++){
    var ele = document.createElement("div");
    ele.innerHTML = "this is a dynamically created div"
    document.body.append(ele);
 }*/

/*var arr = ["this is div", "this is a static div"]
for(var i=0;i<arr.length;i++){
         var ele = document.createElement("div");
         ele.innerHTML = arr[i];
         document.body.append(ele);
 }*/

// For adding classname and id name
/*var ele = document.createElement("div");
ele.innerHTML = "this is a dynamically created div"
ele.className = "main"
ele.id = "main1"*/

// How to add attributes to a tag
/*var a = document.createElement("a");
a.setAttribute("href", "");
a.setAttribute("target","_blank");
document.body.append(ele,a);*/

//For nested structure
/*var div = document.createElement("div");
var p = document.createElement("p");

p.innerHTML = "This is p";  //Parent.append("child");
div.append("p");

document.body.append(div); //append the parent to the body tag*/

//How to create and append nested elements task
/*var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";
var col = document.createElement("div");
col.className = "col";
col.innerHTML = "This is col"
row.append(col);
container.append(row);
document.body.append(container);*/

// How to extract content from a tag
/*var ele = document.getElementById("main1").innerHTML;
console.log(ele);*/

// How to extract data from form
function foo(){
    var ele = document.getElementById("email").value
    console.log(ele);
}
