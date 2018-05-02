import {City} from './city-class.js';

//let cityObj = new City("Tel Aviv", 30, 17, 12);
//console.log(cityObj);



let cityCards = [];

var fetchJSON = function (cityName) {
   $.get({
      url: "cities.json",
      success: function (data) {
         // console.log(cityName);
         // console.log(data);
         let searchedCity = getCityFromJSON(data, cityName);
         pushCityToArray(searchedCity);
         console.log(cityCards);
         //showCityWeather(data);
      }
   });
};

   // 2. add new object to my cityCards array
   // 3. Save array as string and pass to local storage
   // 4. Set array equal to parsed local storage
   // 5. Render all array objects with handlebars each

function getCityFromJSON(data, cityName) {
   //let city = data.cities;
   for (let index = 0; index < data.cities.length; index++) {
      if(data.cities[index].name == cityName) {
         return data.cities[index];
      }
   }
}

function pushCityToArray(searchedCity) {
   var instantiatedCity = instantiateCityObj(searchedCity);
   cityCards.push(instantiatedCity);
}

function instantiateCityObj(searchedCity) {
   let cityObj = new City(searchedCity.name, searchedCity.weather, searchedCity.date, searchedCity.time);
   return cityObj;
}

$('#searchBtn').on('click', function () {
   let $cityName = $('#searchInp').val();
   if($cityName === "Tel Aviv" || $cityName === "Jerusalem" || $cityName === "Haifa") {
      fetchJSON($cityName);
   } else {
      alert("Please choose Tel Aviv, Jerusalem, or Haifa")
      $('#searchInp').val("");
   }   
});

/*
function showCityWeather(data) {
   // 0. Call global function in fetch with data parameter - worked
   // 1. How do I connect my script file with my class file - class export, import
   // 1.1. make an object of city class with invented parameters - done
   let cityObj = new City("name", 30, "2.5.18", "19:50");
   console.log(cityObj);
   
   // 1.2. draw new object parameters from function object parameter
   let cityObj = new City(name, weather, date, time);
   


   //console.log(data.cities[0].name);
}*/


// var telAviv = data.cities[0].name;
// console.log(telAviv);








/* Original get request */
// "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text=%" + city + "%27)%20and%20u=%27c%27&format=json"
// var newCity = {
//    "cities": [
//       {
//          "name": "Tel Aviv",
//          "weather": "32",
//          "time": "14:00",
//          "date": "3.5.18"
//       },
//       {
//          "name": "Jerusalem",
//          "weather": "28",
//          "time": "14:00",
//          "date": "3.5.18"
//       },
//       {
//          "name": "Haifa",
//          "weather": "26",
//          "time": "14:00",
//          "date": "3.5.18"
//       },
//       {
//          "name": "Beer Sheva",
//          "weather": "36",
//          "time": "14:00",
//          "date": "3.5.18"
//       } 
//    ]
//  }




/*
   Ajax lesson get request 
   var fetch = function () {
      $.ajax({
      method: "GET",
      url:"http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=API_KEY_HERE",
      success: function(data) {
         console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
         console.log(textStatus);
      }
      });
   };
 */
/*$("#search").on("click", function {
    fetch();
})*/