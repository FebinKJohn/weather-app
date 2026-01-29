function getWeather() {

    var city = document.getElementById("location").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    var apiKey = "6e0842b300274cf2a42165258262901";
    var url = "http://api.weatherapi.com/v1/current.json?key="
              + apiKey + "&q=" + city + "&aqi=yes";

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        var temp = data.current.temp_c;
        var conditionText = data.current.condition.text;
        var wind = data.current.wind_kph;
        var humidity = data.current.humidity;
        var airQuality = data.current.air_quality.pm2_5.toFixed(2);

        // Emoji selection based on condition
        var emoji = "🌈";

        if (conditionText.includes("Sunny")) {
            emoji = "☀️";
        } 
        else if (conditionText.includes("Clear")) {
            emoji = "🌙";
        } 
        else if (conditionText.includes("Cloud")) {
            emoji = "☁️";
        } 
        else if (conditionText.includes("Rain")) {
            emoji = "🌧️";
        } 
        else if (conditionText.includes("Thunder")) {
            emoji = "⛈️";
        } 
        else if (conditionText.includes("Snow")) {
            emoji = "❄️";
        } 
        else if (conditionText.includes("Mist") || conditionText.includes("Fog")) {
            emoji = "🌫️";
        }

        document.getElementById("result").innerHTML =
            "<p><b>Temperature:</b> 🌡️ " + temp + " °C</p>" +
            "<p><b>Condition:</b> " + emoji + " " + conditionText + "</p>" +
            "<p><b>Wind Speed:</b> 💨 " + wind + " km/h</p>" +
            "<p><b>Humidity:</b> 💧 " + humidity + "%</p>" +
            "<p><b>Air Quality (PM2.5):</b> 🌫️ " + airQuality + "</p>";
    })
    .catch(function() {
        alert("City not found or API error");
    });
}
