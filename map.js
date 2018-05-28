function initMap() {
var uluru = {lat: 59.949015, lng: 30.272069};
var map = new google.maps.Map(document.querySelector('#map'), {
  zoom: 17,
  center: uluru
});
var marker = new google.maps.Marker({
  position: uluru,
  map: map
});
}