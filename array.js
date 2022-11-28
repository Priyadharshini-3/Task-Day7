// Get all the countries from the Asia continent /region using the Filter function.

let respond=new XMLHttpRequest();
respond.open("GET","https://restcountries.com/v3.1/all");
respond.send();
respond.onload=function(){
    let res=JSON.parse(request.response);
    let res1=res.filter((ele)=>ele.region==="Asia");
    let res2=res1.map((ele)=>ele.name.common);
       console.log(res2);
    
}

// Get all the countries with a population of less than 2 lakhs using Filter function

let respond1=new XMLHttpRequest();
respond1.open("GET","https://restcountries.com/v3.1/all");
respond1.send();
respond1.onload=function(){
    let rc=JSON.parse(respond1.response);
    let pop=rc.filter((ele)=>ele.population<200000);
    let popn=pop.map((ele)=>ele.name.common);
       console.log(popn);
    }

// Print the following details name, capital, flag using forEach function

let respond2=new XMLHttpRequest();
respond2.open("GET","https://restcountries.com/v3.1/all");
respond2.send();
respond2.onload=function(){
    let resc=JSON.parse(respond2.response);
        for(var i=0;i<resc.length;i++){
    console.log("name : "+resc[i].name.common,", capital : "+resc[i].capital,", flag : "+resc[i].flags.png);
        
    }
}

// Print the total population of countries using reduce function
     
let respond3=new XMLHttpRequest();
respond3.open("GET","https://restcountries.com/v3.1/all");
respond3.send();
respond3.onload=function(){
    let population=JSON.parse(respond3.response);
    let totalpopulation=population.reduce((acc,cv)=>acc+cv.population,0);
    console.log(totalpopulation);
}

// Print the country which uses US Dollars as currency.

let respond4=new XMLHttpRequest();
respond4.open("GET","https://restcountries.com/v3.1/all");
respond4.send();
respond4.onload=function(){
    let currency=JSON.parse(respond4.response);
    let dollar=currency.filter((ele)=>ele.currencies="USD");
    let dollarcurrency=dollar.map((ele)=>ele.name.common);
    console.log(dollarcurrency);
}
