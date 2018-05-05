// Importing classes from class modules
import {getAPI} from "./api-class.js";
import {WeatherData} from "./data-class.js";
import {View} from "./view-class.js";
import {City} from "./city.js";

// Instantiating API, data, & view objects
var api = new getAPI();
var data = new WeatherData();
var view = new View();

// Render onload from local storage
data.cities = data.getFromLocalStorage();
view.renderCities(data);


//Binding click events to actions

// Add City
$('#searchBtn').on('click', function () {
   let $cityName = $('#searchInp').val();
   //temp is a called ajax request without the success function
   let temp = api.getTemp($cityName)
   .then(function(cityAPI){
      let cTemp = cityAPI.query.results.channel.item.condition.temp;
      //let fTemp = cTemp * 9 / 5 + 32;
      let date = data.getDate();
      let time = data.getTime();
      
            
      let city = new City($cityName, cTemp, date, time);      

      data.pushToCities(city);
      data.saveToLocalStorage();
      data.cities = data.getFromLocalStorage();

      view.renderCities(data);
      $('#searchInp').val("");
      // console.log(data.cities);



   }).catch(function(err){
      console.log(err);
   })
   //view.renderData();
});

// Remove City
$('body').on('click', '#deleteCity', function () {
   data.removeCityFromArray();
   // data.saveToLocalStorage();
   // data.cities = data.getFromLocalStorage();
   // view.renderCities(data);

   // 1. remove from array
   // 2. set ls = array
   // 3. set array = ls
   // 4. render
   //console.log("remove binding worked");
})


// data = {
//    cities: [
//       {x: 1, y: 2},
//    ],
//    STORAGE_ID: "weatherchat",

//    addToCities(city) {
//       cities.push(city);
//    }
// }





// Add Comment




   // let tryAPI = new getAPI($cityName);
   // console.log(tryAPI);
   //let temps = getTemp($cityName);
   // let time = getTime();
   // let date = getDate();
   // gatherCityInfo($cityName, temps, time, date)

