import {getAPI} from "./api-class.js";
import {WeatherData} from "./data-class.js";
import {View} from "./view-class.js";

var api = new getAPI();
var data = new WeatherData();
var view = new View();









//-----events





$('#searchBtn').on('click', function () {

   let $cityName = $('#searchInp').val();

   api.getTemp($cityName);
   view.renderData();
   
   // let tryAPI = new getAPI($cityName);
   // console.log(tryAPI);
   //let temps = getTemp($cityName);
   // let time = getTime();
   // let date = getDate();
   // gatherCityInfo($cityName, temps, time, date)
});