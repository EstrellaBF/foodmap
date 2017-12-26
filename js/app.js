$(document).ready(function(){
  var $splash = $('#splash');  
  var $platform = $('#platform'); 
  var $map = $('#map');
  var $searchRestaurant = $('#search-restaurant');
  var $data = $('data');

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
  var bla;
  var count=0;
  //Sacando los distritos
  /*for (var i = 0; i < districts.length; i++) {
    eachDistrict = districts[i].key;
    bla = bla + districts[i].key;
  }
  console.log(eachDistrict);

  console.log(bla);*/

  //ciclo para recorrer el contenido de distrito, mostrará los tipos de restaurantes
  /*for (var i = 0; i < distrito.length; i++) {
    llavecita = Object.keys(data[distrito[i].key]);
    console.log(llavecita);
  }*/


  //Sacando data, sacando los distritos
  var $districts = function  $(data){
    var arrData = Object.keys(data);
    return arrData;
  };
  $cosha = $districts(data)
  console.log($districts(data)[0]);

  //Otra opcion


  //convirtiendo districts a Array
  var $districtsArr = $.makeArray($districts(data));
  console.log($.isArray($districtsArr)); //true
  console.log($districtsArr["VENTANILLA"]); //typeof object¿?, length 37
  //$( "h3" ).text($districts(data));
  
  //Buscando restaurantes que coincidan
  $searchRestaurant.on('keyup', function(){
    //debugger
    for (var i = 0; i < $districtsArr.length; i++){
      //console.log($districtsArr[i]);
      if($searchRestaurant.val().toUpperCase() ===$districtsArr[i]){
        console.log($districtsArr[i]);
      }
    }
  });
  
 // console.log($searchRestaurant);
  
  
  

  

});