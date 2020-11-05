let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let countryName = document.querySelector(".countryname");
let temp = document.querySelector(".temp");
let cloud = document.querySelector(".cloud");

btn.addEventListener("click", () => {
fetch('http://api.openweathermap.org/data/2.5/weather?q='+inp.value+'&APPID=d690b89a7c7d495b5850e2a89e553842')
.then(response => response.json())
.then(data => {
countryName.innerHTML= data['name'] ;
temp.innerHTML= 'Temperature:' + ' ' +data['main']['temp'];
cloud.innerHTML ='Cloud:' + ' ' + data['weather'][0]['description'];

})
.catch(function(err){
alert(err);
})
})