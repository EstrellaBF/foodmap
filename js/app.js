$(document).ready(function(){
  /**/
  var $splash = $('#splash');  
  var $platform = $('#platform'); 
  var $map = $('#map');
  var $searchRestaurant = $('#search-restaurant');
  var $data = $('data');


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
  
  //Sacando data, sacando los distritos
  var $districts = function  $(data){
    var arrData = Object.keys(data);
    return arrData;
  };
  $cosha = $districts(data)
console.log($districts(data));
console.log($cosha);
$( "h3" ).text($districts(data));

  //var $newData = districts(data);
  //console.log($newData);
  //
  //$newData.each(function(){
    //console.log();
  //});

  //console.log(districts(data)[0]); // 37, en un array menciona los distritos
  
  //Buscando restaurantes que coincidan
  //if($searchRestaurant ===)
  
  

  

});