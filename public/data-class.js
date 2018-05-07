//import { log } from "handlebars";
import {Comment} from "./city.js";

class WeatherData {
   constructor() {
      this.cities = []; // use the getFromLocalStorage here
   }

   //Push object to cities array
   pushToCities(city) {
      this.cities.push(city) // save tolocal strage after every change
   };


   saveToLocalStorage() {
      localStorage.setItem('weather-chat', JSON.stringify(this.cities));
   }


   getFromLocalStorage() {
      return JSON.parse(localStorage.getItem('weather-chat') || '[]');
   }


   _findPostById(cities, id) {
      for (let i = 0; i < cities.length; i++) {
         if (cities[i].id == id) {
            return i;
         }
      }
   }


   removeCityFromArray(deleteCard) {
      let cardID = $(deleteCard).closest('.city').data().id; // JQuery in the data layer? The data class should only know about the data. no hTML elements 
      let cardIndex = this._findPostById(this.cities, cardID); // You shouldnt know the HTML at all
      this.cities.splice(cardIndex, 1);
      this.saveToLocalStorage();
      // no need !  - this.cities = this.getFromLocalStorage()
   }


   comment(card) {
      let $comment = $(card).prev('#commentInp').val(); // no html 
      let comment = new Comment($comment);
      let $cardID = $(card).closest('.city').data().id;
      let cardIndex = this._findPostById(this.cities, $cardID);
      
      this.cities[cardIndex].comments.push(comment);
      this.saveToLocalStorage();
      // no need  - this.cities = this.getFromLocalStorage();
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
};


export {
   WeatherData
};
