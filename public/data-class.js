class City {
   constructor(name, weather, date, time) {
      this.name = name;
      this.weather = weather;
      this.date = date;
      this.time = time;
   }

   getTime() {
      let dateObj = new Date();
      let hour = dateObj.getHours();
      let minutes = dateObj.getMinutes();
      let time = hour + ":" + minutes;
      return time;
   };

   getDate() {
      let dateObj = new Date();
      let month = dateObj.getMonth() + 1; //months from 1-12
      let day = dateObj.getDate();
      let year = dateObj.getFullYear();
      let date = day + "/" + month + "/" + year;
      return date;
   };

   // gatherCityInfo(city, temps, time, date) {
   //    return {
   //       city: city,
   //       temps: temps,
   //       time: time,
   //       date: date
   //    }
   // }
}


$('#searchBtn').on('click', function () {
   let $cityName = $('#searchInp').val();
   let temps = getTemp($cityName);
   let time = getTime();
   let date = getDate();
   gatherCityInfo($cityName, temps, time, date)
});



export {City};


