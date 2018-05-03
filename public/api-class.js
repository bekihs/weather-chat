class getAPI {
   constructor(cityName) {
      this.name = cityName;
   }

   getTemp(cityName) {
      //return the called ajax request without the success function
      return $.ajax({method: "GET", url: 'https://query.yahooapis.com/v1/public/yql?q=select item.condition ' + 'from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + cityName + '") and u="c"&format=json'})
   }
};


export {getAPI};

// Do everything in success function
      // return the ajax at api file
      // use .then method in main.js // learn .then methods