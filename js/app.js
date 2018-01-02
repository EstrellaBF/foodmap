$(document).ready(function(){
  var $splash = $('#splash');  
  var $platform = $('#platform'); 
  var $map = $('#map');
  var $searchRestaurant = $('#search-restaurant');
  var $restaurantImages = $('div.restaurant-images');
  var $modalInfoRestaurant = $('#modal-info-restaurant p');
  console.log($modalInfoRestaurant);

  //creando array de objetos para representar data

  //Confirma que la dirección que se escojió funciona
  $searchRestaurant.on('keyup', pickDistrict);

  //función PickDistrict para que jale los distritos
  function pickDistrict(){
    //debugger 
    $.each(data, function(key, value){
      if($searchRestaurant.val().toUpperCase() === key){
        $('h3').text("Your choice " + key);
        var restaurantList = data[key]; 
        console.log(restaurantList); //{Italian Food: {…}, Japanese Food: {…}, Vegetarian Food: {…}, Amazonian Food: {…}, Arabic Food: {…}, …}
        console.log(Object.keys(restaurantList).length); //6
        console.log(Object.keys(restaurantList)); //(6) ["Italian Food", "Japanese Food", "Vegetarian Food", "Amazonian Food", "Arabic Food", "Cake Shop"]
        console.log(Object.values(restaurantList)); //(6) [{…}, {…}, {…}, {…}, {…}, {…}]
        console.log(Object.values(restaurantList)[0]); //{photo: "http://www.foodiebytes.com/image/x160/t/chain_menu_item/aac1b947edbead2dd93e0f61e7837c1e.jpg", opinion: "good"}
        for(var i = 0; i < Object.keys(restaurantList).length; i++){
          $restaurantImages.addClass('style-restaurant').eq(i).text(Object.keys(restaurantList)[i]).attr({'data-target': '.show-info-restaurant', 'data-toggle':"modal"});
          console.log(Object.values(restaurantList)[i]['photo']); //http://www.foodiebytes.com/image/x160/t/chain_menu_item/aac1b947edbead2dd93e0f61e7837c1e.jpg
          $modalInfoRestaurant.text('Customers opinion : It\'s ' + Object.values(restaurantList)[i].opinion);
        }
      };
    });
  };  
});