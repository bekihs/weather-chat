class View {
   constructor (){

   //console.log("hey");
   
      //render given array to the page

      //
      /**/
      renderCities = function () {
         $posts.empty(); //
 
         var source = $('#city-template').html();
         var template = Handlebars.compile(source);
         var newHTML = template(data);
         $('.city').append(newHTML);
      }
      
}
}

export {View};