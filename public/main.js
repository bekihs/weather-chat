// Importing classes from class modules
import {getAPI} from "./api-class.js";
import {WeatherData} from "./data-class.js";
import {View} from "./view-class.js";
import {City} from "./city.js";

// Instantiating API, data, & view objects
var api = new getAPI();
var data = new WeatherData();
//var view = new View();



//Binding click events to actions

// Add City
$('#searchBtn').on('click', function () {
   let $cityName = $('#searchInp').val();
   //temp is a called ajax request without the success function
   let temp = api.getTemp($cityName)
   .then(function(cityAPI){
      let cTemp = cityAPI.query.results.channel.item.condition.temp;
      let fTemp = cTemp * 9 / 5 + 32;
      let date = data.getDate();
      let time = data.getTime();
            
      var city = new City($cityName, cTemp, 'April', '5:00');      
      data.addToCities(city); //
      console.log(data.cities);
      console.log(data);




   }).catch(function(err){
      console.log(err);
   })
   //view.renderData();
});



/* Solution to Export & Import syntax error with node =>4.6.x [duplicate]
tsconfig.json with:
{"module": "commonjs"}
https://stackoverflow.com/questions/44392304/export-import-syntax-error-with-node-4-6-x
*/





// Remove City
$('#removeCity').on('click', '#card', function () {

})


// Add Comment




   // let tryAPI = new getAPI($cityName);
   // console.log(tryAPI);
   //let temps = getTemp($cityName);
   // let time = getTime();
   // let date = getDate();
   // gatherCityInfo($cityName, temps, time, date)

   // var data = {
//    cities: [
//       {x: 1, y: 2},
//    ],
//    addToCities(city) {
//       cities.push(city);
//    }
// }