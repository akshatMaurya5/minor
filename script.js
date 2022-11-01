let locationObj = {
  lat: 30.9025,
  lng: 75.8573,
};

let map;
let marker;

// Initialize and add the map
function initMap() {
  // The location of Geeksforgeeks office
  /*  const location = {
                 // lat: 28.50231,
                 // lng: 77.40548
                 lat : 30.9025,
                 lng : 75.8573
                 // for(var )
                 // lat, lng
             }; */

  // for (i = 0; i < arr.length; i++)
  // {
  //     lat = arr[i].lat;
  //     lng = arr[i].lng;

  // }

  // Create the map, centered at location
  map = new google.maps.Map(document.getElementById("map"), {
    // Set the zoom of the map
    zoom: 20,
    center: locationObj,
  });

  marker = new google.maps.Marker({
    position: locationObj,
    map,
    draggable: true,
    title: "this is marker",
  });
}

function moveMarker() {
  const newLat = locationObj.lat + 0.0001;
  const newLng = locationObj.lng + 0.0001;
  locationObj.lat = newLat;
  locationObj.lng = newLng;
  const newLatLng = new google.maps.LatLng(newLat, newLng);
  map.panTo(newLatLng);
  marker.setPosition(newLatLng);
}

window.setInterval(moveMarker, 1000);
