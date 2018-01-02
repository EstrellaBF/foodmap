function initMap() {
    var location = { lat: -12.125927, lng: -77.020580 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}