function myFunction() {


    var searchTerm = document.querySelector('#cityName').value;
    var apiKey = "a2e4e1f56526a00db1602c368d5b0a05"

    // current weather api
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&units=imperial&appid=" + apiKey)
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

                var user
            }

            var cityTerm = data.name;
            var cityTemp = data.main.temp;
            var cityHumid = data.main.humidity;
            var cityWind = data.wind.speed;
            // var cityUV = data.
            var cityLat = data.coord.lat;
            var cityLon = data.coord.lon;


            var placeCityNameEl = document.querySelector('#main-card');
            placeCityNameEl.innerHTML = '<h2>' + cityTerm + '</h2>';

            const placeCityTempEl = document.getElementById('tempText');
            placeCityTempEl.textContent = 'Temperature' + cityTemp;

            // return fetch for UV index
            return fetch(
                "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + cityLat + "&lon=" + cityLon
            )


            // var placeMainCardIconEl

            // var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

        })

        .catch(err => {
            console.error(err);
        });
}