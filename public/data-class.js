class WeatherData {
   constructor (){
      this.cities = [];
   }

   getDate() {
      let dateObj = new Date();
      let month = dateObj.getMonth() + 1; //months from 1-12
      let day = dateObj.getDate();
      let year = dateObj.getFullYear();
      let date = day + "/" + month + "/" + year;
      return date;
   };
   
   getTime() {
      let dateObj = new Date();
      let hour = dateObj.getHours();
      let minutes = dateObj.getMinutes();
      let time = hour + ":" + minutes;
      return time;
   };

   //Push object to cities array
   pushToCities(city){
      this.cities.push(city)
   };
   
   saveToLocalStorage() {
      localStorage.setItem('weather-chat', JSON.stringify(this.cities));
   }

   getFromLocalStorage() {
      return JSON.parse(localStorage.getItem('weather-chat') || '[]');
   }

};


export {WeatherData};



// log(city) {
   //    console.log(city);
   // }
















 //--- create a new City
   //--- add that new City to cities

   //remove from cities
      // removeFromCities(city){
      //    cities.push(city)
      // }
   //add comment

   //remove comment