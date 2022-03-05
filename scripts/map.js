console.log('This is the map file');

import * as L from 'leaflet';

console.log('Leaflet', L);

const map = L.map('map');
const satelliteLayer = L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA'
);
satelliteLayer.addTo(map);
