function initMap() {
  var myLatLng = { lat: -33.142988, lng: -59.317467 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
  });

  var image =
    "https://cdn4.iconfinder.com/data/icons/map-pins-2/256/15-512.png";
  var icon = {
    url: "img/hotel3.png", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 0), // anchor
  };
  var marker = new google.maps.Marker({
    position: myLatLng,
    animation: google.maps.Animation.DROP,
    map: map,
    title: "Tu Casa Hospedaje",
    icon: icon,
  });
}
