var date = document.createElement("input");
date.setAttribute("type","date");
date.id = "dob";

var button = document.createElement("button");
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Click Me";
button.addEventListener("click",date_data);

document.body.append(date,button);

function date_data(){
   var input = document.getElementById("dob").value;
   var input_date = new Date(input);
   var currentdate = new Date();
   

   var millisecdiff = parseInt(currentdate.getTime()-input_date.getTime())
   
   var secondsdiff = Math.floor(millisecdiff/1000);
    
   var minutesdiff = Math.floor(secondsdiff/60);
   

   var hoursdiff = Math.floor(minutesdiff/60);
   

   var daydiff = Math.floor(hoursdiff/24);
   

   var yeardiff = currentdate.getFullYear() - input_date.getFullYear();
   
   
   var monthdiff = (yeardiff*12)+(currentdate.getMonth()-input_date.getMonth());
   

   var p1 = document.createElement("p");
   p1.innerHTML = `Years: ${yeardiff}`;

   var p2 = document.createElement("p");
   p2.innerHTML = `Months: ${monthdiff}`;

   var p3 = document.createElement("p");
   p3.innerHTML = `Days: ${daydiff}`;

   var p4 = document.createElement("p");
   p4.innerHTML = `Hours: ${hoursdiff}`;

   var p5 = document.createElement("p");
   p5.innerHTML = `Minutes: ${minutesdiff}`;

   var p6 = document.createElement("p");
   p6.innerHTML = `Seconds: ${secondsdiff}`;

   var p7 = document.createElement("p");
   p7.innerHTML = `MilliSeconds: ${millisecdiff}`;
   
   document.body.append(p1,p2,p3,p4,p5,p6,p7);
   
}

