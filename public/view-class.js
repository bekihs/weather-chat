class View {
   constructor() {
      //this.citiesArr = citiesArr;

      //render given array to the page

      //
      /**/

   }

   renderCities(data) {
      // $posts.empty();
      console.log(data);
      
      var source = $('#city-template').html();
      var template = Handlebars.compile(source);
      var newHTML = template(data);
      $('.container-fluid').append(newHTML);
   }
   

};


export {
   View
};