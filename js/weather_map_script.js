// Immediately Invoked Function Expression (IIFE) to avoid polluting the global scope
(() => {
    // Set the Mapbox access token
    mapboxgl.accessToken = MB_KEY;

    // Declare variables for the map, weather marker, and geocoder
    let map;
    let weatherMarker;
    let geocoder;

    // Wait for the DOM to load before initializing the map and weather data
    document.addEventListener('DOMContentLoaded', () => {
        // Fallback location in case geolocation is not supported or permitted
        const fallbackLocation = [-98.5795, 39.8283];

        // Check if geolocation is available and use it to initialize the map and weather
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => initializeAndFetchWeather(position.coords),
                () => initializeAndFetchWeather({latitude: fallbackLocation[1], longitude: fallbackLocation[0]})
            );
        } else {
            initializeAndFetchWeather({latitude: fallbackLocation[1], longitude: fallbackLocation[0]});
        }
    });

    // Function to initialize the map and fetch weather data based on coordinates
    function initializeAndFetchWeather(coords) {
        const {latitude, longitude} = coords;
        initializeMap([longitude, latitude]);
        getWeather(latitude, longitude);
    }

    // Function to initialize the Mapbox map
    function initializeMap(center) {
        // Create a new map instance
        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            center: center,
            zoom: 5
        });

        // Add navigation controls to the map
        map.addControl(new mapboxgl.NavigationControl());

        // Initialize the Mapbox geocoder
        geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });

        // Add the geocoder to the map
        map.addControl(geocoder);

        // Create and add a draggable weather marker to the map
        weatherMarker = new mapboxgl.Marker({draggable: true})
            .setLngLat(center)
            .addTo(map);

        // Event listener for when the marker is dragged and dropped
        weatherMarker.on('dragend', onDragEnd);

        // Event listener for when a new location is searched
        geocoder.on('result', (e) => {
            const lat = e.result.geometry.coordinates[1];
            const lon = e.result.geometry.coordinates[0];
            weatherMarker.setLngLat([lon, lat]);
            getWeather(lat, lon);
        });
    }

    // Function called when the weather marker is dragged and dropped
    function onDragEnd() {
        const lngLat = weatherMarker.getLngLat();
        getWeather(lngLat.lat, lngLat.lng);
    }

    // Function to fetch weather data from the OpenWeatherMap API
    function getWeather(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=imperial`;

        // Fetch the weather data
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                // Update the UI with the new weather data
                updateWeatherMapTitle(data.city.name);
                displayWeather(data);
            })
            .catch(error => {
                // Log any errors to the console
                console.error('Error fetching weather data:', error);
            });
    }

    // Function to update the map title with the current city name
    function updateWeatherMapTitle(cityName) {
        document.getElementById('map-title').textContent = `Current City: ${cityName}`;
    }

    // Function to display the weather data on the webpage
    function displayWeather(data) {
        const forecastDiv = document.getElementById('weather-forecast');
        forecastDiv.innerHTML = '';

        // Loop through the weather data and create HTML for each forecast
        for (let i = 0; i < data.list.length && i < 40; i += 8) {
            const forecast = data.list[i];
            const iconCode = forecast.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

            const weatherHTML = `
            <div class="col weather-card">
                <div class="weather-date">${new Date(forecast.dt * 1000).toDateString()}</div>
                <img src="${iconUrl}" alt="Weather icon" class="weather-icon">
                <div>Low: ${Math.round(forecast.main.temp_min)}°F | High: ${Math.round(forecast.main.temp_max)}°F</div>
                <div>Humidity: ${forecast.main.humidity}%</div>
                <div>Wind: ${Math.round(forecast.wind.speed)} mph</div>
                <div>Pressure: ${forecast.main.pressure} mb</div>
            </div>
            `;
            // Append the forecast HTML to the forecastDiv
            forecastDiv.innerHTML += weatherHTML;
        }
    }
})();
