$(document).ready(function(){
  var $splash = $('#splash');  
  var $platform = $('#platform'); 
  var $map = $('#map');
  var $searchRestaurant = $('#search-restaurant');
  var $restaurantImages = $('div.restaurant-images');

  //ocultando el div platform que es donde se visualiza la webapp
  $platform.hide();
  //función que aparezca platform 
  function showPlatform(){
    $splash.fadeOut(300, function(){
      $platform.show();
    });
  }

  //condición si se hace click o no a la ventana splash
  $splash.on('click', showPlatform);
    //console.log('hizo click');
  
  //creando array de objetos para representar data
  var districts = [
    {key : "VENTANILLA"},
    {key : "LA PUNTA"},
    {key : "BELLAVISTA"},
    {key : "LA PERLA"},
    {key : "SAN MARTIN DE PORRES"},
    {key : "LOS OLIVOS"},
    {key : "COMAS"},
    {key : "CERCADO DE LIMA"},
    {key : "BREÑA"},
    {key : "RIMAC"},
    {key : "EL AGUSTINO"},
    {key : "SAN MIGUEL"},
    {key : "PUEBLO LIBRE"},
    {key : "JESUS MARIA"},
    {key : "MAGDALENA"},
    {key : "LINCE"},
    {key : "LA VICTORIA"},
    {key : "SAN ISIDRO"},
    {key : "MIRAFLORES"},
    {key : "SURQUILLO"},
    {key : "BARRANCO"},
    {key : "SAN BORJA"},
    {key : "SURCO"},
    {key : "CHORRILLOS"}
  ];

  //Confirma que la dirección que se escojió funciona
  $searchRestaurant.on('keyup', pickDistrict);

  //función que jala el distrito escojido
  //variablesantes
  var selectDistrict;
  function pickDistrict(){
    for (var i = 0; i < districts.length; i++){
      selectDistrict = districts[i].key;
      //console.log(selectDistrict);
      if($searchRestaurant.val().toUpperCase() === selectDistrict){
        
        //console.log(districts[i].key); //distrito elegido
        //console.log(Object.keys(data[districts[i].key])); //jala los restaurantes filtrados por distrito
        $('h3').text("Elegiste " + selectDistrict);
        var infoRestaurant = data[districts[i].key]; //{BItalian Food: {…}, Japanese Food: {…}, Vegetarian Food: {…}, Amazonian Food: {…}, Arabic Food: {…}, …}
        //console.log(infoRestaurant); //{VItalian Food: {…}, Japanese Food: {…}, Vegetarian Food: {…}, Amazonian Food: {…}, Arabic Food: {…}, …}
        //console.log(Object.keys(infoRestaurant)); //(6) ["VItalian Food", "Japanese Food", "Vegetarian Food", "Amazonian Food", "Arabic Food", "Cake Shop"]
        /*
        for(var j=0; j < Object.keys(infoRestaurant).length; j++){
          //console.log(Object.keys(infoRestaurant)[j]);
          
          var bla = Object.keys(infoRestaurant)[j];
          $restaurantImages.append(bla);
          $restaurantImages.eq(0).append(bla);
          var eachRestaurant = Object.keys(infoRestaurant)[j];
          console.log(data[selectDistrict][eachRestaurant]);//cada info de cada restaurant --> {photo: "http://www.foodiebytes.com/image/x160/t/chain_menu_item/aac1b947edbead2dd93e0f61e7837c1e.jpg", opinion: "good"}
          console.log(Object.keys(data[selectDistrict][eachRestaurant]).length);//Cantidad de items en el info de cada restaurante -->2

        };*/
      };
    };  
  };
  $searchRestaurant.on('keyup', function(){
  //seleccionanrdo info de cada restaurante
  //function pickRestaurant(){};
  /*
  console.log(data[$searchRestaurant.val()]);
  console.log(data[$searchRestaurant.val().toUpperCase()]); //{BItalian Food: {…}, Japanese Food: {…}, Vegetarian Food: {…}, Amazonian Food: {…}, Arabic Food: {…}, …}
  var valor = data[$searchRestaurant.val().toUpperCase()];
  console.log(valor); //{BItalian Food: {…}, Japanese Food: {…}, Vegetarian Food: {…}, Amazonian Food: {…}, Arabic Food: {…}, …}
  console.log(Object.keys(valor)); //(6) ["BItalian Food", "Japanese Food", "Vegetarian Food", "Amazonian Food", "Arabic Food", "Cake Shop"]
  console.log(Object.values(valor)); //(6) [{…}, {…}, {…}, {…}, {…}, {…}]
  console.log(Object.keys(valor)[0]); //"BItalian Food"
  */
  var valor = data[$searchRestaurant.val().toUpperCase()];
  debugger
  for(var i = 0; i < Object.keys(valor).length; i++){
    console.log(Object.keys(valor)[i]);
    $restaurantImages.eq(i).text(Object.keys(valor)[i]);
  };

});
  

  
/*
  console.log($restaurantImages);
  var $arrButton = $.makeArray($restaurantImages);
  console.log($.isArray($arrButton)); 
  console.log($arrButton); 
  $.each($arrButton, function(i, val) {
    $restaurantImages.eq(i).text("hola")
  });
*/

});