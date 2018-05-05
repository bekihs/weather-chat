class View {
   constructor() {}

   renderCities(data) {
      $('.container-fluid').empty();
      
      var source = $('#city-template').html();
      var template = Handlebars.compile(source);
      var newHTML = template(data);
      $('.container-fluid').append(newHTML);
   }
   

};


export {
   View
};

      //this.citiesArr = citiesArr;

      //render given array to the page

      //
      /**/