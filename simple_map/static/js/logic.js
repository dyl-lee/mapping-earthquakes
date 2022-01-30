// Add console.log to check if logic.js is being accessed.
console.log("working");

let map = L.map('mapid').setView([40.7, -97], 5);

// Get data from cities.js
let cityData = cities;

// loop through cities array and create a marker for each city
cityData.forEach( function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        fillColor: 'orange',
        color: 'orange',
        weight: 4,
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
    .addTo(map)
} );

// Create tile layer 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/dark-v10",
    accessToken: API_KEY
}).addTo(map);
