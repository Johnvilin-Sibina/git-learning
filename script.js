// var res = fetch("https://restcountries/v3.1/all")
// .then((data)=>data.json()).then((data1)=>console.log(data1))

// Async function always returns a promise object

/* async function foo(){
   return "Hello World"
}
console.log(foo()) */

// Basic example of using await

/* function bar(){
   return new Promise((resolve,reject)=>resolve("This is resolved!!"))
}
async function foo(){
   let res = await bar()
   console.log(res);
}
console.log(foo())*/

/* async function foo(){
   let res = await fetch("https://restcountries/v3.1/all")
   let res1 = await res.json();
   console.log(res1);
}
console.log(foo()) 

/* async function foo(){
   let res = await fetch("https://data.covid19india.org/v4/min/data.min.json");
   let res1 = await res.json()
   console.log(res1)
}
foo() */
//Dnme by me
/* async function bar(){
   var res = await fetch("https://restcountries.com/v3.1/all")
   var res1 = await res.json();
for(var i =0;i<res1.length;i++){
    var result = res1[i].latlng
    foo(...result)
}
}

async function foo(lat,lon){
   var final_res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5eb779a14d85a8b363191098dc26c5ef`)
   var final_result = await final_res.json()
   console.log(final_result.main.temp)
   }
   bar() */

   // By mentor

/* async function getdata(){
   var res = await fetch("https://restcountries.com/v3.1/all")
   var res1 = await res.json()
   for(var i=0;i<res1.length;i++){
      var latitude = res1[i].latlng
      putdata(...latitude)
   }

}
async function putdata(lat,lon){
   var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5eb779a14d85a8b363191098dc26c5ef`)
   var res1 = await res.json()
   console.log(res1.main.temp)
}
getdata() */

// try-catch (handling error or rejected state)

/* function getlist(){
   return new Promise((resolve,reject)=>reject("This is rejected"))
}

function getdata(){
   return new Promise((resolve,reject)=>resolve("This is resolved"))   
}

async function foo(){
   try{
      let data = await getdata()
      console.log(data);
      let res = await getlist()
      console.log(`This is statement after the error block ${res}`)
   } catch(error){
      console.log(error)
   }
}
foo() */

async function getdata(){
   var res = await fetch("https://data.covid19india.org/v4/min/data.min.json");
   var data = await res.json();
   console.log(data)
   var confirmed = data.TN.districts.Chennai.total.confirmed
   var deceased = data.TN.districts.Chennai.total.deceased
   var recovered = data.TN.districts.Chennai.total.recovered
   var tested = data.TN.districts.Chennai.total.tested
   var vaccinated1 = data.TN.districts.Chennai.total.vaccinated1
   var vaccinated2 = data.TN.districts.Chennai.total.vaccinated2

var container = document.createElement("div")
container.className = "container"
var row = document.createElement("div");
row.className = "row"
var col = document.createElement("div");
col.className = "col-md-12"
col.innerHTML = `<div class="card bg-light mb-3" style="max-width: 18rem;">
<div class="card-header">Chennai</div>
<div class="card-body">
  <h5 class="card-title">Confirmed: ${confirmed}</h5>
  <h5 class="card-title">Deseased: ${deceased}</h5>
  <h5 class="card-title">Recovered: ${recovered}</h5>
  <h5 class="card-title">Tested: ${tested}</h5>
  <h5 class="card-title">Vaccinated 1: ${vaccinated1}</h5>
  <h5 class="card-title">Vaccinated 2: ${vaccinated2}</h5>
</div>
</div>`
row.append(col);
container.append(row);
document.body.append(container);
}
getdata()

