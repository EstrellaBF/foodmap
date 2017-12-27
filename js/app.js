$(document).ready(function(){
  var $splash = $('#splash');  
  var $platform = $('#platform'); 
  var $map = $('#map');
  var $searchRestaurant = $('#search-restaurant');
  var $restaurantImages = $('#restaurant-images');

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
  function pickDistrict(){
    for (var i = 0; i < districts.length; i++){
      var selectDistrict = districts[i].key;
      //console.log(selectDistrict);
      if($searchRestaurant.val().toUpperCase() === selectDistrict){
        
        //console.log(districts[i].key); //distrito elegido
        //console.log(Object.keys(data[districts[i].key])); //jala los restaurantes filtrados por distrito
        $('h3').text("Elegiste " + selectDistrict);
        var infoRestaurant = data[districts[i].key]; //{BItalian Food: {…}, Japanese Food: {…}, Vegetarian Food: {…}, Amazonian Food: {…}, Arabic Food: {…}, …}
        console.log(infoRestaurant);
        console.log(Object.keys(infoRestaurant));
        for(var j=0; j < Object.keys(infoRestaurant).length; j++){
          var eachRestaurant = Object.keys(infoRestaurant)[j];
          console.log(data[selectDistrict][eachRestaurant]);//cada info de cada restaurant
          console.log(Object.keys(data[selectDistrict][eachRestaurant]).length);

        };
      };
    };  
  };


  //obtemer foto restaurante
  
  /*
  for (var i = 0; i < districts.length; i++){
      console.log(arr[i]); //distrito elegido
      console.log(Object.keys(data[districts[i].key])); //jala los restaurantes filtrados por distrito
    
  };  
  
  */


});