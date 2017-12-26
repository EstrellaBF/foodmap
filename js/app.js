$(document).ready(function(){
  var $splash = $('#splash');  
  var $platform = $('#platform'); 
  var $map = $('#map');
  var $searchRestaurant = $('#search-restaurant');
  var $data = $('data');
  var $restaurantImages = $('#restaurant-images');

  //ocultando el div platform que es donde se visualiza la webapp
  $platform.hide();
  //función que aparezca platform 
  function showPlatform(){
    $splash.fadeOut(1000, function(){
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

  var $arr = Object.keys(data)
  //$('h3').text($arr);
  //$distrito.eq(2).;
  //console.log($arr[1]); //me muestra la posición de los distritos
  //console.log(districts.length);
  
  //Confirma que la dirección que se escojió funciona
  $searchRestaurant.on('keyup', pickDistrict);

  //función que jala el distrito escojido
  function pickDistrict(){
    for (var i = 0; i < districts.length; i++){
      if($searchRestaurant.val().toUpperCase() === $arr[i]){
        console.log($arr[i]); //distrito elegido
        console.log(Object.keys(data[districts[i].key])); //jala los restaurantes filtrados por distrito
        $('h3').text("Elegiste " + $arr[i]);
      };
    };  
  };
  
  //Se verifica los restaurantes
  
  /*
  COMENTO ESTAS FUNCIONES PORQUE TODO SE ESTA PONIENDO EN PICKDISTRICT
  function pickRestaurant(){
    //debugger
    for (var i = 0; i < districts.length; i++) {
      llavecita = Object.keys(data[districts[i].key]);
      console.log(llavecita);
    };
  };
  pickRestaurant()

  //Mostrar info de restaurantes
  if(pickDistrict()===pickRestaurant()){
    console.log(pickDistrict); //jala funcion
    console.log(pickDistrict()); //no jala nada
  };*/
  


});