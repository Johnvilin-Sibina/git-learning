var request =  new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    //1.Print only those countries name which belongs to asia region    
    var result_asia=res.filter((ele)=>ele.region=="Asia");
    console.log(result_asia);
    var country_names=result_asia.map((ele)=>ele.name);
    console.log((country_names));
    //2. Print capitals of those countries whose population is less than 2lakhs
    var pop=res.filter((ele)=>ele.population<200000);
    var capital=pop.map((ele)=>ele.capital);
    console.log(capital);
    //3. Print the sum of total population of all the countries
    var total_pop=res.reduce((acc,cv)=>acc+cv.population,0);
    console.log(total_pop);
}

