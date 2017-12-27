function initMap(){
    var location = {lat: -12.062523, lng: -77.097223};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
      });
}