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
   let temp = api.getTemp($cityName) // Maybe think about creating a new class for weatherAPI
   .then(function(cityAPI){
      let cTemp = cityAPI.query.results.channel.item.condition.temp;
      let date = data.getDate();
      let time = data.getTime();
      
            
      let city = new City($cityName, cTemp, date, time);      

      data.pushToCities(city);
      data.saveToLocalStorage(); // saveToLocalStorage is a private function of data!
      data.cities = data.getFromLocalStorage();

      view.renderCities(data);
      $('#searchInp').val("");

   }).catch(function(err){
      console.log(err);
   })
});


// Remove City
$('body').on('click', '#deleteCity', function () {
   data.removeCityFromArray(this);
   view.renderCities(data);
});


// Add Comment
$('body').on('click', '#commentBtn', function () {
   data.comment(this);
   view.renderCities(data);

});
