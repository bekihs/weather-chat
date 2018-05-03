let getTemp = function (cityName) {
   $.ajax({
      method: "GET",
      url: 'https://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + cityName + '") and u="c"&format=json',
      success: function (data) {
         let cTemp = data.query.results.channel.item.condition.temp;
         let fTemp = cTemp * 9 / 5 + 32;
         return {
            cTemp: cTemp,
            fTemp: fTemp
         }
      },
      error: function (jqXHR, textStatus, errorThrown) {
         console.log(textStatus);
      }
   });
};
function getTime() {
   let dateObj = new Date();
   let hour = dateObj.getHours();
   let minutes = dateObj.getMinutes();
   let time = hour + ":" + minutes;
   return time;
}
function getDate() {
   let dateObj = new Date();
   let month = dateObj.getMonth() + 1; //months from 1-12
   let day = dateObj.getDate();
   let year = dateObj.getFullYear();
   let date = day + "/" + month + "/" + year;
   return date;
};

 

$('#searchBtn').on('click', function () {
   let $cityName = $('#searchInp').val();
   let temps = getTemp($cityName);
   let time = getTime();
   let date = getDate();
   gatherCityInfo($cityName, temps, time, date)
});

let gatherCityInfo = function(city, temps, time, date) {
   return {
      city: city,
      temps: temps,
      time: time,
      date: date
   }
}

export {gatherCityInfo};

/*
   1. City Name
   2. Temp in C, 
   3. Temp in F
   4. Time
   5. Date day/month/fullYear
*/

// data - all cities weather array
// query - my searched city object
// results - results object
// channel - results 2 object
// units.temperature: "F"

/*
   $(document).ready(function(){
   var city = "Bangalore";
   var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
   //change city variable dynamically as required
   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=" + searchtext + "&format=json").success(function(data){
      console.log(data);
      $('#temp').html("Temperature in " + city + " is " + data.query.results.channel.item.condition.temp + "°C");
   });
   });
*/