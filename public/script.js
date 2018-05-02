var city = require('./cityclass');

let cityCards = [];

var fetch = function () {
   $.get({
      url: "cities.json",
      success: function (data) {
         showCityWeather(data);
      }
   });
};

function showCityWeather(data) {
   // 0. Call global function in fetch with data parameter - worked
   // 1. How do I connect my script file with my class file - class export & require
   // 1.1. make an object of city class with invented parameters
   let cityObj = new City("name", 30, "2.5.18", "19:50");
   console.log(cityObj);
   
   // 1.2. draw new object parameters from function object parameter
   let cityObj = new City(name, weather, date, time);
   // 2. add new object to my cityCards array
   // 3. Save array as string and pass to local storage
   // 4. Set array equal to parsed local storage
   // 5. Render all array objects with handlebars each


   //console.log(data.cities[0].name);
}

$('#search').on('click', function () {
   fetch();
});
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