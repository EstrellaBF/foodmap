$(document).ready(function(){
  /**/
  var $splash = $('#splash');  
  var $platform = $('#platform'); 
  var $map = $('#map');


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
     
});