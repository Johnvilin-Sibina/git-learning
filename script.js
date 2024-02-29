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
col.innerHTML = `<div class="card" style="max-width: 18rem;">
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

