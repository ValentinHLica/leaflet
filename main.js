const bounds = [50, 0];

var map = L.map("map", {
  center: bounds,
  zoom: 8,
  maxZoom: 8,
  minZoom: 8,
  attributionControl: false,
  zoomControl: false,
});

const seats = 200;
let rowLimit = 15;

var myIcon = L.icon({
  iconUrl: "img/blue.svg",
  iconSize: [11, 11],
  iconAnchor: [8, 80],
  popupAnchor: [-3, -76],
});

let currentDot = 0.01;

for (let i = seats; i > 0; i--) {
  if (rowLimit !== 0) {
    if (i !== seats) {
      bounds[1] += 0.08;
    }

    if (rowLimit > 8) {
      bounds[0] -= currentDot;
      currentDot = currentDot / 1;
    } else {
      bounds[0] += currentDot;
      currentDot = currentDot * 1;
    }

    rowLimit--;
  } else {
    bounds[1] = 0;
    bounds[0] -= 0.08;

    rowLimit = 15;
  }

  L.marker(bounds, { icon: myIcon }).addTo(map).bindPopup("Hello");
}

