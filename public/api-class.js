class getAPI {
   constructor(cityName) {
      this.name = cityName;
   }

   getTemp(cityName) {
      $.ajax({
         method: "GET",
         url: 'https://query.yahooapis.com/v1/public/yql?q=select item.condition' + 
         'from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + 
         cityName + 
         '") and u="c"&format=json',
         success: function (data) {
            let cTemp = data.query.results.channel.item.condition.temp;
            let fTemp = cTemp * 9 / 5 + 32;
            console.log("C: " + cTemp +" & T: " + fTemp)
            // return {
            //    cTemp: cTemp,
            //    fTemp: fTemp
            // }
         },
         error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
         }
      });
   }
};




export {getAPI};
