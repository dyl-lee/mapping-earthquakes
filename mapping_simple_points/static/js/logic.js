// Add console.log to check if logic.js is being accessed.
console.log("working");

// Create map object with center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add marker to Los Angeles, California
let marker = L.circleMarker([34.0522, -118.2437], {
    radius:300,
    fillColor: '#ffffa1',
    color: 'black',
}).addTo(map);

// Create tile layer 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/dark-v10",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);

