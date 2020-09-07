function myFunction() {


    var searchTerm = document.querySelector('#cityName').value;
    var apiKey = "a2e4e1f56526a00db1602c368d5b0a05"

    // current weather api
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=a2e4e1f56526a00db1602c368d5b0a05")
        // {
        //     "method": "GET",
        //     "headers": {}
        // })
        .then(response => {
            return response.json();
            // console.log(response);
        })
        .then(function (data) {
            console.log(data);

            var formSubmitHandler = function (event) {
                event.preventDefault();

                var city = searchTerm.value.trim();

                if(city) {
                    myFunction(city);
                    searchTerm.value = "";
                } else {
                    alert("Please enter a City.");
                }
            };

            searchTerm.addEventListener("submit", formSubmitHandler);

            var cityTerm = data.name;
            var cityTemp = data.main.temp;
            var cityHumid = data.main.humidity;
            var cityWind = data.wind.speed;
            var cityLat = data.coord.lat;
            var cityLon = data.coord.lon;


            var placeCityNameEl = document.querySelector('#main-card');
            placeCityNameEl.innerHTML = '<h2>' + cityTerm + '</h2>';

            const placeCityTempEl = document.getElementById('tempText');
            placeCityTempEl.textContent = 'Temperature: ' + cityTemp;

            const placeCityHumidEl = document.getElementById('humid-text');
            placeCityHumidEl.textContent = 'Humidity: ' + cityHumid;

            const placeCityWindEl = document.getElementById('wind-text');
            placeCityWindEl.textContent = 'Wind Speed: ' + cityWind;

            // return fetch for UV index
            return fetch(
                "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + cityLat + "&lon=" + cityLon
            )
            .then(function (uvResponse) {
                return uvResponse.jason
            })
            .then(function (data) {
                console.log(data);
            
                var cityUV = data.value

                const placeCityUvEl = document.getElementById('uv-text');
                placeCityUvEl.textContent = 'UV Index: ' + cityUV


            // var placeMainCardIconEl

            // var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

        })

        .catch(err => {
            console.error(err);
        });
})

};