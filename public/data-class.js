//import { log } from "handlebars";

class WeatherData {
   constructor() {
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
   pushToCities(city) {
      this.cities.push(city)
   };

   saveToLocalStorage() {
      localStorage.setItem('weather-chat', JSON.stringify(this.cities));
   }

   getFromLocalStorage() {
      return JSON.parse(localStorage.getItem('weather-chat') || '[]');
   }

   _findPostById(cities, id) {
      for (let i = 0; i < cities.length; i++) {
         if (cities[i].id == id)
            return i
      }
   }
   removeCityFromArray() {
      let $cardID = $(this).closest('.city').data().id;
      console.log($cardID);
      // let index = this._findPostById(this.cities, $cardID)
      // this.cities.splice(index,1);
      //$('[data-item-id="stand-out"]')
      

      // for (let index = 0; index < this.cities.length; index++) {
      //    if($cardID == this.cities[index].id) {
      //       this.cities.splice(index,1);
      //    }
      // }
   }
};


export {
   WeatherData
};



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