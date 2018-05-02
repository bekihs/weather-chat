$.get({
   url: "cities.json",
   success: function (data) {
      console.log('is this my city data')
      console.log(data)

   }
});




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