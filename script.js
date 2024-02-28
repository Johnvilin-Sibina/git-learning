var result = fetch ("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>console.log(data1));

var res = fetch ("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>bar(data1));

var container = document.createElement("div");
container.className = "container"

var row = document.createElement("div");
row.className = "row"


function bar(data1){
   for(var i=0;i<data1.length;i++){
      var col = document.createElement("div");
      col.className = "col-md-4"

      col.innerHTML = `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Name: ${data1[i].name.common}</h5>
        <h6></h6>
        <p class="card-text">Capital: ${data1[i].capital ? data1[i].capital : "Capital not found"}</p>
      </div>
    </div>`
    row.append(col);
    container.append(row);
    document.body.append(container);
   }
}


// function bar(data1){
//    for(var i=0;i<data1.length;i++){
//       var res = data1[i].latlng;
//       foo(...res)
//    }  
// }
    
// function foo(lat,lon){
//    var final_res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5eb779a14d85a8b363191098dc26c5ef`)
//    .then((data2)=>data2.json()).then((data3)=>console.log(data3.main.temp))
// } 

// var res1 = fetch ("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json").then((data)=>data.json()).then((data1)=>console.log(data1));

// var  res1 = fetch ("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json").then((data)=>data.json()).then((data1)=>console.log(data1));

















