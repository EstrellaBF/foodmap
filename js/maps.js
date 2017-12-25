function initMap(){
    var location = {lat: -12.062523, lng: -77.097223};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: location
    });
}