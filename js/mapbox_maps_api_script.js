"use strict";

mapboxgl.accessToken = MB_KEY;

// Initialize the map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4936, 29.4241], // San Antonio, TX coordinates
    zoom: 10
});

// Restaurant information
const restaurants = [
    {
        name: "Ilsong Garden",
        address: "6905 Blanco Rd, San Antonio, TX 78216",
        description: "Korean favorites & some Japanese fare offered in a light-filled space with warm wood & Asian decor. ilsonggardensa.com (210) 366-4508"
    },
    {
        name: "Ruth's Chris Steak House",
        address: "7720 Jones Maltsberger Rd, San Antonio, TX 78216",
        description: "Outpost of upmarket steakhouse chain known for sizzling, butter-topped beef in an elegant setting. ruthschris.com (210) 821-5051"
    },
    {
        name: "Smoke Shack BBQ",
        address: "3714 Broadway, San Antonio, TX 78209",
        description: "Down-home mobile smoke shack with picnic table seating earns buzz for its classic BBQ meals & sides. smokeshacksa.com (210) 957-1430"
    }
];


// Change zoom level
document.getElementById('zoom-level').addEventListener('change', function() {
    map.setZoom(this.value);
});

// Geocode and add marker for address
document.getElementById('geocode').addEventListener('click', function() {
    const address = document.getElementById('address').value;
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxgl.accessToken}`;

    fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {
            const coordinates = data.features[0].center;
            map.flyTo({ center: coordinates, zoom: 15 });

            new mapboxgl.Marker()
                .setLngLat(coordinates)
                .addTo(map);
        });
});


// Toggle markers visibility
let markersVisible = true;
const markers = []; // Keep track of all markers

// This function toggles the visibility of markers
function toggleMarkersVisibility() {
    markers.forEach(marker => {
        if (markersVisible) {
            marker.getElement().style.display = 'none';
        } else {
            marker.getElement().style.display = 'block';
        }
    });
    markersVisible = !markersVisible; // Flip the state
}

// Create markers for each restaurant and add them to the map
restaurants.forEach(restaurant => {
    // Use Mapbox Geocoding to get coordinates
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(restaurant.address)}.json?access_token=${mapboxgl.accessToken}`;

    fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {
            const coordinates = data.features[0].center;

            // Create a marker and popup for each restaurant
            const marker = new mapboxgl.Marker()
                .setLngLat(coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML(`<h3>${restaurant.name}</h3><p>${restaurant.description}</p>`))
                .addTo(map);

            // Add marker to the array
            markers.push(marker);
        });
});

// Attach the event listener to the "Toggle Markers" button
document.getElementById('toggle-markers').addEventListener('click', toggleMarkersVisibility);



