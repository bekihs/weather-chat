class City {
   constructor(name, weather, date, time) {
      this.name = name;
      this.weather = weather;
      this.date = date;
      this.time = time;
      this.id = Date.now();
   }
};

export {City};